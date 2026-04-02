import { SITE_CONFIG } from './siteConfig'

const BUSINESS_ID = 'https://ocmoldpros.com/#business'
const FAQ_ID = 'https://ocmoldpros.com/#faq'

function toNumberIfNumericString(value: unknown): unknown {
  if (typeof value !== 'string') return value
  const trimmed = value.trim()
  if (!trimmed) return value
  if (!/^-?\d+(\.\d+)?$/.test(trimmed)) return value
  return Number(trimmed)
}

function normalizeSchemaNumbers<T>(obj: T): T {
  if (Array.isArray(obj)) return obj.map(normalizeSchemaNumbers) as unknown as T
  if (obj && typeof obj === 'object') {
    const out: Record<string, unknown> = {}
    for (const [k, v] of Object.entries(obj as Record<string, unknown>)) {
      if (
        k === 'ratingValue' ||
        k === 'reviewCount' ||
        k === 'bestRating' ||
        k === 'worstRating' ||
        k === 'latitude' ||
        k === 'longitude'
      ) {
        out[k] = toNumberIfNumericString(v)
      } else {
        out[k] = normalizeSchemaNumbers(v)
      }
    }
    return out as T
  }
  return obj
}

export type ServiceItem = {
  name: string
  slug: string
  description: string
  serviceType: string
  category: string
}

export type ServiceCategory = {
  categoryName: string
  items: ServiceItem[]
}

export const SERVICES_CATALOG: ServiceCategory[] = [
  {
    categoryName: 'Home Inspector',
    items: [
      {
        name: 'Mold Sampling',
        slug: 'mold-sampling',
        serviceType: 'Mold inspection',
        category: 'Home Inspector',
        description: 'Air and surface sampling used to identify mold presence, types, and spore levels inside homes, condos, and real estate properties.',
      },
      {
        name: 'New Construction Inspections',
        slug: 'new-construction-inspections',
        serviceType: 'Construction inspection',
        category: 'Home Inspector',
        description: 'Inspections performed during or after construction to identify moisture issues and mold risks in newly built properties.',
      },
      {
        name: 'Rental Property Inspections',
        slug: 'rental-property-inspections',
        serviceType: 'Property inspection',
        category: 'Home Inspector',
        description: 'Mold inspections for rental properties to help landlords and tenants identify moisture problems and indoor air quality concerns.',
      },
      {
        name: 'Mold Prevention',
        slug: 'mold-prevention',
        serviceType: 'Mold prevention service',
        category: 'Home Inspector',
        description: 'Guidance and inspection-based strategies designed to reduce moisture conditions that lead to mold growth.',
      },
      {
        name: 'Physical and Visual Inspection',
        slug: 'physical-and-visual-inspection',
        serviceType: 'Visual inspection',
        category: 'Home Inspector',
        description: 'A hands-on inspection of visible building areas to identify signs of moisture intrusion, water damage, and mold growth.',
      },
      {
        name: 'HVAC System Inspection',
        slug: 'hvac-system-inspection',
        serviceType: 'HVAC inspection',
        category: 'Home Inspector',
        description: 'Inspection of HVAC components to identify moisture buildup, airflow issues, and conditions that contribute to mold growth.',
      },
      {
        name: 'Kitchen Inspection',
        slug: 'kitchen-inspection',
        serviceType: 'Room inspection',
        category: 'Home Inspector',
        description: 'Focused inspection of kitchen areas prone to moisture, including sinks, dishwashers, refrigerators, and cabinetry.',
      },
      {
        name: 'Bathroom Inspection',
        slug: 'bathroom-inspection',
        serviceType: 'Room inspection',
        category: 'Home Inspector',
        description: 'Inspection of bathrooms to identify moisture accumulation, ventilation issues, and hidden mold-prone areas.',
      },
      {
        name: 'Real Estate Inspection',
        slug: 'real-estate-inspection',
        serviceType: 'Real estate inspection',
        category: 'Home Inspector',
        description: 'Mold inspections for buyers and sellers to identify moisture issues and mold risks prior to real estate transactions.',
      },
    ],
  },
  {
    categoryName: 'Environmental Consultant',
    items: [
      {
        name: 'Thermal Imaging Inspection',
        slug: 'thermal-imaging-inspection',
        serviceType: 'Thermal imaging inspection',
        category: 'Environmental Consultant',
        description: 'Using thermal imaging technology to detect moisture and temperature variations that indicate hidden mold and water intrusion issues.',
      },
      {
        name: 'Certified Mold Inspector',
        slug: 'certified-mold-inspector',
        serviceType: 'Mold inspection',
        category: 'Environmental Consultant',
        description: 'Certified mold inspections performed using industry standards to assess mold conditions and risks.',
      },
      {
        name: 'Mold Inspection',
        slug: 'mold-inspection',
        serviceType: 'Mold inspection',
        category: 'Environmental Consultant',
        description: 'Comprehensive inspections to identify mold growth, moisture sources, and environmental conditions contributing to mold.',
      },
      {
        name: 'Mold Testing',
        slug: 'mold-testing',
        serviceType: 'Mold testing',
        category: 'Environmental Consultant',
        description: 'Laboratory-based testing to confirm mold presence and identify mold species found during inspection.',
      },
      {
        name: 'ERMI Testing',
        slug: 'ermi-testing',
        serviceType: 'Environmental testing',
        category: 'Environmental Consultant',
        description: 'DNA-based ERMI testing used to evaluate long-term mold contamination levels within a property.',
      },
      {
        name: 'Thermal Imaging Inspection',
        slug: 'thermal-imaging-inspection',
        serviceType: 'Thermal imaging inspection',
        category: 'Environmental Consultant',
        description: 'Infrared imaging used to detect hidden moisture behind walls, ceilings, and building materials.',
      },
      {
        name: 'Indoor Allergen Sampling',
        slug: 'indoor-allergen-sampling',
        serviceType: 'Allergen testing',
        category: 'Environmental Consultant',
        description: 'Sampling used to identify allergens such as dust mites, pollen, pet dander, and other airborne irritants.',
      },
      {
        name: 'Mycotoxin Testing',
        slug: 'mycotoxin-testing',
        serviceType: 'Mycotoxin testing',
        category: 'Environmental Consultant',
        description: 'Testing for mold-produced toxins that may impact indoor environmental health.',
      },
      {
        name: 'Custom Mold Action Plans',
        slug: 'custom-mold-action-plans',
        serviceType: 'Consultation service',
        category: 'Environmental Consultant',
        description: 'Customized step-by-step plans outlining inspection findings and recommended next actions for mold-related concerns.',
      },
    ],
  },
  {
    categoryName: 'Water Damage Restoration Service',
    items: [
      {
        name: 'Mold Cleaning',
        slug: 'mold-cleaning',
        serviceType: 'Mold cleaning support',
        category: 'Water Damage Restoration Service',
        description: 'Inspection and reporting support that helps guide professional mold cleaning efforts.',
      },
      {
        name: 'Mold Damage Restoration',
        slug: 'mold-damage-restoration',
        serviceType: 'Mold damage assessment',
        category: 'Water Damage Restoration Service',
        description: 'Inspection services that document mold-related damage to assist restoration planning.',
      },
      {
        name: 'Mold Mitigation',
        slug: 'mold-mitigation',
        serviceType: 'Mold mitigation support',
        category: 'Water Damage Restoration Service',
        description: 'Identification of moisture sources and affected areas to support mold mitigation strategies.',
      },
      {
        name: 'Mold Remediation',
        slug: 'mold-remediation',
        serviceType: 'Mold remediation support',
        category: 'Water Damage Restoration Service',
        description: 'Inspection findings and documentation used to guide professional mold remediation efforts.',
      },
    ],
  },
]

