import { Roboto } from '@next/font/google'
import { Analytics } from '@vercel/analytics/react';
import '@styles/globals.scss'
import Header from '@components/layouts/Header';

export const metadata = {
  title: 'Tomas Landa - Web Developer',
  description: 'Generated by create next app',
}

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-roboto',
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} font-sans scroll-smooth`}>
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
