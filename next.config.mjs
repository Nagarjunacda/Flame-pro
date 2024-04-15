/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{ hostname: 'cms.cdastagging.com' },
    { hostname: 'flameprodev.cda-development3.co.uk' }], // Replace 'example.com' with your image host URL
  },
};

export default nextConfig;