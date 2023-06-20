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
      },
      {
        source: '/event/embroidery-102',
        destination: '/event/Embroidery102AdvanceYourStitch',
      },
      {
        source: '/event/screen-printing-101',
        destination: '/event/ScreenPrinting101',
      },
      {
        source: '/event/learn-to-roq-intro-to-automation-workshop',
        destination: '/event/LearntoROQ-IntrotoAutomationWorkshop1',
      },
      {
        source: '/event/screen-makin-workshop',
        destination: '/event/ScreenMakinWorkshop',
      },
      {
        source: '/event/made-to-roq-advanced-automation-workshop',
        destination: '/event/MADEtoROQ-AdvancedAutomationWorkshop1',
      },
      {
        source: '/event/made-to-roq-advanced-printing-automation-workshop',
        destination: '/event/MADEToROQAdvancedPrintingAutomationWorkshop',
      },
      {
        source: '/event/roq-grand-opening-of-1907',
        destination: '/event/ROQGrandOpeningof1907',
      },
      {
        source: '/event/stampinator-studio-make-your-prints-betterand-automate-your-transfers',
        destination: '/event/StampinatorStudioMakeYourPrintsBetterandAutomateYourTransfers',
      },
    ]
  },
  images: {
    domains: ['cdn.madelaboratory.net',
      'events.lessgap.com'
    ],
    remotePatterns: [{
      protocol: 'https',
      hostname: '**.madelaboratory.net,**.lessgap.com'
    }, ],
  },
});