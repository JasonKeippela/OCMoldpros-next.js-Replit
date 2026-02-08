import { Metadata } from 'next'
import Link from 'next/link'
import { serialize } from 'next-mdx-remote/serialize'
import ServiceMarkdown from '@/app/components/ServiceMarkdown'
import { hvacInspectionContent } from './content'

export const metadata: Metadata = {
  title: 'HVAC System Inspection San Clemente | Home Inspector',
  description: 'HVAC system inspection in San Clemente helps catch moisture problems, dirty components, and airflow issues before they spread through the whole house.',
}

export default async function HvacSystemInspectionPage() {
  const mdxSource = await serialize(hvacInspectionContent)

  return (
    <main className="pt-28">
      <nav className="bg-gray-100 py-3">
        <div className="max-w-6xl mx-auto px-4">
          <ol className="flex items-center gap-2 text-sm text-gray-600">
            <li><Link href="/" className="hover:text-gray-900">Home</Link></li>
            <li>/</li>
            <li><Link href="/services" className="hover:text-gray-900">Services</Link></li>
            <li>/</li>
            <li className="text-gray-900 font-medium">HVAC System Inspection</li>
          </ol>
        </div>
      </nav>

      <section className="py-16 bg-gradient-to-b from-ocean-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">HVAC System Inspection San Clemente – Because the Air You Breathe Runs Through This Thing</h1>
        </div>
      </section>

      <section>
        <ServiceMarkdown source={mdxSource} />
      </section>

      <section className="py-20 bg-ocean-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Schedule Your Inspection Today</h2>
          <p className="text-xl text-ocean-100 mb-8">
            Contact us to learn more about our services or schedule your mold inspection.
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
