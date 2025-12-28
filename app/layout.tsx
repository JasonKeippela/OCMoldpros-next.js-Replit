import type { Metadata } from 'next'
import './globals.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'OC Mold Pros | Professional Mold Inspection & Remediation in Orange County',
  description: 'Professional mold inspection & testing in Orange County, CA. Certified inspectors, advanced technology, same-day service. Call 949-371-5934 for a free quote today!',
  keywords: 'mold inspection, mold remediation, mold removal, Orange County, OC, California, San Clemente, Irvine, Newport Beach',
  openGraph: {
    title: 'OC Mold Pros | Professional Mold Inspection & Remediation',
    description: 'Professional mold inspection & testing in Orange County, CA. Certified inspectors, advanced technology, same-day service available.',
    type: 'website',
    locale: 'en_US',
    url: 'https://ocmoldprosnextjs.replit.app',
    siteName: 'OC Mold Pros',
    images: [
      {
        url: 'https://ocmoldprosnextjs.replit.app/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'OC Mold Pros - Professional Mold Inspection Services in Orange County',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OC Mold Pros | Professional Mold Inspection & Remediation',
    description: 'Professional mold inspection & testing in Orange County, CA. Certified inspectors, same-day service.',
    images: ['https://ocmoldprosnextjs.replit.app/logo.jpg'],
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
