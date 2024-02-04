/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_URL: process.env.BASE_URL,
    ASSETS_URL: process.env.ASSETS_URL,
    RATES_URL: process.env.RATES_URL,
  },
};

export default nextConfig;
