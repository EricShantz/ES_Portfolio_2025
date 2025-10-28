/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: '/ES_Portfolio_2025',
  assetPrefix: '/ES_Portfolio_2025',

  // optional: make builds forgiving during setup
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
