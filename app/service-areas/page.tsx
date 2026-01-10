import { Metadata } from 'next'
import Link from 'next/link'
import { CORE_SERVICE_AREAS, SECONDARY_SERVICE_AREAS } from '@/app/lib/cities'

export const metadata: Metadata = {
  title: 'Service Areas | Mold Inspection in Orange County | OC Mold Pros',
  description: 'OC Mold Pros provides professional mold inspection and testing services throughout Orange County, California. See all cities we serve.',
}

export default function ServiceAreasPage() {
  return (
    <main className="pt-28">
      <nav className="bg-gray-100 py-3">
        <div className="max-w-6xl mx-auto px-4">
          <ol className="flex items-center gap-2 text-sm text-gray-600">
            <li><Link href="/" className="hover:text-gray-900">Home</Link></li>
            <li>/</li>
            <li className="text-gray-900 font-medium">Service Areas</li>
          </ol>
        </div>
      </nav>

      <section className="py-16 bg-gradient-to-b from-ocean-50 to-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Service Areas
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            OC Mold Pros serves South OC and Coastal Orange County with professional mold inspection and testing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:9493715934" className="px-8 py-4 bg-ocean-600 text-white rounded-lg hover:bg-ocean-700 transition-colors font-semibold text-lg">
              Call for Free 20-Min Consultation
            </a>
            <Link href="/contact" className="px-8 py-4 border-2 border-ocean-600 text-gray-900 rounded-lg hover:bg-ocean-50 transition-colors font-semibold text-lg">
              Request a Consultation
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-ocean-50">
        <div className="max-w-6xl mx-auto px-4">
          <Link 
            href="/service-areas/orange-county-beach-cities"
            className="block p-6 bg-white border-2 border-ocean-300 rounded-xl hover:border-ocean-500 hover:shadow-lg transition-all group"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 group-hover:text-ocean-700 mb-2">
                  Orange County Beach Cities
                </h2>
                <p className="text-gray-600">
                  Specialized mold inspection for coastal communities: San Clemente, Dana Point, Laguna Beach, Newport Beach, Huntington Beach, and more.
                </p>
              </div>
              <div className="flex-shrink-0">
                <span className="inline-flex items-center gap-2 px-6 py-3 bg-ocean-600 text-white rounded-lg font-semibold group-hover:bg-ocean-700 transition-colors">
                  View Beach Cities
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Primary Service Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_SERVICE_AREAS.map(city => (
              <Link 
                key={city.slug} 
                href={`/service-areas/${city.slug}`}
                className="p-6 bg-white border-2 border-ocean-200 rounded-xl hover:border-ocean-500 hover:shadow-lg transition-all group"
              >
                <span className="text-lg text-gray-900 group-hover:text-ocean-700 font-semibold">
                  Mold Inspection in {city.name}
                </span>
                <span className="text-gray-500 text-sm block mt-1">Orange County, CA</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Additional Cities We Serve in Orange County</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {SECONDARY_SERVICE_AREAS.map(city => (
              <Link 
                key={city.slug} 
                href={`/service-areas/${city.slug}`}
                className="px-4 py-2 bg-white border border-gray-200 rounded-full hover:border-ocean-500 hover:bg-ocean-50 transition-all text-gray-700 hover:text-ocean-700 font-medium text-sm"
              >
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Comprehensive Orange County Coverage</h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              From the coastal communities of Newport Beach, Huntington Beach, and Laguna Beach to the inland cities of Anaheim, Irvine, and Fullerton, OC Mold Pros serves all of Orange County with professional mold inspection and testing services.
            </p>
            <p className="mt-4">
              Our team of certified inspectors understands the unique challenges that Orange County homeowners face. The Mediterranean climate, coastal humidity, and varied construction styles throughout the county all contribute to different mold risks. We tailor our inspection approach to address the specific conditions in your community.
            </p>
            <p className="mt-4">
              Whether you live in a beachfront property in San Clemente, a historic home in Orange, or a modern development in Irvine, our comprehensive mold inspection services will help you identify and address any mold issues in your home or business.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-ocean-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Schedule Your Inspection Today</h2>
          <p className="text-xl text-ocean-100 mb-8">
            Contact us to schedule a professional mold inspection anywhere in Orange County.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:9493715934" className="px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-ocean-50 transition-colors font-semibold text-lg">
              Call 949-371-5934
            </a>
            <Link href="/contact" className="px-8 py-4 bg-ocean-600 text-white border-2 border-white rounded-lg hover:bg-ocean-800 transition-colors font-semibold text-lg">
              Book Online
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
