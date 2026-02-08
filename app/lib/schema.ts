import { getCanonicalUrl } from './canonical'
import { SITE_CONFIG } from './siteConfig'

export function buildProfessionalServiceSchema(service: { name: string; path: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    'identifier': 'schema-v2-services-2026-02-07',
    'name': `${SITE_CONFIG.name} \u2013 ${service.name}`,
    'url': getCanonicalUrl(service.path),
    'telephone': SITE_CONFIG.telephone,
    'email': SITE_CONFIG.email,
    'serviceType': service.name,
    'address': SITE_CONFIG.address,
    'areaServed': SITE_CONFIG.areaServed,
    'provider': {
      '@type': 'Organization',
      '@id': SITE_CONFIG.organizationId,
      'name': SITE_CONFIG.name,
      'url': SITE_CONFIG.url,
      'telephone': SITE_CONFIG.telephone,
      'logo': SITE_CONFIG.logo,
      'sameAs': SITE_CONFIG.sameAs,
    },
  }
}
