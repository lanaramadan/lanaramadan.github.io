import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  async redirects() {
    return [
      {
        source: '/work',
        destination: '/#work',
        permanent: true,
      },
    ];
  },
};


export default nextConfig;
