import { Metadata } from 'next'
import Link from 'next/link'
import { SERVICE_CATEGORIES } from '@/data/servicesData'

export const metadata: Metadata = {
  title: 'Mold Inspection Services | OC Mold Pros – Orange County, CA',
  description: 'Comprehensive mold inspection and testing services in Orange County, CA. Home inspections, environmental consulting, and water damage restoration support. Call 949-371-5934.',
  alternates: { canonical: 'https://ocmoldpros.com/services' },
}

const categoryIcons: Record<string, string> = {
  'home-inspector': '🏠',
  'environmental-consultant': '🔬',
  'water-damage-restoration-service': '💧',
}

export default function ServicesPage() {
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'OC Mold Pros Services',
    itemListElement: SERVICE_CATEGORIES.flatMap((cat, catIdx) =>
      cat.services.map((svc, svcIdx) => ({
        '@type': 'ListItem',
        position: catIdx * 10 + svcIdx + 1,
        name: svc.name,
        url: `https://ocmoldpros.com${svc.canonicalHref}`,
      }))
    ),
  }

  return (
    <main className="pt-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <nav className="bg-gray-100 py-3">
        <div className="max-w-6xl mx-auto px-4">
          <ol className="flex items-center gap-2 text-sm text-gray-600">
            <li><Link href="/" className="hover:text-gray-900">Home</Link></li>
            <li>/</li>
            <li className="text-gray-900 font-medium">Services</li>
          </ol>
        </div>
      </nav>

      <section className="py-16 bg-gradient-to-b from-ocean-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Mold Inspection & Testing Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mb-8">
            OC Mold Pros provides independent mold inspection and testing services across Orange County and San Clemente, CA. We don&apos;t remediate — we inspect. That means our findings are always unbiased, and our job is to give you accurate data and clear next steps.
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

      {SERVICE_CATEGORIES.map((cat) => (
        <section key={cat.slug} className="py-16 border-b border-gray-100 last:border-0">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-start gap-4 mb-3">
              <span className="text-3xl" aria-hidden="true">{categoryIcons[cat.slug]}</span>
              <div>
                <Link href={`/${cat.slug}`} className="group">
                  <h2 className="text-2xl font-bold text-gray-900 group-hover:text-ocean-700 transition-colors">
                    {cat.name}
                    <span className="ml-2 text-ocean-600 text-lg font-normal opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </h2>
                </Link>
                <p className="text-gray-600 mt-1">{cat.description}</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
              {cat.services.map((svc) => (
                <Link
                  key={svc.slug}
                  href={svc.canonicalHref}
                  className="block p-4 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-ocean-300 transition-all"
                >
                  <span className="text-gray-900 font-medium block mb-1">{svc.name}</span>
                  <span className="text-gray-500 text-sm">{svc.shortDescription}</span>
                </Link>
              ))}
            </div>
            <div className="mt-4">
              <Link href={`/${cat.slug}`} className="text-sm text-ocean-600 font-medium hover:text-ocean-700">
                View all {cat.name} services →
              </Link>
            </div>
          </div>
        </section>
      ))}

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Professional Mold Inspection Matters</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {[
              { title: 'Protect Your Health', desc: 'Mold exposure can cause respiratory issues, allergies, and other health problems. Professional inspection helps identify risks early.' },
              { title: 'Preserve Property Value', desc: 'Unaddressed mold can cause structural damage and significantly reduce your property value. Early detection saves money.' },
              { title: 'Peace of Mind', desc: 'Know exactly what you are dealing with. Our detailed reports give you the information you need to make informed decisions.' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-ocean-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Schedule Your Inspection Today</h2>
          <p className="text-xl text-ocean-100 mb-8">
            Call for a free 20-minute consultation. Serving Orange County and San Clemente, CA.
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
