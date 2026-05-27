import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        pathname: '/wikipedia/commons/**',
      },
    ],
  },
  allowedDevOrigins: ['*.replit.dev', '*.replit.app', '*.kirk.replit.dev'],
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'no-cache, must-revalidate' },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // General page redirects
      { source: '/packages', destination: '/pricing', permanent: true },
      { source: '/about-us', destination: '/about', permanent: true },
      { source: '/locations', destination: '/mold-inspector-near-me', permanent: true },
      { source: '/service-areas', destination: '/mold-inspector-near-me', permanent: true },
      { source: '/service-areas/:path*', destination: '/mold-inspector-near-me/:path*', permanent: true },
      // /blog with blogcategory query param → /blog (clean; 'has' params are not forwarded by Next.js)
      {
        source: '/blog',
        has: [{ type: 'query', key: 'blogcategory' }],
        destination: '/blog',
        permanent: true,
      },
      // /blog-1/f.rss and /easy-breathing → /blog
      { source: '/blog-1/f.rss', destination: '/blog', permanent: true },
      { source: '/easy-breathing', destination: '/blog', permanent: true },
      // Legacy blog redirects - exact paths with query params first (most specific)
      { 
        source: '/education/f/the-cost-of-ignoring-mold-issues-protect-your-health-and-home',
        has: [{ type: 'query', key: 'blogcategory', value: 'Mold Illness' }],
        destination: '/blog',
        permanent: true
      },
      { 
        source: '/education/f/identifying-the-signs-of-mold-illness',
        has: [{ type: 'query', key: 'blogcategory', value: 'Mold Illness' }],
        destination: '/blog',
        permanent: true
      },
      { 
        source: '/blog-1/f/how-air-purifiers-reduce-allergies-improve-air-quality',
        has: [{ type: 'query', key: 'blogcategory', value: 'Air Quality' }],
        destination: '/blog',
        permanent: true
      },
      // Legacy blog redirects - exact paths without query params
      { source: '/education/f/the-cost-of-ignoring-mold-issues-protect-your-health-and-home', destination: '/blog/understanding-health-effects-mold-holistic-perspective', permanent: true },
      { source: '/education/f/identifying-the-signs-of-mold-illness', destination: '/blog', permanent: true },
      { source: '/blog-1/f/the-cost-of-ignoring-mold-issues-protect-your-health-and-home', destination: '/blog/how-fast-can-mold-spread-in-home', permanent: true },
      // Legacy redirects - /education with multiple query params
      { 
        source: '/education',
        has: [
          { type: 'query', key: 'blog', value: 'y' },
          { type: 'query', key: 'blogcategory', value: 'Mold Illness' }
        ],
        destination: '/blog',
        permanent: true
      },
      { 
        source: '/education',
        has: [
          { type: 'query', key: 'blog', value: 'y' },
          { type: 'query', key: 'blogcategory', value: 'Costs' }
        ],
        destination: '/blog',
        permanent: true
      },
      // Legacy redirects - /education with single query param
      { 
        source: '/education',
        has: [{ type: 'query', key: 'blogcategory', value: 'Costs' }],
        destination: '/pricing',
        permanent: true
      },
      { 
        source: '/education',
        has: [{ type: 'query', key: 'blogcategory', value: 'Mold Illness' }],
        destination: '/blog',
        permanent: true
      },
      { 
        source: '/education',
        has: [{ type: 'query', key: 'blog', value: 'y' }],
        destination: '/blog',
        permanent: true
      },
      // Broad /education fallback (must be last for /education)
      { source: '/education', destination: '/blog', permanent: true },
      // Legacy /blog-1 redirects
      { 
        source: '/blog-1',
        has: [{ type: 'query', key: 'blogcategory', value: 'Costs' }],
        destination: '/pricing',
        permanent: true
      },
      { source: '/blog-1', destination: '/blog', permanent: true },
      // 301 Redirects for removed/invalid service area URLs
      { source: '/service-areas/rowland-heights-ca', destination: '/mold-inspector-near-me', permanent: true },
      { source: '/service-areas/cerritos-ca', destination: '/mold-inspector-near-me', permanent: true },
      { source: '/service-areas/long-beach-ca', destination: '/mold-inspector-near-me', permanent: true },
      { source: '/service-areas/rossmoor-ca', destination: '/mold-inspector-near-me', permanent: true },
      { source: '/service-areas/trabuco-canyon-ca', destination: '/mold-inspector-near-me', permanent: true },
      { source: '/service-areas/ladera-ranch-ca', destination: '/mold-inspector-near-me', permanent: true },
      { source: '/service-areas/coto-de-caza-ca', destination: '/mold-inspector-near-me', permanent: true },
      { source: '/service-areas/whittier-ca', destination: '/mold-inspector-near-me', permanent: true },
      { source: '/service-areas/la-habra-heights-ca', destination: '/mold-inspector-near-me', permanent: true },
      { source: '/service-areas/north-tustin-ca', destination: '/mold-inspector-near-me/tustin-ca', permanent: true },
      { source: '/service-areas/foothill-ranch-ca', destination: '/mold-inspector-near-me/lake-forest-ca', permanent: true },
      { source: '/service-areas/diamond-bar-ca', destination: '/mold-inspector-near-me', permanent: true },

      // ── Service page 301 redirects: /services/{slug} → canonical /{category}/services/{slug} ──

      // Home Inspector services
      { source: '/services/mold-sampling', destination: '/home-inspector/services/mold-sampling', permanent: true },
      { source: '/services/new-construction-inspections', destination: '/home-inspector/services/new-construction-inspections', permanent: true },
      { source: '/services/rental-property-inspections', destination: '/home-inspector/services/rental-property-inspections', permanent: true },
      { source: '/services/mold-prevention', destination: '/home-inspector/services/mold-prevention', permanent: true },
      { source: '/services/physical-and-visual-inspection', destination: '/home-inspector/services/physical-and-visual-inspection', permanent: true },
      { source: '/services/hvac-system-inspection', destination: '/home-inspector/services/hvac-system-inspection', permanent: true },
      { source: '/services/kitchen-inspection', destination: '/home-inspector/services/kitchen-inspection', permanent: true },
      { source: '/services/bathroom-inspection', destination: '/home-inspector/services/bathroom-inspection', permanent: true },
      { source: '/services/real-estate-inspection', destination: '/home-inspector/services/real-estate-inspection', permanent: true },

      // Environmental Consultant services
      { source: '/services/indoor-air-testing', destination: '/environmental-consultant/services/indoor-air-testing', permanent: true },
      { source: '/services/certified-mold-inspector', destination: '/environmental-consultant/services/certified-mold-inspector', permanent: true },
      { source: '/services/mold-inspection', destination: '/environmental-consultant/services/mold-inspection', permanent: true },
      { source: '/services/mold-testing', destination: '/environmental-consultant/services/mold-testing', permanent: true },
      { source: '/services/ermi-testing', destination: '/environmental-consultant/services/ermi-testing', permanent: true },
      { source: '/services/thermal-imaging-inspection', destination: '/environmental-consultant/services/thermal-imaging-inspection', permanent: true },
      { source: '/services/indoor-allergen-sampling', destination: '/environmental-consultant/services/indoor-allergen-sampling', permanent: true },
      { source: '/services/mycotoxin-testing', destination: '/environmental-consultant/services/mycotoxin-testing', permanent: true },
      { source: '/services/custom-mold-action-plans', destination: '/environmental-consultant/services/custom-mold-action-plans', permanent: true },

      // Water Damage Restoration services
      { source: '/services/mold-cleaning', destination: '/water-damage-restoration-service/services/mold-cleaning', permanent: true },
      { source: '/services/mold-damage-restoration', destination: '/water-damage-restoration-service/services/mold-damage-restoration', permanent: true },
      { source: '/services/mold-mitigation', destination: '/water-damage-restoration-service/services/mold-mitigation', permanent: true },
      { source: '/services/mold-remediation', destination: '/water-damage-restoration-service/services/mold-remediation', permanent: true },

      // ── Additional legacy service URL redirects ──

      // Mold Sampling legacy
      { source: '/mold-sampling-service', destination: '/home-inspector/services/mold-sampling', permanent: true },
      { source: '/mold-sampling', destination: '/home-inspector/services/mold-sampling', permanent: true },
      { source: '/services/mold-sampling-service', destination: '/home-inspector/services/mold-sampling', permanent: true },

      // New Construction Inspections legacy
      { source: '/new-construction-inspection', destination: '/home-inspector/services/new-construction-inspections', permanent: true },
      { source: '/new-construction-inspections', destination: '/home-inspector/services/new-construction-inspections', permanent: true },
      { source: '/services/new-construction-inspection', destination: '/home-inspector/services/new-construction-inspections', permanent: true },

      // Rental Property Inspections legacy
      { source: '/rental-property-inspection', destination: '/home-inspector/services/rental-property-inspections', permanent: true },
      { source: '/rental-property-inspections', destination: '/home-inspector/services/rental-property-inspections', permanent: true },
      { source: '/services/rental-property-inspection', destination: '/home-inspector/services/rental-property-inspections', permanent: true },

      // Mold Prevention legacy
      { source: '/mold-prevention', destination: '/home-inspector/services/mold-prevention', permanent: true },
      { source: '/mold-prevention-consultation', destination: '/home-inspector/services/mold-prevention', permanent: true },
      { source: '/services/mold-prevention-consultation', destination: '/home-inspector/services/mold-prevention', permanent: true },

      // Physical and Visual Inspection legacy
      { source: '/physical-visual-inspection', destination: '/home-inspector/services/physical-and-visual-inspection', permanent: true },
      { source: '/physical-and-visual-inspection', destination: '/home-inspector/services/physical-and-visual-inspection', permanent: true },
      { source: '/visual-inspection', destination: '/home-inspector/services/physical-and-visual-inspection', permanent: true },
      { source: '/services/visual-inspection', destination: '/home-inspector/services/physical-and-visual-inspection', permanent: true },

      // HVAC System Inspection legacy
      { source: '/hvac-inspection', destination: '/home-inspector/services/hvac-system-inspection', permanent: true },
      { source: '/hvac-system-inspection', destination: '/home-inspector/services/hvac-system-inspection', permanent: true },
      { source: '/services/hvac-inspection', destination: '/home-inspector/services/hvac-system-inspection', permanent: true },

      // Kitchen Inspection legacy
      { source: '/kitchen-inspection', destination: '/home-inspector/services/kitchen-inspection', permanent: true },

      // Bathroom Inspection legacy
      { source: '/bathroom-inspection', destination: '/home-inspector/services/bathroom-inspection', permanent: true },

      // Real Estate Inspection legacy
      { source: '/real-estate-inspection', destination: '/home-inspector/services/real-estate-inspection', permanent: true },
      { source: '/homebuyer-mold-inspection', destination: '/home-inspector/services/real-estate-inspection', permanent: true },
      { source: '/real-estate-mold-inspection', destination: '/home-inspector/services/real-estate-inspection', permanent: true },
      { source: '/services/real-estate-mold-inspection', destination: '/home-inspector/services/real-estate-inspection', permanent: true },

      // Indoor Air Testing legacy
      { source: '/indoor-air-testing', destination: '/environmental-consultant/services/indoor-air-testing', permanent: true },
      { source: '/indoor-air-quality-testing', destination: '/environmental-consultant/services/indoor-air-testing', permanent: true },
      { source: '/air-quality-testing', destination: '/environmental-consultant/services/indoor-air-testing', permanent: true },
      { source: '/services/indoor-air-quality-testing', destination: '/environmental-consultant/services/indoor-air-testing', permanent: true },

      // Certified Mold Inspector legacy
      { source: '/certified-mold-inspector', destination: '/environmental-consultant/services/certified-mold-inspector', permanent: true },
      { source: '/certified-mold-inspection', destination: '/environmental-consultant/services/certified-mold-inspector', permanent: true },
      { source: '/services/certified-mold-inspection', destination: '/environmental-consultant/services/certified-mold-inspector', permanent: true },

      // Mold Inspection legacy
      { source: '/mold-inspection', destination: '/environmental-consultant/services/mold-inspection', permanent: true },
      { source: '/mold-inspection-orange-county', destination: '/environmental-consultant/services/mold-inspection', permanent: true },
      { source: '/mold-inspection-san-clemente', destination: '/environmental-consultant/services/mold-inspection', permanent: true },

      // Mold Testing legacy
      { source: '/mold-testing', destination: '/environmental-consultant/services/mold-testing', permanent: true },
      { source: '/mold-testing-orange-county', destination: '/environmental-consultant/services/mold-testing', permanent: true },
      { source: '/mold-testing-san-clemente', destination: '/environmental-consultant/services/mold-testing', permanent: true },

      // ERMI Testing legacy
      { source: '/ermi-testing', destination: '/environmental-consultant/services/ermi-testing', permanent: true },
      { source: '/ermi-mold-testing', destination: '/environmental-consultant/services/ermi-testing', permanent: true },
      { source: '/services/ermi-mold-testing', destination: '/environmental-consultant/services/ermi-testing', permanent: true },

      // Thermal Imaging Inspection legacy
      { source: '/thermal-imaging', destination: '/environmental-consultant/services/thermal-imaging-inspection', permanent: true },
      { source: '/thermal-imaging-inspection', destination: '/environmental-consultant/services/thermal-imaging-inspection', permanent: true },
      { source: '/moisture-intrusion-inspection', destination: '/environmental-consultant/services/thermal-imaging-inspection', permanent: true },
      { source: '/services/thermal-imaging', destination: '/environmental-consultant/services/thermal-imaging-inspection', permanent: true },

      // Indoor Allergen Sampling legacy
      { source: '/indoor-allergen-sampling', destination: '/environmental-consultant/services/indoor-allergen-sampling', permanent: true },
      { source: '/allergen-sampling', destination: '/environmental-consultant/services/indoor-allergen-sampling', permanent: true },
      { source: '/indoor-allergen-testing', destination: '/environmental-consultant/services/indoor-allergen-sampling', permanent: true },
      { source: '/services/allergen-sampling', destination: '/environmental-consultant/services/indoor-allergen-sampling', permanent: true },

      // Mycotoxin Testing legacy
      { source: '/mycotoxin-testing', destination: '/environmental-consultant/services/mycotoxin-testing', permanent: true },

      // Custom Mold Action Plans legacy
      { source: '/custom-mold-action-plan', destination: '/environmental-consultant/services/custom-mold-action-plans', permanent: true },
      { source: '/custom-mold-action-plans', destination: '/environmental-consultant/services/custom-mold-action-plans', permanent: true },
      { source: '/mold-action-plan', destination: '/environmental-consultant/services/custom-mold-action-plans', permanent: true },
      { source: '/mold-remediation-plan', destination: '/environmental-consultant/services/custom-mold-action-plans', permanent: true },

      // Mold Cleaning legacy
      { source: '/mold-cleaning', destination: '/water-damage-restoration-service/services/mold-cleaning', permanent: true },

      // Mold Damage Restoration legacy
      { source: '/mold-damage-restoration', destination: '/water-damage-restoration-service/services/mold-damage-restoration', permanent: true },
      { source: '/mold-restoration', destination: '/water-damage-restoration-service/services/mold-damage-restoration', permanent: true },
      { source: '/services/mold-restoration', destination: '/water-damage-restoration-service/services/mold-damage-restoration', permanent: true },

      // Mold Mitigation legacy
      { source: '/mold-mitigation', destination: '/water-damage-restoration-service/services/mold-mitigation', permanent: true },

      // Mold Remediation legacy
      { source: '/mold-remediation', destination: '/water-damage-restoration-service/services/mold-remediation', permanent: true },
      { source: '/mold-removal', destination: '/water-damage-restoration-service/services/mold-remediation', permanent: true },
      { source: '/services/mold-removal', destination: '/water-damage-restoration-service/services/mold-remediation', permanent: true },
    ]
  },
};

export default nextConfig;
