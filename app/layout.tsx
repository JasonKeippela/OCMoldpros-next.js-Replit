import type { Metadata } from 'next'
import './globals.css'

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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "OC Mold Pros",
              "description": "Professional mold inspection and remediation services in Orange County, California",
              "url": "https://ocmoldpros.com",
              "telephone": "+1-949-371-5934",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Orange County",
                "addressRegion": "CA",
                "addressCountry": "US"
              },
              "areaServed": {
                "@type": "Place",
                "name": "Orange County, California"
              },
              "serviceType": ["Mold Inspection", "Mold Remediation", "Mold Testing", "Air Quality Testing"],
              "priceRange": "$$"
            })
          }}
        />
      </head>
      <body className="bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  )
}
