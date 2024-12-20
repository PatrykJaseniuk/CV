import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'github-markdown-css'
import { IconMapPin, IconMail, IconBrandLinkedin, IconBrandGithub, IconWorldWww } from '@tabler/icons-react'
import { JsxElement } from 'typescript'
import { ReactNode } from 'react'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Patryk Jaseniuk',
  description: 'CV Patryka Jaseniuka',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body className='markdown-body' style={{ padding: '3rem', paddingTop: '0' }}>
        <Header />
        {children}
      </body>
    </html>
  )
}

const Header = () => {
  return (
    <header>

      <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%', maxWidth: 1280, margin: 'auto', }}>
        <div style={{ marginRight: '2rem', width: '30%', minWidth: '10rem', maxWidth: '20rem' }}>
          <img style={{ borderRadius: '100%', width: '100%' }} src='https://avatars.githubusercontent.com/u/71171748?v=4' />
        </div>
        <div  >
          <h1>Patryk Jaseniuk</h1>
          <SocialMediaIcons />
        </div>
      </div>
    </header>
  )
}


interface SocialMediaLink {
  name: string;
  url?: string;
  icon: React.ReactNode;
}

const socialMediaLinks: SocialMediaLink[] = [
  { name: 'Polska, Nysa', url: '', icon: <IconMapPin /> },
  { name: 'patryk.jaseniuk@gmail.com', icon: <IconMail /> },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/patryk-jaseniuk-929136161/', icon: <IconBrandLinkedin /> },
  { name: 'GitHub', url: 'https:/github.com/patrykjaseniuk', icon: <IconBrandGithub /> },
];

const SocialMediaIcons: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '16px',
  };

  const linkStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    // color: '#4B5563', // gray-600
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  };

  const iconStyle: React.CSSProperties = {
    marginRight: '12px',
  };

  const textStyle: React.CSSProperties = {
    fontSize: '16px',
    fontWeight: 500,
  };

  return (
    <div style={containerStyle}>
      {socialMediaLinks.map((link) => (
        link.url ?
          (<a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            <span style={iconStyle}>
              {React.cloneElement(link.icon as React.ReactElement, { size: 24 })}
            </span>
            <span style={textStyle}>{link.name}</span>
          </a>)
          :
          (
            <span key={link.name} style={linkStyle}>
              <span style={iconStyle}>
                {React.cloneElement(link.icon as React.ReactElement, { size: 24 })}
              </span>
              <span style={textStyle}>{link.name}</span>
            </span>
          )

      ))}
    </div>
  );
};
