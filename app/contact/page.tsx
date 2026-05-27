import { Metadata } from 'next'
import Link from 'next/link'
import ContactForm from '../components/ContactForm'
import JsonLd from '../components/JsonLd'
import { getLocalBusinessSchema, getBreadcrumbSchema } from '@/app/lib/schema'

export const metadata: Metadata = {
  title: 'Contact Us | Schedule Mold Inspection | OC Mold Pros',
  description: 'Schedule your Orange County mold inspection today. Same-day appointments available. Call 949-371-5934 for a free consultation. Serving all of OC since 2009.',
  // Canonical v2 – services rollout
  alternates: { canonical: 'https://ocmoldpros.com/contact' },
}

export default function ContactPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: 'https://ocmoldpros.com' },
    { name: 'Contact', url: 'https://ocmoldpros.com/contact' },
  ])
  return (
    <main className="pt-28">
      <JsonLd data={getLocalBusinessSchema()} />
      <JsonLd data={breadcrumbSchema} />
      <nav className="bg-gray-100 py-3">
        <div className="max-w-6xl mx-auto px-4">
          <ol className="flex items-center gap-2 text-sm text-gray-600">
            <li><Link href="/" className="hover:text-gray-900">Home</Link></li>
            <li>/</li>
            <li className="text-gray-900 font-medium">Contact</li>
          </ol>
        </div>
      </nav>

      <section className="py-16 bg-gradient-to-b from-ocean-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Ready to schedule your mold inspection? Have questions? We are here to help. Reach out using any of the methods below.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-ocean-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <a href="tel:9493715934" className="text-gray-900 text-lg hover:text-gray-900">949-371-5934</a>
                    <p className="text-gray-500 text-sm">Mon-Fri: 8am - 5pm, Sat: 8am - 12pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-ocean-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <a href="mailto:info@ocmoldpros.com" className="text-gray-900 text-lg hover:text-gray-900">info@ocmoldpros.com</a>
                    <p className="text-gray-500 text-sm">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-ocean-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Service Area</h3>
                    <p className="text-gray-700">All of Orange County, California</p>
                    <Link href="/mold-inspector-near-me" className="text-gray-900 text-sm hover:text-gray-900">View all service areas →</Link>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-6 bg-ocean-50 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-2">Same-Day Service Available</h3>
                <p className="text-gray-600">
                  Need an urgent inspection? Call us now to check availability for same-day appointments.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
