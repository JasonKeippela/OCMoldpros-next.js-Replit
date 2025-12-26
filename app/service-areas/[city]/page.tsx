import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { cities, getCityBySlug, getCityData } from '../../lib/cities'

type Props = {
  params: Promise<{ city: string }>
}

export async function generateStaticParams() {
  return cities.map(city => ({ city: city.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: citySlug } = await params
  const cityInfo = getCityBySlug(citySlug)
  if (!cityInfo) return { title: 'City Not Found' }
  
  return {
    title: `Mold Testing & Inspection in ${cityInfo.name}, CA | OC Mold Pros`,
    description: `Professional mold testing and inspection services in ${cityInfo.name}, Orange County. Certified inspectors, advanced technology, same-day service. Call 949-371-5934`,
  }
}

function cityToSlug(city: string) {
  return city.toLowerCase().replace(/\s+/g, '-') + '-ca'
}

export default async function CityPage({ params }: Props) {
  const { city: citySlug } = await params
  const cityInfo = getCityBySlug(citySlug)
  
  if (!cityInfo) {
    notFound()
  }

  const { description, isCoastal } = getCityData(cityInfo.name)
  const nearbyWithSlugs = cityInfo.nearby.map(name => ({
    name,
    slug: cityToSlug(name)
  }))

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "OC Mold Pros",
    "description": `Professional mold inspection and testing services in ${cityInfo.name}, CA`,
    "url": `https://ocmoldpros.com/service-areas/${citySlug}`,
    "telephone": "+1-949-371-5934",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": cityInfo.name,
      "addressRegion": "CA",
      "addressCountry": "US"
    },
    "areaServed": {
      "@type": "City",
      "name": cityInfo.name
    },
    "serviceType": ["Mold Inspection", "Mold Testing", "Mold Remediation", "Air Quality Testing"],
    "priceRange": "$$",
    "openingHours": "Mo-Sa 08:00-18:00"
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <main className="pt-28">
        <nav className="bg-gray-100 py-3">
          <div className="max-w-6xl mx-auto px-4">
            <ol className="flex items-center gap-2 text-sm text-gray-600">
              <li><Link href="/" className="hover:text-ocean-600">Home</Link></li>
              <li>/</li>
              <li><Link href="/service-areas" className="hover:text-ocean-600">Service Areas</Link></li>
              <li>/</li>
              <li className="text-ocean-700 font-medium">{cityInfo.name}, CA</li>
            </ol>
          </div>
        </nav>

        <section className="py-16 bg-gradient-to-b from-ocean-50 to-white">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Professional Mold Testing & Inspection Services in {cityInfo.name}, CA
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl">
              OC Mold Pros provides comprehensive mold inspection and testing services to homeowners and businesses throughout {cityInfo.name} and the surrounding Orange County communities. Our certified inspectors use advanced technology to detect hidden mold and moisture problems, protecting your property and your family&apos;s health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:9493715934" className="px-8 py-4 bg-ocean-600 text-white rounded-lg hover:bg-ocean-700 transition-colors font-semibold text-lg text-center">
                Call 949-371-5934
              </a>
              <Link href="/contact" className="px-8 py-4 border-2 border-ocean-600 text-ocean-700 rounded-lg hover:bg-ocean-50 transition-colors font-semibold text-lg text-center">
                Schedule Inspection
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Comprehensive Mold Inspection Services in {cityInfo.name}</h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                At OC Mold Pros, we understand the unique challenges that {cityInfo.name} homeowners face when it comes to mold. {isCoastal ? 'As a coastal community, homes in ' + cityInfo.name + ' are exposed to higher humidity levels and salt air, which can accelerate mold growth if not properly managed.' : 'The Southern California climate, while generally pleasant, can still create conditions conducive to mold growth, especially in areas with poor ventilation or moisture intrusion.'}
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose OC Mold Pros in {cityInfo.name}?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Certified & Licensed Inspectors', desc: 'Our team holds all required certifications and licenses for mold inspection in California.' },
                { title: 'Advanced Testing Methods', desc: 'We use infrared thermal imaging, moisture meters, and laboratory air quality testing.' },
                { title: 'Same-Day Service Available', desc: 'Need an urgent inspection? We offer same-day appointments when available.' },
                { title: 'Detailed Reports with Photos', desc: 'Receive comprehensive reports with photographs, lab results, and clear recommendations.' },
                { title: 'Owner-Operated Business', desc: 'Work directly with the owner for personalized service and accountability.' },
                { title: 'Locally Based in Orange County', desc: 'We know the local climate, construction, and common mold issues in ' + cityInfo.name + '.' }
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-semibold text-ocean-700 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Common Mold Locations in {cityInfo.name} Homes</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Bathrooms', desc: 'Showers, tubs, under sinks, and around toilets are prime locations for mold growth due to constant moisture.' },
                { title: 'Kitchens', desc: 'Under appliances like dishwashers and refrigerators, around sinks, and in cabinets with plumbing.' },
                { title: 'Attics', desc: 'Roof leaks, poor ventilation, and condensation can lead to mold growth in attic spaces.' },
                { title: 'Crawl Spaces', desc: 'Dark, damp crawl spaces are ideal environments for mold if not properly ventilated.' },
                { title: 'HVAC Systems', desc: 'Air conditioning units and ductwork can harbor mold, spreading spores throughout your home.' },
                isCoastal ? { title: 'Coastal Properties', desc: 'Salt air and ocean humidity create additional challenges for homes near the beach in ' + cityInfo.name + '.' } : { title: 'Basements & Garages', desc: 'Areas below grade or with limited ventilation require regular inspection for moisture issues.' }
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About {cityInfo.name}, California</h2>
            <p className="text-lg text-gray-600 leading-relaxed">{description}</p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Nearby Areas We Serve</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {nearbyWithSlugs.map(city => (
                <Link key={city.slug} href={`/service-areas/${city.slug}`} className="p-4 bg-ocean-50 rounded-lg text-ocean-700 hover:bg-ocean-100 transition-colors text-center font-medium">
                  {city.name}, CA
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-ocean-700">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Schedule Your Mold Inspection in {cityInfo.name} Today</h2>
            <p className="text-xl text-ocean-100 mb-8">
              Don&apos;t wait until mold becomes a bigger problem. Contact OC Mold Pros for professional mold testing and inspection services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href="tel:9493715934" className="px-8 py-4 bg-white text-ocean-700 rounded-lg hover:bg-ocean-50 transition-colors font-semibold text-lg">
                Call 949-371-5934
              </a>
              <a href="mailto:info@ocmoldpros.com" className="px-8 py-4 bg-ocean-600 text-white border-2 border-white rounded-lg hover:bg-ocean-800 transition-colors font-semibold text-lg">
                Email Us
              </a>
            </div>
            <p className="text-ocean-200">Serving {cityInfo.name} and all of Orange County, California</p>
          </div>
        </section>
      </main>
    </>
  )
}
