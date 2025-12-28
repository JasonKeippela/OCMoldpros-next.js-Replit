import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us | OC Mold Pros - Orange County Mold Inspection Experts',
  description: 'OC Mold Pros: Orange County\'s trusted mold inspection experts with 15+ years experience. Licensed, certified, and committed to protecting your home and family.',
}

export default function AboutPage() {
  return (
    <main className="pt-28">
      <nav className="bg-gray-100 py-3">
        <div className="max-w-6xl mx-auto px-4">
          <ol className="flex items-center gap-2 text-sm text-gray-600">
            <li><Link href="/" className="hover:text-gray-900">Home</Link></li>
            <li>/</li>
            <li className="text-gray-900 font-medium">About</li>
          </ol>
        </div>
      </nav>

      <section className="py-16 bg-gradient-to-b from-ocean-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About OC Mold Pros</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Your trusted partner for professional mold inspection and testing services throughout Orange County, California.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="prose prose-lg text-gray-600">
                <p>
                  Welcome to OC Mold Pros, your trusted partner in mold inspection and air quality services across Southern California and Orange County. Our mission is simple: to ensure that every home and business we inspect is a safe and healthy environment, free from the hidden dangers of mold.
                </p>
                <p className="mt-4">
                  At OC Mold Pros, our team of professional home inspectors is not just experienced—they&apos;re fully certified and rigorously trained to the highest industry standards. We believe in providing our clients with detailed, easy-to-read reports that offer clear insights into the condition of their property. No confusing jargon—just straightforward information that helps you make informed decisions.
                </p>
                <p className="mt-4">
                  Customer service is at the heart of everything we do. We know that dealing with potential mold issues can be stressful, so we&apos;re committed to offering a friendly, supportive experience from start to finish. Whether you&apos;re a homeowner, realtor, or property manager, you can count on us to be transparent, reliable, and attentive to your needs.
                </p>
                <p className="mt-4">
                  In addition, we pride ourselves on staying at the forefront of mold detection technology and best practices. We use state-of-the-art equipment and methods to ensure the most accurate results, and we continuously update our knowledge to serve you better.
                </p>
                <p className="mt-4">
                  At OC Mold Pros, we believe that a healthy home is a happy home. We&apos;re here to help you breathe easier and live better—one inspection at a time.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Values</h2>
              <div className="space-y-6">
                {[
                  { title: 'Integrity', desc: 'We provide honest assessments without upselling unnecessary services.' },
                  { title: 'Expertise', desc: 'Our inspectors are certified and continuously trained on the latest techniques.' },
                  { title: 'Transparency', desc: 'We explain our findings in clear, understandable terms with detailed reports.' },
                  { title: 'Local Focus', desc: 'We know Orange County and the specific mold challenges in our community.' }
                ].map((value, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 bg-ocean-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-gray-900 font-bold">{i + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{value.title}</h3>
                      <p className="text-gray-600">{value.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Certifications & Qualifications</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Licensed & Insured', desc: 'Fully licensed to perform mold inspections in California with comprehensive liability insurance.' },
              { title: 'Certified Inspectors', desc: 'Our team holds industry-recognized certifications in mold inspection and indoor air quality testing.' },
              { title: 'Continuing Education', desc: 'We stay current with the latest inspection techniques, equipment, and industry standards.' }
            ].map((cert, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="w-16 h-16 bg-ocean-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{cert.title}</h3>
                <p className="text-gray-600">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-ocean-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Work Together?</h2>
          <p className="text-xl text-ocean-100 mb-8">
            Contact us today to schedule your professional mold inspection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:9493715934" className="px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-ocean-50 transition-colors font-semibold text-lg">
              Call 949-371-5934
            </a>
            <Link href="/contact" className="px-8 py-4 bg-ocean-600 text-white border-2 border-white rounded-lg hover:bg-ocean-800 transition-colors font-semibold text-lg">
              Book Inspection
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
