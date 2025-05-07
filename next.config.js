/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['TanatradingLabs.com'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'TanatradingLabs.com',
          port: '',
          pathname: '/images/**',
        },
      ],
    },
    experimental: {
      optimizeFonts: true,
      serverComponents: true,
    },
  };
  
  module.exports = nextConfig;