import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us | OC Mold Pros - Orange County Mold Inspection Experts',
  description: 'Learn about OC Mold Pros, your trusted mold inspection and testing company serving Orange County, California. Certified inspectors, advanced technology, local expertise.',
}

export default function AboutPage() {
  return (
    <main className="pt-28">
      <nav className="bg-gray-100 py-3">
        <div className="max-w-6xl mx-auto px-4">
          <ol className="flex items-center gap-2 text-sm text-gray-600">
            <li><Link href="/" className="hover:text-ocean-600">Home</Link></li>
            <li>/</li>
            <li className="text-ocean-700 font-medium">About</li>
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
                  OC Mold Pros was founded with a simple mission: to provide Orange County homeowners and businesses with honest, thorough, and professional mold inspection services. As a locally owned and operated company, we understand the unique challenges that Southern California properties face.
                </p>
                <p className="mt-4">
                  Our founder recognized a need in the community for transparent, reliable mold testing that puts the customer first. Unlike companies that both inspect and remediate, we focus exclusively on inspection and testing, ensuring our findings are completely unbiased.
                </p>
                <p className="mt-4">
                  Today, we continue to serve families and businesses throughout Orange County, from the beaches of San Clemente to the hills of Yorba Linda. Every inspection we perform is backed by our commitment to accuracy, professionalism, and customer satisfaction.
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
                      <span className="text-ocean-600 font-bold">{i + 1}</span>
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
                  <svg className="w-8 h-8 text-ocean-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <a href="tel:9493715934" className="px-8 py-4 bg-white text-ocean-700 rounded-lg hover:bg-ocean-50 transition-colors font-semibold text-lg">
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
