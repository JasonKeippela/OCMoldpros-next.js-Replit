import Link from 'next/link'
import { findCategoryBySlug } from '@/data/servicesData'
import { buildMetadata } from '@/app/lib/metadata'
import { getServicePageSchema, getBreadcrumbSchema, getFaqSchema } from '@/app/lib/schema'
import JsonLd from '@/app/components/JsonLd'

export const metadata = buildMetadata({
  title: 'Water Damage Mold Inspection Orange County | OC Mold Pros',
  description: 'Independent mold inspection before & after water damage restoration in Orange County, CA. Pre-remediation assessment & clearance testing. IAC2 certified. Call 949-371-5934.',
  keywords: ['water damage mold inspection Orange County', 'post-remediation clearance testing OC', 'mold inspection after water damage', 'mold clearance testing California', 'pre-remediation mold inspection', 'IAC2 certified water damage inspector'],
  path: '/water-damage-restoration-service',
})

const FAQS = [
  {
    question: 'Why do I need an independent inspection before mold remediation?',
    answer: 'Most remediation companies have a financial incentive to overstate the problem — the bigger the job, the more they earn. An independent pre-remediation inspection from a company that never performs remediation gives you an unbiased assessment of what actually needs to be addressed. This protects you from unnecessary work and ensures the scope is accurate.',
  },
  {
    question: 'What is a clearance inspection and do I need one?',
    answer: 'A clearance inspection (also called post-remediation verification) is conducted after mold remediation is complete to confirm that the work was done correctly and mold levels are back within normal range. We collect air and surface samples that are analyzed by an independent lab. Without clearance testing, you have only the contractor\'s word that the job was successful.',
  },
  {
    question: 'How soon after water damage should I call for an inspection?',
    answer: 'As soon as possible — ideally within 24–48 hours. Mold can begin growing within 24–72 hours of water exposure. An early inspection documents the extent of moisture damage before drying begins, which is important for insurance claims and for ensuring that all affected materials are properly addressed before mold takes hold.',
  },
  {
    question: 'What is post-remediation verification?',
    answer: 'Post-remediation verification (PRV) is the process of independently confirming that mold remediation was completed successfully. We conduct air and surface sampling after the remediation company has finished and all containment has been removed. Lab results are compared to pre-remediation levels and outdoor control samples to confirm the work is complete.',
  },
  {
    question: 'Do you perform mold remediation or just inspection?',
    answer: 'We perform inspection only — never remediation. This is intentional. By keeping inspection completely separate from remediation, our findings are free from any conflict of interest. We will never recommend more work than is needed, and we can provide unbiased clearance testing after a different company does the remediation.',
  },
]

export default function WaterDamageRestorationPage() {
  const category = findCategoryBySlug('water-damage-restoration-service')!

  const serviceSchema = getServicePageSchema({
    name: 'Water Damage Restoration Mold Inspection',
    path: '/water-damage-restoration-service',
    description: 'Independent pre- and post-remediation mold inspection services for water damage situations in Orange County, CA. IAC2 certified, inspection-only.',
  })

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: 'https://ocmoldpros.com' },
    { name: 'Services', url: 'https://ocmoldpros.com/services' },
    { name: 'Water Damage Restoration Service', url: 'https://ocmoldpros.com/water-damage-restoration-service' },
  ])

  const faqSchema = getFaqSchema(FAQS.map(f => ({ question: f.question, answer: f.answer })))

  return (
    <main className="pt-28">
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      {faqSchema && <JsonLd data={{ '@context': 'https://schema.org', ...faqSchema }} />}

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
          <div className="flex flex-wrap gap-3 mb-6">
            {['IAC2 Certified', 'Veteran Owned', 'Inspection-Only', 'Same-Day Available'].map((badge) => (
              <span key={badge} className="px-3 py-1 bg-ocean-100 text-ocean-800 text-sm font-medium rounded-full border border-ocean-200">
                ✓ {badge}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Water Damage Restoration Mold Inspection in Orange County, CA
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mb-4">
            {category.description} When water damage occurs, independent inspection is the most important step — before remediation begins to document conditions, and after it&apos;s complete to verify the job was done right.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mb-8">
            Because we never perform remediation ourselves, our assessments carry zero conflict of interest. We work for you — giving you accurate, lab-verified data to hold contractors accountable, support insurance claims, and protect your home&apos;s value and your family&apos;s health.
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
            Water damage and mold go hand in hand. Inspection is a critical part of any cleanup or restoration process — it documents conditions before work begins, guides the scope of remediation, and verifies that the job was done correctly. We don&apos;t clean mold, but we provide the independent assessment that makes every cleanup more effective and defensible.
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

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Credentials</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'IAC2 Certified', desc: 'Verified at iac2.org. Our inspector meets the industry standard for mold and indoor air quality assessment.' },
              { title: 'Veteran Owned', desc: 'OC Mold Pros is a verified veteran-owned business — committed to service, integrity, and doing the job right.' },
              { title: '24-Hour Reports', desc: 'Full written report with photos, lab results, and recommendations delivered within 24 hours of your inspection.' },
              { title: 'Full OC Coverage', desc: 'We serve all 33 cities in Orange County — from San Clemente to Seal Beach, coastal to inland communities.' },
            ].map((item, i) => (
              <div key={i} className="bg-ocean-50 rounded-xl p-6 border border-ocean-100 text-center">
                <h3 className="text-base font-semibold text-ocean-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-5">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
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
