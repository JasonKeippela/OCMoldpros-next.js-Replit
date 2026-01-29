import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Learn About Mold | Educational Resources | OC Mold Pros',
  description: 'Educational articles about mold, indoor air quality, and home health. Learn how to identify, prevent, and address mold issues in your Orange County home.',
}

const articles = [
  {
    title: 'Why Cleaning Your Washing Machine Matters More Than You Think',
    slug: 'why-cleaning-your-washing-machine-matters',
    excerpt: 'Modern washing machines create the perfect environment for mold and mildew. Learn a simple 1-week reset protocol to eliminate buildup and keep your laundry fresh.',
    category: 'Prevention',
    date: '2026-01-29',
    image: '/washing-machine-cleaning.jpg'
  },
  {
    title: 'How Fast Can Mold Spread in a Home?',
    slug: 'how-fast-can-mold-spread-in-home',
    excerpt: 'Mold can begin growing in as little as 24-48 hours after moisture is introduced. Learn what conditions allow mold to spread quickly and when to call a professional inspector.',
    category: 'Education',
    date: '2026-01-23'
  },
  {
    title: 'Case Study: Mold Discovery After the Holidays',
    slug: 'case-study-mold-discovery-after-holidays-dana-point',
    excerpt: 'A Dana Point homeowner returned from holiday travel to find visible mold in two closets. Learn how a roof leak and lack of humidity control created the perfect conditions for Aspergillus growth.',
    category: 'Case Study',
    date: '2026-01-13'
  },
  {
    title: 'Understanding the Health Effects of Mold: A Holistic Perspective',
    slug: 'understanding-health-effects-mold-holistic-perspective',
    excerpt: 'From a homeopathic and naturopathic standpoint, mold exposure can impact overall health in deeper and subtler ways than just structural concerns.',
    category: 'Health',
    date: '2026-01-12'
  },
  {
    title: 'Understanding the Health Risks of Mold Exposure',
    slug: 'understanding-health-risks-mold-exposure',
    excerpt: 'Learn about the potential health effects of mold exposure, who is most at risk, and when to seek professional help.',
    category: 'Health',
    date: '2024-12-15'
  },
  {
    title: 'Signs You May Have Hidden Mold in Your Home',
    slug: 'signs-hidden-mold-home',
    excerpt: 'Discover the warning signs that could indicate hidden mold growth in your walls, attic, or other concealed areas.',
    category: 'Detection',
    date: '2024-12-10'
  },
  {
    title: 'Preventing Mold Growth in Coastal Orange County Homes',
    slug: 'preventing-mold-growth-coastal-orange-county',
    excerpt: 'Special considerations for homes near the beach, including managing humidity and salt air exposure.',
    category: 'Prevention',
    date: '2024-12-05'
  },
  {
    title: 'What to Do If You Find Mold in Your Home',
    slug: 'what-to-do-find-mold-home',
    excerpt: 'Step-by-step guide on how to respond when you discover mold, including when to call a professional.',
    category: 'Response',
    date: '2024-11-28'
  },
  {
    title: 'The Difference Between Mold Inspection and Mold Testing',
    slug: 'difference-mold-inspection-testing',
    excerpt: 'Understanding the different types of mold assessment services and which one you need.',
    category: 'Education',
    date: '2024-11-20'
  },
  {
    title: 'Common Mold Types Found in Orange County Homes',
    slug: 'common-mold-types-orange-county',
    excerpt: 'An overview of the most common mold species we encounter during inspections and their characteristics.',
    category: 'Education',
    date: '2024-11-15'
  }
]

export default function BlogPage() {
  return (
    <main className="pt-28">
      <nav className="bg-gray-100 py-3">
        <div className="max-w-6xl mx-auto px-4">
          <ol className="flex items-center gap-2 text-sm text-gray-600">
            <li><Link href="/" className="hover:text-gray-900">Home</Link></li>
            <li>/</li>
            <li className="text-gray-900 font-medium">Blog</li>
          </ol>
        </div>
      </nav>

      <section className="py-16 bg-gradient-to-b from-ocean-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Learn About Mold</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Educational resources to help you understand mold, protect your home, and maintain healthy indoor air quality.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, i) => (
              <article key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-ocean-400 to-ocean-600"></div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium text-gray-900 bg-ocean-50 px-2 py-1 rounded">{article.category}</span>
                    <span className="text-xs text-gray-500">{new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">{article.title}</h2>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <Link href={`/blog/${article.slug}`} className="text-ocean-600 font-medium hover:text-ocean-800">Read More →</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Have a Mold Question?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            If you have questions about mold in your home that are not answered here, give us a call. We are happy to provide guidance.
          </p>
          <a href="tel:9493715934" className="inline-block px-8 py-4 bg-ocean-600 text-white rounded-lg hover:bg-ocean-700 transition-colors font-semibold text-lg">
            Call 949-371-5934
          </a>
        </div>
      </section>
    </main>
  )
}
