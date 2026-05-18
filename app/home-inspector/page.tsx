import Link from 'next/link'
import { findCategoryBySlug } from '@/data/servicesData'
import { buildMetadata } from '@/app/lib/metadata'
import { getServicePageSchema, getBreadcrumbSchema, getFaqSchema } from '@/app/lib/schema'
import JsonLd from '@/app/components/JsonLd'

export const metadata = buildMetadata({
  title: 'Home Inspector Orange County CA | OC Mold Pros',
  description: 'IAC2 certified home mold inspector in Orange County, CA. Thermal imaging, air sampling & detailed reports. Veteran owned. Inspection-only — no conflict of interest. Call 949-371-5934.',
  keywords: ['home inspector Orange County', 'mold home inspection OC', 'IAC2 certified inspector', 'thermal imaging mold inspection', 'Orange County mold testing', 'mold inspection San Clemente'],
  path: '/home-inspector',
})

const FAQS = [
  {
    question: 'What does a home mold inspection include?',
    answer: 'Our home mold inspection includes a full visual and physical walkthrough, moisture mapping with professional-grade meters, thermal imaging to detect hidden moisture behind walls, and air or surface sampling for lab analysis. You receive a detailed report with photos, findings, and prioritized recommendations within 24 hours.',
  },
  {
    question: 'How long does a home inspection take?',
    answer: 'A standard home mold inspection takes 2–4 hours depending on the size and complexity of the property. Larger homes, multi-unit properties, or homes with known water damage may take longer. We never rush the process — thoroughness is the point.',
  },
  {
    question: 'Do I need a mold inspection before buying a home in Orange County?',
    answer: 'Yes — especially in coastal Orange County cities where marine layer humidity and older construction increase mold risk. A mold inspection before closing gives buyers independent, lab-verified data about the home\'s condition that a general home inspector may not provide.',
  },
  {
    question: 'What is the difference between a mold inspection and mold testing?',
    answer: 'A mold inspection is a physical assessment — we look, measure, and document conditions. Mold testing refers specifically to collecting air or surface samples for laboratory analysis to identify mold species and spore counts. Most of our inspection packages include both.',
  },
  {
    question: 'Can you inspect a new construction home for mold?',
    answer: 'Yes. New construction is actually higher risk than most people realize — building materials are often stored outdoors, framing can get wet before drywall is installed, and moisture gets sealed in. We specialize in new construction mold inspections to catch issues before occupancy.',
  },
]

export default function HomeInspectorPage() {
  const category = findCategoryBySlug('home-inspector')!

  const serviceSchema = getServicePageSchema({
    name: 'Home Inspector Services',
    path: '/home-inspector',
    description: 'Comprehensive home mold inspection services in Orange County, CA. IAC2 certified, inspection-only, veteran owned.',
  })

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: 'https://ocmoldpros.com' },
    { name: 'Services', url: 'https://ocmoldpros.com/services' },
    { name: 'Home Inspector', url: 'https://ocmoldpros.com/home-inspector' },
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
            <li className="text-gray-900 font-medium">Home Inspector</li>
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
            Home Inspector Services in Orange County, CA
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mb-4">
            {category.description} Our IAC2-certified inspector uses thermal imaging, professional moisture meters, and lab-certified sampling to find mold and moisture problems that general home inspectors miss.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mb-8">
            Because we inspect only — never remediate — our findings are 100% unbiased. You get honest data to make confident decisions about your home, whether you&apos;re buying, selling, renting, or simply concerned about your family&apos;s health.
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

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Credentials</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'IAC2 Certified', desc: 'Verified at iac2.org. Our inspector meets the industry standard for mold and indoor air quality assessment.' },
              { title: 'Veteran Owned', desc: 'OC Mold Pros is a verified veteran-owned business — committed to service, integrity, and doing the job right.' },
              { title: '24-Hour Reports', desc: 'You receive your full written report with photos, lab results, and recommendations within 24 hours of your inspection.' },
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
