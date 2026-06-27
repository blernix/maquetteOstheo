/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { serverActions: false },
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
