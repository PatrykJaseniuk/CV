#!/usr/bin/env node
/**
 * CV build — jedno źródło prawdy, zero zależności.
 *
 *   cv.pl.md ─┐
 *             ├─▶ dist/index.html + dist/Patryk_Jaseniuk_CV_PL.pdf
 *   cv.en.md ─┘   dist/en.html    + dist/Patryk_Jaseniuk_CV_EN.pdf
 *
 * HTML powstaje z Markdowna (obsługiwany podzbiór: nagłówki, listy, pogrubienia,
 * kursywa, kod inline, linki, pozioma linia). PDF drukuje ta sama strona przez
 * headless Chrome, więc CSS jest wspólny dla webu i druku.
 *
 * Użycie:
 *   node build.mjs          # tylko HTML
 *   node build.mjs --pdf    # HTML + PDF (wymaga Chrome/Chromium)
 */

import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import path from "node:path";
import os from "node:os";
import { fileURLToPath } from "node:url";

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(ROOT, "dist");
const WITH_PDF = process.argv.includes("--pdf");

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

/* ── Markdown → HTML ─────────────────────────────────────────────────────── */

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

const renderMarkdown = (markdown) => {
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
  return blocks.join("\n");
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
<main>
${body}
</main>
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
  const html = renderPage(page, renderMarkdown(markdown), css);
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
if (!existsSync(path.join(DIST, "index.html"))) process.exit(1);
