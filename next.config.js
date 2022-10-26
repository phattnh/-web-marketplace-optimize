/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ["image/webp", "image/*"],
    minimumCacheTTL: 60,
    domains: ["cdn-image-web-marketplace.herokuapp.com"],
  },
};

module.exports = nextConfig;
