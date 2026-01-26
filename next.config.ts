import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  async redirects() {
    return [
      {
        source: '/projects',
        destination: '/#projects',
        permanent: true,
      },
    ];
  },
};


export default nextConfig;
