import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resource Hub | OC Mold Pros',
  description: 'Explore helpful mold education videos, recommended tools, product insights, and practical resources from OC Mold Pros.',
  alternates: { canonical: 'https://ocmoldpros.com/resource-hub' },
}

export default function ResourceHubLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
