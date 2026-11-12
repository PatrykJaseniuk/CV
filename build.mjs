#!/usr/bin/env node
/**
 * CV build — jedno źródło prawdy, zero zależności.
 *
 *   cv.pl.md ─┐
 *             ├─▶ dist/index.html + dist/Patryk_Jaseniuk_CV_PL.pdf
 *   cv.en.md ─┘   dist/en.html    + dist/Patryk_Jaseniuk_CV_EN.pdf
 *
 * Markdown (podzbiór: nagłówki, listy, pogrubienia, kursywa, kod inline, linki,
 * linia pozioma) → HTML → PDF przez headless Chrome. CSS jest wspólny, więc
 * strona i druk wyglądają tak samo.
 *
 * Konwencje układu (bez HTML-a w Markdownie):
 *   - blok przed pierwszym `##` to nagłówek: pierwsze 3 akapity po lewej
 *     (imię, rola, stack), resztę (kontakt, języki) układamy po prawej,
 *   - sekcja „Agenci LLM” / „LLM agents” renderuje się jako wyróżniony blok,
 *   - sekcja „Umiejętności” / „Skills” zamienia akapity „**Etykieta:** treść”
 *     na dwukolumnową tabelę,
 *   - akapit „**W skrócie:** …” / „**At a glance:** …” dostaje styl podsumowania.
 *
 * Użycie:
 *   node build.mjs          # tylko HTML
 *   node build.mjs --pdf    # HTML + PDF (wymaga Chrome/Chromium)
 */

import { execFileSync } from "node:child_process";
import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import path from "node:path";
import os from "node:os";
import { fileURLToPath } from "node:url";

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(ROOT, "dist");
const WITH_PDF = process.argv.includes("--pdf");

const CALLOUT_SECTIONS = new Set(["Agenci LLM", "LLM agents"]);
const SKILLS_SECTIONS = new Set(["Umiejętności", "Skills"]);
const HIGHLIGHT_PARAGRAPH = /^<p><strong>(W skrócie|At a glance):<\/strong>\s*(.*)<\/p>$/;
const SKILL_ROW = /^<p><strong>([^<]+):<\/strong>\s*(.*)<\/p>$/;

const PAGES = [
  {
    lang: "pl",
    source: "cv.pl.md",
    html: "index.html",
    pdf: "Patryk_Jaseniuk_CV_PL.pdf",
    title: "Patryk Jaseniuk — CV",
    description: "CV Patryka Jaseniuka — Fullstack TypeScript Developer.",
    nav: [
      { href: "index.html", label: "PL", active: true },
      { href: "en.html", label: "EN", active: false },
      { href: "Patryk_Jaseniuk_CV_PL.pdf", label: "PDF" },
    ],
  },
  {
    lang: "en",
    source: "cv.en.md",
    html: "en.html",
    pdf: "Patryk_Jaseniuk_CV_EN.pdf",
    title: "Patryk Jaseniuk — CV (EN)",
    description: "Patryk Jaseniuk's CV — Fullstack TypeScript Developer.",
    nav: [
      { href: "index.html", label: "PL", active: false },
      { href: "en.html", label: "EN", active: true },
      { href: "Patryk_Jaseniuk_CV_EN.pdf", label: "PDF" },
    ],
  },
];

/* ── Markdown → bloki HTML ───────────────────────────────────────────────── */

const escapeHtml = (text) =>
  text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** Linki, kod, pogrubienia i kursywa — w kolejności, która nie psuje się nawzajem. */
const inline = (text) => {
  const codes = [];
  const withPlaceholders = text.replace(/`([^`]+)`/g, (_, code) => {
    codes.push(`<code>${escapeHtml(code)}</code>`);
    return `\u0000${codes.length - 1}\u0000`;
  });

  const linked = withPlaceholders.replace(
    /\[([^\]]+)\]\(([^)\s]+)\)/g,
    (_, label, href) => `<a href="${href}">${label}</a>`,
  );

  const emphasised = linked
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/(^|[^*])\*([^*\n]+)\*(?!\*)/g, "$1<em>$2</em>");

  return emphasised.replace(/\u0000(\d+)\u0000/g, (_, index) => codes[Number(index)]);
};

const renderBlocks = (markdown) => {
  const blocks = [];
  let paragraph = [];
  let list = null;

  const flushParagraph = () => {
    if (paragraph.length > 0) {
      blocks.push(`<p>${inline(paragraph.join(" "))}</p>`);
      paragraph = [];
    }
  };

  const flushList = () => {
    if (list !== null) {
      blocks.push(`<ul>${list.map((item) => `<li>${inline(item)}</li>`).join("")}</ul>`);
      list = null;
    }
  };

  for (const raw of markdown.split(/\r?\n/)) {
    const line = raw.trim();

    if (line === "") {
      flushParagraph();
      flushList();
      continue;
    }

    const heading = line.match(/^(#{1,3})\s+(.*)$/);
    if (heading) {
      flushParagraph();
      flushList();
      const level = heading[1].length;
      blocks.push(`<h${level}>${inline(heading[2])}</h${level}>`);
      continue;
    }

    if (/^-{3,}$/.test(line)) {
      flushParagraph();
      flushList();
      blocks.push("<hr>");
      continue;
    }

    const listItem = line.match(/^[-*]\s+(.*)$/);
    if (listItem) {
      flushParagraph();
      list = list ?? [];
      list.push(listItem[1]);
      continue;
    }

    flushList();
    paragraph.push(line);
  }

  flushParagraph();
  flushList();
  return blocks;
};

/* ── Układ strony ────────────────────────────────────────────────────────── */

const headingText = (block) => {
  const match = block.match(/^<h2>(.*)<\/h2>$/);
  return match ? match[1].replace(/<[^>]+>/g, "") : null;
};

/** Kontakt w kolumnie po prawej: każdy segment „ · ” jako osobna linia. */
const splitContactLines = (block) => {
  const match = block.match(/^<p>(.*)<\/p>$/);
  if (!match) return block;
  const parts = match[1].split(" · ").map((part) => part.trim()).filter(Boolean);
  return parts.map((part) => `<p>${part}</p>`).join("\n");
};

const renderHeader = (blocks) => {
  const left = blocks.slice(0, 3).join("\n");
  const right = blocks.slice(3).map(splitContactLines).join("\n");
  return `<header class="cv-header">
