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
  allowedDevOrigins: ['*'],
  async redirects() {
    return [
      // General page redirects
      { source: '/packages', destination: '/pricing', permanent: true },
      { source: '/about-us', destination: '/about', permanent: true },
      { source: '/locations', destination: '/service-areas', permanent: true },
      // Legacy blog redirects
      { source: '/blog-1/f/the-cost-of-ignoring-mold-issues-protect-your-health-and-home', destination: '/blog/how-fast-can-mold-spread-in-home', permanent: true },
      { 
        source: '/education',
        has: [{ type: 'query', key: 'blog', value: 'y' }],
        destination: '/blog',
        permanent: true
      },
      { 
        source: '/blog-1',
        has: [{ type: 'query', key: 'blogcategory', value: 'Costs' }],
        destination: '/pricing',
        permanent: true
      },
      { source: '/blog-1', destination: '/blog', permanent: true },
      // 301 Redirects for removed/invalid service area URLs
      { source: '/service-areas/rowland-heights-ca', destination: '/service-areas', permanent: true },
      { source: '/service-areas/cerritos-ca', destination: '/service-areas', permanent: true },
      { source: '/service-areas/long-beach-ca', destination: '/service-areas', permanent: true },
      { source: '/service-areas/rossmoor-ca', destination: '/service-areas', permanent: true },
      { source: '/service-areas/trabuco-canyon-ca', destination: '/service-areas', permanent: true },
      { source: '/service-areas/ladera-ranch-ca', destination: '/service-areas', permanent: true },
      { source: '/service-areas/coto-de-caza-ca', destination: '/service-areas', permanent: true },
      { source: '/service-areas/whittier-ca', destination: '/service-areas', permanent: true },
      { source: '/service-areas/la-habra-heights-ca', destination: '/service-areas', permanent: true },
      { source: '/service-areas/north-tustin-ca', destination: '/service-areas/tustin-ca', permanent: true },
      { source: '/service-areas/foothill-ranch-ca', destination: '/service-areas/lake-forest-ca', permanent: true },
      { source: '/service-areas/diamond-bar-ca', destination: '/service-areas', permanent: true },
    ]
  },
};

export default nextConfig;
