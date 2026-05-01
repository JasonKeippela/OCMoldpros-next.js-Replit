import Link from 'next/link'
import { CORE_SERVICE_AREAS } from '@/app/lib/cities'

export default function Footer() {
  return (
    <footer className="bg-ocean-900 text-ocean-200">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">OC Mold Pros</h3>
            <p className="text-sm mb-4">Professional mold inspection and testing services throughout Orange County, California.</p>
            <p className="text-sm mb-2">1322 Calle Avanzado, San Clemente, CA 92673</p>
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
              <li><Link href="/resource-hub" className="hover:text-white transition-colors">Resource Hub</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Service Areas</h4>
            <ul className="space-y-2 text-sm">
              {CORE_SERVICE_AREAS.slice(0, 6).map(city => (
                <li key={city.slug}>
                  <Link href={`/mold-inspector-near-me/${city.slug}`} className="hover:text-white transition-colors">{city.name}</Link>
                </li>
              ))}
              <li><Link href="/mold-inspector-near-me" className="text-ocean-300 hover:text-white transition-colors">View All Cities →</Link></li>
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
              <li>
                <a href="https://instagram.com/ocmoldpros" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  @ocmoldpros
                </a>
              </li>
              <li>
                <a href="https://www.houzz.com/pro/jason-keippela" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.01 0L5.5 3.5v8.5H2v8.5h7.5V24h5v-3.5H22V12h-3.5V3.5L12.01 0zm2.49 17h-5v-5h5v5z"/></svg>
                  Houzz
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/profile.php?id=61573717618539" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://app.spectora.com/home-inspectors/my-inspection-company-1dceb3c45f" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  Spectora
                </a>
              </li>
              <li>
                <a href="https://iac2.org/verify-a-consultant/?search_term=keippela" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                  IAC2 Certified
                </a>
              </li>
              <li>
                <a href="https://www.yelp.com/biz/oc-mold-pros-san-clemente-4" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.905-4.308a1.072 1.072 0 011.596-.206 9.194 9.194 0 011.67 4.711zm-6.165 4.408l1.432 4.995c.276.96-.8 1.74-1.63 1.176l-4.308-2.905a1.072 1.072 0 01-.206-1.596 9.194 9.194 0 014.712-1.67zm-6.997-1.633l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.905-4.308a1.072 1.072 0 011.596-.206 9.194 9.194 0 011.67 4.711zM12 2C6.477 2 2 6.477 2 12c0 .698.072 1.38.209 2.04l3.717-1.067c.117-1.644.682-3.17 1.592-4.446l-2.1-3.115A9.953 9.953 0 0112 2zm0 4a6 6 0 100 12 6 6 0 000-12z"/></svg>
                  Yelp
                </a>
              </li>
              <li>
                <a href="https://www.veteranownedbusiness.com/business/40038/oc-mold-pros" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  Veteran Owned Business
                </a>
              </li>
              <li className="pt-2">
                <span className="text-ocean-400 text-xs">Mon-Fri: 8am - 5pm, Sat: 8am - 12pm</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="border-t border-ocean-800">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="text-sm text-ocean-300 mb-3">
            <span className="text-white font-semibold">Primary Service Areas: </span>
            {CORE_SERVICE_AREAS.map((city, i) => (
              <span key={city.slug}>
                <Link href={`/mold-inspector-near-me/${city.slug}`} className="hover:text-white transition-colors">{city.name}</Link>
                {i < CORE_SERVICE_AREAS.length - 1 ? ', ' : ''}
              </span>
            ))}
          </div>
          <div className="text-sm text-ocean-400 mb-4">Serving all cities in Orange County, CA.</div>
          <div className="mb-4">
            <a href="https://www.veteranownedbusiness.com" target="_blank" rel="noopener noreferrer">
              <img src="https://www.veteranownedbusiness.com/images/banner_links/VOB-Banner-Trade-Show-Border.jpg" alt="Proud Veteran Owned Business Member!" className="h-16" />
            </a>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center text-sm border-t border-ocean-800 pt-4">
            <p>&copy; {new Date().getFullYear()} OC Mold Pros. All rights reserved.</p>
            <div className="flex items-center gap-4 mt-2 md:mt-0">
              <Link href="/privacy" className="text-ocean-400 hover:text-white transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