<div class="identity">
${left}
</div>
<div class="contact">
${right}
</div>
</header>`;
};

const renderSkills = (blocks) => {
  const rows = [];
  let index = 0;
  while (index < blocks.length) {
    const row = blocks[index].match(SKILL_ROW);
    if (!row) break;
    rows.push(`<div class="row"><dt>${row[1]}</dt><dd>${row[2]}</dd></div>`);
    index += 1;
  }
  return { html: `<dl class="skills">${rows.join("")}</dl>`, consumed: index };
};

const renderBody = (blocks, extraClasses) => {
  const out = [];
  let index = 0;

  while (index < blocks.length) {
    const block = blocks[index];
    const heading = headingText(block);

    if (heading && CALLOUT_SECTIONS.has(heading)) {
      out.push(block);
      index += 1;
      const inner = [];
      while (index < blocks.length && headingText(blocks[index]) === null) {
        inner.push(blocks[index]);
        index += 1;
      }
      out.push(`<div class="callout">${inner.join("\n")}</div>`);
      continue;
    }

    if (heading && SKILLS_SECTIONS.has(heading)) {
      out.push(block);
      index += 1;
      const skills = renderSkills(blocks.slice(index));
      if (skills.consumed > 0) {
        out.push(skills.html);
        index += skills.consumed;
      }
      continue;
    }

    const highlight = block.match(HIGHLIGHT_PARAGRAPH);
    out.push(
      highlight
        ? `<p class="highlights"><strong>${highlight[1]}:</strong> ${highlight[2]}</p>`
        : block,
    );
    index += 1;
  }

  return { html: out.join("\n"), extraClasses };
};

const layout = (blocks) => {
  const firstSection = blocks.findIndex((block) => headingText(block) !== null);
  const headerBlocks = blocks.slice(0, firstSection);
  const bodyBlocks = blocks.slice(firstSection);
  const body = renderBody(bodyBlocks, "");
  return `${renderHeader(headerBlocks)}\n<main>\n${body.html}\n</main>`;
};

/* ── Szablon strony ──────────────────────────────────────────────────────── */

const renderNav = (items) =>
  `<nav class="switcher">${items
    .map(
      (item) =>
        `<a href="${item.href}"${item.active ? ' class="active"' : ""}>${item.label}</a>`,
    )
    .join("")}</nav>`;

const renderPage = (page, body, css) => `<!DOCTYPE html>
<html lang="${page.lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${page.title}</title>
<meta name="description" content="${page.description}">
<style>
${css}
</style>
</head>
<body>
${renderNav(page.nav)}
${body}
</body>
</html>
`;

/* ── PDF ─────────────────────────────────────────────────────────────────── */

const findChrome = () => {
  const candidates = [
    process.env.CHROME_BIN,
    "google-chrome",
    "google-chrome-stable",
    "chromium",
    "chromium-browser",
  ].filter(Boolean);

  return candidates.find((candidate) => {
    try {
      execFileSync(candidate, ["--version"], { stdio: "ignore" });
      return true;
    } catch {
      return false;
    }
  });
};

const printPdf = (chrome, htmlPath, pdfPath) => {
  execFileSync(
    chrome,
    [
      "--headless=new",
      "--disable-gpu",
      "--no-sandbox",
      "--no-pdf-header-footer",
      `--user-data-dir=${path.join(os.tmpdir(), "cv-chrome")}`,
      `--print-to-pdf=${pdfPath}`,
      "--virtual-time-budget=3000",
      `file://${htmlPath}`,
    ],
    { stdio: "ignore" },
  );
};

/* ── Main ────────────────────────────────────────────────────────────────── */

rmSync(DIST, { recursive: true, force: true });
mkdirSync(DIST, { recursive: true });

const css = readFileSync(path.join(ROOT, "style.css"), "utf8");

const rendered = PAGES.map((page) => {
  const markdown = readFileSync(path.join(ROOT, page.source), "utf8");
  const html = renderPage(page, layout(renderBlocks(markdown)), css);
  const htmlPath = path.join(DIST, page.html);
  writeFileSync(htmlPath, html, "utf8");
  return { ...page, htmlPath };
});

if (WITH_PDF) {
  const chrome = findChrome();
  if (!chrome) {
    console.error("Brak Chrome/Chromium — ustaw CHROME_BIN, żeby zbudować PDF.");
    process.exit(1);
  }

  for (const page of rendered) {
    printPdf(chrome, page.htmlPath, path.join(DIST, page.pdf));
  }
}

const built = rendered.map((page) => `dist/${page.html}${WITH_PDF ? ` + dist/${page.pdf}` : ""}`);
console.log(`Zbudowano: ${built.join(", ")}`);
