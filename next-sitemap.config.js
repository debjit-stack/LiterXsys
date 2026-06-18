/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://literxsys.com",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/api/*"],
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: ["/api/"] },
    ],
    additionalSitemaps: ["https://literxsys.com/sitemap.xml"],
  },
  transform: async (config, path) => {
    const highPriority = ["/", "/services", "/pricing", "/contact", "/free-audit", "/portfolio", "/about"];
    return {
      loc: path,
      changefreq: highPriority.includes(path) ? "daily" : "weekly",
      priority: highPriority.includes(path) ? 1.0 : 0.7,
      lastmod: new Date().toISOString(),
    };
  },
};
