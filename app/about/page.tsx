import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About OC Mold Pros | Meet Our Expert Mold Inspection Team',
  description: 'OC Mold Pros: Certified mold inspectors delivering expert inspections, detailed reports, and top customer care in Orange County.',
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
              <div className="flex items-center gap-6 mb-8">
                <Image
                  src="/jason-headshot.jpg"
                  alt="Jason, Owner of OC Mold Pros"
                  width={300}
                  height={300}
                  className="rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Jason</h3>
                  <p className="text-gray-600">Owner, OC Mold Pros</p>
                </div>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="prose prose-lg text-gray-600">
                <p>
                  OC Mold Pros was born out of personal experience — not a business idea.
                </p>
                <p className="mt-4">
                  For over a decade, my wife Joy and I unknowingly lived in a home that was making our family sick. What started as vague, unexplained health issues slowly became a long, exhausting journey of doctor visits, treatments, and unanswered questions. We did everything we were told to do. We trusted professionals. We spent money where we were advised to spend it — and then spent more.
                </p>
                <p className="mt-4">
                  Over the years, we invested tens of thousands of dollars trying to fix the problem: medical appointments, specialists, supplements, treatments, and eventually home repairs and remediation efforts. At one point, we had spent well over $100,000 between healthcare costs and attempts to repair our home — all while still not getting better.
                </p>
                <p className="mt-4 font-semibold text-gray-900">
                  The most frustrating part? No one was looking at the environment.
                </p>
                <p className="mt-4">
                  It wasn&apos;t until we began noticing something strange — feeling better when we traveled and worse when we came home — that mold finally entered the conversation. Even then, it wasn&apos;t simple. Improper remediation attempts actually made things worse, forcing us to leave our home while trying to understand what had gone wrong. The emotional toll was heavy. We were exhausted. Discouraged. Worn down financially and mentally.
                </p>
                <p className="mt-4 font-semibold text-gray-900">
                  But that struggle changed everything.
                </p>
                <p className="mt-4">
                  With my background in construction and inspection, I began digging deeper — learning how mold really behaves, how moisture issues are often missed, and how poorly planned remediation can fail families who are already suffering. We realized that if this could happen to us — diligent, proactive homeowners — it could happen to anyone.
                </p>
                <p className="mt-4 font-semibold text-gray-900">
                  OC Mold Pros exists so others don&apos;t have to learn the hard way like we did.
                </p>
                <p className="mt-4">
                  Today, our mission is simple: find the problem correctly, explain it clearly, and help people move forward with confidence — not fear.
                </p>
                <p className="mt-4">
                  We approach every inspection with the care we wish someone had shown us years ago. We don&apos;t rush. We don&apos;t gloss over details. And we don&apos;t treat mold as &quot;just another inspection item.&quot; We understand what&apos;s at stake — your health, your home, and your peace of mind.
                </p>
                <p className="mt-4 font-semibold text-gray-900">
                  This isn&apos;t just our profession. It&apos;s personal.
                </p>
                <p className="mt-4">
                  And if you&apos;re reading this because something doesn&apos;t feel right in your home or your health — you&apos;re not crazy, and you&apos;re not alone. We&apos;re here to help you get answers.
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
              { title: 'Licensed', desc: 'Fully licensed to perform mold inspections in California.' },
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
