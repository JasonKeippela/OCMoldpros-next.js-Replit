import { Metadata } from 'next'
import Link from 'next/link'
import { findCategoryBySlug } from '@/data/servicesData'
import { getCanonicalUrl } from '@/app/lib/canonical'

export const metadata: Metadata = {
  title: 'Environmental Consultant Services | OC Mold Pros – Orange County, CA',
  description: 'Advanced testing and consulting services to evaluate indoor air quality, mold contamination, and next-step action planning. Serving Orange County and San Clemente, CA.',
  alternates: { canonical: getCanonicalUrl('/environmental-consultant') },
}

export default function EnvironmentalConsultantPage() {
  const category = findCategoryBySlug('environmental-consultant')!

  return (
    <main className="pt-28">
      <nav className="bg-gray-100 py-3">
        <div className="max-w-6xl mx-auto px-4">
          <ol className="flex items-center gap-2 text-sm text-gray-600">
            <li><Link href="/" className="hover:text-gray-900">Home</Link></li>
            <li>/</li>
            <li><Link href="/services" className="hover:text-gray-900">Services</Link></li>
            <li>/</li>
            <li className="text-gray-900 font-medium">Environmental Consultant</li>
          </ol>
        </div>
      </nav>

      <section className="py-16 bg-gradient-to-b from-ocean-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Environmental Consultant Services
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Testing & Consulting Services</h2>
          <p className="text-lg text-gray-600 mb-10 max-w-3xl">
            When you need more than a visual walkthrough, our environmental consulting services deliver lab-verified data about what's in your air, on your surfaces, and inside your walls. Mold testing, air quality analysis, ERMI, mycotoxin screening — we use the right tool for the right situation.
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Lab-Based Testing Matters</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Objective Data', desc: 'Visual inspections can miss hidden mold. Lab-based air and surface testing gives you numbers — not opinions — so you can make informed decisions.' },
              { title: 'Comparative Analysis', desc: 'We compare indoor samples to outdoor control samples so you can see clearly whether your indoor air is elevated or abnormal.' },
              { title: 'Actionable Results', desc: 'Lab reports come with clear interpretation. We explain what the results mean and what to do next — no guesswork required.' },
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
          <h2 className="text-3xl font-bold text-white mb-4">Get Clear Answers About Your Indoor Air</h2>
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
