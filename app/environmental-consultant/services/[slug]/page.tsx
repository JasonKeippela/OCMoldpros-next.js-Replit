import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import ServiceMarkdown from '@/app/components/ServiceMarkdown'
import JsonLd from '@/app/components/JsonLd'
import { findCategoryBySlug, findServiceBySlug } from '@/data/servicesData'
import { expandServiceMarkdown, SERVICE_EXPANSION_DEFAULTS } from '@/app/lib/expandServiceMarkdown'
import { getCanonicalUrl } from '@/app/lib/canonical'
import { getServicePageSchema, getFaqSchema } from '@/app/lib/schema'
import { extractFAQ } from '@/app/lib/extractFAQ'

const CATEGORY_SLUG = 'environmental-consultant'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const category = findCategoryBySlug(CATEGORY_SLUG)!
  return category.services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = findServiceBySlug(slug)
  if (!service || service.categorySlug !== CATEGORY_SLUG) return {}
  const canonicalUrl = getCanonicalUrl(service.canonicalHref)
  const title = `${service.name} in Orange County CA | OC Mold Pros`
  const description = `${service.shortDescription} IAC2 certified environmental consultant serving all of Orange County. Call 949-371-5934.`
  return {
    title,
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: 'website',
      locale: 'en_US',
      siteName: 'OC Mold Pros',
      images: [{ url: 'https://ocmoldpros.com/logo.jpg', width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://ocmoldpros.com/logo.jpg'],
    },
  }
}

export default async function EnvironmentalConsultantServicePage({ params }: Props) {
  const { slug } = await params
  const service = findServiceBySlug(slug)
  if (!service || service.categorySlug !== CATEGORY_SLUG) notFound()

  const category = findCategoryBySlug(CATEGORY_SLUG)!

  const filePath = path.join(process.cwd(), 'content', 'services', `${slug}.md`)
  const baseMarkdown = fs.readFileSync(filePath, 'utf-8')

  const expandedMarkdown = expandServiceMarkdown(baseMarkdown, {
    name: service.name,
    slug: service.slug,
    city: SERVICE_EXPANSION_DEFAULTS.city,
    serviceAreas: SERVICE_EXPANSION_DEFAULTS.serviceAreas,
    landmarks: SERVICE_EXPANSION_DEFAULTS.landmarks,
  })

  const faqItems = extractFAQ(baseMarkdown)

  const serviceSchema = getServicePageSchema({
    name: service.name,
    path: service.canonicalHref,
  })

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ocmoldpros.com' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://ocmoldpros.com/services' },
      { '@type': 'ListItem', position: 3, name: category.name, item: `https://ocmoldpros.com/${CATEGORY_SLUG}` },
      { '@type': 'ListItem', position: 4, name: service.name, item: `https://ocmoldpros.com${service.canonicalHref}` },
    ],
  }

  const faqSchemaData =
    faqItems.length > 0
      ? { '@context': 'https://schema.org', ...getFaqSchema(faqItems) }
      : null

  return (
    <main className="pt-28">
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      {faqSchemaData && <JsonLd data={faqSchemaData} />}

      <nav className="bg-gray-100 py-3">
        <div className="max-w-6xl mx-auto px-4">
          <ol className="flex items-center gap-2 text-sm text-gray-600 flex-wrap">
            <li><Link href="/" className="hover:text-gray-900">Home</Link></li>
            <li>/</li>
            <li><Link href="/services" className="hover:text-gray-900">Services</Link></li>
            <li>/</li>
            <li><Link href={`/${CATEGORY_SLUG}`} className="hover:text-gray-900">{category.name}</Link></li>
            <li>/</li>
            <li className="text-gray-900 font-medium">{service.name}</li>
          </ol>
        </div>
      </nav>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <ServiceMarkdown markdown={expandedMarkdown} />
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Other Environmental Consultant Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {category.services
              .filter((s) => s.slug !== slug)
              .map((s) => (
                <Link
                  key={s.slug}
                  href={s.canonicalHref}
                  className="block p-3 bg-white border border-gray-200 rounded-lg hover:border-ocean-300 hover:shadow-sm transition-all text-sm text-gray-700 hover:text-gray-900"
                >
                  {s.name}
                </Link>
              ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-ocean-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Schedule Your Inspection Today</h2>
          <p className="text-xl text-ocean-100 mb-8">
            Call for a free 20-minute consultation. We serve Orange County and San Clemente, CA.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:9493715934" className="px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-ocean-50 transition-colors font-semibold text-lg">
              Call 949-371-5934
            </a>
            <Link href="/contact" className="px-8 py-4 bg-ocean-600 text-white border-2 border-white rounded-lg hover:bg-ocean-800 transition-colors font-semibold text-lg">
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
