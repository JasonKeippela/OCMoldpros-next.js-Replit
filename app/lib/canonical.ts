// Canonical v2 – services rollout
// Shared canonical URL builder for all pages.
// Uses Next.js metadata API (server-rendered) instead of client-side component.

const BASE_URL = 'https://ocmoldpros.com'

export function getCanonicalUrl(path: string): string {
  const cleanPath = path
    .replace(/\/+/g, '/')
    .replace(/\/$/, '')
    .split('?')[0]

  return cleanPath === '' || cleanPath === '/' ? BASE_URL : `${BASE_URL}${cleanPath}`
}

export function canonicalAlternates(path: string) {
  return {
    alternates: {
      canonical: getCanonicalUrl(path),
    },
  }
}
