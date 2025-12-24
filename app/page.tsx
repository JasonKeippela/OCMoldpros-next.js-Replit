import Image from 'next/image'
import Navigation from './components/Navigation'

function HeroSection() {
  return (
    <section className="relative pt-20">
      <div style={{ position: 'relative' }} className="h-[500px] md:h-[600px] w-full">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/2/24/San_Clemente_Pier%2C_San_Clemente%2C_California.jpg"
          alt="San Clemente Pier overlooking the Pacific Ocean in Orange County, California"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-900/60 to-ocean-900/40 z-10" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-4xl">
            Professional Mold Inspection & Remediation
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
            Protecting Orange County homes and businesses from mold since 2010
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:9493715934" className="px-8 py-4 bg-white text-ocean-700 rounded-lg hover:bg-ocean-50 transition-colors font-semibold text-lg shadow-lg">
              Call 949-371-5934
            </a>
            <a href="#contact" className="px-8 py-4 bg-ocean-600 text-white border-2 border-white rounded-lg hover:bg-ocean-700 transition-colors font-semibold text-lg shadow-lg">
              Book an Inspection
            </a>
          </div>
        </div>
      </div>
      <p className="text-xs text-gray-500 text-center py-2 bg-gray-50">
        Image: San Clemente Pier, California. Photo by <a href="https://commons.wikimedia.org/wiki/File:San_Clemente_Pier,_San_Clemente,_California.jpg" target="_blank" rel="noopener noreferrer" className="underline hover:text-ocean-600">Wikimedia Commons</a> (CC BY-SA 4.0)
      </p>
    </section>
  )
}

function ServicesSection() {
  const services = [
    {
      title: 'Mold Inspection',
      description: 'Comprehensive visual inspection and moisture assessment to identify mold growth and potential problem areas.',
      icon: '🔍'
    },
    {
      title: 'Mold Testing',
      description: 'Professional air quality and surface sampling to determine mold types and contamination levels.',
      icon: '🧪'
    },
    {
      title: 'Mold Remediation',
      description: 'Safe and effective mold removal following industry best practices and EPA guidelines.',
      icon: '🛡️'
    },
    {
      title: 'Prevention Services',
      description: 'Moisture control solutions and recommendations to prevent future mold growth.',
      icon: '💧'
    }
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">Our Services</h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Complete mold solutions for residential and commercial properties throughout Orange County
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-ocean-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-ocean-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorksSection() {
  const steps = [
    {
      step: '1',
      title: 'Schedule an Inspection',
      description: 'Call us or book online to schedule a convenient time for our certified inspector to visit your property.'
    },
    {
      step: '2',
      title: 'Professional Assessment',
      description: 'Our expert will conduct a thorough inspection, including moisture readings and visual examination.'
    },
    {
      step: '3',
      title: 'Detailed Report',
      description: 'Receive a comprehensive report with findings, photos, and recommended next steps.'
    },
    {
      step: '4',
      title: 'Remediation Plan',
      description: 'If needed, we\'ll create a customized remediation plan and provide a transparent quote.'
    }
  ]

  return (
    <section id="how-it-works" className="py-20 bg-ocean-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">How It Works</h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Our simple 4-step process makes mold inspection and remediation easy
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div key={index} className="relative">
              <div className="w-12 h-12 bg-ocean-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                {item.step}
              </div>
              <h3 className="text-xl font-semibold text-ocean-800 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-ocean-700">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
        <p className="text-xl text-ocean-100 mb-8">
          Contact us today for a free consultation. We serve all of Orange County including Irvine, Newport Beach, San Clemente, and more.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:9493715934" className="px-8 py-4 bg-white text-ocean-700 rounded-lg hover:bg-ocean-50 transition-colors font-semibold text-lg shadow-lg">
            Call 949-371-5934
          </a>
          <a href="mailto:info@ocmoldpros.com" className="px-8 py-4 bg-ocean-600 text-white border-2 border-white rounded-lg hover:bg-ocean-800 transition-colors font-semibold text-lg shadow-lg">
            Email Us
          </a>
        </div>
        <div className="mt-12 text-ocean-200">
          <p className="font-medium">OC Mold Pros</p>
          <p>Serving Orange County, California</p>
          <p className="mt-2">Licensed & Insured</p>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-ocean-900 text-ocean-200 py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="mb-2">&copy; {new Date().getFullYear()} OC Mold Pros. All rights reserved.</p>
        <p className="text-sm text-ocean-400">Professional mold inspection and remediation services in Orange County, California</p>
      </div>
    </footer>
  )
}

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <HowItWorksSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
