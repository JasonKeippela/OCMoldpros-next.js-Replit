import Link from 'next/link'
import { findCategoryBySlug } from '@/data/servicesData'
import { buildMetadata } from '@/app/lib/metadata'
import { getServicePageSchema, getBreadcrumbSchema, getFaqSchema } from '@/app/lib/schema'
import JsonLd from '@/app/components/JsonLd'

export const metadata = buildMetadata({
  title: 'Environmental Consultant Orange County CA | OC Mold Pros',
  description: 'IAC2 certified environmental consultant in Orange County, CA. ERMI testing, mycotoxin screening, indoor air quality analysis & action plans. Veteran owned. Call 949-371-5934.',
  keywords: ['environmental consultant Orange County', 'indoor air quality testing OC', 'ERMI testing Orange County', 'mycotoxin testing California', 'mold DNA testing OC', 'IAC2 certified environmental consultant'],
  path: '/environmental-consultant',
})

const FAQS = [
  {
    question: 'What is ERMI testing and when do I need it?',
    answer: 'ERMI (Environmental Relative Moldiness Index) is a DNA-based dust test that evaluates long-term mold contamination in a home. Unlike air sampling, which captures a snapshot in time, ERMI analyzes settled dust to reveal historical mold exposure. It\'s recommended when occupants have chronic health symptoms, when a previous inspection was inconclusive, or when a home has a known mold history.',
  },
  {
    question: 'How does indoor air quality testing work?',
    answer: 'We collect air samples using calibrated pumps and spore trap cassettes at multiple indoor locations, plus an outdoor control sample. These are sent to an accredited independent laboratory that counts and identifies mold spores. We compare indoor levels to outdoor baseline levels — elevated indoor counts indicate a mold source inside the building.',
  },
  {
    question: 'What is mycotoxin testing and do I need it?',
    answer: 'Mycotoxins are toxic compounds produced by certain mold species. Mycotoxin testing identifies whether these toxins are present in your environment — an important distinction because some molds look benign but produce harmful toxins. This test is often recommended for individuals with mold-related illness, chronic fatigue, or unexplained neurological symptoms.',
  },
  {
    question: 'What is HERTSMI-2 scoring?',
    answer: 'HERTSMI-2 is a scoring system derived from ERMI testing that focuses on the five mold species most associated with human illness. A low HERTSMI-2 score suggests the environment is likely safe; a high score suggests meaningful contamination. It\'s commonly used by physicians treating mold-related illness to assess whether a home is safe to inhabit.',
  },
  {
    question: 'How do I interpret my air quality test results?',
    answer: 'When you receive your results from us, we don\'t just hand over a lab report and leave you guessing. We walk you through what each species means, what the numbers indicate relative to your outdoor baseline, and what the recommended next steps are. If remediation is indicated, we provide an independent referral — we never perform the work ourselves, which keeps our advice objective.',
  },
]

export default function EnvironmentalConsultantPage() {
  const category = findCategoryBySlug('environmental-consultant')!

  const serviceSchema = getServicePageSchema({
    name: 'Environmental Consultant Services',
    path: '/environmental-consultant',
    description: 'Advanced indoor air quality testing, ERMI, mycotoxin screening, and environmental consulting in Orange County, CA. IAC2 certified.',
  })

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: 'https://ocmoldpros.com' },
    { name: 'Services', url: 'https://ocmoldpros.com/services' },
    { name: 'Environmental Consultant', url: 'https://ocmoldpros.com/environmental-consultant' },
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
            <li className="text-gray-900 font-medium">Environmental Consultant</li>
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
            Environmental Consultant Services in Orange County, CA
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mb-4">
            {category.description} Our IAC2-certified environmental consultant uses lab-verified testing — ERMI, mycotoxin screening, indoor air quality analysis, and allergen sampling — to give you clear, actionable data about what&apos;s in your air.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mb-8">
            When a standard visual inspection isn&apos;t enough, environmental testing delivers objective answers. Whether you&apos;re dealing with chronic health symptoms, a history of water damage, or purchasing a property with unknown mold history, our lab-based services provide the evidence you need — interpreted clearly, without industry jargon.
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Testing &amp; Consulting Services</h2>
          <p className="text-lg text-gray-600 mb-10 max-w-3xl">
            When you need more than a visual walkthrough, our environmental consulting services deliver lab-verified data about what&apos;s in your air, on your surfaces, and inside your walls. Mold testing, air quality analysis, ERMI, mycotoxin screening — we use the right tool for the right situation.
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
