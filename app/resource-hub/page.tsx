'use client'

import { useState } from 'react'
import Link from 'next/link'

const PHONE = '9493715934'
const PHONE_DISPLAY = '949-371-5934'

const anchorSections = [
  { label: 'Videos', href: '#videos' },
  { label: 'Recommended Tools', href: '#tools' },
  { label: 'Resource Insights', href: '#insights' },
  { label: 'Helpful Links', href: '#links' },
  { label: 'FAQ', href: '#faq' },
]

const videos = [
  {
    youtubeId: '8ooiwa5Q5MA',
    title: 'Proper Mold Remediation',
    description: 'Note: This area was treated with an anti-microbial before drying started. What proper mold remediation actually looks like — and why mold inspections matter.',
  },
  {
    youtubeId: 'TvXOzqGLfsE',
    title: 'How to Prepare for a Mold Inspection',
    description: 'Simple steps to take before your inspector arrives so you get the most accurate results.',
  },
  {
    youtubeId: null,
    title: 'What Air Sampling Tells You',
    description: 'A plain-language breakdown of what air samples measure and how to read the results.',
  },
  {
    youtubeId: null,
    title: 'Common Signs of Mold in a Home',
    description: 'Visual cues, smells, and symptoms that suggest hidden mold may be present.',
  },
  {
    youtubeId: null,
    title: 'How to Reduce Indoor Moisture',
    description: 'Practical habits and tools that reduce humidity and stop mold before it starts.',
  },
  {
    youtubeId: null,
    title: 'What to Do After Remediation',
    description: 'Steps to verify the remediation worked and keep your home mold-free going forward.',
  },
]

type Resource = {
  title: string
  category: string
  description: string
  link: string
  external?: boolean
  image?: string
}

type Insight = {
  name: string
  summary: string
  why: string
  link: string
  image?: string
}

const resources: Resource[] = [
  {
    title: 'HEPA Air Purifier',
    category: 'Air Purifiers',
    description: 'HEPA filtration captures mold spores, allergens, and fine particulates. Useful during and after remediation in bedrooms or living spaces.',
    link: 'https://austinairsystems.com/collections/all-products?filter.p.m.specs.pollutant=Mold',
    external: true,
    image: '/austin-air-logo.png',
  },
  {
    title: 'Dehumidifier',
    category: 'Dehumidifiers',
    description: 'Maintaining indoor humidity between 45–50% is one of the most effective ways to prevent mold growth in Southern California coastal homes.',
    link: 'https://www.amazon.com/Waykar-Energy-Dehumidifier-Basements-Gallons/dp/B0B5V6MBMR/ref=sr_1_1_sspa?crid=LN5L0DCMPRL6&dib=eyJ2IjoiMSJ9.BO-gO49U6Thj0hq-u4QMHKsfAcXEsmyWugO6GaiaJJGoXh3-ppW--4xbdDn3Q7oxddyESAxOOVXy2FdeFRUvhPNvZB3lsyg2h-4VVlgHuLpxv9powShXZ2zUgJTkdv1fxHR0mfbeHcNpcBIzq4_DKTE62UD-SCU_0_SpQeraF9hArbufdBtrpXngjnKcRAh2Q2rT6qQ2emzHnQNm99I57jKy5pj0sOhQrfE113H8hLjuibJSF7LaD5nCJm6KPghy4QYIn6s0xMUs1-FYi7Hzw0i4Y3aUQwCmT39nni-C2I8.sCCY4haIC90nTSW4jM2v0SH9rNLLk2_bf4H-5B8sT2c&dib_tag=se&keywords=dehumidifier&qid=1777675708&sprefix=dehumidifier%2Caps%2C306&sr=8-1-spons&ufe=app_do%3Aamzn1.fos.5998aa40-ec6f-4947-a68f-cd087fee0848&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1',
    external: true,
    image: '/waykar-dehumidifier.png',
  },
  {
    title: 'Digital Moisture Meter',
    category: 'Moisture Meters',
    description: 'Allows homeowners to spot-check walls, floors, and ceilings for elevated moisture after a leak or water intrusion event.',
    link: '#',
  },
  {
    title: 'Non-Toxic cleaning produts',
    category: 'Cleaning / Support Tools',
    description: 'For more than 15 years, Micro Balance has delivered non‑toxic cleaning solutions, homeopathic support, and professional‑grade supplements designed to help you reduce mold stress in your home and support your body’s natural balance. Affiliate link',
    link: 'https://microbalancehealthproducts.com/?rfsn=8931013.504c93',
    external: true,
    image: '/microbalance-logo.png',
  },
  {
    title: 'EPA Indoor Air Quality Guide',
    category: 'Educational Resources',
    description: 'The EPA\'s official guide to indoor air quality, mold, and moisture control for homeowners and renters.',
    link: 'https://www.epa.gov/indoor-air-quality-iaq',
    external: true,
  },
  {
    title: 'CDC Mold Information Page',
    category: 'Educational Resources',
    description: 'The CDC\'s overview of mold-related health effects, prevention guidance, and remediation recommendations.',
    link: 'https://www.cdc.gov/mold/',
    external: true,
  },
]

