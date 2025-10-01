/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },

  // Optional, but keeps URLs consistent on GH Pages
  trailingSlash: true,
};

module.exports = nextConfig;
