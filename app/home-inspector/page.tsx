import { Metadata } from 'next'
import Link from 'next/link'
import { findCategoryBySlug } from '@/data/servicesData'
import { getCanonicalUrl } from '@/app/lib/canonical'

export const metadata: Metadata = {
  title: 'Home Inspector Services | OC Mold Pros – Orange County, CA',
  description: 'Inspection-focused services for identifying mold risks, moisture concerns, and problem areas throughout your home. Serving Orange County and San Clemente, CA.',
  alternates: { canonical: getCanonicalUrl('/home-inspector') },
}

export default function HomeInspectorPage() {
  const category = findCategoryBySlug('home-inspector')!

  return (
    <main className="pt-28">
      <nav className="bg-gray-100 py-3">
        <div className="max-w-6xl mx-auto px-4">
          <ol className="flex items-center gap-2 text-sm text-gray-600">
            <li><Link href="/" className="hover:text-gray-900">Home</Link></li>
            <li>/</li>
            <li><Link href="/services" className="hover:text-gray-900">Services</Link></li>
            <li>/</li>
            <li className="text-gray-900 font-medium">Home Inspector</li>
          </ol>
        </div>
      </nav>

      <section className="py-16 bg-gradient-to-b from-ocean-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Home Inspector Services
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Inspect</h2>
          <p className="text-lg text-gray-600 mb-10 max-w-3xl">
            Our home inspection services are designed to surface hidden moisture problems, visible mold growth, and structural conditions that put your indoor environment at risk. We go beyond the surface — using moisture meters, thermal imaging, and trained eyes to find what others miss.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Inspection Comes First</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Find the Source', desc: 'Mold is a symptom of moisture. Our inspections find where moisture is entering or accumulating so the real problem gets solved — not just the visible mold.' },
              { title: 'Unbiased Results', desc: 'We inspect only. We do not perform remediation, so our findings are objective. You get honest data to make informed decisions.' },
              { title: 'Clear Next Steps', desc: 'Every inspection ends with clear findings and prioritized recommendations — no unnecessary fear, no vague advice.' },
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
          <h2 className="text-3xl font-bold text-white mb-4">Schedule Your Home Inspection</h2>
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
