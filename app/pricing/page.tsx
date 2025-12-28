import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pricing | Mold Inspection Costs | OC Mold Pros - Orange County',
  description: 'Transparent mold inspection pricing for Orange County homes and businesses. Get a quote for professional mold testing services. Call 949-371-5934.',
}

export default function PricingPage() {
  return (
    <main className="pt-28">
      <nav className="bg-gray-100 py-3">
        <div className="max-w-6xl mx-auto px-4">
          <ol className="flex items-center gap-2 text-sm text-gray-600">
            <li><Link href="/" className="hover:text-gray-900">Home</Link></li>
            <li>/</li>
            <li className="text-gray-900 font-medium">Pricing</li>
          </ol>
        </div>
      </nav>

      <section className="py-16 bg-gradient-to-b from-ocean-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Transparent Pricing</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            We believe in upfront, honest pricing with no hidden fees. The cost of your mold inspection depends on the size of your property and the services you need.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-ocean-500 transition-colors">
              <h2 className="text-xl font-bold text-gray-900 mb-2">Basic Inspection</h2>
              <p className="text-gray-500 mb-4">For smaller homes up to 1,500 sq ft</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">$299</span>
                <span className="text-gray-500">+</span>
              </div>
              <ul className="space-y-3 mb-8">
                {['Visual inspection', 'Moisture detection', 'Infrared thermal imaging', '1 air sample', 'Written report'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-700">
                    <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="tel:9493715934" className="block w-full py-3 text-center bg-ocean-600 text-white rounded-lg hover:bg-ocean-700 transition-colors font-medium">
                Call for Quote
              </a>
            </div>

            <div className="bg-white border-2 border-ocean-500 rounded-xl p-8 relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-ocean-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Standard Inspection</h2>
              <p className="text-gray-500 mb-4">For homes 1,500 - 3,000 sq ft</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">$399</span>
                <span className="text-gray-500">+</span>
              </div>
              <ul className="space-y-3 mb-8">
                {['Complete visual inspection', 'Comprehensive moisture detection', 'Infrared thermal imaging', '2-3 air samples', 'Surface sampling', 'Detailed report with photos'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-700">
                    <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="tel:9493715934" className="block w-full py-3 text-center bg-ocean-600 text-white rounded-lg hover:bg-ocean-700 transition-colors font-medium">
                Call for Quote
              </a>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-ocean-500 transition-colors">
              <h2 className="text-xl font-bold text-gray-900 mb-2">Comprehensive Inspection</h2>
              <p className="text-gray-500 mb-4">For larger homes 3,000+ sq ft</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">$499</span>
                <span className="text-gray-500">+</span>
              </div>
              <ul className="space-y-3 mb-8">
                {['Full property inspection', 'Advanced moisture mapping', 'Infrared thermal imaging', '4+ air samples', 'Multiple surface samples', 'HVAC inspection', 'Comprehensive report'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-700">
                    <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="tel:9493715934" className="block w-full py-3 text-center bg-ocean-600 text-white rounded-lg hover:bg-ocean-700 transition-colors font-medium">
                Call for Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Additional Services</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { service: 'Additional Air Samples', price: '$75 each', desc: 'Extra air samples for larger properties or specific concerns' },
              { service: 'Surface Sampling', price: '$50 each', desc: 'Tape lift or swab samples for visible mold identification' },
              { service: 'Post-Remediation Testing', price: 'Starting at $250', desc: 'Verification testing after mold remediation is complete' },
              { service: 'Commercial Inspections', price: 'Custom Quote', desc: 'Pricing based on property size and scope of inspection' }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">{item.service}</h3>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
                <span className="text-gray-900 font-semibold whitespace-nowrap ml-4">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: 'What factors affect the price of a mold inspection?', a: 'The main factors are property size, number of samples needed, and complexity of the inspection. Larger properties or those with multiple problem areas may require more samples and time.' },
              { q: 'Are lab fees included in the price?', a: 'Yes, all prices include laboratory analysis fees. There are no hidden costs or surprise charges.' },
              { q: 'Do you offer free estimates?', a: 'We provide free phone consultations to discuss your needs and provide an accurate quote before scheduling your inspection.' },
              { q: 'What payment methods do you accept?', a: 'We accept all major credit cards, checks, and cash. Payment is due at the time of service.' }
            ].map((faq, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-ocean-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Get Your Free Quote Today</h2>
          <p className="text-xl text-ocean-100 mb-8">
            Call us for a free consultation and accurate pricing for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:9493715934" className="px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-ocean-50 transition-colors font-semibold text-lg">
              Call 949-371-5934
            </a>
            <Link href="/contact" className="px-8 py-4 bg-ocean-600 text-white border-2 border-white rounded-lg hover:bg-ocean-800 transition-colors font-semibold text-lg">
              Request Quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
