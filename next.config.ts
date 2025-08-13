import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */


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
