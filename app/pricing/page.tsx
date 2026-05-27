import { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '../components/JsonLd'
import { getBreadcrumbSchema } from '@/app/lib/schema'

export const metadata: Metadata = {
  title: 'Packages & Pricing | Mold Inspection Costs | OC Mold Pros - Orange County',
  description: 'Transparent mold inspection pricing in Orange County. Choose from our inspection packages starting at $399. No hidden fees. Call 949-371-5934 for a free quote.',
  // Canonical v2 – services rollout
  alternates: { canonical: 'https://ocmoldpros.com/pricing' },
}

export default function PricingPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: 'https://ocmoldpros.com' },
    { name: 'Pricing', url: 'https://ocmoldpros.com/pricing' },
  ])
  const packages = [
    {
      name: 'Clearance Inspection',
      price: 'From $399',
      description: 'For homeowners who have completed remediation and need official clearance',
      features: [
        'Up to 4 areas of concern/containment',
        'Additional areas $75 per area',
        '$70 per sample (air, swab, or tape lift)',
        'Baseline outdoor sample required',
        'Clearance certification upon passing'
      ],
      testimonial: 'We had remediation done and needed clearance fast for our insurance claim. Jason had the cert to us within 24 hours. — Mike T., San Clemente',
      buttonText: 'Get Quote',
      buttonStyle: 'outline',
      popular: false
    },
    {
      name: 'I Inspect',
      price: '$899',
      description: 'For homeowners who want to know exactly what is in their air',
      features: [
        '4-hour comprehensive inspection',
        'Moisture mapping and air sampling for 4 areas',
        'Thermal imaging inspection',
        'Detailed report with findings, photos, and videos',
        'Custom remediation plan and recommendations'
      ],
      testimonial: 'I was worried about mold after a leak. Jason was thorough, explained everything clearly, and I had my report the next morning. — Sarah K., Laguna Niguel',
      buttonText: 'Book Now',
      buttonStyle: 'outline',
      popular: false
    },
    {
      name: 'I Inspect Plus',
      price: '$1,299',
      description: 'For families who want thorough answers, not just a basic check',
      features: [
        'Everything in I Inspect',
        'Moisture mapping and air sampling for 5 areas',
        'ERMI testing for mold DNA analysis',
        'HERTSMI-2 scoring',
        'Lab-certified results and full interpretation'
      ],
      testimonial: 'After months of unexplained symptoms we finally got answers with the ERMI test. Worth every penny. — Lisa M., Costa Mesa',
      buttonText: 'Book Now',
      buttonStyle: 'filled',
      popular: true
    },
    {
      name: 'Healthy Choice',
      price: '$1,997',
      description: 'For mold illness sufferers who need the full picture to heal',
      features: [
        'Everything in I Inspect Plus',
        'Mycotoxin testing',
        'VOC (Volatile Organic Compound) testing',
        'Formaldehyde testing',
        'Detailed remediation action plan'
      ],
      testimonial: 'My functional medicine doctor recommended comprehensive testing. This package gave her exactly what she needed to move forward with my treatment. — Angela R., Irvine',
      buttonText: 'Get Estimate',
      buttonStyle: 'outline',
      popular: false
    }
  ]

  const homebuyerPackage = {
    description: 'For buyers who need answers before closing',
    testimonial: 'We were days from closing and needed answers fast. Jason fit us in same-day and the report saved us from a very expensive mistake. — David and Karen L., Dana Point',
    features: [
      '2-hour comprehensive inspection',
      '2 outdoor control samples',
      '3 indoor air samples',
      'Same-day summary report',
      'Full detailed report within 48 hours',
      'Perfect for closing timelines'
    ]
  }

  return (
    <main className="pt-28">
      <JsonLd data={breadcrumbSchema} />
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Packages & Pricing</h1>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-ocean-700 mb-6">
            <span>IAC2 Certified Inspector</span>
            <span className="text-gray-300">|</span>
            <span>Veteran-Owned</span>
            <span className="text-gray-300">|</span>
            <span>No Remediation Conflict of Interest</span>
            <span className="text-gray-300">|</span>
            <span>24-Hour Reports</span>
          </div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Mold inspection in Orange County typically ranges from $300–$1,500 depending on property size and scope. Our packages are all-inclusive — lab fees, thermal imaging, and written reports are included. No surprise charges.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, i) => (
              <div key={i} className={`bg-white border-2 rounded-xl p-6 relative flex flex-col ${pkg.popular ? 'border-ocean-500' : 'border-gray-200 hover:border-ocean-300'} transition-colors`}>
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
                <ul className="space-y-3 mb-6 flex-1">
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
                <p className="mt-4 text-xs text-gray-400 italic">&ldquo;{pkg.testimonial}&rdquo;</p>
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
                <p className="text-gray-600 mb-6">{homebuyerPackage.description}</p>
                <Link href="/contact" className="inline-block w-full md:w-auto px-8 py-3 text-center bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium">
                  Book for Closing
                </Link>
                <p className="mt-6 text-xs text-gray-400 italic">&ldquo;{homebuyerPackage.testimonial}&rdquo;</p>
              </div>
              <div className="md:w-1/2 p-8">
                <h4 className="font-semibold text-gray-900 mb-4">What&apos;s Included:</h4>
                <ul className="space-y-3">
                  {homebuyerPackage.features.map((feature, i) => (
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
              { q: 'Is mold inspection worth it?', a: 'If you are buying a home, experiencing unexplained health symptoms, or recovering from water damage — yes, absolutely. A mold inspection gives you documented evidence of what is in your air, which protects your health, your investment, and your negotiating position. The cost of an inspection is a fraction of what remediation costs if a problem goes undetected.' },
              { q: 'How is this different from a regular home inspection?', a: 'General home inspectors look for visible issues but are not trained or equipped for mold-specific testing. We use thermal imaging, calibrated air sampling equipment, and IAC2-certified methodology to find what a standard inspection misses — including hidden moisture behind walls and mold species that are not visible to the naked eye.' },
              { q: 'Do you also do remediation?', a: 'No — and that is intentional. We inspect and test only. That means our findings are 100% unbiased. We have no financial incentive to find or not find mold. If remediation is needed, we recommend trusted contractors and can provide a clearance inspection after the work is complete.' },
              { q: 'Are lab fees included?', a: 'Yes. All package prices include laboratory analysis. No hidden fees, no surprise charges at the end.' },
              { q: 'Will my insurance cover a mold inspection?', a: 'Some homeowner policies cover mold testing when it is related to a covered water damage event. We provide detailed documentation that supports insurance claims. We recommend checking your policy or calling your agent — we are happy to provide whatever paperwork they need.' },
              { q: 'How long does an inspection take?', a: 'The I Inspect and I Inspect Plus packages are 4-hour inspections. The Homebuyer Package is 2 hours. The Clearance Inspection varies by the number of areas being tested. We schedule same-day appointments when available.' },
              { q: 'Which package is right for me?', a: 'Buying a home: Homebuyer Package. Unexplained smell or visible discoloration: I Inspect. Health symptoms present or previous inspection inconclusive: I Inspect Plus. Chronic illness or doctor-recommended: Healthy Choice. Remediation already completed: Clearance Inspection.' }
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
          <h2 className="text-3xl font-bold text-white mb-4">Not sure which package is right for you?</h2>
          <p className="text-xl text-ocean-100 mb-8">
            Start with a free 20-minute phone consultation. We will ask the right questions and recommend the package that fits your situation — no pressure, no upsell.
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
