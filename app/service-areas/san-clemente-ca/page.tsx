import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mold Inspection San Clemente CA | Certified Mold Testing & Air Quality',
  description: 'Professional mold inspection and mold testing in San Clemente, CA. Independent air sampling, moisture detection, and health-focused inspections. Free 20-minute consultation.',
}

const sanClementeNeighborhoods = [
  'Talega',
  'Forster Ranch (including The Reserves)',
  'Marblehead',
  'Rancho San Clemente',
  'Coast District',
  'North San Clemente (including Shorecliffs / Sea Pointe Estates)',
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

const relatedServices = [
  { href: '/services', label: 'Mold Inspection' },
  { href: '/services', label: 'Air Quality Testing' },
  { href: '/services', label: 'Moisture Detection' },
  { href: '/services', label: 'Clearance / Post-Remediation Testing' },
]

const nearbyBeachCities = [
  { name: 'Dana Point', slug: 'dana-point-ca' },
  { name: 'Laguna Niguel', slug: 'laguna-niguel-ca' },
  { name: 'Laguna Beach', slug: 'laguna-beach-ca' },
  { name: 'Newport Beach', slug: 'newport-beach-ca' },
  { name: 'Costa Mesa', slug: 'costa-mesa-ca' },
  { name: 'Huntington Beach', slug: 'huntington-beach-ca' },
  { name: 'Seal Beach', slug: 'seal-beach-ca' },
]

const landmarks = [
  'San Clemente Pier',
  'Casa Romantica Cultural Center',
  'San Clemente State Beach',
  'Trestles Beach',
  'Downtown San Clemente',
]

export default function SanClementePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "OC Mold Pros",
    "description": "Professional mold inspection and testing services in San Clemente, CA",
    "url": "https://ocmoldpros.com/service-areas/san-clemente-ca",
    "telephone": "+1-949-371-5934",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "San Clemente",
      "addressRegion": "CA",
      "addressCountry": "US"
    },
    "areaServed": {
      "@type": "City",
      "name": "San Clemente"
    },
    "serviceType": ["Mold Inspection", "Mold Testing", "Air Quality Testing", "Moisture Detection"],
    "priceRange": "$$",
    "openingHours": ["Mo-Fr 08:00-17:00", "Sa 08:00-12:00"]
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <main className="pt-28">
        <nav className="bg-gray-100 py-3">
          <div className="max-w-6xl mx-auto px-4">
            <ol className="flex items-center gap-2 text-sm text-gray-600">
              <li><Link href="/" className="hover:text-gray-900">Home</Link></li>
              <li>/</li>
              <li><Link href="/service-areas" className="hover:text-gray-900">Service Areas</Link></li>
              <li>/</li>
              <li className="text-gray-900 font-medium">San Clemente, CA</li>
            </ol>
          </div>
        </nav>

        <section className="py-16 bg-gradient-to-b from-ocean-50 to-white">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Professional Mold Testing & Inspection Services in San Clemente, CA
            </h1>
            <p className="text-xl text-gray-600 mb-6 max-w-3xl">
              OC Mold Pros provides comprehensive mold inspection and testing services to homeowners and businesses throughout San Clemente and the surrounding Orange County communities. Our certified inspectors use advanced technology to detect hidden mold and moisture problems, protecting your property and your family&apos;s health.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Comprehensive Mold Inspection Services in San Clemente</h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                At OC Mold Pros, we understand the unique challenges that San Clemente homeowners face when it comes to mold. As a coastal community, homes in San Clemente are exposed to higher humidity levels and salt air, which can accelerate mold growth if not properly managed.
              </p>
              <p className="mt-4">
                Our professional mold inspection service includes a thorough visual examination of your property, advanced moisture detection using infrared thermal imaging cameras and professional-grade moisture meters, and comprehensive air quality testing. We collect samples that are analyzed by independent certified laboratories, ensuring accurate and unbiased results.
              </p>
              <p className="mt-4">
                Mold exposure can cause serious health problems, including respiratory issues, allergic reactions, and in some cases, more severe health conditions. Our inspectors are trained to identify all types of mold, including hidden mold that may be growing behind walls, under flooring, or in HVAC systems. We provide detailed reports with photographs, laboratory results, and professional recommendations for remediation if needed.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-ocean-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose OC Mold Pros in San Clemente?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Certified & Licensed Inspectors', desc: 'Our team holds all required certifications and licenses for mold inspection in California.' },
                { title: 'Advanced Testing Methods', desc: 'We use infrared thermal imaging, moisture meters, and laboratory air quality testing.' },
                { title: 'Same-Day Service Available', desc: 'Need an urgent inspection? We offer same-day appointments when available.' },
                { title: 'Detailed Reports with Photos', desc: 'Receive comprehensive reports with photographs, lab results, and clear recommendations.' },
                { title: 'Owner-Operated Business', desc: 'Work directly with the owner for personalized service and accountability.' },
                { title: 'Locally Based in Orange County', desc: 'We know the local climate, construction, and common mold issues in San Clemente.' }
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Common Mold Locations in San Clemente Homes</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Bathrooms', desc: 'Showers, tubs, under sinks, and around toilets are prime locations for mold growth due to constant moisture.' },
                { title: 'Kitchens', desc: 'Under appliances like dishwashers and refrigerators, around sinks, and in cabinets with plumbing.' },
                { title: 'Attics', desc: 'Roof leaks, poor ventilation, and condensation can lead to mold growth in attic spaces.' },
                { title: 'Crawl Spaces', desc: 'Dark, damp crawl spaces are ideal environments for mold if not properly ventilated.' },
                { title: 'HVAC Systems', desc: 'Air conditioning units and ductwork can harbor mold, spreading spores throughout your home.' },
                { title: 'Coastal Properties', desc: 'Salt air and ocean humidity create additional challenges for homes near the beach in San Clemente.' }
              ].map((item, i) => (
                <div key={i} className="border border-gray-200 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Communities We Serve in San Clemente</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
              {sanClementeNeighborhoods.map((neighborhood, i) => (
                <div key={i} className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-ocean-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{neighborhood}</span>
                </div>
              ))}
            </div>
            <p className="text-lg text-gray-600 mb-6">
              Not sure what to call your area? No problem. If you&apos;re in San Clemente, we can help you decide whether an inspection makes sense based on symptoms, odors, visible growth, past leaks, or humidity—especially in coastal and hillside homes where moisture can hide behind walls or under flooring.
            </p>
            <p className="text-lg text-ocean-700 font-medium">
              DM or call to schedule a free 20-minute consultation.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About San Clemente, California</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              San Clemente, known as the &quot;Spanish Village by the Sea,&quot; offers a relaxed coastal lifestyle with Spanish Colonial architecture. The city features beautiful beaches, the historic downtown area, and the famous San Clemente Pier. Coastal humidity and salt air create conditions that can promote mold growth, making regular inspections important.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Local Landmarks & Points of Interest</h3>
            <div className="flex flex-wrap gap-3">
              {landmarks.map((landmark, i) => (
                <span key={i} className="px-4 py-2 bg-white rounded-full text-gray-700 border border-gray-200 shadow-sm">
                  {landmark}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-ocean-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mold Inspection Services in San Clemente</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              San Clemente residents trust OC Mold Pros for thorough mold inspections in their coastal community. We service homes in Talega, near the pier, in the Forster Ranch neighborhoods, along the coast, and throughout the city. Our team understands the unique challenges of coastal living and how salt air and ocean humidity can lead to hidden moisture problems in local homes.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Related Services</h3>
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
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {nearbyBeachCities.map(city => (
                <Link 
                  key={city.slug} 
                  href={`/service-areas/${city.slug}`} 
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
            <p className="text-xl text-ocean-100 mb-4">
              Don&apos;t wait until mold becomes a bigger problem. Contact OC Mold Pros for professional mold testing and inspection services.
            </p>
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
            <p className="text-ocean-200">Serving San Clemente and all of Orange County, California</p>
          </div>
        </section>
      </main>
    </>
  )
}
