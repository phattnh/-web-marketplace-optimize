/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["https://cdn-image-web-marketplace.herokuapp.com"],
    minimumCacheTTL: 60,
  },
};

module.exports = nextConfig;
