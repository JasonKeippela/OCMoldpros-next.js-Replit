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
