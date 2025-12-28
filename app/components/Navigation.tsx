'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const cities = [
  'Irvine', 'Newport Beach', 'Huntington Beach', 'Anaheim', 'Santa Ana', 'Costa Mesa',
  'Fullerton', 'Orange', 'Garden Grove', 'Mission Viejo', 'Westminster', 'Yorba Linda',
  'San Clemente', 'Lake Forest', 'Tustin', 'Buena Park', 'Aliso Viejo', 'Laguna Niguel',
  'Brea', 'Placentia', 'Laguna Beach', 'Cypress', 'Laguna Hills', 'La Habra',
  'Seal Beach', 'Fountain Valley', 'Dana Point', 'San Juan Capistrano',
  'Rancho Santa Margarita', 'Stanton', 'La Palma', 'Villa Park', 'Los Alamitos'
]

function cityToSlug(city: string) {
  return city.toLowerCase().replace(/\s+/g, '-') + '-ca'
}

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [serviceAreasOpen, setServiceAreasOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/logo.jpg" alt="OC Mold Pros - Professional Mold Inspection Services in Orange County, CA" width={420} height={180} className="h-20 w-auto" />
        </Link>
        
        <div className="hidden lg:flex items-center gap-6">
          <Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">Home</Link>
          <Link href="/about" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">About</Link>
          <Link href="/services" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">Services</Link>
          
          <div className="relative" onMouseEnter={() => setServiceAreasOpen(true)} onMouseLeave={() => setServiceAreasOpen(false)}>
            <Link href="/service-areas" className="text-gray-700 hover:text-gray-900 transition-colors font-medium flex items-center gap-1">
              Service Areas
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </Link>
            {serviceAreasOpen && (
              <div className="absolute top-full left-0 bg-white shadow-xl rounded-lg py-4 w-64 max-h-96 overflow-y-auto z-50">
                {cities.map(city => (
                  <Link key={city} href={`/service-areas/${cityToSlug(city)}`} className="block px-4 py-2 text-gray-700 hover:bg-ocean-50 hover:text-gray-900 transition-colors text-sm">
                    {city}, CA
                  </Link>
                ))}
              </div>
            )}
          </div>
          
          <Link href="/process" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">Process</Link>
          <Link href="/pricing" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">Packages</Link>
          <Link href="/blog" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">Learn</Link>
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:9493715934" className="px-4 py-2 text-gray-900 border border-ocean-600 rounded-lg hover:bg-ocean-50 transition-colors font-medium">
            949-371-5934
          </a>
          <Link href="/contact" className="px-4 py-2 bg-ocean-600 text-white rounded-lg hover:bg-ocean-700 transition-colors font-medium">
            Book Inspection
          </Link>
        </div>

        <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          <div className="px-4 py-4 space-y-3">
            <Link href="/" className="block text-gray-700 hover:text-gray-900 font-medium" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link href="/about" className="block text-gray-700 hover:text-gray-900 font-medium" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link href="/services" className="block text-gray-700 hover:text-gray-900 font-medium" onClick={() => setMobileMenuOpen(false)}>Services</Link>
            <Link href="/service-areas" className="block text-gray-700 hover:text-gray-900 font-medium" onClick={() => setMobileMenuOpen(false)}>Service Areas</Link>
            <Link href="/process" className="block text-gray-700 hover:text-gray-900 font-medium" onClick={() => setMobileMenuOpen(false)}>Process</Link>
            <Link href="/pricing" className="block text-gray-700 hover:text-gray-900 font-medium" onClick={() => setMobileMenuOpen(false)}>Packages</Link>
            <Link href="/blog" className="block text-gray-700 hover:text-gray-900 font-medium" onClick={() => setMobileMenuOpen(false)}>Learn</Link>
            <div className="pt-3 space-y-2">
              <a href="tel:9493715934" className="block w-full text-center px-4 py-2 text-gray-900 border border-ocean-600 rounded-lg">949-371-5934</a>
              <Link href="/contact" className="block w-full text-center px-4 py-2 bg-ocean-600 text-white rounded-lg" onClick={() => setMobileMenuOpen(false)}>Book Inspection</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
