import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mold Inspection Dana Point CA | Certified Mold Testing & Air Quality',
  description: 'Professional mold inspection and mold testing in Dana Point, CA. Independent air sampling, moisture detection, and health focused inspections. Free 20-minute consultation.',
  // Canonical v2 – services rollout
  alternates: { canonical: 'https://ocmoldpros.com/mold-inspector-near-me/dana-point-ca' },
}

const neighborhoods = [
  'Monarch Beach',
  'Capistrano Beach',
  'Dana Point Harbor',
  'Lantern Village',
  'Niguel Shores',
  'Ritz Pointe',
  'Strand at Headlands',
  'Waterman Village',
  'Sea Terrace',
  'Bal Harbour',
  'Highlands',
  'The Bluffs',
]

const nearbyBeachCities = [
  { name: 'San Clemente', slug: 'san-clemente-ca' },
  { name: 'Laguna Niguel', slug: 'laguna-niguel-ca' },
  { name: 'Laguna Beach', slug: 'laguna-beach-ca' },
  { name: 'San Juan Capistrano', slug: 'san-juan-capistrano-ca' },
  { name: 'Newport Beach', slug: 'newport-beach-ca' },
]

const relatedServices = [
  { href: '/services/mold-inspection', label: 'Mold Inspection' },
  { href: '/services', label: 'Air Quality Testing' },
  { href: '/services', label: 'Moisture Detection' },
]

