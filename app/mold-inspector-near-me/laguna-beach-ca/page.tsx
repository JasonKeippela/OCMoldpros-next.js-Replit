import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mold Inspection Laguna Beach CA | Certified Mold Testing & Air Quality',
  description: 'Professional mold inspection and mold testing in Laguna Beach, CA. Independent air sampling, moisture detection, and health-focused inspections. Free 20-minute consultation.',
  // Canonical v2 – services rollout
  alternates: { canonical: 'https://ocmoldpros.com/mold-inspector-near-me/laguna-beach-ca' },
}

const neighborhoods = [
  'Downtown Laguna Beach',
  'North Laguna',
  'South Laguna',
  'Top of the World',
  'Laguna Canyon',
  'Temple Hills',
  'Arch Beach Heights',
  'Woods Cove',
  'Victoria Beach',
  'Three Arch Bay',
  'Emerald Bay',
  'Irvine Cove',
]

const nearbyBeachCities = [
  { name: 'Dana Point', slug: 'dana-point-ca' },
  { name: 'Laguna Niguel', slug: 'laguna-niguel-ca' },
  { name: 'Newport Beach', slug: 'newport-beach-ca' },
  { name: 'Costa Mesa', slug: 'costa-mesa-ca' },
  { name: 'San Clemente', slug: 'san-clemente-ca' },
]

const relatedServices = [
  { href: '/services', label: 'Mold Inspection' },
  { href: '/services', label: 'Air Quality Testing' },
  { href: '/services', label: 'Moisture Detection' },
  { href: '/services', label: 'Clearance / Post-Remediation Testing' },
]

export default function LagunaBeachPage() {
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
              <li className="text-gray-900 font-medium">Laguna Beach, CA</li>
            </ol>
          </div>
        </nav>

        <section className="py-16 bg-gradient-to-b from-ocean-50 to-white">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Mold Inspection & Mold Testing in Laguna Beach, CA
            </h1>
            <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/laguna-beach-cove.jpg" 
                alt="Laguna Beach cove with turquoise water, sandy beach, palm trees, and coastal cliffs under blue sky" 
                className="w-full h-auto"
              />
            </div>
            <p className="text-lg text-gray-600 mb-6 max-w-3xl">
              Laguna Beach is one of Southern California&apos;s most iconic coastal destinations, known for its seven miles of stunning coves, vibrant arts culture, and over 20,000 acres of preserved wilderness. Unlike many neighboring cities, Laguna Beach has maintained its identity as a true artist colony since the early 1900s, blending coastal luxury with creative expression. From the historic boardwalk and white lifeguard tower at Main Beach Park to the secluded beauty of Victoria Beach home to the famous Pirate Tower each stretch of coastline offers something unique. Areas like Treasure Island Beach below the Montage feature pristine tide pools, crystal-clear water, and protected marine ecosystems that are part of a State Marine Reserve.
            </p>
            <p className="text-lg text-gray-600 mb-6 max-w-3xl">
              Beyond the beaches, Laguna Beach is a nationally recognized arts destination. Signature events like the Pageant of the Masters bring artwork to life in unforgettable performances, while local festivals and galleries continue to shape the city&apos;s creative identity. Outdoor enthusiasts are drawn to places like Laguna Coast Wilderness Park and Top of the World, where panoramic ocean and canyon views highlight the area&apos;s natural diversity. Whether exploring tide pools, hiking coastal ridgelines, or enjoying oceanfront luxury at resorts like Montage Laguna Beach, Laguna Beach offers a rare combination of natural beauty, culture, and elevated coastal living.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">🏡 Why Laguna Beach Homes Require Advanced Mold &amp; Moisture Evaluation</h2>
            <p className="text-lg text-gray-600 mb-6 max-w-3xl">
              Laguna Beach&apos;s unique geography steep hillsides, coastal canyons, and direct ocean exposure creates a microclimate that can significantly impact indoor air quality. Homes are often built into slopes or perched along cliffs, which can introduce drainage challenges, moisture intrusion, and humidity retention that aren&apos;t always visible. Combined with the marine layer, salt air, and shaded canyon environments, these conditions can create ideal environments for hidden mold growth behind walls, under flooring, and inside HVAC systems.
            </p>
            <p className="text-lg text-gray-600 mb-6 max-w-3xl">
              Additionally, many Laguna Beach homes feature custom architecture, older construction, or high-end materials that require a more nuanced inspection approach. Even well-maintained properties can develop concealed moisture issues due to coastal exposure and limited airflow in certain structural areas. At OC Mold Pros, we tailor our inspections specifically for environments like Laguna Beach—using detailed visual assessments and professional air sampling to identify issues that standard inspections often miss. If you&apos;ve noticed musty odors, unexplained health symptoms, or simply want confidence in your home&apos;s air quality, DM me to set up a free 20-minute consultation we&apos;ll help you get clear answers quickly.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Mold Happens in Laguna Beach Homes</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Persistent marine layer and coastal fog',
                'Salt air that accelerates moisture intrusion',
                'Canyon homes with unique drainage challenges',
                'Historic and older construction lacking modern moisture barriers',
                'Beach cottages with inadequate ventilation',
                'Closed-up second homes that trap humidity inside',
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Buying or Selling a Home in Laguna Beach?</h2>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Communities We Serve in Laguna Beach</h2>
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
              Not sure if we cover your area? If you&apos;re in Laguna Beach, we can help. DM or call to schedule a free 20-minute consultation.
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Schedule Your Mold Inspection in Laguna Beach Today</h2>
            <p className="text-lg text-white font-medium mb-8">
              DM or call to schedule a free 20-minute consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href="tel:9493715934" className="px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-ocean-50 transition-colors font-semibold text-lg">
                Call for Free 20-Min Consultation
              </a>
              <Link href="/contact" className="px-8 py-4 bg-ocean-600 text-white border-2 border-white rounded-lg hover:bg-ocean-800 transition-colors font-semibold text-lg">
                Request a Consultation
              </Link>
            </div>
            <p className="text-ocean-200">Serving Laguna Beach and all of Orange County, California</p>
          </div>
        </section>
      </main>
    </>
  )
}
