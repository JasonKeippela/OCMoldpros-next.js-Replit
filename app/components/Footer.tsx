import Link from 'next/link'

const cities = [
  { name: 'Irvine', slug: 'irvine-ca' },
  { name: 'Newport Beach', slug: 'newport-beach-ca' },
  { name: 'Huntington Beach', slug: 'huntington-beach-ca' },
  { name: 'Anaheim', slug: 'anaheim-ca' },
  { name: 'Costa Mesa', slug: 'costa-mesa-ca' },
  { name: 'San Clemente', slug: 'san-clemente-ca' }
]

export default function Footer() {
  return (
    <footer className="bg-ocean-900 text-ocean-200">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">OC Mold Pros</h3>
            <p className="text-sm mb-4">Professional mold inspection and testing services throughout Orange County, California.</p>
            <a href="tel:9493715934" className="text-ocean-300 hover:text-white font-medium">949-371-5934</a>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/process" className="hover:text-white transition-colors">Our Process</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Service Areas</h4>
            <ul className="space-y-2 text-sm">
              {cities.map(city => (
                <li key={city.slug}>
                  <Link href={`/service-areas/${city.slug}`} className="hover:text-white transition-colors">{city.name}</Link>
                </li>
              ))}
              <li><Link href="/service-areas" className="text-ocean-300 hover:text-white transition-colors">View All Cities →</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:9493715934" className="hover:text-white transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  949-371-5934
                </a>
              </li>
              <li>
                <a href="mailto:info@ocmoldpros.com" className="hover:text-white transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  info@ocmoldpros.com
                </a>
              </li>
              <li className="pt-2">
                <span className="text-ocean-400 text-xs">Mon-Sat: 8am - 6pm</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="border-t border-ocean-800">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} OC Mold Pros. All rights reserved.</p>
          <p className="text-ocean-400 mt-2 md:mt-0">Serving all of Orange County, California</p>
        </div>
      </div>
    </footer>
  )
}
