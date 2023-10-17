'use client'

import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import 'github-markdown-css'

import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis'
import rehypeHighlight from 'rehype-highlight'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vs, dark, dracula, vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { vsDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import rehypeRaw from 'rehype-raw'
import { IconBrandGithub, IconBrandLinkedin, IconGlobe, IconMail, IconMapPin, IconWorldWww } from '@tabler/icons-react'

const cvUrlPL = 'https://raw.githubusercontent.com/PatrykJaseniuk/PatrykJaseniuk/main/README_PL.md'
const cvUrlEng = 'https://raw.githubusercontent.com/PatrykJaseniuk/PatrykJaseniuk/main/README.md'

export default function Home() {

  const [cvUrl, setCvUrl] = useState(cvUrlEng);

  return (
    <>

      <div className='markdown-body' >

        <Container  >
          <LanguagesBar onPlClick={() => setCvUrl(cvUrlPL)} onEngClick={() => setCvUrl(cvUrlEng)} />
          <div style={{ display: 'flex', flexWrap: 'wrap', padding: '2rem' }}>
            <div style={{ width: '300px' }}>
              <img style={{ borderRadius: '100%', objectFit: 'contain' }} src='https://avatars.githubusercontent.com/u/71171748?v=4' />
            </div>
            <div style={{ padding: '2rem' }} >
              <h1>Patryk Jaseniuk</h1>
              <p><IconMapPin /><strong>  Nysa, Polska</strong></p>
              <p><IconMail /> <strong>  patryk.jaseniuk@gmail.com</strong></p>
              <p><IconBrandLinkedin /> <a href='https://www.linkedin.com/in/patryk-jaseniuk-929136161/'>  LinkedIn</a></p>
              <p><IconBrandGithub /><a href='https://github.com/PatrykJaseniuk'>  GitHub</a></p>
              <p><IconWorldWww /><a href='https://patrykjaseniuk.github.io/CV/'> https://patrykjaseniuk.github.io/CV</a></p>
            </div>
          </div>
          <MarkdownViewer src={cvUrl} />
        </Container>
        {/* <MarkdownViewer /> */}
      </div>
    </>
  )
}

const LanguagesBar = ({ onPlClick, onEngClick }: { onPlClick: () => void, onEngClick: () => void }) => {
  return (
    <div style={{ display: 'flex', padding: '2rem', justifyContent: 'end', gap: '1rem' }}>
      <button style={{ fontSize: '1.5rem' }} onClick={onPlClick}>
        Pl 🇵🇱
      </button>
      <button style={{ fontSize: '1.5rem' }} onClick={onEngClick}>
        Eng 🇬🇧
      </button>
    </div>
  )
}

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{
      maxWidth: 1280, margin: 'auto',
    }}
    >
      <div
        style={{ margin: '1rem' }}
      >
        {children}
      </div>
    </div>
  )
}

const MarkdownViewer = ({ src }: { src: string }) => {

  const [markdownContent, setMarkdownContent] = useState('');

  useEffect(() => {
    // Tutaj wczytaj zawartość pliku Markdown, na przykład za pomocą fetch lub z pliku
    // Przykład wczytania zawartości z pliku "sample.md":
    fetch(src)  // Zmień ścieżkę do swojego pliku
      .then((response) => response.text())
      .then((data) => setMarkdownContent(data))
      .catch((error) => console.error(error));
  }, [src]);

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw as any]}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '')
          return !inline && match ? (
            <SyntaxHighlighter
              {...props}
              children={String(children).replace(/\n$/, '')}
              style={vscDarkPlus}
              language={match[1]}
              PreTag="div"
            />
          ) : (
            <code {...props} className={className}>
              {children}
            </code>
          )
        }
      }}
    >{markdownContent}</ReactMarkdown>
  );
}