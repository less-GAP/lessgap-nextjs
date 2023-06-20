/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://lessgap.com", // FIXME: Change to the production URL
  generateRobotsTxt: true,
  exclude: [
    '/event/demo',
    '/event/threadx'
  ],
};