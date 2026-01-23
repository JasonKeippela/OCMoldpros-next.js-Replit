import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mold Inspection Services | OC Mold Pros - Orange County',
  description: 'Comprehensive mold inspection services in Orange County: air quality testing, moisture detection, thermal imaging. Expert analysis & detailed reporting. Book now!',
}

export default function ServicesPage() {
  const services = [
    {
      title: 'Visual Mold Inspection',
      description: 'Every San Clemente mold inspector with OC Mold Pros begins with a detailed visual assessment of all accessible areas of the property. This step allows us to identify visible mold growth, staining, discoloration, water damage, and building conditions that commonly contribute to mold problems. We inspect interior living areas, bedrooms, closets, bathrooms, kitchens, laundry rooms, attics, crawlspaces, garages, utility rooms, windows, doors, baseboards, transition points, exterior walls, roofing components, and drainage areas. Rather than just looking for obvious mold, we\'re trained to recognize subtle indicators of moisture intrusion and mold activity that are often overlooked, such as bubbling paint, warped materials, past repairs, or microbial staining.',
      features: ['Complete property walkthrough', 'Identification of visible mold', 'Water damage assessment', 'Detailed photo documentation']
    },
    {
      title: 'Moisture Detection',
      description: 'Mold cannot grow without moisture, which is why moisture detection is a critical part of every inspection. OC Mold Pros is considered an Orange County mold specialist. Using infrared thermal imaging cameras and professional-grade moisture meters, we evaluate walls, ceilings, flooring, and structural components for hidden moisture that may not be visible to the naked eye. This process allows us to identify concealed leaks behind walls or ceilings, detect active or intermittent moisture intrusion, confirm elevated moisture levels in building materials, and pinpoint areas that may support future mold growth. Thermal imaging helps us locate temperature differentials that suggest moisture, while moisture meters allow us to verify and quantify those findings. This combination reduces guesswork and helps ensure nothing important is missed.',
      features: ['Infrared thermal imaging', 'Pin and pinless moisture meters', 'Detection of hidden leaks', 'Moisture mapping']
    },
    {
      title: 'Air Quality Testing',
      description: 'We collect air samples from inside and outside your property to measure mold spore concentrations. Samples are analyzed by independent certified laboratories for accurate, unbiased results.',
      features: ['Indoor and outdoor sampling', 'Spore trap analysis', 'Independent lab testing', 'Species identification']
    },
    {
      title: 'Surface Sampling',
      description: 'When visible mold is present, we collect surface samples using tape lifts or swabs to identify the specific types of mold growing in your property and assess potential health risks.',
      features: ['Tape lift samples', 'Swab sampling', 'Lab analysis and identification', 'Health risk assessment']
    },
    {
      title: 'HVAC System Inspection',
      description: 'Your heating and cooling system can harbor and spread mold throughout your home. We inspect ductwork, air handlers, and HVAC components for mold contamination and moisture issues.',
      features: ['Ductwork inspection', 'Air handler assessment', 'Filter and coil check', 'Condensation evaluation']
    },
    {
      title: 'Comprehensive Reporting',
      description: 'Every inspection includes a detailed written report with photographs, laboratory results, findings summary, and professional recommendations. We explain everything in clear, understandable terms.',
      features: ['Detailed written report', 'Photo documentation', 'Lab results included', 'Clear recommendations']
    }
  ]

  return (
    <main className="pt-28">
      <nav className="bg-gray-100 py-3">
        <div className="max-w-6xl mx-auto px-4">
          <ol className="flex items-center gap-2 text-sm text-gray-600">
            <li><Link href="/" className="hover:text-gray-900">Home</Link></li>
            <li>/</li>
            <li className="text-gray-900 font-medium">Services</li>
          </ol>
        </div>
      </nav>

      <section className="py-16 bg-gradient-to-b from-ocean-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Mold Inspection Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            OC Mold Pros offers comprehensive mold inspection and testing services designed to identify mold problems and protect your family&apos;s health. We use advanced technology and proven methods to deliver accurate results.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="space-y-12">
            {services.map((service, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h2>
                    <p className="text-gray-600 text-lg">{service.description}</p>
                  </div>
                  <div className="bg-ocean-50 rounded-lg p-6">
                    <h3 className="font-semibold text-ocean-800 mb-3">What&apos;s Included:</h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-2 text-gray-700">
                          <svg className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Professional Mold Inspection Matters</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              { title: 'Protect Your Health', desc: 'Mold exposure can cause respiratory issues, allergies, and other health problems. Professional inspection helps identify risks early.' },
              { title: 'Preserve Property Value', desc: 'Unaddressed mold can cause structural damage and significantly reduce your property value. Early detection saves money.' },
              { title: 'Peace of Mind', desc: 'Know exactly what you are dealing with. Our detailed reports give you the information you need to make informed decisions.' }
            ].map((item, i) => (
              <div key={i}>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-ocean-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Schedule Your Inspection Today</h2>
          <p className="text-xl text-ocean-100 mb-8">
            Contact us to learn more about our services or schedule your mold inspection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:9493715934" className="px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-ocean-50 transition-colors font-semibold text-lg">
              Call 949-371-5934
            </a>
            <Link href="/contact" className="px-8 py-4 bg-ocean-600 text-white border-2 border-white rounded-lg hover:bg-ocean-800 transition-colors font-semibold text-lg">
              Book Inspection
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