const insights: Insight[] = [
  {
    name: 'Santa Fe Advance 2 Dehumidifier',
    summary: 'A crawlspace and whole-home dehumidifier built for coastal climates.',
    why: 'Coastal OC homes often deal with marine layer humidity that standard dehumidifiers cannot keep up with. Units like the Santa Fe Advance are engineered for sustained high-humidity environments.',
    link: '#',
  },
  {
    name: 'Govee WiFi Hygrometer',
    summary: 'Affordable, accurate humidity and temperature sensor with app alerts.',
    why: 'A simple way to monitor problem rooms (bathrooms, crawlspaces, attics) without hiring anyone. Set alerts above 55% RH so you can act before mold has a chance to grow.',
    link: 'https://www.amazon.com/dp/B0CF45477Z/ref=twister_B09BHSLWBL?_encoding=UTF8&th=1',
  },
]

const helpfulLinks: { heading: string; items: { label: string; href: string; external?: boolean }[] }[] = [
  {
    heading: 'Inspection Prep',
    items: [
      { label: 'Our Inspection Process', href: '/process' },
      { label: 'Pricing & What to Expect', href: '/pricing' },
      { label: 'Contact Us to Schedule', href: '/contact' },
      { label: 'Mold Inspection Services', href: '/home-inspector/services/mold-inspection' },
      { label: 'Air Sampling & Testing', href: '/environmental-consultant/services/indoor-air-testing' },
    ],
  },
  {
    heading: 'Mold Education',
    items: [
      { label: 'How Fast Can Mold Spread?', href: '/blog/how-fast-can-mold-spread-in-home' },
      { label: 'Health Effects of Mold Exposure', href: '/blog/understanding-health-effects-mold-holistic-perspective' },
      { label: 'Signs of Hidden Mold', href: '/blog/signs-hidden-mold-home' },
      { label: 'Mold After Holidays (Case Study)', href: '/blog/case-study-mold-discovery-after-holidays-dana-point' },
    ],
  },
  {
    heading: 'Indoor Air Quality',
    items: [
      { label: 'EPA Indoor Air Quality Guide', href: 'https://www.epa.gov/indoor-air-quality-iaq', external: true },
      { label: 'ERMI Testing Info (EPA)', href: 'https://www.epa.gov/mold/mold-and-indoor-air-quality', external: true },
      { label: 'CDC Mold Overview', href: 'https://www.cdc.gov/mold/', external: true },
      { label: 'Indoor Air Quality Association (IAQA)', href: 'https://www.iaqa.org', external: true },
    ],
  },
  {
    heading: 'Trusted Resources',
    items: [
      { label: 'IAC2 Inspector Verification (Keippela)', href: 'https://iac2.org/verify-a-consultant/?search_term=keippela', external: true },
      { label: 'AIHA (Industrial Hygienist Association)', href: 'https://www.aiha.org', external: true },
      { label: 'OC Mold Pros on Yelp', href: 'https://www.yelp.com/biz/oc-mold-pros-san-clemente-4', external: true },
      { label: 'OC Mold Pros on Houzz', href: 'https://www.houzz.com/pro/jason-keippela', external: true },
    ],
  },
]

