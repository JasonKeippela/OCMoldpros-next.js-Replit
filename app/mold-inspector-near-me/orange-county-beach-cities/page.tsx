import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mold Inspection Orange County Beach Cities | OC Mold Pros',
  description: 'Mold inspection and mold testing across Orange County beach cities and nearby coastal communities. Independent air sampling, moisture detection, and health-focused inspections. Free 20-minute consultation.',
  // Canonical v2 – services rollout
  alternates: { canonical: 'https://ocmoldpros.com/mold-inspector-near-me/orange-county-beach-cities' },
}

const beachCities = [
  { 
    name: 'San Clemente', 
    slug: 'san-clemente-ca',
    description: 'Coastal humidity and hillside homes create hidden moisture challenges in this "Spanish Village by the Sea."'
  },
  { 
    name: 'Dana Point', 
    slug: 'dana-point-ca',
    description: 'Harbor proximity and marine layer bring elevated humidity to homes near the bluffs and waterfront.'
  },
  { 
    name: 'Laguna Niguel', 
    slug: 'laguna-niguel-ca',
    description: 'Hillside construction and 1980s-90s homes may have aging plumbing and ventilation issues.'
  },
  { 
    name: 'Laguna Beach', 
    slug: 'laguna-beach-ca',
    description: 'Historic beach cottages and canyon homes face unique moisture challenges from coastal fog and salt air.'
  },
  { 
    name: 'Newport Beach', 
    slug: 'newport-beach-ca',
    description: 'Luxury homes with complex HVAC systems and vacation properties that sit closed require careful inspection.'
  },
  { 
    name: 'Costa Mesa', 
    slug: 'costa-mesa-ca',
    description: 'Mix of mid-century homes and renovated properties with coastal influence and varied construction.'
  },
  { 
    name: 'Huntington Beach', 
    slug: 'huntington-beach-ca',
    description: 'Surf City\'s older tract homes and beach proximity create conditions for hidden moisture issues.'
  },
  { 
    name: 'Seal Beach', 
    slug: 'seal-beach-ca',
    description: 'Charming beach cottages and Leisure World residences face direct ocean exposure and humidity.'
  },
  { 
    name: 'San Juan Capistrano', 
    slug: 'san-juan-capistrano-ca',
    description: 'Historic properties and hillside homes with crawlspaces and drainage considerations.'
  },
]

const inspectionIncludes = [
  'Visual inspection of high-risk areas',
  'Moisture mapping with professional meters',
  'Thermal imaging (infrared camera)',
  'Mold air sampling (indoor + outdoor control)',
  'Surface/swab samples when warranted',
  'HVAC/duct inspection when applicable',
  'Clear findings + recommendations',
]

const whenToConsider = [
  'Musty or earthy odor in certain rooms',
  'Visible mold growth on walls, ceilings, or surfaces',
  'After a water leak, flood, or plumbing issue',
  'Recurring condensation on windows or walls',
  'Health symptoms that improve when you leave home',
  'Recent remodel or construction work',
  'Buying or selling a home',
  'Humidity issues or poor ventilation',
]

const relatedServices = [
  { href: '/services/mold-inspection', label: 'Mold Inspection' },
  { href: '/services', label: 'Air Quality Testing' },
  { href: '/services', label: 'Moisture Detection' },
  { href: '/services', label: 'Clearance / Post-Remediation Testing' },
]

export default function BeachCitiesHubPage() {
  return (
    <>
      <main className="pt-28">
        <nav className="bg-gray-100 py-3">
          <div className="max-w-6xl mx-auto px-4">
            <ol className="flex items-center gap-2 text-sm text-gray-600">
              <li><Link href="/" className="hover:text-gray-900">Home</Link></li>
              <li>/</li>
              <li><Link href="/mold-inspector-near-me" className="hover:text-gray-900">Mold Inspector Near Me</Link></li>
              <li>/</li>
              <li className="text-gray-900 font-medium">Beach Cities</li>
            </ol>
          </div>
        </nav>

        <section className="py-16 bg-gradient-to-b from-ocean-50 to-white">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Mold Inspection & Mold Testing in Orange County Beach Cities
            </h1>
            <p className="text-xl text-gray-600 mb-6 max-w-4xl">
              Living near the coast in Orange County offers incredible lifestyle benefits—but it also means your home is exposed to persistent marine layer humidity, salt air, and coastal fog that can create hidden moisture problems. From bathrooms and kitchens to HVAC systems, attics, and crawlspaces, moisture can accumulate in unexpected places. Past leaks, poor ventilation, and closed-up vacation homes add additional risk factors. Our certified mold inspectors provide independent, unbiased assessments—we don&apos;t perform remediation, so our findings focus purely on helping you understand what&apos;s happening in your home and what steps (if any) make sense.
            </p>
            <p className="text-lg text-ocean-700 font-medium mb-8">
              DM or call to schedule a free 20-minute consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:9493715934" className="px-8 py-4 bg-ocean-600 text-white rounded-lg hover:bg-ocean-700 transition-colors font-semibold text-lg text-center">
                Call for Free 20-Min Consultation
              </a>
              <Link href="/contact" className="px-8 py-4 border-2 border-ocean-600 text-gray-900 rounded-lg hover:bg-ocean-50 transition-colors font-semibold text-lg text-center">
                Request a Consultation
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Beach City Service Areas</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {beachCities.map(city => (
                <div key={city.slug} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-ocean-300 transition-all">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{city.name}</h3>
                  <p className="text-gray-600 mb-4">{city.description}</p>
                  <Link 
                    href={`/mold-inspector-near-me/${city.slug}`}
                    className="inline-flex items-center gap-2 text-ocean-600 hover:text-ocean-800 font-semibold"
                  >
                    Mold Inspection in {city.name}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-ocean-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">What Our Mold Inspection Includes</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {inspectionIncludes.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-ocean-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-600 italic">
              We inspect only—we do not perform remediation—so our findings stay unbiased.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">When to Consider a Mold Inspection</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {whenToConsider.map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <svg className="w-5 h-5 text-ocean-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Related Services</h2>
            <div className="flex flex-wrap gap-3">
              {relatedServices.map((service, i) => (
                <Link 
                  key={i} 
                  href={service.href}
                  className="px-5 py-3 bg-white border border-ocean-200 rounded-lg text-ocean-700 hover:bg-ocean-100 hover:border-ocean-400 transition-colors font-medium"
                >
                  {service.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-ocean-700">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Not sure what city page you need? Let&apos;s talk.</h2>
            <p className="text-xl text-ocean-100 mb-8">
              DM or call to schedule a free 20-minute consultation and we&apos;ll help you decide what testing (if any) makes sense for your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href="tel:9493715934" className="px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-ocean-50 transition-colors font-semibold text-lg">
                Call for Free 20-Min Consultation
              </a>
              <Link href="/contact" className="px-8 py-4 bg-ocean-600 text-white border-2 border-white rounded-lg hover:bg-ocean-800 transition-colors font-semibold text-lg">
                Request a Consultation
              </Link>
            </div>
            <p className="text-ocean-200">Serving all Orange County beach cities and coastal communities</p>
          </div>
        </section>
      </main>
    </>
  )
}
