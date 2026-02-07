import Image from 'next/image'
import Link from 'next/link'
import HeroCTA from './components/HeroCTA'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Environmental Consulting | Expert Mold Inspections in San Clemente & Orange County',
  description: 'OC Mold Pros offers professional mold inspection services in San Clemente and surrounding Orange County areas. We use advanced air sampling and thermal imaging to ensure your home is mold-free.',
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://ocmoldpros.com/#organization",
  "name": "OC Mold Pros",
  "image": "https://ocmoldpros.com/logo.jpg",
  "logo": "https://ocmoldpros.com/logo.jpg",
  "url": "https://ocmoldpros.com",
  "telephone": "+1-949-371-5934",
  "email": "info@ocmoldpros.com",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1322 Calle Avanzado",
    "addressLocality": "San Clemente",
    "addressRegion": "CA",
    "postalCode": "92673",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "33.4269",
    "longitude": "-117.6120"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "San Clemente",
      "containedIn": {
        "@type": "AdministrativeArea",
        "name": "Orange County"
      }
    },
    { "@type": "City", "name": "Dana Point" },
    { "@type": "City", "name": "Laguna Beach" },
    { "@type": "City", "name": "Laguna Niguel" },
    { "@type": "City", "name": "Mission Viejo" },
    { "@type": "City", "name": "Newport Beach" },
    { "@type": "City", "name": "Huntington Beach" },
    { "@type": "City", "name": "Irvine" },
    { "@type": "City", "name": "Costa Mesa" },
    { "@type": "City", "name": "Anaheim" },
    { "@type": "City", "name": "Santa Ana" }
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "17:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "08:00",
      "closes": "12:00"
    }
  ],
  "sameAs": [
    "https://instagram.com/ocmoldpros"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "8",
    "bestRating": "5",
    "worstRating": "5"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Mold Inspection Services",
    "itemListElement": [
      {
        "@type": "Service",
        "name": "Mold Inspection",
        "description": "Comprehensive visual inspection and moisture assessment to identify mold growth and potential problem areas in your home or business.",
        "provider": { "@id": "https://ocmoldpros.com/#organization" }
      },
      {
        "@type": "Service",
        "name": "Air Quality Testing",
        "description": "Professional air sampling to measure mold spore concentrations and identify potential health risks in your indoor environment.",
        "provider": { "@id": "https://ocmoldpros.com/#organization" }
      },
      {
        "@type": "Service",
        "name": "Moisture Detection",
        "description": "Advanced infrared thermal imaging and moisture meters to find hidden water intrusion and dampness that can lead to mold growth.",
        "provider": { "@id": "https://ocmoldpros.com/#organization" }
      },
      {
        "@type": "Service",
        "name": "Detailed Reporting",
        "description": "Comprehensive written reports with photographs, lab results, and clear recommendations for addressing any issues found.",
        "provider": { "@id": "https://ocmoldpros.com/#organization" }
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
        "text": "A typical residential mold inspection takes 1-2 hours depending on the size of your property. Larger homes or commercial properties may take longer. We use advanced equipment including thermal imaging cameras and moisture meters to thoroughly examine all areas of concern."
      }
    },
    {
      "@type": "Question",
      "name": "How much does a mold inspection cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The exact cost depends on property size and the scope of testing needed. We provide free quotes over the phone. Call us at 949-371-5934 for accurate pricing for your specific property."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide mold remediation services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We focus exclusively on inspection and testing to ensure our findings are completely unbiased and accurate. This independence means you can trust our results. We can recommend trusted, licensed remediation companies if mold is found."
      }
    },
    {
      "@type": "Question",
      "name": "How soon can I schedule an inspection?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer same-day appointments when available. In most cases, we can schedule your inspection within 24-48 hours. Call 949-371-5934 or request a free consultation to check availability for your preferred date and time."
      }
    },
    {
      "@type": "Question",
      "name": "What areas do you serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We serve all of Orange County, California, including Irvine, Newport Beach, Huntington Beach, Anaheim, Santa Ana, Costa Mesa, Mission Viejo, San Clemente, and 30+ other cities throughout Orange County. Contact us to confirm service in your specific area."
      }
    }
  ]
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "OC Mold Pros",
  "url": "https://ocmoldpros.com",
  "logo": "https://ocmoldpros.com/logo.jpg",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-949-371-5934",
    "contactType": "Customer Service",
    "areaServed": "US",
    "availableLanguage": ["English", "Spanish"]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "8",
    "bestRating": "5",
    "worstRating": "5"
  },
  "review": [
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Michelle B." },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "Jason is so awesome and amazing!!! He was referred to us by a friend and instantly I knew he was trustworthy and so knowledgeable! He truly just came to help us, offer advice and connect us with people who could do further investigating and remediating. We are so grateful to Jason and will always go to him first bc we know we can trust and count on his insight!!",
      "datePublished": "2024-12-20"
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Sean Hanley" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "I had a great experience with OC Mold Pros. Jason was thorough, honest, and took the time to explain everything so we understood exactly what was going on in our home. His awareness and care really stood out. We were so happy with the service that we're now having them come to our office building as well. Highly recommend!",
      "datePublished": "2024-12-20"
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Mike Saidi" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "We had mold inspections done before buying our property, but later when we opened the walls, we found a few surprises. A friend referred us to Jason at OC Mold Pros, and I'm so glad we called him. He was super knowledgeable, very reasonably priced, and went above and beyond. He even found mold inside the chimney — something the first company totally missed! Couldn't be happier with his work. Highly recommend OC Mold Pros!",
      "datePublished": "2024-11-05"
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Nathan Abell" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "Jason at OC Mold Pros was amazing! He came out to test our home for mold and walked me through the process with professionalism. He gave me detailed results, and also provided clear, practical steps on how to move forward and prevent future mold growth. His expertise and genuine care for our family's health and home really stood out. I hope you never have mold problems, but if you do, I highly recommend Jason and the OC Mold Pros team!",
      "datePublished": "2024-11-05"
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Hanny Rivera" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "Jason has been incredibly helpful and supportive as we have dealt with a sudden mold invasion in our home. When we first spoke on the phone he treated us with utmost professionalism and empathy for our situation. We were able to quickly schedule a mold inspection. During the inspection he took a lot of time to explain things to us, look at every nook and cranny and ultimately helped us identify the source. He was also very communicative and responsive through the process. I would highly highly recommend Jason and OC mold pros!",
      "datePublished": "2025-01-15"
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Jeslyn Rain" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "Jason and OC Mold Pros did a fantastic job. He was courteous, timely and provided a thorough inspection at my home in San Clemente! I highly recommend OC Mold Pros. My experience was priceless.",
      "datePublished": "2025-01-14"
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Joshua Schneider" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "Had such a peaceful stress relieving experience with Jason. He had a few different tools to use, and answered all my questions for my mold inspection at my home in San Clemente. I recommend OC Mold Pros to anyone questioning if they have indoor air quality issues or feel any fatigue or energy issues.",
      "datePublished": "2025-01-23"
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Kamal" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "Number one in all Orange County, I'm grateful to found an excellent inspector for my home, I highly recommend, super professional and has all the tools to perform an excellent job and experience, expertise about mold and detecting any issues. Thank you for your service Jason!",
      "datePublished": "2026-01-25"
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
            Environmental Consulting and Professional Mold Inspection in San Clemente & Orange County
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-2xl">
            Are you looking for a mold inspection near me? 24/7 emergency inspections and same day service available. Certified inspectors protecting your home and family with advanced mold detection technology
          </p>
          <p className="text-2xl md:text-3xl font-bold text-white mb-8 italic">
            Restore Your Home, Restore Your Health
          </p>
          <HeroCTA />
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
            { number: '30', label: 'Years Experience' },
            { number: '100%', label: 'Satisfaction Guaranteed' },
            { number: '48hr', label: 'Report Turnaround' }
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
              Call for FREE Consultation
            </a>
            <Link href="/contact" className="block w-full py-4 border-2 border-ocean-600 text-gray-900 rounded-lg hover:bg-ocean-50 transition-colors font-semibold text-lg text-center">
              Get Free Quote now
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
            <Link key={city.slug} href={`/mold-inspector-near-me/${city.slug}`} className="p-4 bg-ocean-50 rounded-lg text-gray-900 hover:bg-ocean-100 transition-colors text-center font-medium">
              {city.name}, CA
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/mold-inspector-near-me" className="text-gray-900 hover:text-gray-900 font-medium">
            View all 33+ cities we serve →
          </Link>
        </div>
      </div>
    </section>
  )
}

