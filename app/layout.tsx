import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '포트폴리오 | 개발자 포트폴리오',
  description: '프론트엔드 개발자 포트폴리오 사이트입니다.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className="bg-cyber-gradient text-gray-100">
        {children}
      </body>
    </html>
  )
}
