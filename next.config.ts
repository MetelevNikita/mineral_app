import type { NextConfig } from "next";
import { WithPWA } from "next-pwa";


const nextConfig: NextConfig = {
  /* config options here */
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
