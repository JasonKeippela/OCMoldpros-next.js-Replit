'use client'

import { usePathname } from 'next/navigation'

const BASE_URL = 'https://ocmoldpros.com'

export default function CanonicalUrl() {
  const pathname = usePathname()
  
  const cleanPath = pathname
    .replace(/\/+/g, '/')
    .replace(/\/$/, '')
  
  const canonicalUrl = cleanPath === '' ? BASE_URL : `${BASE_URL}${cleanPath}`

  return <link rel="canonical" href={canonicalUrl} />
}
