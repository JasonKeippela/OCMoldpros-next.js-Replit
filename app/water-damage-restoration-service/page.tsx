import { Metadata } from 'next'
import Link from 'next/link'
import { findCategoryBySlug } from '@/data/servicesData'
import { getCanonicalUrl } from '@/app/lib/canonical'

export const metadata: Metadata = {
  title: 'Water Damage Restoration Services | OC Mold Pros – Orange County, CA',
  description: 'Supportive services related to mold cleanup, restoration guidance, mitigation, and remediation-related needs. Serving Orange County and San Clemente, CA.',
  alternates: { canonical: getCanonicalUrl('/water-damage-restoration-service') },
}

export default function WaterDamageRestorationPage() {
  const category = findCategoryBySlug('water-damage-restoration-service')!

  return (
    <main className="pt-28">
      <nav className="bg-gray-100 py-3">
        <div className="max-w-6xl mx-auto px-4">
          <ol className="flex items-center gap-2 text-sm text-gray-600">
            <li><Link href="/" className="hover:text-gray-900">Home</Link></li>
            <li>/</li>
            <li><Link href="/services" className="hover:text-gray-900">Services</Link></li>
            <li>/</li>
            <li className="text-gray-900 font-medium">Water Damage Restoration Service</li>
          </ol>
        </div>
      </nav>

      <section className="py-16 bg-gradient-to-b from-ocean-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Water Damage Restoration Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mb-8">
            {category.description} Serving Orange County and San Clemente, CA.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:9493715934" className="px-8 py-4 bg-ocean-600 text-white rounded-lg hover:bg-ocean-700 transition-colors font-semibold text-lg text-center">
              Call 949-371-5934
            </a>
            <Link href="/contact" className="px-8 py-4 border-2 border-ocean-600 text-gray-900 rounded-lg hover:bg-ocean-50 transition-colors font-semibold text-lg text-center">
              Free 20-Min Consultation
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Restoration-Related Services</h2>
          <p className="text-lg text-gray-600 mb-10 max-w-3xl">
            Water damage and mold go hand in hand. Inspection is a critical part of any cleanup or restoration process — it documents conditions before work begins, guides the scope of remediation, and verifies that the job was done correctly. We don't clean mold, but we provide the independent assessment that makes every cleanup more effective and defensible.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {category.services.map((service) => (
              <Link
                key={service.slug}
                href={service.canonicalHref}
                className="block p-6 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-ocean-300 transition-all"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600 text-sm">{service.shortDescription}</p>
                <span className="mt-4 inline-block text-ocean-600 text-sm font-medium">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">The Role of Inspection in Restoration</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Define the Scope', desc: 'Before any cleaning or restoration begins, inspection establishes exactly what areas are affected and what materials need attention.' },
              { title: 'Stay Unbiased', desc: 'As independent inspectors, our findings are not influenced by remediation revenue. You get an honest picture of the actual problem.' },
              { title: 'Verify the Work', desc: 'Post-remediation clearance testing confirms the job was done correctly. Without it, you\'re taking a contractor\'s word for it.' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-ocean-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Dealing With Water Damage or Mold?</h2>
          <p className="text-xl text-ocean-100 mb-8">
            Call for a free 20-minute consultation. We serve Orange County and San Clemente, CA.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:9493715934" className="px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-ocean-50 transition-colors font-semibold text-lg">
              Call 949-371-5934
            </a>
            <Link href="/contact" className="px-8 py-4 bg-ocean-600 text-white border-2 border-white rounded-lg hover:bg-ocean-800 transition-colors font-semibold text-lg">
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