function ProcessSection() {
  const steps = [
    { step: '1', title: 'Schedule', description: 'Call or request a free consultation to schedule your convenient inspection time' },
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
      a: 'The exact cost depends on property size and the scope of testing needed. Call us for a free quote.'
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
            Call for FREE Consultation
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
            Call for FREE Consultation
          </a>
          <Link href="/contact" className="px-8 py-4 bg-ocean-600 text-white border-2 border-white rounded-lg hover:bg-ocean-800 transition-colors font-semibold text-lg shadow-lg">
            Get Free Quote now
          </Link>
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  const testimonials = [
    {
      name: "Michelle B.",
      location: "Orange County, CA",
      text: "Jason is so awesome and amazing!!! He was referred to us by a friend and instantly I knew he was trustworthy and so knowledgeable! He truly just came to help us, offer advice and connect us with people who could do further investigating and remediating. We are so grateful to Jason and will always go to him first bc we know we can trust and count on his insight!!"
    },
    {
      name: "Sean Hanley",
      location: "Orange County, CA",
      text: "I had a great experience with OC Mold Pros. Jason was thorough, honest, and took the time to explain everything so we understood exactly what was going on in our home. His awareness and care really stood out. We were so happy with the service that we're now having them come to our office building as well. Highly recommend!"
    },
    {
      name: "Mike Saidi",
      location: "Orange County, CA",
      text: "We had mold inspections done before buying our property, but later when we opened the walls, we found a few surprises. A friend referred us to Jason at OC Mold Pros, and I'm so glad we called him. He was super knowledgeable, very reasonably priced, and went above and beyond. He even found mold inside the chimney — something the first company totally missed! Couldn't be happier with his work. Highly recommend OC Mold Pros!"
    },
    {
      name: "Nathan Abell",
      location: "Orange County, CA",
      text: "Jason at OC Mold Pros was amazing! He came out to test our home for mold and walked me through the process with professionalism. He gave me detailed results, and also provided clear, practical steps on how to move forward and prevent future mold growth. His expertise and genuine care for our family's health and home really stood out. I hope you never have mold problems, but if you do, I highly recommend Jason and the OC Mold Pros team!"
    },
    {
      name: "Hanny Rivera",
      location: "Orange County, CA",
      text: "Jason has been incredibly helpful and supportive as we have dealt with a sudden mold invasion in our home. When we first spoke on the phone he treated us with utmost professionalism and empathy for our situation. We were able to quickly schedule a mold inspection. During the inspection he took a lot of time to explain things to us, look at every nook and cranny and ultimately helped us identify the source. He was also very communicative and responsive through the process. I would highly highly recommend Jason and OC mold pros!"
    },
    {
      name: "Jeslyn Rain",
      location: "San Clemente, CA",
      text: "Jason and OC Mold Pros did a fantastic job. He was courteous, timely and provided a thorough inspection at my home in San Clemente! I highly recommend OC Mold Pros. My experience was priceless."
    },
    {
      name: "Joshua Schneider",
      location: "San Clemente, CA",
      text: "Had such a peaceful stress relieving experience with Jason. He had a few different tools to use, and answered all my questions for my mold inspection at my home in San Clemente. I recommend OC Mold Pros to anyone questioning if they have indoor air quality issues or feel any fatigue or energy issues."
    },
    {
      name: "Kamal",
      location: "Orange County, CA",
      text: "Number one in all Orange County, I'm grateful to found an excellent inspector for my home, I highly recommend, super professional and has all the tools to perform an excellent job and experience, expertise about mold and detecting any issues. Thank you for your service Jason!"
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
            <span className="text-gray-700 font-medium">5 out of 5</span>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {testimonials.slice(0, 3).map((review, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex text-yellow-400 mb-3">★★★★★</div>
              <p className="text-gray-700 mb-4 text-sm leading-relaxed">&quot;{review.text}&quot;</p>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">{review.name}</p>
                <p className="text-gray-500 text-sm">{review.location}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
          {testimonials.slice(3).map((review, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex text-yellow-400 mb-3">★★★★★</div>
              <p className="text-gray-700 mb-4 text-sm leading-relaxed">&quot;{review.text}&quot;</p>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">{review.name}</p>
                <p className="text-gray-500 text-sm">{review.location}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="max-w-3xl mx-auto mb-10">
          <div className="rounded-xl overflow-hidden shadow-sm border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3346.0!2d-117.5853076!3d33.4569403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6bf02cb1163e6121%3A0x5e567bd40572a8e8!2sOC+Mold+Pros!5e0!3m2!1sen!2sus!4v1700000000000"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="OC Mold Pros on Google Maps"
            ></iframe>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="https://maps.app.goo.gl/FK1pKmb7NvgvNubC9" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
            <span className="font-medium text-gray-700">View Our Google Business Profile</span>
          </a>
          <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-ocean-600 text-white rounded-lg hover:bg-ocean-700 transition-colors font-medium">
            Schedule Your Inspection
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
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
