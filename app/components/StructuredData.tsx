import Script from 'next/script'

export default function StructuredData({ data, id }: { data: object; id: string }) {
  return (
    <Script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      strategy="beforeInteractive"
    />
  )
}
