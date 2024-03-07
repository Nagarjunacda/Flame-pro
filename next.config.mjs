/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{ hostname: 'flameprodev.cda-development3.co.uk' }], // Replace 'example.com' with your image host URL
  },
};

export default nextConfig;