/** @type {import('next').NextConfig} */
const nextConfig = {
    unmangedPrefetchBehavior: {
      prefetchedResources: [
        /cdn\.paddle\.com\/paddle\/paddle\.js/,
      ],
    },
  };
  
  module.exports = nextConfig;
  