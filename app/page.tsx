import Image from 'next/image'
import Link from 'next/link'

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "OC Mold Pros",
  "description": "Professional mold inspection and remediation services in Orange County, California",
  "url": "https://ocmoldpros.com",
  "telephone": "+1-949-371-5934",
  "email": "info@ocmoldpros.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Orange County",
    "addressRegion": "CA",
    "addressCountry": "US"
  },
  "areaServed": {
    "@type": "Place",
    "name": "Orange County, California"
  },
  "serviceType": ["Mold Inspection", "Mold Remediation", "Mold Testing", "Air Quality Testing"],
  "priceRange": "$$",
  "openingHours": "Mo-Sa 08:00-18:00",
  "sameAs": []
}

function HeroSection() {
  return (
    <section className="relative pt-28">
      <div style={{ position: 'relative' }} className="h-[550px] md:h-[650px] w-full">
        <Image
          src="/hero-bg.png"
          alt="San Clemente Pier overlooking the Pacific Ocean in Orange County, California"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-900/70 to-ocean-900/50 z-10" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-4xl">
            Professional Mold Inspection & Testing in Orange County
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
            Certified inspectors protecting your home and family with advanced mold detection technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:9493715934" className="px-8 py-4 bg-white text-ocean-700 rounded-lg hover:bg-ocean-50 transition-colors font-semibold text-lg shadow-lg">
              Call 949-371-5934
            </a>
            <Link href="/contact" className="px-8 py-4 bg-ocean-600 text-white border-2 border-white rounded-lg hover:bg-ocean-700 transition-colors font-semibold text-lg shadow-lg">
              Book an Inspection
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function TrustIndicators() {
  return (
    <section className="py-12 bg-white border-b">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: '15+', label: 'Years Experience' },
            { number: '5,000+', label: 'Inspections Completed' },
            { number: '100%', label: 'Satisfaction Guaranteed' },
            { number: '24hr', label: 'Report Turnaround' }
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-3xl md:text-4xl font-bold text-ocean-600">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServicesSection() {
  const services = [
    {
      title: 'Mold Inspection',
      description: 'Comprehensive visual inspection and moisture assessment to identify mold growth and potential problem areas in your home or business.',
      icon: '🔍',
      link: '/services'
    },
    {
      title: 'Air Quality Testing',
      description: 'Professional air sampling to measure mold spore concentrations and identify potential health risks in your indoor environment.',
      icon: '🧪',
      link: '/services'
    },
    {
      title: 'Moisture Detection',
      description: 'Advanced infrared thermal imaging and moisture meters to find hidden water intrusion and dampness that can lead to mold growth.',
      icon: '💧',
      link: '/services'
    },
    {
      title: 'Detailed Reporting',
      description: 'Comprehensive written reports with photographs, lab results, and clear recommendations for addressing any issues found.',
      icon: '📋',
      link: '/services'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Mold Inspection Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Complete mold solutions for residential and commercial properties throughout Orange County, California
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Link key={index} href={service.link} className="p-6 bg-ocean-50 rounded-xl hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-ocean-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/services" className="inline-block px-6 py-3 border-2 border-ocean-600 text-ocean-600 rounded-lg hover:bg-ocean-50 transition-colors font-medium">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}

function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose OC Mold Pros?</h2>
            <p className="text-lg text-gray-600 mb-8">
              As a locally owned and operated business, we understand the unique mold challenges that Orange County homeowners face. From coastal humidity to older construction, we have seen it all and know how to find hidden problems.
            </p>
            <ul className="space-y-4">
              {[
                'Certified and licensed mold inspectors',
                'Advanced infrared thermal imaging technology',
                'Independent laboratory analysis for unbiased results',
                'Same-day service available',
                'Detailed reports with clear recommendations',
                'Owner-operated with personalized service'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-ocean-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Request Your Free Quote</h3>
            <p className="text-gray-600 mb-6">Call us today for a free consultation and accurate pricing for your mold inspection needs.</p>
            <a href="tel:9493715934" className="block w-full py-4 bg-ocean-600 text-white rounded-lg hover:bg-ocean-700 transition-colors font-semibold text-lg text-center mb-4">
              Call 949-371-5934
            </a>
            <Link href="/contact" className="block w-full py-4 border-2 border-ocean-600 text-ocean-600 rounded-lg hover:bg-ocean-50 transition-colors font-semibold text-lg text-center">
              Schedule Online
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function ServiceAreas() {
  const featuredCities = [
    { name: 'Irvine', slug: 'irvine-ca' },
    { name: 'Newport Beach', slug: 'newport-beach-ca' },
    { name: 'Huntington Beach', slug: 'huntington-beach-ca' },
    { name: 'Anaheim', slug: 'anaheim-ca' },
    { name: 'Santa Ana', slug: 'santa-ana-ca' },
    { name: 'Costa Mesa', slug: 'costa-mesa-ca' },
    { name: 'Mission Viejo', slug: 'mission-viejo-ca' },
    { name: 'San Clemente', slug: 'san-clemente-ca' }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Serving All of Orange County</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From the beaches to the foothills, we provide professional mold inspection services throughout Orange County, California.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {featuredCities.map(city => (
            <Link key={city.slug} href={`/service-areas/${city.slug}`} className="p-4 bg-ocean-50 rounded-lg text-ocean-700 hover:bg-ocean-100 transition-colors text-center font-medium">
              {city.name}, CA
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/service-areas" className="text-ocean-600 hover:text-ocean-700 font-medium">
            View all 33+ cities we serve →
          </Link>
        </div>
      </div>
    </section>
  )
}

function ProcessSection() {
  const steps = [
    { step: '1', title: 'Schedule', description: 'Call or book online to schedule your convenient inspection time' },
    { step: '2', title: 'Inspect', description: 'Our certified inspector examines your property with advanced equipment' },
    { step: '3', title: 'Analyze', description: 'Samples are sent to an independent lab for accurate analysis' },
    { step: '4', title: 'Report', description: 'Receive a detailed report with findings and recommendations' }
  ]

  return (
    <section className="py-20 bg-ocean-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How Our Process Works</h2>
          <p className="text-lg text-gray-600">Simple, transparent, and thorough</p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-ocean-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {item.step}
              </div>
              <h3 className="text-xl font-semibold text-ocean-800 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/process" className="inline-block px-6 py-3 border-2 border-ocean-600 text-ocean-600 rounded-lg hover:bg-white transition-colors font-medium">
            Learn More About Our Process
          </Link>
        </div>
      </div>
    </section>
  )
}

function FAQSection() {
  const faqs = [
    {
      q: 'How long does a mold inspection take?',
      a: 'A typical residential mold inspection takes 1-2 hours depending on the size of your property. Larger homes or commercial properties may take longer.'
    },
    {
      q: 'How much does a mold inspection cost?',
      a: 'Our inspections start at $299 for smaller homes. The exact cost depends on property size and the scope of testing needed. Call us for a free quote.'
    },
    {
      q: 'Do you provide mold remediation services?',
      a: 'We focus exclusively on inspection and testing to ensure our findings are completely unbiased. We can recommend trusted remediation companies if needed.'
    },
    {
      q: 'How soon can I schedule an inspection?',
      a: 'We offer same-day appointments when available. In most cases, we can schedule your inspection within 24-48 hours.'
    },
    {
      q: 'What areas do you serve?',
      a: 'We serve all of Orange County, California, including Irvine, Newport Beach, Huntington Beach, Anaheim, and 30+ other cities.'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
              <p className="text-gray-600">{faq.a}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <p className="text-gray-600 mb-4">Have more questions? We are here to help.</p>
          <a href="tel:9493715934" className="text-ocean-600 hover:text-ocean-700 font-medium text-lg">
            Call 949-371-5934
          </a>
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="py-20 bg-ocean-700">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Protect Your Home?</h2>
        <p className="text-xl text-ocean-100 mb-8">
          Contact us today for a professional mold inspection. We serve all of Orange County with same-day service available.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:9493715934" className="px-8 py-4 bg-white text-ocean-700 rounded-lg hover:bg-ocean-50 transition-colors font-semibold text-lg shadow-lg">
            Call 949-371-5934
          </a>
          <Link href="/contact" className="px-8 py-4 bg-ocean-600 text-white border-2 border-white rounded-lg hover:bg-ocean-800 transition-colors font-semibold text-lg shadow-lg">
            Book Online
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main>
        <HeroSection />
        <TrustIndicators />
        <ServicesSection />
        <WhyChooseUs />
        <ServiceAreas />
        <ProcessSection />
        <FAQSection />
        <CTASection />
      </main>
    </>
  )
}
