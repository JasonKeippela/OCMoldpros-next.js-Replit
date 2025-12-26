import type { Metadata } from 'next'
import './globals.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'OC Mold Pros | Professional Mold Inspection & Remediation in Orange County',
  description: 'OC Mold Pros provides expert mold inspection, testing, and remediation services throughout Orange County, California. Call 949-371-5934 for a free consultation.',
  keywords: 'mold inspection, mold remediation, mold removal, Orange County, OC, California, San Clemente, Irvine, Newport Beach',
  openGraph: {
    title: 'OC Mold Pros | Professional Mold Inspection & Remediation',
    description: 'Expert mold inspection and remediation services in Orange County, California.',
    type: 'website',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
