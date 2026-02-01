import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our Inspection Process | OC Mold Pros - Orange County',
  description: 'Our 4-step mold inspection process: Schedule, Inspect, Analyze, Report. Same-day service available throughout Orange County. Call 949-371-5934 to start today.',
}

export default function ProcessPage() {
  const steps = [
    {
      step: '1',
      title: 'Schedule Your Inspection',
      description: 'Getting started is easy. Call us at 949-371-5934 or use our online booking form to schedule a convenient time for your inspection. We offer flexible scheduling, including same-day appointments when available.',
      details: [
        'Call or request a consultation anytime',
        'Flexible scheduling options',
        'Same-day service available',
        'Clear upfront pricing'
      ]
    },
    {
      step: '2',
      title: 'Professional On-Site Assessment',
      description: 'Our certified inspector arrives at your property equipped with professional tools including infrared thermal imaging cameras, moisture meters, and air sampling equipment. We conduct a thorough examination of all accessible areas.',
      details: [
        'Comprehensive visual inspection',
        'Infrared thermal imaging',
        'Moisture detection and mapping',
        'Air and surface sampling as needed'
      ]
    },
    {
      step: '3',
      title: 'Laboratory Analysis',
      description: 'All samples collected during your inspection are sent to an independent, certified laboratory for analysis. This ensures accurate, unbiased results that you can trust. Lab results are typically available within 3-5 business days.',
      details: [
        'Independent lab testing',
        'Certified analysis methods',
        'Species identification',
        'Spore count quantification'
      ]
    },
    {
      step: '4',
      title: 'Detailed Report & Recommendations',
      description: 'You receive a comprehensive written report that includes all findings, photographs, laboratory results, and our professional recommendations. We explain everything in clear terms and answer any questions you have.',
      details: [
        'Detailed written report',
        'Photo documentation',
        'Lab results included',
        'Clear next-step recommendations'
      ]
    }
  ]

  return (
    <main className="pt-28">
      <nav className="bg-gray-100 py-3">
        <div className="max-w-6xl mx-auto px-4">
          <ol className="flex items-center gap-2 text-sm text-gray-600">
            <li><Link href="/" className="hover:text-gray-900">Home</Link></li>
            <li>/</li>
            <li className="text-gray-900 font-medium">Process</li>
          </ol>
        </div>
      </nav>

      <section className="py-16 bg-gradient-to-b from-ocean-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our 4-Step Inspection Process</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            We have designed our mold inspection process to be thorough, transparent, and easy to understand. Here is what you can expect when you work with OC Mold Pros.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="space-y-16">
            {steps.map((step, i) => (
              <div key={i} className="grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-1">
                  <div className="w-16 h-16 bg-ocean-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    {step.step}
                  </div>
                </div>
                <div className="md:col-span-7">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h2>
                  <p className="text-lg text-gray-600">{step.description}</p>
                </div>
                <div className="md:col-span-4 bg-ocean-50 rounded-xl p-6">
                  <h3 className="font-semibold text-ocean-800 mb-3">Key Points:</h3>
                  <ul className="space-y-2">
                    {step.details.map((detail, j) => (
                      <li key={j} className="flex items-start gap-2 text-gray-700">
                        <svg className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What Happens After the Inspection?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">If No Mold Is Found</h3>
              <p className="text-gray-600">
                Great news! Your report will document the clean inspection results. We may provide recommendations for preventing future mold growth based on any moisture or ventilation issues observed.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">If Mold Is Found</h3>
              <p className="text-gray-600">
                Your report will detail the type and extent of mold found, along with recommendations for professional remediation. We can provide referrals to trusted remediation companies if needed.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Follow-Up Support</h3>
              <p className="text-gray-600">
                We are here to answer questions about your report and results. After remediation, we offer post-remediation verification testing to confirm the mold has been properly removed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-ocean-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-ocean-100 mb-8">
            Schedule your professional mold inspection today. We are here to help protect your home and family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:9493715934" className="px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-ocean-50 transition-colors font-semibold text-lg">
              Call for FREE Consultation
            </a>
            <Link href="/contact" className="px-8 py-4 bg-ocean-600 text-white border-2 border-white rounded-lg hover:bg-ocean-800 transition-colors font-semibold text-lg">
              Book FREE Quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
