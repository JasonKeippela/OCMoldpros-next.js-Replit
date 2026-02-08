import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Packages & Pricing | Mold Inspection Costs | OC Mold Pros - Orange County',
  description: 'Transparent mold inspection pricing in Orange County. Choose from our inspection packages starting at $799. No hidden fees. Call 949-371-5934 for a free quote.',
  // Canonical v2 – services rollout
  alternates: { canonical: 'https://ocmoldpros.com/pricing' },
}

export default function PricingPage() {
  const packages = [
    {
      name: 'I Inspect',
      price: '$899',
      description: 'Perfect for initial inspections and peace of mind',
      features: [
        'Up to 4-hour comprehensive inspection',
        'Moisture mapping with professional meters',
        'Thermal imaging technology',
        'Detailed report with findings and photos',
        'Remediation recommendations'
      ],
      buttonText: 'Book Now',
      buttonStyle: 'outline',
      popular: false
    },
    {
      name: 'I Inspect Plus',
      price: '$1,299',
      description: 'Our most popular package for thorough testing',
      features: [
        'Everything in I Inspect',
        'Professional air sample collection',
        'ERMI testing for mold DNA analysis',
        'HERTSMI-2 scoring',
        'Lab-certified results and interpretation'
      ],
      buttonText: 'Book Now',
      buttonStyle: 'filled',
      popular: true
    },
    {
      name: 'Healthy Choice',
      price: '$1,997',
      description: 'Comprehensive testing for health-conscious homeowners',
      features: [
        'Everything in I Inspect Plus',
        'Mycotoxin testing',
        'VOC (Volatile Organic Compound) testing',
        'Formaldehyde testing',
        'Detailed remediation action plan'
      ],
      buttonText: 'Get Estimate',
      buttonStyle: 'outline',
      popular: false
    },
    {
      name: 'Inspect Max',
      price: '$4,999',
      description: 'The ultimate package for complete peace of mind',
      features: [
        'Everything in Healthy Choice',
        'Professional mold dog inspection',
        'Air purifier included',
        '3-6 month follow-up inspection (2 hours)',
        'Follow-up air samples included',
        'Priority scheduling'
      ],
      buttonText: 'Schedule Now',
      buttonStyle: 'filled-orange',
      popular: false
    }
  ]

  const homebuyerFeatures = [
    '2-hour comprehensive inspection',
    '2 outdoor control samples',
    '3 indoor air samples',
    'Same-day summary report',
    'Full detailed report within 48 hours',
    'Perfect for closing timelines'
  ]

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
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Packages & Pricing</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. Choose the package that fits your needs.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, i) => (
              <div key={i} className={`bg-white border-2 rounded-xl p-6 relative ${pkg.popular ? 'border-ocean-500' : 'border-gray-200 hover:border-ocean-300'} transition-colors`}>
                {pkg.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-ocean-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <span>★</span> Most Popular
                  </div>
                )}
                <div className="text-center mb-6 pt-2">
                  <h2 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h2>
                  <div className="text-3xl font-bold text-ocean-600 mb-2">{pkg.price}</div>
                  <p className="text-gray-500 text-sm">{pkg.description}</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2 text-gray-700 text-sm">
                      <svg className="w-5 h-5 text-ocean-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                {pkg.buttonStyle === 'filled' ? (
                  <Link href="/contact" className="block w-full py-3 text-center bg-ocean-600 text-white rounded-lg hover:bg-ocean-700 transition-colors font-medium">
                    {pkg.buttonText}
                  </Link>
                ) : pkg.buttonStyle === 'filled-orange' ? (
                  <Link href="/contact" className="block w-full py-3 text-center bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium">
                    {pkg.buttonText}
                  </Link>
                ) : (
                  <Link href="/contact" className="block w-full py-3 text-center border-2 border-gray-300 text-gray-700 rounded-lg hover:border-ocean-500 hover:text-ocean-600 transition-colors font-medium">
                    {pkg.buttonText}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Special Package</h2>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-8 bg-gradient-to-br from-gray-50 to-white">
                <span className="inline-block bg-ocean-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  Real Estate Special
                </span>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Homebuyer Package</h3>
                <div className="text-4xl font-bold text-ocean-600 mb-2">$799</div>
                <p className="text-gray-600 mb-6">Fast turnaround for real estate transactions</p>
                <Link href="/contact" className="inline-block w-full md:w-auto px-8 py-3 text-center bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium">
                  Book for Closing
                </Link>
              </div>
              <div className="md:w-1/2 p-8">
                <h4 className="font-semibold text-gray-900 mb-4">What&apos;s Included:</h4>
                <ul className="space-y-3">
                  {homebuyerFeatures.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700">
                      <svg className="w-5 h-5 text-ocean-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: 'What factors affect the price of a mold inspection?', a: 'The main factors are property size, number of samples needed, and complexity of the inspection. Our packages are designed to cover most residential needs.' },
              { q: 'Are lab fees included in the price?', a: 'Yes, all prices include laboratory analysis fees. There are no hidden costs or surprise charges.' },
              { q: 'Which package is right for me?', a: 'I Inspect is perfect for basic peace of mind. I Inspect Plus is our most popular for thorough testing. Healthy Choice is ideal if you have health concerns. Inspect Max provides the ultimate protection with follow-up care.' },
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
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-ocean-100 mb-8">
            Call us for a free consultation or book your inspection online today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:9493715934" className="px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-ocean-50 transition-colors font-semibold text-lg">
              Call for FREE Consultation
            </a>
            <Link href="/contact" className="px-8 py-4 bg-ocean-600 text-white border-2 border-white rounded-lg hover:bg-ocean-800 transition-colors font-semibold text-lg">
              Get Free Quote now
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
