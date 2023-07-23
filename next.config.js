/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.externals = [...config.externals, "bcrypt"];
    return config;
  },
  images: {
    domains: ["nishatlinen.com"],
  },
};

module.exports = nextConfig;