export const ALL_SERVICES = SERVICES_CATALOG.flatMap((c) => c.items)

function getOfferCatalogSchema() {
  return {
    '@type': 'OfferCatalog',
    name: 'Services',
    itemListElement: ALL_SERVICES.map((service) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service.name,
        description: service.description,
        serviceType: service.serviceType,
        category: service.category,
        url: `${SITE_CONFIG.url}/services/${service.slug}`,
        provider: { '@id': BUSINESS_ID },
        areaServed: { '@type': 'AdministrativeArea', name: 'San Clemente and Orange County, CA' },
      },
    })),
  }
}

const reviews = [
  {
    '@type': 'Review' as const,
    author: { '@type': 'Person' as const, name: 'Michelle B.' },
    reviewRating: { '@type': 'Rating' as const, ratingValue: 5 },
    reviewBody: 'Jason is so awesome and amazing!!! He was referred to us by a friend and instantly I knew he was trustworthy and so knowledgeable! He truly just came to help us, offer advice and connect us with people who could do further investigating and remediating. We are so grateful to Jason and will always go to him first bc we know we can trust and count on his insight!!',
    datePublished: '2024-12-20',
  },
  {
    '@type': 'Review' as const,
    author: { '@type': 'Person' as const, name: 'Sean Hanley' },
    reviewRating: { '@type': 'Rating' as const, ratingValue: 5 },
    reviewBody: 'I had a great experience with OC Mold Pros. Jason was thorough, honest, and took the time to explain everything so we understood exactly what was going on in our home. His awareness and care really stood out. We were so happy with the service that we\'re now having them come to our office building as well. Highly recommend!',
    datePublished: '2024-12-20',
  },
  {
    '@type': 'Review' as const,
    author: { '@type': 'Person' as const, name: 'Mike Saidi' },
    reviewRating: { '@type': 'Rating' as const, ratingValue: 5 },
    reviewBody: 'We had mold inspections done before buying our property, but later when we opened the walls, we found a few surprises. A friend referred us to Jason at OC Mold Pros, and I\'m so glad we called him. He was super knowledgeable, very reasonably priced, and went above and beyond. He even found mold inside the chimney \u2014 something the first company totally missed! Couldn\'t be happier with his work. Highly recommend OC Mold Pros!',
    datePublished: '2024-11-05',
  },
  {
    '@type': 'Review' as const,
    author: { '@type': 'Person' as const, name: 'Nathan Abell' },
    reviewRating: { '@type': 'Rating' as const, ratingValue: 5 },
    reviewBody: 'Jason at OC Mold Pros was amazing! He came out to test our home for mold and walked me through the process with professionalism. He gave me detailed results, and also provided clear, practical steps on how to move forward and prevent future mold growth. His expertise and genuine care for our family\'s health and home really stood out. I hope you never have mold problems, but if you do, I highly recommend Jason and the OC Mold Pros team!',
    datePublished: '2024-11-05',
  },
  {
    '@type': 'Review' as const,
    author: { '@type': 'Person' as const, name: 'Hanny Rivera' },
    reviewRating: { '@type': 'Rating' as const, ratingValue: 5 },
    reviewBody: 'Jason has been incredibly helpful and supportive as we have dealt with a sudden mold invasion in our home. When we first spoke on the phone he treated us with utmost professionalism and empathy for our situation. We were able to quickly schedule a mold inspection. During the inspection he took a lot of time to explain things to us, look at every nook and cranny and ultimately helped us identify the source. He was also very communicative and responsive through the process. I would highly highly recommend Jason and OC mold pros!',
    datePublished: '2025-01-15',
  },
  {
    '@type': 'Review' as const,
    author: { '@type': 'Person' as const, name: 'Jeslyn Rain' },
    reviewRating: { '@type': 'Rating' as const, ratingValue: 5 },
    reviewBody: 'Jason and OC Mold Pros did a fantastic job. He was courteous, timely and provided a thorough inspection at my home in San Clemente! I highly recommend OC Mold Pros. My experience was priceless.',
    datePublished: '2025-01-14',
  },
  {
    '@type': 'Review' as const,
    author: { '@type': 'Person' as const, name: 'Joshua Schneider' },
    reviewRating: { '@type': 'Rating' as const, ratingValue: 5 },
    reviewBody: 'Had such a peaceful stress relieving experience with Jason. He had a few different tools to use, and answered all my questions for my mold inspection at my home in San Clemente. I recommend OC Mold Pros to anyone questioning if they have indoor air quality issues or feel any fatigue or energy issues.',
    datePublished: '2025-01-23',
  },
  {
    '@type': 'Review' as const,
    author: { '@type': 'Person' as const, name: 'Kamal' },
    reviewRating: { '@type': 'Rating' as const, ratingValue: 5 },
    reviewBody: 'Number one in all Orange County, I\'m grateful to found an excellent inspector for my home, I highly recommend, super professional and has all the tools to perform an excellent job and experience, expertise about mold and detecting any issues. Thank you for your service Jason!',
    datePublished: '2026-01-25',
  },
]

