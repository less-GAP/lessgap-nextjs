/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

// const isProd = process.env.NODE_ENV === 'production'

module.exports = withBundleAnalyzer({
  // assetPrefix: isProd ? 'https://madelab-nextjs-sza6i.ondigitalocean.app' : undefined,
  // assetPrefix: isProd ? 'https://cdn.lessgap.com' : undefined,
  eslint: {
    dirs: ["."],
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  poweredByHeader: false,
  trailingSlash: true,
  basePath: "",
  // The starter code load resources from `public` folder with `router.basePath` in React components.
  // So, the source code is "basePath-ready".
  // You can remove `basePath` if you don't need it.
  reactStrictMode: true,
  // experimental: {
  //   nextScriptWorkers: true,
  // },
  async rewrites() {
    return [{
      source: '/classes',
      destination: '/events',
    }, ]
  },
  images: {
    domains: ['cdn.lessgap.com',
      'events.lessgap.com'
    ],
    remotePatterns: [{
      protocol: 'https',
      hostname: '**.lessgap.com,**.lessgap.com'
    }, ],
  },
});