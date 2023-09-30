import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Customizable Accordion',
  description: 'nextjs app for you to customiza your accordion as simple as it is',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
        
        <meta name="description" content="Jr. software dev" />
        <meta data-n-head="ssr" data-hid="og:image:type" property="og:image:type" content="image/jpeg"/>
        <meta property="og:image" content='https://private-user-images.githubusercontent.com/65041082/271780038-08d5d5ae-daeb-411a-bdad-2da97bb7b771.svg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE2OTYwODYxMjMsIm5iZiI6MTY5NjA4NTgyMywicGF0aCI6Ii82NTA0MTA4Mi8yNzE3ODAwMzgtMDhkNWQ1YWUtZGFlYi00MTFhLWJkYWQtMmRhOTdiYjdiNzcxLnN2Zz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzA5MzAlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMwOTMwVDE0NTcwM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTA4NzZkZDU2ZGVlODg5NTdmNmRkOTM4N2FmN2E5OTQ2YWNjNDI1MTk3MjM0ZTVhNmRiOTQ0NzlkMGIwOWVkNjUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.KWHbyzd5eReuEprMW9gcrAOgRznX5L-vGqAGHMio79k' />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <link rel="icon" href="/favicon.svg" />
        <link rel="icon" type="image/svg" sizes="16x16" href="/favicon.svg" />
        <link rel="icon" type="image/svg" sizes="32x32" href="/favicon.svg" />
        <link rel="icon" type="image/svg" sizes="48x48" href="/favicon.svg" />
        <link rel="icon" type="image/svg" sizes="96x96" href="/favicon.svg" />
        <link rel="apple-touch-icon" sizes="192x192" href="/favicon.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.svg" />
        <title>custom accordion</title> 
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
