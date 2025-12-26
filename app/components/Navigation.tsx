'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/90 backdrop-blur-sm'}`}>
      <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <Image src="/logo.jpg" alt="OC Mold Pros - Home Inspection" width={420} height={180} className="h-28 w-auto" />
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-gray-700 hover:text-ocean-600 transition-colors">Services</a>
          <a href="#how-it-works" className="text-gray-700 hover:text-ocean-600 transition-colors">How It Works</a>
          <a href="#contact" className="text-gray-700 hover:text-ocean-600 transition-colors">Contact</a>
        </div>
        <div className="flex items-center gap-3">
          <a href="tel:9493715934" className="hidden sm:inline-block px-4 py-2 text-ocean-700 border border-ocean-600 rounded-lg hover:bg-ocean-50 transition-colors font-medium">
            Call 949-371-5934
          </a>
          <a href="#contact" className="px-4 py-2 bg-ocean-600 text-white rounded-lg hover:bg-ocean-700 transition-colors font-medium">
            Book an Inspection
          </a>
        </div>
      </div>
    </nav>
  )
}
