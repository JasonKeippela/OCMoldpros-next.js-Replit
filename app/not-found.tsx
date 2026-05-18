import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 – Page Not Found | OC Mold Pros',
  description: 'The page you are looking for could not be found. Browse our mold inspection services or find your city page.',
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <main className="pt-28 min-h-screen bg-gradient-to-b from-ocean-50 to-white">
      <div className="max-w-3xl mx-auto px-4 py-24 text-center">
        <p className="text-ocean-600 font-semibold text-lg mb-2">404 – Page Not Found</p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          We couldn&apos;t find that page
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-xl mx-auto">
          The page you&apos;re looking for may have moved or no longer exists. Try one of the links below to find what you need.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-12 text-left">
          {[
            { href: '/home-inspector', label: 'Home Inspector Services', desc: 'Mold inspection, moisture mapping, thermal imaging' },
            { href: '/environmental-consultant', label: 'Environmental Consultant', desc: 'ERMI, mycotoxin testing, indoor air quality' },
            { href: '/water-damage-restoration-service', label: 'Water Damage Inspection', desc: 'Pre- and post-remediation clearance testing' },
            { href: '/mold-inspector-near-me', label: 'Mold Inspector Near Me', desc: 'Find your city in Orange County, CA' },
            { href: '/pricing', label: 'Pricing', desc: 'Transparent inspection package pricing' },
            { href: '/contact', label: 'Contact Us', desc: 'Get a free 20-minute consultation' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block p-5 bg-white border border-gray-200 rounded-xl hover:border-ocean-300 hover:shadow-sm transition-all"
            >
              <span className="block font-semibold text-gray-900 mb-1">{link.label}</span>
              <span className="text-sm text-gray-500">{link.desc}</span>
            </Link>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="px-8 py-4 bg-ocean-600 text-white rounded-lg hover:bg-ocean-700 transition-colors font-semibold text-lg">
            Go to Homepage
          </Link>
          <a href="tel:9493715934" className="px-8 py-4 border-2 border-ocean-600 text-gray-900 rounded-lg hover:bg-ocean-50 transition-colors font-semibold text-lg">
            Call 949-371-5934
          </a>
        </div>
      </div>
    </main>
  )
}
