import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Игнорировать ошибки линтинга во время сборки
  },
  typescript: {
    ignoreBuildErrors: true, // Игнорировать ошибки TypeScript во время сборки
  },
  experimental: {
    middlewareClientMaxBodySize: 100 * 1024 * 1024,
    serverActions: {
      bodySizeLimit: '100mb',
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/api/uploads/**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*.{json,png,ico,jpg,jpeg}',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ]
  },

  async redirects() {
    return [
      {
        source: '/auth',
        destination: '/auth/login',
        permanent: false, // или true — для 308
      },
    ]
  },


  


};

export default nextConfig;
