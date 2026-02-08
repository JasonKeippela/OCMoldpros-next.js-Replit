import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import ServiceMarkdown from '@/app/components/ServiceMarkdown'
import { services } from '@/content/services/services.config'
import { expandServiceMarkdown, SERVICE_EXPANSION_DEFAULTS } from '@/app/lib/expandServiceMarkdown'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  if (!service) return {}
  return {
    title: service.metaTitle,
    description: service.metaDescription,
  }
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  if (!service) notFound()

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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ocmoldpros.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://ocmoldpros.com/services" },
      { "@type": "ListItem", "position": 3, "name": service.name, "item": `https://ocmoldpros.com${service.path}` }
    ]
  }

  const faqSchema = faqItems.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      }
    }))
  } : null

  return (
    <main className="pt-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <nav className="bg-gray-100 py-3">
        <div className="max-w-6xl mx-auto px-4">
          <ol className="flex items-center gap-2 text-sm text-gray-600">
            <li><Link href="/" className="hover:text-gray-900">Home</Link></li>
            <li>/</li>
            <li><Link href="/services" className="hover:text-gray-900">Services</Link></li>
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

      <section className="py-20 bg-ocean-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Schedule Your Inspection Today</h2>
          <p className="text-xl text-ocean-100 mb-8">
            Contact us to learn more about our services or schedule your mold inspection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:9493715934" className="px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-ocean-50 transition-colors font-semibold text-lg">
              Call for FREE Consultation
            </a>
            <Link href="/contact" className="px-8 py-4 bg-ocean-600 text-white border-2 border-white rounded-lg hover:bg-ocean-800 transition-colors font-semibold text-lg">
              Get Free Quote now
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

function extractFAQ(markdown: string): { question: string; answer: string }[] {
  const faqItems: { question: string; answer: string }[] = []
  const lines = markdown.split('\n')
  let inFAQ = false
  let currentQuestion = ''
  let currentAnswer = ''

  for (const line of lines) {
    if (line.trim() === '## FAQ') {
      inFAQ = true
      continue
    }
    if (!inFAQ) continue
    if (line.startsWith('## ') && line.trim() !== '## FAQ') break

    if (line.startsWith('### ')) {
      if (currentQuestion && currentAnswer.trim()) {
        faqItems.push({ question: currentQuestion, answer: currentAnswer.trim() })
      }
      currentQuestion = line.replace('### ', '').trim()
      currentAnswer = ''
    } else if (currentQuestion) {
      currentAnswer += line + ' '
    }
  }
  if (currentQuestion && currentAnswer.trim()) {
    faqItems.push({ question: currentQuestion, answer: currentAnswer.trim() })
  }

  return faqItems
}
