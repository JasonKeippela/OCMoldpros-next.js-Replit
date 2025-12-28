import { Metadata } from 'next'
import Link from 'next/link'
import { cities } from '../lib/cities'

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
            Mold Inspection Service Areas in Orange County
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            OC Mold Pros provides comprehensive mold inspection and testing services throughout Orange County, California. Select your city below to learn more about our services in your area.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Cities We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {cities.map(city => (
              <Link 
                key={city.slug} 
                href={`/service-areas/${city.slug}`}
                className="p-4 bg-white border border-gray-200 rounded-xl hover:border-ocean-500 hover:shadow-md transition-all text-center group"
              >
                <span className="text-gray-900 group-hover:text-gray-900 font-medium">{city.name}</span>
                <span className="text-gray-500 text-sm block">California</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
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