export default function DanaPointPage() {
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
              <li className="text-gray-900 font-medium">Dana Point, CA</li>
            </ol>
          </div>
        </nav>

        <section className="py-16 bg-gradient-to-b from-ocean-50 to-white">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Mold Inspection & Mold Testing in Dana Point, CA
            </h1>
            <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/dana-point-harbor.jpg" 
                alt="Dana Point Harbor with sailboats and yachts docked in clear blue water surrounded by coastal homes" 
                className="w-full h-auto"
              />
            </div>
            <p className="text-lg text-gray-600 mb-6 max-w-3xl">
              Dana Point stands apart as one of Southern California&apos;s most distinctive coastal cities known worldwide as the &quot;Dolphin &amp; Whale Watching Capital of the World®&quot; and recognized as the first Whale Heritage Site in the Americas. This is a place where ocean life is part of everyday living, with year-round sightings of whales and massive dolphin pods just offshore. At the center of it all is Dana Point Harbor, a vibrant hub for boating, sailing, paddleboarding, and waterfront dining, as well as access to Catalina Island. Just above the harbor, the Dana Point Headlands Conservation Area offers dramatic 150-foot coastal bluffs and scenic trails with panoramic ocean views.
            </p>
            <p className="text-lg text-gray-600 mb-6 max-w-3xl">
              Dana Point blends this natural beauty with upscale coastal living. Doheny State Beach provides consistent surf and family friendly beach access, while the Lantern District delivers boutique shopping and a relaxed &quot;California cool&quot; atmosphere. The city is also home to luxury destinations like Waldorf Astoria Monarch Beach Resort &amp; Club and The Ritz-Carlton, Laguna Niguel, where coastal views meet high end living. Whether it&apos;s a morning walk along the bluffs or a day on the water, Dana Point offers a lifestyle built around the ocean.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">🏡 Coastal Moisture Risks in Homes and Boats in Dana Point</h2>
            <p className="text-lg text-gray-600 mb-6 max-w-3xl">
              Living in Dana Point means constant exposure to marine air, elevated humidity, and salt rich moisture especially for properties near the harbor, along the bluffs, or close to the shoreline. These conditions can create ideal environments for hidden mold growth inside homes, particularly in attics, wall cavities, subflooring, and HVAC systems where airflow is limited and moisture can linger.
            </p>
            <p className="text-lg text-gray-600 mb-6 max-w-3xl">
              What many people don&apos;t realize is that these same conditions are often more extreme inside boats and yachts. Vessels docked in Dana Point Harbor are subject to continuous moisture exposure, temperature fluctuations, and confined cabin spaces making them highly susceptible to mold growth behind panels, under cushions, in bilge areas, and within ventilation systems. Musty odors inside a boat are often an early indicator of microbial growth that can impact both air quality and long term vessel condition.
            </p>
            <p className="text-lg text-gray-600 mb-6 max-w-3xl">
              At OC Mold Pros, we specialize in identifying mold and air quality issues in both coastal homes and marine environments. Our inspection process is tailored to Dana Point&apos;s unique conditions, using detailed visual assessments and professional air sampling to detect hidden problems early. Whether you live near the harbor or keep a boat docked there, DM me to set up a free 20-minute consultation we&apos;ll help you get clear answers and protect your environment.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">What Our Mold Inspection Includes</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {[
                'Visual inspection of high-risk areas',
                'Moisture mapping with professional meters',
                'Thermal imaging (infrared camera)',
                'Mold air sampling (indoor + outdoor control)',
                'Surface/swab samples when warranted',
                'HVAC/duct inspection when applicable',
                'Clear findings + recommendations',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-ocean-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-600 italic">
              We inspect only, we do not perform remediation so our findings stay unbiased.
            </p>
          </div>
        </section>

        <section className="py-16 bg-ocean-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Mold Happens in Dana Point Homes</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Marine layer and coastal fog create persistent humidity',
                'Salt air accelerates moisture intrusion around windows and doors',
                'Ocean-facing homes experience condensation on cool surfaces',
                'Closed-up vacation homes trap moisture inside',
                'Bathroom exhaust fans often vent into attics instead of outside',
                'Older construction may lack modern moisture barriers',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-lg">
                  <svg className="w-5 h-5 text-ocean-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Mold Testing & Indoor Air Quality Testing</h2>
            <p className="text-lg text-gray-600 mb-4">
              Air quality testing measures the concentration and types of mold spores present in your indoor environment compared to outdoor baseline levels. This is particularly valuable if you&apos;re experiencing unexplained allergies, respiratory symptoms, or musty odors but can&apos;t locate visible mold.
            </p>
            <p className="text-lg text-gray-600">
              Our independent lab analysis provides objective data about what&apos;s in your air helping you make informed decisions about your home and health.
            </p>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Buying or Selling a Home in Dana Point?</h2>
            <p className="text-lg text-gray-600 mb-4">
              A pre-purchase mold inspection gives buyers confidence and negotiating power. For sellers, addressing mold concerns proactively can prevent deals from falling through and demonstrate transparency to potential buyers.
            </p>
            <p className="text-lg text-gray-600">
              We provide clear, professional reports that realtors and buyers can understand no unnecessary jargon or scare tactics.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Communities We Serve in Dana Point</h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3 mb-8">
              {neighborhoods.map((neighborhood, i) => (
                <div key={i} className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-ocean-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{neighborhood}</span>
                </div>
              ))}
            </div>
            <p className="text-lg text-gray-600 mb-6">
              Not sure if we cover your area? If you&apos;re in Dana Point, we can help.
            </p>
          </div>
        </section>

        <section className="py-16 bg-ocean-50">
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

        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Nearby Beach Cities We Serve</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {nearbyBeachCities.map(city => (
                <Link 
                  key={city.slug} 
                  href={`/mold-inspector-near-me/${city.slug}`} 
                  className="p-4 bg-ocean-50 rounded-lg text-gray-900 hover:bg-ocean-100 transition-colors text-center font-medium"
                >
                  {city.name}, CA
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-ocean-700">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Schedule Your Mold Inspection in Dana Point Today</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href="tel:9493715934" className="px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-ocean-50 transition-colors font-semibold text-lg">
                Call for Free 20-Min Consultation
              </a>
              <Link href="/contact" className="px-8 py-4 bg-ocean-600 text-white border-2 border-white rounded-lg hover:bg-ocean-800 transition-colors font-semibold text-lg">
                Request a Consultation
              </Link>
            </div>
            <p className="text-ocean-200">Serving Dana Point and all of Orange County, California</p>
          </div>
        </section>
      </main>
    </>
  )
}
