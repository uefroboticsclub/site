/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/site",
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

