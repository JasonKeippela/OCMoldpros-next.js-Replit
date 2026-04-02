import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mold Inspection Laguna Hills CA | Certified Mold Testing & Air Quality',
  description: 'Professional mold inspection and mold testing in Laguna Hills, CA. Independent air sampling, moisture detection, and health-focused inspections. Free 20-minute consultation.',
  // Canonical v2 – services rollout
  alternates: { canonical: 'https://ocmoldpros.com/mold-inspector-near-me/laguna-hills-ca' },
}

const neighborhoods = [
  'Laguna Hills Proper',
  'Greenfield',
  'Fairgrove',
  'Southridge',
  'Coto de Caza',
  'Mission Viejo borders',
  'Irvine connections',
  'Portola Hills',
  'Oak Terrace',
  'Central Laguna Hills',
  'East Laguna Hills',
  'West Laguna Hills',
]

const nearbyBeachCities = [
  { name: 'Laguna Beach', slug: 'laguna-beach-ca' },
  { name: 'Laguna Niguel', slug: 'laguna-niguel-ca' },
  { name: 'Dana Point', slug: 'dana-point-ca' },
  { name: 'Newport Beach', slug: 'newport-beach-ca' },
  { name: 'San Juan Capistrano', slug: 'san-juan-capistrano-ca' },
]

const relatedServices = [
  { href: '/services/mold-inspection', label: 'Mold Inspection' },
  { href: '/services', label: 'Air Quality Testing' },
  { href: '/services', label: 'Moisture Detection' },
  { href: '/pricing', label: 'Pricing' },
]

export default function LagunaHillsPage() {
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
              <li className="text-gray-900 font-medium">Laguna Hills, CA</li>
            </ol>
          </div>
        </nav>

        <section className="py-16 bg-gradient-to-b from-ocean-50 to-white">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Mold Inspection & Mold Testing in Laguna Hills, CA
            </h1>
            <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/laguna-hills-aerial.jpg" 
                alt="Laguna Hills aerial view showing residential neighborhoods, tree-lined streets, and surrounding landscape with mountains in the distance" 
                className="w-full h-auto"
              />
            </div>
            <p className="text-lg text-gray-600 mb-6 max-w-3xl">
              Laguna Hills offers a quiet, family oriented lifestyle in the heart of South Orange County, just a short drive inland from the coast. Known for its strong sense of community and highly rated schools within the Saddleback Valley Unified School District, the city is especially attractive to families and young professionals seeking a balance of comfort and convenience. Laguna Hills High School stands out as a National Blue Ribbon and California Distinguished School, reflecting the area&apos;s commitment to education and long-term community investment. With tree lined neighborhoods, well-maintained homes, and a &quot;dense suburban feel,&quot; Laguna Hills delivers a more relaxed pace compared to its coastal neighbors.
            </p>
            <p className="text-lg text-gray-600 mb-6 max-w-3xl">
              The city also offers a variety of local amenities that enhance everyday living. Fossil Reef Park provides a unique glimpse into prehistoric history with preserved fossil exhibits, while the Laguna Hills Community Center serves as a central hub for recreation, events, and community programs. Families enjoy destinations like Big Air Trampoline Park, along with seasonal events such as Concerts in the Park and Movies in the Park. With convenient access to shopping, major freeways, and nearby coastal cities like Laguna Beach, Laguna Hills is positioned as a practical yet highly livable Southern California community.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">🏡 Mold Risks in Laguna Hills Homes – HVAC, Attics, and Hidden Moisture</h2>
            <p className="text-lg text-gray-600 mb-6 max-w-3xl">
              Unlike coastal cities, Laguna Hills doesn&apos;t deal with constant marine moisture but that doesn&apos;t mean mold isn&apos;t a concern. In fact, many homes in Laguna Hills were built during large development phases in the 1960s–1980s, often featuring similar construction styles, shared design layouts, and aging infrastructure. Over time, this creates common patterns where mold issues can develop especially in attics, behind walls, and within HVAC systems.
            </p>
            <p className="text-lg text-gray-600 mb-6 max-w-3xl">
              Because homes are typically more sealed and rely heavily on air conditioning, moisture can become trapped indoors, particularly around ducting, air handlers, and poorly ventilated attic spaces. Small plumbing leaks, aging roofs, or condensation buildup can go unnoticed for long periods, allowing mold growth to develop without obvious visual signs. In some cases, homeowners experience symptoms or musty odors without ever seeing visible mold.
            </p>
            <p className="text-lg text-gray-600 mb-6 max-w-3xl">
              At OC Mold Pros, we specialize in identifying these hidden issues through detailed visual inspections and professional air sampling. We understand the construction styles and environmental conditions specific to inland Orange County communities like Laguna Hills, allowing us to pinpoint problems that standard inspections often miss. If you&apos;ve noticed unusual odors, allergy like symptoms, or just want peace of mind, DM me to set up a free 20-minute consultation—we&apos;ll help you get clear answers quickly.
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
              We inspect only, we do not perform remediation so that our findings stay unbiased.
            </p>
          </div>
        </section>

        <section className="py-16 bg-ocean-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Mold Happens in Laguna Hills Homes</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'HVAC systems trap moisture in sealed homes',
                'Aging roofs and plumbing from 1960s–1980s construction',
                'Attic condensation from temperature fluctuations',
                'Poor ventilation in bathroom and laundry areas',
                'Air conditioning runoff creating moisture pockets',
                'Aging ductwork accumulating dust and moisture',
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Buying or Selling a Home in Laguna Hills?</h2>
            <p className="text-lg text-gray-600 mb-4">
              A pre-purchase mold inspection gives buyers confidence and negotiating power. For sellers, addressing mold concerns proactively can prevent deals from falling through and demonstrate transparency to potential buyers.
            </p>
            <p className="text-lg text-gray-600">
              We provide clear, professional reports that realtors and buyers can understand with no unnecessary jargon or scare tactics.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Communities We Serve in Laguna Hills</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
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
              Not sure what to call your area? No problem. If you&apos;re in Laguna Hills, we can help you decide whether an inspection makes sense based on symptoms, odors, visible growth, past leaks, or humidity.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Nearby Communities We Serve</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Schedule Your Mold Inspection in Laguna Hills Today</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href="tel:9493715934" className="px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-ocean-50 transition-colors font-semibold text-lg">
                Call for Free 20-Min Consultation
              </a>
              <Link href="/contact" className="px-8 py-4 bg-ocean-600 text-white border-2 border-white rounded-lg hover:bg-ocean-800 transition-colors font-semibold text-lg">
                Request a Consultation
              </Link>
            </div>
            <p className="text-ocean-200">Serving Laguna Hills and all of Orange County, California</p>
          </div>
        </section>
      </main>
    </>
  )
}
