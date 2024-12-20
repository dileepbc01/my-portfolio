import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // <=== enables static exports
  reactStrictMode: true,
  basePath: '/my-portfolio',

  /* config options here */
};

export default nextConfig;
