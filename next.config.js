/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["https://cdn-image-web-marketplace.herokuapp.com"],
  },
};

module.exports = nextConfig;
