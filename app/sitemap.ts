import { MetadataRoute } from 'next'
import { cities } from '@/app/lib/cities'
import { SERVICE_CATEGORIES } from '@/data/servicesData'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ocmoldpros.com'
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/services`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/mold-inspector-near-me`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/process`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/pricing`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/resource-hub`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
  ]

  const categoryPages: MetadataRoute.Sitemap = SERVICE_CATEGORIES.map(cat => ({
    url: `${baseUrl}/${cat.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.9,
  }))

  const servicePages: MetadataRoute.Sitemap = SERVICE_CATEGORIES.flatMap(cat =>
    cat.services.map(svc => ({
      url: `${baseUrl}${svc.canonicalHref}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    }))
  )

  const cityPages: MetadataRoute.Sitemap = cities.map(city => ({
    url: `${baseUrl}/mold-inspector-near-me/${city.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  return [...staticPages, ...categoryPages, ...servicePages, ...cityPages]
}