export function getLocalBusinessSchema() {
  const localBusiness = {
    '@type': ['LocalBusiness', 'ProfessionalService'],
    '@id': BUSINESS_ID,

    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url + '/',
    telephone: SITE_CONFIG.telephone,
    email: SITE_CONFIG.email,

    image: SITE_CONFIG.image,
    logo: SITE_CONFIG.logo,

    description:
      'Professional mold inspection & testing in San Clemente and Orange County, CA. Certified inspectors, advanced technology, same-day service. Call 949-371-5934 for a free quote today!',

    priceRange: SITE_CONFIG.priceRange,

    address: SITE_CONFIG.address,

    geo: SITE_CONFIG.geo,

    areaServed: SITE_CONFIG.areaServed,

    openingHoursSpecification: SITE_CONFIG.openingHoursSpecification,
    sameAs: SITE_CONFIG.sameAs,

    hasOfferCatalog: getOfferCatalogSchema(),

    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: 5,
      reviewCount: reviews.length,
      bestRating: 5,
      worstRating: 1,
    },

    review: reviews,
  }

  return normalizeSchemaNumbers(localBusiness)
}

export type FaqItem = { question: string; answer: string }

export function getFaqSchema(faqItems: FaqItem[]) {
  if (faqItems.length === 0) return null
  return {
    '@type': 'FAQPage',
    '@id': FAQ_ID,
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

export function getSiteGraph(options?: { faqItems?: FaqItem[] }) {
  const graph: Record<string, unknown>[] = [getLocalBusinessSchema()]

  if (options?.faqItems && options.faqItems.length > 0) {
    const faq = getFaqSchema(options.faqItems)
    if (faq) graph.push(faq)
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  }
}

export function getServicePageSchema(service: { name: string; path: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    url: `${SITE_CONFIG.url}${service.path}`,
    provider: { '@id': BUSINESS_ID },
    areaServed: { '@type': 'AdministrativeArea', name: 'Orange County, CA' },
  }
}