const faqs = [
  {
    q: 'What should I do before a mold inspection?',
    a: 'Try not to clean or paint over any areas you\'re concerned about — we need to see them as-is. Make sure all rooms are accessible, including attics, crawlspaces, and garage areas. If you have a recent water event (leak, flood, overflow), document it with photos. A little heads-up on your concerns before we arrive helps us focus the inspection.',
  },
  {
    q: 'Are these products sold by OC Mold Pros?',
    a: 'No. OC Mold Pros does not sell products. Everything on this page is shared strictly for educational and reference purposes. These are tools and resources that come up in conversations with clients. We believe in giving you practical information — not trying to sell you anything.',
  },
  {
    q: 'Do you personally test or endorse these products?',
    a: 'Some of these tools are ones we have used or seen used in the field. Others are well-regarded by industry professionals and widely recommended in the mold and indoor air quality space. We share them because they\'re commonly useful — not because we receive any compensation for doing so.',
  },
  {
    q: 'Can I use these recommendations even if I\'m not a client?',
    a: 'Absolutely. This page is public and meant to help anyone dealing with mold-related concerns, whether or not you\'ve worked with us. If any of it raises questions for your specific situation, give us a call — the initial consultation is free.',
  },
  {
    q: 'Will these links become affiliate links later?',
    a: 'Possibly. If we ever add affiliate links, we will disclose it clearly on this page. Any recommendation made here is based on practical value first, not financial incentive.',
  },
  {
    q: 'How do I know if I need a mold inspection vs. just buying an air purifier?',
    a: 'An air purifier helps with airborne particles but does not address the source. If you are seeing visible mold, smelling musty odors, or experiencing unexplained symptoms like headaches or respiratory irritation, an inspection is the right first step. Air purifiers are useful maintenance tools after the source has been identified and addressed.',
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 bg-white hover:bg-ocean-50 transition-colors"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-semibold text-gray-900">{q}</span>
        <svg
          className={`w-5 h-5 text-ocean-600 flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
          <p className="text-gray-700 leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  )
}

export default function ResourceHubPage() {
  return (
    <main className="pt-28">
      {/* Breadcrumb */}
      <nav className="bg-gray-100 py-3">
        <div className="max-w-6xl mx-auto px-4">
          <ol className="flex items-center gap-2 text-sm text-gray-600">
            <li><Link href="/" className="hover:text-gray-900">Home</Link></li>
            <li>/</li>
            <li className="text-gray-900 font-medium">Resource Hub</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-16 bg-gradient-to-b from-ocean-50 to-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-sm font-semibold text-ocean-600 uppercase tracking-widest mb-3">OC Mold Pros</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Resource Hub</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Practical videos, trusted tool recommendations, helpful links, and plain-language guidance — all in one place. Whether you're preparing for an inspection, recovering from remediation, or just doing your homework, this is where to start.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href={`tel:${PHONE}`}
              className="px-8 py-4 bg-ocean-600 text-white rounded-lg hover:bg-ocean-700 transition-colors font-semibold text-lg"
            >
              Call for a Free 20-Min Consultation
            </a>
            <a
              href="#videos"
              className="px-8 py-4 border-2 border-ocean-600 text-ocean-700 rounded-lg hover:bg-ocean-50 transition-colors font-semibold text-lg"
            >
              Watch Videos
            </a>
          </div>

          {/* Anchor nav */}
          <div className="flex flex-wrap justify-center gap-3">
            {anchorSections.map((s) => (
              <a
                key={s.href}
                href={s.href}
                className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-ocean-400 hover:text-ocean-700 transition-colors shadow-sm"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Videos */}
      <section id="videos" className="py-16 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">How-To Videos</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">Short, practical videos covering mold basics, inspection prep, and what to expect throughout the process.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((v, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                {v.youtubeId ? (
                  <div className="relative w-full" style={{ paddingBottom: '177.78%' }}>
                    <iframe
                      src={`https://www.youtube.com/embed/${v.youtubeId}`}
                      title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                ) : (
                  <div className="h-48 bg-gradient-to-br from-ocean-400 to-ocean-700 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                )}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{v.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{v.description}</p>
                  {v.youtubeId ? (
                    <a
                      href={`https://www.youtube.com/watch?v=${v.youtubeId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-sm font-medium text-ocean-600 hover:text-ocean-800 transition-colors"
                    >
                      Watch on YouTube →
                    </a>
                  ) : (
                    <span className="inline-block text-sm font-medium text-gray-400 italic">Coming soon</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Tools & Resources */}
      <section id="tools" className="py-16 bg-gray-50 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Products we recommended</h2>
          <p className="text-gray-600 mb-3 max-w-2xl">
            Resources that come up often in client conversations. These are curated for practical value.
          </p>
          <p className="text-xs text-gray-400 mb-10 max-w-2xl italic">
            Disclaimer: Recommendations are shared for educational purposes only. OC Mold Pros does not sell these products but may receive compensation for listing them. Links may become affiliate links in the future, and will be clearly disclosed if so.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((r, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                <div className="h-36 bg-gradient-to-br from-ocean-50 to-ocean-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  {r.image ? (
                    <img src={r.image} alt={r.title} className="max-h-full max-w-full object-contain p-3" />
                  ) : (
                    <svg className="w-10 h-10 text-ocean-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  )}
                </div>
                <span className="text-xs font-semibold text-ocean-700 uppercase tracking-wide mb-2">{r.category}</span>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{r.title}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-1">{r.description}</p>
                {r.external ? (
                  <a
                    href={r.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-sm font-medium text-ocean-600 hover:text-ocean-800 transition-colors"
                  >
                    View Resource →
                  </a>
                ) : (
                  <span className="inline-block text-sm font-medium text-gray-400 italic">Link coming soon</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product / Resource Insights */}
      <section id="insights" className="py-16 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Resource Insights</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">Short writeups on specific products and resources — why they exist, who they help, and when they make sense.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {insights.map((item, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                {item.image && (
                  <div className="h-24 bg-gradient-to-br from-ocean-50 to-ocean-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                    <img src={item.image} alt={item.name} className="max-h-full max-w-full object-contain p-3" />
                  </div>
                )}
                <h3 className="text-xl font-bold text-gray-900 mb-1">{item.name}</h3>
                <p className="text-ocean-700 font-medium text-sm mb-3">{item.summary}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-1">
                  <span className="font-semibold text-gray-700">Why it may help: </span>
                  {item.why}
                </p>
                {item.link === '#' ? (
                  <span className="text-sm font-medium text-gray-400 italic">Link coming soon</span>
                ) : (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-ocean-600 hover:text-ocean-800 transition-colors"
                  >
                    Learn More →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Helpful Links */}
      <section id="links" className="py-16 bg-gray-50 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Helpful Links</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">A quick-access reference for both internal pages and external resources we point clients to most often.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {helpfulLinks.map((group, i) => (
              <div key={i}>
                <h3 className="text-sm font-bold text-ocean-700 uppercase tracking-widest mb-4">{group.heading}</h3>
                <ul className="space-y-2">
                  {group.items.map((item, j) => (
                    <li key={j}>
                      {item.external ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-gray-700 hover:text-ocean-700 transition-colors flex items-center gap-1.5 group"
                        >
                          {item.label}
                          <svg className="w-3 h-3 text-gray-400 group-hover:text-ocean-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      ) : (
                        <Link href={item.href} className="text-sm text-gray-700 hover:text-ocean-700 transition-colors">
                          {item.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 scroll-mt-24">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Quick Answers</h2>
          <p className="text-gray-600 mb-10">Common questions about this page, our recommendations, and what to do next.</p>
          <div className="space-y-3">
            {faqs.map((item, i) => (
              <FAQItem key={i} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-ocean-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need help figuring out what's going on in your home?</h2>
          <p className="text-ocean-200 text-xl mb-10 max-w-2xl mx-auto">
            Call for a free 20-minute consultation. No pressure, no sales pitch — just honest answers about what you're dealing with.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${PHONE}`}
              className="px-8 py-4 bg-white text-ocean-900 rounded-lg hover:bg-ocean-50 transition-colors font-bold text-lg"
            >
              Call {PHONE_DISPLAY}
            </a>
            <Link
              href="/contact"
              className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors font-semibold text-lg"
            >
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
