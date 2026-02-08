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
      'Professional mold inspection & testing in Orange County, CA. Certified inspectors, advanced technology, same-day service. Call 949-371-5934 for a free quote today!',

    priceRange: SITE_CONFIG.priceRange,

    address: SITE_CONFIG.address,

    geo: SITE_CONFIG.geo,

    areaServed: SITE_CONFIG.areaServed,

    openingHoursSpecification: SITE_CONFIG.openingHoursSpecification,
    sameAs: SITE_CONFIG.sameAs,

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
