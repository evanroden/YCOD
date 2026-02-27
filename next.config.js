/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        pathname: '/vi/**',
      },
    ],
  },

  async redirects() {
    return [
      { source: '/news', destination: '/blog', permanent: true },
      { source: '/press', destination: '/coverage', permanent: true },
      { source: '/who', destination: '/about', permanent: true },
      { source: '/2021bill', destination: '/bill', permanent: true },
      { source: '/take-action', destination: '/join', permanent: true },
      { source: '/dlnys', destination: '/initiatives', permanent: true },
      { source: '/resources', destination: '/facts', permanent: true },
      { source: '/purchase', destination: '/join', permanent: true },
      { source: '/purchase/:path*', destination: '/join', permanent: true },
      { source: '/design-files', destination: '/about', permanent: true },
    ];
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Content-Security-Policy-Report-Only',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: https://img.youtube.com",
              "frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com",
              "connect-src 'self'",
            ].join('; '),
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
