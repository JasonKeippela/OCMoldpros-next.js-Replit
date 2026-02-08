import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://ocmoldpros.com'),
  title: 'OC Mold Pros | Professional Mold Inspection & Remediation Solutions in Orange County',
  description: 'Professional mold inspection & testing in Orange County, CA. Certified inspectors, advanced technology, same-day service. Call 949-371-5934 for a free quote today!',
  keywords: 'mold inspection, mold remediation, mold testing, Orange County, OC, California, San Clemente, Irvine, Newport Beach',
  openGraph: {
    title: 'OC Mold Pros | Professional Mold Inspection & Remediation Solutions',
    description: 'Professional mold inspection & testing in Orange County, CA. Certified inspectors, advanced technology, same-day service available.',
    type: 'website',
    locale: 'en_US',
    url: 'https://ocmoldpros.com/',
    siteName: 'OC Mold Pros',
    images: [
      {
        url: 'https://ocmoldpros.com/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'OC Mold Pros - Professional Mold Inspection Services in Orange County',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OC Mold Pros | Professional Mold Inspection & Remediation Solutions',
    description: 'Professional mold inspection & testing in Orange County, CA. Certified inspectors, same-day service.',
    images: ['https://ocmoldpros.com/logo.jpg'],
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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CK8D20LRK0"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CK8D20LRK0');
          `}
        </Script>
      </head>
      <body className="bg-white text-gray-900 antialiased">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
