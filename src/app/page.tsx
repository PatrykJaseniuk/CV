'use client'

import { IconBrandGithub, IconBrandLinkedin, IconGlobe, IconMail, IconMapPin, IconWorldWww } from '@tabler/icons-react'
import { MarkdownViewer } from '@/components/MarkdownRemote'
import { useState } from 'react';

const cvUrlPL = 'https://raw.githubusercontent.com/PatrykJaseniuk/PatrykJaseniuk/refs/heads/main/README_PL.md'
const cvUrlEng = 'https://raw.githubusercontent.com/PatrykJaseniuk/PatrykJaseniuk/refs/heads/main/README.md'

export default function Home() {

  const [cvUrl, setCvUrl] = useState(cvUrlEng);

  return (
    <>
      <Container  >
        <LanguagesBar onPlClick={() => setCvUrl(cvUrlPL)} onEngClick={() => setCvUrl(cvUrlEng)} />

        <MarkdownViewer url={cvUrl} />
      </Container>
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

