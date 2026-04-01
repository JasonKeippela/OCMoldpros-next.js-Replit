import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mold Inspection Newport Beach CA | Certified Mold Testing & Air Quality',
  description: 'Professional mold inspection and mold testing in Newport Beach, CA. Independent air sampling, moisture detection, and health-focused inspections. Free 20-minute consultation.',
  // Canonical v2 – services rollout
  alternates: { canonical: 'https://ocmoldpros.com/mold-inspector-near-me/newport-beach-ca' },
}

const neighborhoods = [
  'Balboa Peninsula',
  'Balboa Island',
  'Corona del Mar',
  'Newport Coast',
  'Lido Isle',
  'Harbor View',
  'Newport Heights',
  'Eastbluff',
  'Big Canyon',
  'Fashion Island area',
  'Dover Shores',
  'Port Streets',
]

const nearbyBeachCities = [
  { name: 'Costa Mesa', slug: 'costa-mesa-ca' },
  { name: 'Huntington Beach', slug: 'huntington-beach-ca' },
  { name: 'Laguna Beach', slug: 'laguna-beach-ca' },
  { name: 'Laguna Niguel', slug: 'laguna-niguel-ca' },
  { name: 'Dana Point', slug: 'dana-point-ca' },
]

const relatedServices = [
  { href: '/services', label: 'Mold Inspection' },
  { href: '/services', label: 'Air Quality Testing' },
  { href: '/services', label: 'Moisture Detection' },
  { href: '/services', label: 'Clearance / Post-Remediation Testing' },
]

export default function NewportBeachPage() {
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
              <li className="text-gray-900 font-medium">Newport Beach, CA</li>
            </ol>
          </div>
        </nav>

        <section className="py-16 bg-gradient-to-b from-ocean-50 to-white">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Mold Inspection & Mold Testing in Newport Beach, CA
            </h1>
            <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/newport-beach-sunset.jpg" 
                alt="Newport Beach sunset view with palm trees lining a residential street overlooking the harbor and ocean" 
                className="w-full h-auto"
              />
            </div>
            <p className="text-lg text-gray-600 mb-6 max-w-3xl">
              Newport Beach is one of Southern California&apos;s most prestigious coastal cities, known for its 10 miles of pristine shoreline, world-class harbor, and a unique blend of luxury living and classic surf culture. At the heart of the city is Newport Harbor—one of the largest recreational harbors in the world, home to over 9,000 vessels and a lifestyle centered around boating, yachting, and waterfront living. The iconic Balboa Peninsula stretches for miles along the coast, featuring the historic Newport and Balboa Piers, a lively boardwalk, and the nostalgic charm of the Balboa Fun Zone. Just across the water, Balboa Island offers a more relaxed coastal experience, known for its walkable streets, boutique shops, and famous frozen bananas.
            </p>
            <p className="text-lg text-gray-600 mb-6 max-w-3xl">
              Newport Beach also delivers some of the most recognizable coastal experiences in California. The powerful waves at The Wedge draw experienced surfers and spectators alike, while Corona del Mar State Beach offers dramatic cliffs, tide pools, and scenic ocean views. For those seeking a mix of nature and recreation, the Upper Newport Bay Nature Preserve—also known as the Back Bay—provides miles of trails through one of Southern California&apos;s last remaining coastal estuaries. Whether cruising the harbor in a Duffy boat, shopping at Fashion Island, or enjoying the coastline, Newport Beach defines &quot;seaside sophistication.&quot;
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">🏡 Moisture &amp; Mold Risks in Newport Beach Homes and Marine Environments</h2>
            <p className="text-lg text-gray-600 mb-6 max-w-3xl">
              With its expansive harbor, dense waterfront properties, and constant marine exposure, Newport Beach presents a unique set of conditions that can impact indoor air quality. Homes located near Newport Harbor, along the peninsula, or in areas like Corona del Mar are consistently exposed to salt air, humidity, and coastal temperature swings. These factors can slow drying times and contribute to hidden moisture buildup in attics, wall cavities, subflooring, and HVAC systems—especially in larger or tightly sealed homes.
            </p>
            <p className="text-lg text-gray-600 mb-6 max-w-3xl">
              Additionally—and this is often overlooked—boats and yachts in Newport Harbor are highly susceptible to mold growth. Enclosed cabins, bilge areas, upholstery, and ventilation systems can trap moisture and create ideal conditions for microbial growth, especially when vessels are not regularly ventilated or are exposed to fluctuating temperatures. Musty odors inside a boat are often a key indicator of underlying mold issues that can affect both air quality and the longevity of materials.
            </p>
            <p className="text-lg text-gray-600 mb-6 max-w-3xl">
              At OC Mold Pros, we specialize in identifying mold and air quality concerns in both coastal homes and marine environments. Our inspections are tailored to Newport Beach&apos;s unique conditions, combining detailed visual assessments with professional air sampling to uncover hidden issues early. Whether you live on the water, near the coast, or keep a boat in the harbor, DM me to set up a free 20-minute consultation—we&apos;ll help you get clear answers and protect your environment.
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
              We inspect only—we do not perform remediation—so our findings stay unbiased.
            </p>
          </div>
        </section>

        <section className="py-16 bg-ocean-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Mold Happens in Newport Beach Homes</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Harbor and ocean proximity creates elevated humidity',
                'Tight building envelopes that trap moisture inside',
                'Complex HVAC systems that can develop condensation issues',
                'Vacation homes left closed for extended periods',
                'Salt air accelerates moisture intrusion around windows',
                'High-end finishes that can mask water damage',
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
              Our independent lab analysis provides objective data about what&apos;s in your air—helping you make informed decisions about your home and health.
            </p>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Buying or Selling a Home in Newport Beach?</h2>
            <p className="text-lg text-gray-600 mb-4">
              A pre-purchase mold inspection gives buyers confidence and negotiating power. For sellers, addressing mold concerns proactively can prevent deals from falling through and demonstrate transparency to potential buyers.
            </p>
            <p className="text-lg text-gray-600">
              We provide clear, professional reports that realtors and buyers can understand—no unnecessary jargon or scare tactics.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Communities We Serve in Newport Beach</h2>
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
              Not sure if we cover your area? If you&apos;re in Newport Beach, we can help. DM or call to schedule a free 20-minute consultation.
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Schedule Your Mold Inspection in Newport Beach Today</h2>
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
            <p className="text-ocean-200">Serving Newport Beach and all of Orange County, California</p>
          </div>
        </section>
      </main>
    </>
  )
}
