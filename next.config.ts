import type { NextConfig } from "next";


const nextConfig: NextConfig = {

  typescript: {
    ignoreBuildErrors: true, // Skip TypeScript errors during build
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
