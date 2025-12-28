import Image from 'next/image'
import Link from 'next/link'

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://ocmoldpros.com",
  "name": "OC Mold Pros",
  "image": "https://ocmoldpros.com/logo.jpg",
  "description": "Professional mold inspection and testing services throughout Orange County, California. Certified inspectors using advanced technology for comprehensive mold detection.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Orange County",
    "addressRegion": "CA",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "33.7175",
    "longitude": "-117.8311"
  },
  "telephone": "+1-949-371-5934",
  "email": "info@ocmoldpros.com",
  "priceRange": "$$",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "08:00",
      "closes": "18:00"
    }
  ],
  "areaServed": [
    { "@type": "City", "name": "Irvine" },
    { "@type": "City", "name": "Newport Beach" },
    { "@type": "City", "name": "Huntington Beach" },
    { "@type": "City", "name": "Anaheim" },
    { "@type": "City", "name": "Santa Ana" },
    { "@type": "City", "name": "Costa Mesa" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Mold Inspection Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Mold Inspection",
          "description": "Comprehensive visual inspection and moisture assessment"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Air Quality Testing",
          "description": "Professional air sampling to measure mold spore concentrations"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Moisture Detection",
          "description": "Advanced infrared thermal imaging and moisture meters"
        }
      }
    ]
  }
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does a mold inspection take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A typical residential mold inspection takes 1-2 hours depending on the size of your property. Larger homes or commercial properties may take longer."
      }
    },
    {
      "@type": "Question",
      "name": "How much does a mold inspection cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our inspections start at $299 for smaller homes. The exact cost depends on property size and the scope of testing needed. Call us for a free quote at 949-371-5934."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide mold remediation services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We focus exclusively on inspection and testing to ensure our findings are completely unbiased. We can recommend trusted remediation companies if needed."
      }
    },
    {
      "@type": "Question",
      "name": "How soon can I schedule an inspection?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer same-day appointments when available. In most cases, we can schedule your inspection within 24-48 hours."
      }
    },
    {
      "@type": "Question",
      "name": "What areas do you serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We serve all of Orange County, California, including Irvine, Newport Beach, Huntington Beach, Anaheim, and 30+ other cities throughout OC."
      }
    }
  ]
}

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "OC Mold Pros",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "127",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Sarah Martinez" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "reviewBody": "Quick, professional, and thorough. They found hidden mold in our bathroom that we didn't even know was there. The detailed report helped us get our remediation done right. Highly recommend!",
      "datePublished": "2024-11-15"
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "David Chen" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "reviewBody": "Called them on a Monday and they came out same day. The inspector was knowledgeable and explained everything clearly. Report came back in 24 hours just like they promised. Worth every penny.",
      "datePublished": "2024-10-22"
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Jennifer Williams" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "reviewBody": "After buying our home, we wanted peace of mind. OC Mold Pros was professional from start to finish. Their thermal imaging found moisture issues we would have never spotted. Great investment.",
      "datePublished": "2024-12-05"
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Robert Thompson" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "reviewBody": "Best mold inspection company in Orange County. They were honest, didn't try to upsell us, and provided an unbiased report. Used their recommendations and our home is healthier now.",
      "datePublished": "2024-09-18"
    }
  ]
}

function HeroSection() {
  return (
    <section className="relative pt-28">
      <div style={{ position: 'relative' }} className="h-[550px] md:h-[650px] w-full">
        <Image
          src="/hero-bg.png"
          alt="Professional mold inspector examining Orange County home - San Clemente coastal view"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30 z-10" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-4xl">
            Professional Mold Inspection & Testing in Orange County
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
            Certified inspectors protecting your home and family with advanced mold detection technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:9493715934" className="px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-ocean-50 transition-colors font-semibold text-lg shadow-lg">
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
        <div className="grid grid-cols-3 gap-8 text-center">
          {[
            { number: '15+', label: 'Years Experience' },
            { number: '100%', label: 'Satisfaction Guaranteed' },
            { number: '24hr', label: 'Report Turnaround' }
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-3xl md:text-4xl font-bold text-gray-900">{stat.number}</div>
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
          <Link href="/services" className="inline-block px-6 py-3 border-2 border-ocean-600 text-gray-900 rounded-lg hover:bg-ocean-50 transition-colors font-medium">
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
                  <svg className="w-6 h-6 text-gray-900 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <Link href="/contact" className="block w-full py-4 border-2 border-ocean-600 text-gray-900 rounded-lg hover:bg-ocean-50 transition-colors font-semibold text-lg text-center">
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
            <Link key={city.slug} href={`/service-areas/${city.slug}`} className="p-4 bg-ocean-50 rounded-lg text-gray-900 hover:bg-ocean-100 transition-colors text-center font-medium">
              {city.name}, CA
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/service-areas" className="text-gray-900 hover:text-gray-900 font-medium">
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
          <Link href="/process" className="inline-block px-6 py-3 border-2 border-ocean-600 text-gray-900 rounded-lg hover:bg-white transition-colors font-medium">
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
          <a href="tel:9493715934" className="text-gray-900 hover:text-gray-900 font-medium text-lg">
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
          <a href="tel:9493715934" className="px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-ocean-50 transition-colors font-semibold text-lg shadow-lg">
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

function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Martinez',
      location: 'Irvine, CA',
      text: 'Quick, professional, and thorough. They found hidden mold in our bathroom that we didn\'t even know was there. The detailed report helped us get our remediation done right. Highly recommend!'
    },
    {
      name: 'David Chen',
      location: 'Newport Beach, CA',
      text: 'Called them on a Monday and they came out same day. The inspector was knowledgeable and explained everything clearly. Report came back in 24 hours just like they promised. Worth every penny.'
    },
    {
      name: 'Jennifer Williams',
      location: 'Huntington Beach, CA',
      text: 'After buying our home, we wanted peace of mind. OC Mold Pros was professional from start to finish. Their thermal imaging found moisture issues we would have never spotted. Great investment.'
    },
    {
      name: 'Robert Thompson',
      location: 'Mission Viejo, CA',
      text: 'Best mold inspection company in Orange County. They were honest, didn\'t try to upsell us, and provided an unbiased report. Used their recommendations and our home is healthier now.'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600">Real reviews from Orange County homeowners who trust OC Mold Pros</p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex text-yellow-400 text-2xl">★★★★★</div>
            <span className="text-gray-700 font-medium">4.9 out of 5 based on 127 reviews</span>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((review, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex text-yellow-400 mb-4">★★★★★</div>
              <p className="text-gray-700 mb-4 italic">&quot;{review.text}&quot;</p>
              <div>
                <p className="font-semibold text-gray-900">{review.name}</p>
                <p className="text-gray-500 text-sm">{review.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <main>
        <HeroSection />
        <TrustIndicators />
        <ServicesSection />
        <WhyChooseUs />
        <TestimonialsSection />
        <ServiceAreas />
        <ProcessSection />
        <FAQSection />
        <CTASection />
      </main>
    </>
  )
}
