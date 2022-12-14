/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public',
});
const runtimeCaching = require('next-pwa/cache');

const nextConfig = withPWA({
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    runtimeCaching,
  },
  reactStrictMode: true,
  swcMinify: true,
});

module.exports = nextConfig;
