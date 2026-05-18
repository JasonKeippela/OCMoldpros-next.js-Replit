'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

interface MetaInfo {
  title: string
  description: string
  canonical: string
  ogUrl: string
  ogTitle: string
  ogDescription: string
}

function getMeta(name: string): string {
  if (typeof document === 'undefined') return ''
  const el =
    document.querySelector(`meta[name="${name}"]`) ||
    document.querySelector(`meta[property="${name}"]`)
  return el?.getAttribute('content') ?? ''
}

function getLink(rel: string): string {
  if (typeof document === 'undefined') return ''
  return document.querySelector(`link[rel="${rel}"]`)?.getAttribute('href') ?? ''
}

export default function MetaDebug() {
  const pathname = usePathname()
  const [info, setInfo] = useState<MetaInfo | null>(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const read = () => {
      setInfo({
        title: document.title,
        description: getMeta('description'),
        canonical: getLink('canonical'),
        ogUrl: getMeta('og:url'),
        ogTitle: getMeta('og:title'),
        ogDescription: getMeta('og:description'),
      })
    }
    read()
    const timer = setTimeout(read, 500)
    return () => clearTimeout(timer)
  }, [pathname])

  if (process.env.NODE_ENV !== 'development') return null
  if (!info) return null

  const expectedUrl = `https://ocmoldpros.com${pathname === '/' ? '' : pathname}`
  const canonicalOk = info.canonical === expectedUrl || info.canonical === expectedUrl + '/'
  const ogUrlOk = info.ogUrl === expectedUrl || info.ogUrl === expectedUrl + '/'
  const descLen = info.description.length
  const descOk = descLen >= 140 && descLen <= 160

  return (
    <div className="fixed bottom-4 right-4 z-[9999] font-mono text-xs">
      <button
        onClick={() => setOpen((o) => !o)}
        className="bg-gray-900 text-white px-3 py-1 rounded-lg shadow-lg hover:bg-gray-700"
      >
        SEO {open ? '▼' : '▲'}
      </button>

      {open && (
        <div className="mt-2 w-80 bg-gray-950 text-gray-100 rounded-xl p-4 shadow-2xl space-y-2 border border-gray-700">
          <div>
            <span className="text-gray-400">Title:</span>
            <p className="break-words text-white">{info.title}</p>
          </div>

          <div>
            <span className="text-gray-400">
              Description ({descLen} chars):{' '}
              <span className={descOk ? 'text-green-400' : 'text-red-400'}>
                {descOk ? '✓ OK' : descLen < 140 ? '⚠ Too short' : '⚠ Too long'}
              </span>
            </span>
            <p className="break-words text-white">{info.description}</p>
          </div>

          <div>
            <span className="text-gray-400">Canonical: </span>
            <span className={canonicalOk ? 'text-green-400' : 'text-red-400'}>
              {canonicalOk ? '✓' : '✗ MISMATCH'}
            </span>
            <p className="break-words text-gray-300">{info.canonical || '(none)'}</p>
            {!canonicalOk && <p className="text-red-300">Expected: {expectedUrl}</p>}
          </div>

          <div>
            <span className="text-gray-400">og:url: </span>
            <span className={ogUrlOk ? 'text-green-400' : 'text-red-400'}>
              {ogUrlOk ? '✓' : '✗ MISMATCH'}
            </span>
            <p className="break-words text-gray-300">{info.ogUrl || '(none)'}</p>
          </div>

          <div>
            <span className="text-gray-400">og:title:</span>
            <p className="break-words text-gray-300">{info.ogTitle || '(none)'}</p>
          </div>
        </div>
      )}
    </div>
  )
}
