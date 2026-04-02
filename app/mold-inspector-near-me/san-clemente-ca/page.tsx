import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mold Inspection San Clemente CA | Certified Mold Testing & Air Quality',
  description: 'Professional mold inspection and mold testing in San Clemente, CA. Independent air sampling, moisture detection, and health-focused inspections. Free 20-minute consultation.',
  // Canonical v2 – services rollout
  alternates: { canonical: 'https://ocmoldpros.com/mold-inspector-near-me/san-clemente-ca' },
}

const neighborhoods = [
  'Talega',
  'Forster Ranch (including The Reserves)',
  'Marblehead',
  'Rancho San Clemente',
  'Coast District',
  'North San Clemente (Shorecliffs / Sea Pointe Estates)',
  'Southwest San Clemente (T-Street / beach areas)',
  'Southeast San Clemente',
  'Mariners Point',
  'Sea Ridge Estates',
  'Presidential Heights',
  'Cyprus Cove',
  'Cyprus Shore',
  'La Ladera',
  'The Breakers',
  'Cotton Point',
]

const nearbyBeachCities = [
  { name: 'Dana Point', slug: 'dana-point-ca' },
  { name: 'Laguna Niguel', slug: 'laguna-niguel-ca' },
  { name: 'Laguna Beach', slug: 'laguna-beach-ca' },
  { name: 'San Juan Capistrano', slug: 'san-juan-capistrano-ca' },
  { name: 'Newport Beach', slug: 'newport-beach-ca' },
]

const relatedServices = [
  { href: '/services/mold-inspection', label: 'Mold Inspection' },
  { href: '/services', label: 'Indoor Air Testing' },
  { href: '/services', label: 'Moisture Detection' },
  { href: '/services', label: 'Clearance / Post-Remediation Testing' },
]

export default function SanClementePage() {
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
              <li className="text-gray-900 font-medium">San Clemente, CA</li>
            </ol>
          </div>
        </nav>

        <section className="py-16 bg-gradient-to-b from-ocean-50 to-white">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Mold Inspection & Mold Testing in San Clemente, CA
            </h1>
            <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/pier-dana-point.jpg" 
                alt="San Clemente Pier at sunset with golden hour lighting and ocean views" 
                className="w-full h-auto"
              />
            </div>
            <p className="text-lg text-gray-600 mb-6 max-w-3xl">
              San Clemente is one of the most distinctive coastal cities in Orange County, known as the &quot;Spanish Village by the Sea&quot; for its beautifully preserved Spanish Colonial Revival architecture white stucco homes, red tile roofs, and a cohesive design standard that dates back to its founding in 1928. With over 300 days of sunshine each year, a relaxed small-town atmosphere, and more than 200 registered historic structures, the city blends history, lifestyle, and coastal beauty in a way few places can. <a href="https://www.sanclementeguide.com/san-clemente-pier" target="_blank" rel="noopener noreferrer" className="text-ocean-600 hover:text-ocean-700 underline font-medium">The iconic San Clemente Pier stretching over 1,300 feet into the Pacific</a> serves as a central hub for fishing, dining, and ocean views, with locals enjoying meals at <a href="https://www.thefishermansrestaurantsanclemente.com/" target="_blank" rel="noopener noreferrer" className="text-ocean-600 hover:text-ocean-700 underline font-medium">Fisherman&apos;s Restaurant and Bar</a>. Just above it, Casa Romantica Cultural Center and Gardens the former home of founder Ole Hanson offers panoramic coastal views and a direct connection to the city&apos;s origins.
            </p>
            <p className="text-lg text-gray-600 mb-6 max-w-3xl">
              What truly sets San Clemente apart, however, is its surf culture. Just south of town, <a href="https://www.sanclementeguide.com/surfing-in-san-clemente-ca" target="_blank" rel="noopener noreferrer" className="text-ocean-600 hover:text-ocean-700 underline font-medium">Trestles is one of the most respected surf breaks in the world</a> and <a href="https://la28.org/en/games-plan/olympics/surfing.html" target="_blank" rel="noopener noreferrer" className="text-ocean-600 hover:text-ocean-700 underline font-medium">will host Olympic surfing</a> during the 2028 Summer Olympics which is a massive recognition of the area&apos;s wave quality and consistency. Combined with iconic spots like T-Street and San Onofre, plus the scenic 2.3-mile beach trail connecting the coastline, San Clemente offers a lifestyle centered around the ocean, outdoor activity, and community pride.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">🏡 Coastal Living in San Clemente Comes with Hidden Moisture & Mold Risks</h2>
            <p className="text-lg text-gray-600 mb-6 max-w-3xl">
              That same coastal environment that makes San Clemente so desirable also creates conditions that require a more specialized approach to home health. The marine layer, salt air, and consistent humidity especially in neighborhoods near the pier, Trestles, and North Beach, can lead to elevated moisture levels inside homes. Over time, this can contribute to hidden mold growth in attics, crawlspaces, behind walls, and within HVAC systems, particularly in older homes or properties with limited ventilation.
            </p>
            <p className="text-lg text-gray-600 mb-6 max-w-3xl">
              At OC Mold Pros, we understand the unique environmental factors tied specifically to San Clemente&apos;s coastal climate and historic construction styles. Homes with stucco exteriors, older roofing systems, or aging plumbing can be especially vulnerable if moisture intrusion goes undetected. Our inspections are designed to go beyond the surface using detailed visual assessments and air sampling to identify issues that are often missed. If you&apos;ve noticed musty odors, unexplained health symptoms, or simply want confidence in your indoor air quality, Call me to set up a free 20-minute consultation we&apos;ll help you get clear answers quickly.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Mold Happens in San Clemente Homes</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Marine layer and coastal fog create persistent humidity',
                'Salt air accelerates moisture intrusion around windows and doors',
                'Hillside homes can have drainage and grading issues',
                'Bathroom exhaust fans often vent into attics instead of outside',
                'Closed-up vacation homes trap moisture inside',
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Buying or Selling a Home in San Clemente?</h2>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Communities We Serve in San Clemente</h2>
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
              Not sure what to call your area? No problem. If you&apos;re in San Clemente, we can help you decide whether an inspection makes sense based on symptoms, odors, visible growth, past leaks, or humidity especially in coastal and hillside homes where moisture can hide behind walls or under flooring.
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Schedule Your Mold Inspection in San Clemente Today</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href="tel:9493715934" className="px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-ocean-50 transition-colors font-semibold text-lg">
                Call for Free 20-Min Consultation
              </a>
              <Link href="/contact" className="px-8 py-4 bg-ocean-600 text-white border-2 border-white rounded-lg hover:bg-ocean-800 transition-colors font-semibold text-lg">
                Request a Consultation
              </Link>
            </div>
            <p className="text-ocean-200">Serving San Clemente and all of Orange County, California</p>
          </div>
        </section>
      </main>
    </>
  )
}
