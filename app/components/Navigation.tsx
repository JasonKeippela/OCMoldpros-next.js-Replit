'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const cities = [
  'Aliso Viejo', 'Anaheim', 'Brea', 'Buena Park', 'Costa Mesa', 'Cypress',
  'Dana Point', 'Fountain Valley', 'Fullerton', 'Garden Grove', 'Huntington Beach',
  'Irvine', 'La Habra', 'La Palma', 'Laguna Beach', 'Laguna Hills', 'Laguna Niguel',
  'Lake Forest', 'Los Alamitos', 'Mission Viejo', 'Newport Beach', 'Orange',
  'Placentia', 'Rancho Santa Margarita', 'San Clemente', 'San Juan Capistrano',
  'Santa Ana', 'Seal Beach', 'Stanton', 'Tustin', 'Villa Park', 'Westminster', 'Yorba Linda'
]

function cityToSlug(city: string) {
  return city.toLowerCase().replace(/\s+/g, '-') + '-ca'
}

const serviceLinks = [
  { name: "Mold Sampling", slug: "mold-sampling" },
  { name: "New Construction Inspections", slug: "new-construction-inspections" },
  { name: "Rental Property Inspections", slug: "rental-property-inspections" },
  { name: "Mold Prevention", slug: "mold-prevention" },
  { name: "Physical and Visual Inspection", slug: "physical-and-visual-inspection" },
  { name: "HVAC System Inspection", slug: "hvac-system-inspection" },
  { name: "Kitchen Inspection", slug: "kitchen-inspection" },
  { name: "Bathroom Inspection", slug: "bathroom-inspection" },
  { name: "Real Estate Inspection", slug: "real-estate-inspection" },
  { name: "Indoor Air Testing", slug: "indoor-air-testing" },
  { name: "Certified Mold Inspector", slug: "certified-mold-inspector" },
  { name: "Mold Inspection", slug: "mold-inspection" },
  { name: "Mold Testing", slug: "mold-testing" },
  { name: "ERMI Testing", slug: "ermi-testing" },
  { name: "Thermal Imaging Inspection", slug: "thermal-imaging-inspection" },
  { name: "Indoor Allergen Sampling", slug: "indoor-allergen-sampling" },
  { name: "Mycotoxin Testing", slug: "mycotoxin-testing" },
  { name: "Custom Mold Action Plans", slug: "custom-mold-action-plans" },
  { name: "Mold Cleaning", slug: "mold-cleaning" },
  { name: "Mold Damage Restoration", slug: "mold-damage-restoration" },
  { name: "Mold Mitigation", slug: "mold-mitigation" },
  { name: "Mold Remediation", slug: "mold-remediation" },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [serviceAreasOpen, setServiceAreasOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false)
  const [mobileAreasExpanded, setMobileAreasExpanded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor
      const isMobileUA = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase())
      const isMobileWidth = window.innerWidth < 768
      setIsMobile(isMobileUA || isMobileWidth)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'}`}>
      <div className={`max-w-7xl mx-auto px-4 pb-0 flex items-center justify-between ${isMobile ? 'pt-2' : 'pt-6'}`}>
        <Link href="/" className="flex items-center">
          <Image src="/logo.jpg" alt="OC Mold Pros - Professional Mold Inspection Services in Orange County, CA" width={1050} height={450} className={`w-auto ${isMobile ? 'h-[100px] my-[-18px]' : 'h-[200px] my-[-36px]'}`} />
        </Link>
        
        <a href="tel:9493715934" className="lg:hidden px-4 py-2 bg-ocean-600 text-white rounded-lg hover:bg-ocean-700 transition-colors font-bold text-sm">
          949-371-5934
        </a>
        
        <div className="hidden lg:flex items-center gap-6">
          <Link href="/about" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">About</Link>
          
          <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
            <Link href="/services" className="text-gray-700 hover:text-gray-900 transition-colors font-medium flex items-center gap-1">
              Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </Link>
            {servicesOpen && (
              <div className="absolute top-full left-0 bg-white shadow-xl rounded-lg py-4 w-72 max-h-96 overflow-y-auto z-50">
                {serviceLinks.map(svc => (
                  <Link key={svc.slug} href={`/services/${svc.slug}`} className="block px-4 py-2 text-gray-700 hover:bg-ocean-50 hover:text-gray-900 transition-colors text-sm">
                    {svc.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          
          <div className="relative" onMouseEnter={() => setServiceAreasOpen(true)} onMouseLeave={() => setServiceAreasOpen(false)}>
            <Link href="/mold-inspector-near-me" className="text-gray-700 hover:text-gray-900 transition-colors font-medium flex items-center gap-1">
              Mold Inspector Near Me
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </Link>
            {serviceAreasOpen && (
              <div className="absolute top-full left-0 bg-white shadow-xl rounded-lg py-4 w-64 max-h-96 overflow-y-auto z-50">
                {cities.map(city => (
                  <Link key={city} href={`/mold-inspector-near-me/${cityToSlug(city)}`} className="block px-4 py-2 text-gray-700 hover:bg-ocean-50 hover:text-gray-900 transition-colors text-sm">
                    {city}, CA
                  </Link>
                ))}
              </div>
            )}
          </div>
          
          <Link href="/process" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">Process</Link>
          <Link href="/pricing" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">Pricing</Link>
          <Link href="/blog" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">Blog</Link>
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:9493715934" className="px-4 py-2 bg-ocean-600 text-white rounded-lg hover:bg-ocean-700 transition-colors font-medium">
            949-371-5934
          </a>
          <Link href="/contact" className="px-4 py-2 text-gray-900 border border-ocean-600 rounded-lg hover:bg-ocean-50 transition-colors font-medium">
            Book your free consultation 
          </Link>
        </div>

        <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-3">
            <Link href="/about" className="block text-gray-700 hover:text-gray-900 font-medium" onClick={() => setMobileMenuOpen(false)}>About</Link>
            
            <div>
              <button className="flex items-center justify-between w-full text-gray-700 hover:text-gray-900 font-medium" onClick={() => setMobileServicesExpanded(!mobileServicesExpanded)}>
                Services
                <svg className={`w-4 h-4 transition-transform ${mobileServicesExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              {mobileServicesExpanded && (
                <div className="pl-4 mt-2 space-y-2 max-h-60 overflow-y-auto">
                  <Link href="/services" className="block text-sm text-ocean-600 font-medium" onClick={() => setMobileMenuOpen(false)}>All Services</Link>
                  {serviceLinks.map(svc => (
                    <Link key={svc.slug} href={`/services/${svc.slug}`} className="block text-sm text-gray-600 hover:text-gray-900" onClick={() => setMobileMenuOpen(false)}>
                      {svc.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div>
              <button className="flex items-center justify-between w-full text-gray-700 hover:text-gray-900 font-medium" onClick={() => setMobileAreasExpanded(!mobileAreasExpanded)}>
                Mold Inspector Near Me
                <svg className={`w-4 h-4 transition-transform ${mobileAreasExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              {mobileAreasExpanded && (
                <div className="pl-4 mt-2 space-y-2 max-h-60 overflow-y-auto">
                  <Link href="/mold-inspector-near-me" className="block text-sm text-ocean-600 font-medium" onClick={() => setMobileMenuOpen(false)}>All Areas</Link>
                  {cities.map(city => (
                    <Link key={city} href={`/mold-inspector-near-me/${cityToSlug(city)}`} className="block text-sm text-gray-600 hover:text-gray-900" onClick={() => setMobileMenuOpen(false)}>
                      {city}, CA
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/process" className="block text-gray-700 hover:text-gray-900 font-medium" onClick={() => setMobileMenuOpen(false)}>Process</Link>
            <Link href="/pricing" className="block text-gray-700 hover:text-gray-900 font-medium" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
            <Link href="/blog" className="block text-gray-700 hover:text-gray-900 font-medium" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
            <div className="pt-3 space-y-2">
              <a href="tel:9493715934" className="block w-full text-center px-4 py-2 text-gray-900 border border-ocean-600 rounded-lg">949-371-5934</a>
              <Link href="/contact" className="block w-full text-center px-4 py-2 bg-ocean-600 text-white rounded-lg" onClick={() => setMobileMenuOpen(false)}>Get Free Quote now</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
