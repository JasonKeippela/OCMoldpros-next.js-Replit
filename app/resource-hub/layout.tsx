import { Metadata } from 'next'
import JsonLd from '@/app/components/JsonLd'
import { getBreadcrumbSchema } from '@/app/lib/schema'

export const metadata: Metadata = {
  title: 'Resource Hub | OC Mold Pros',
  description: 'Explore helpful mold education videos, recommended tools, product insights, and practical resources from OC Mold Pros.',
  alternates: { canonical: 'https://ocmoldpros.com/resource-hub' },
}

export default function ResourceHubLayout({ children }: { children: React.ReactNode }) {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: 'https://ocmoldpros.com' },
    { name: 'Resource Hub', url: 'https://ocmoldpros.com/resource-hub' },
  ])
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      {children}
    </>
  )
}
