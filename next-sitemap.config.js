module.exports = {
    siteUrl: 'https://hersfaceless.com', // Replace with your site's URL
    generateRobotsTxt: true, // Enable robots.txt generation
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*', // Apply to all crawlers
                allow: '/', // Allow crawling the homepage
                disallow: '/*', // Block all other pages
            },
        ],
        additionalSitemaps: [
            'https://hersfaceless.com/sitemap.xml', // Include sitemap URL (optional)
        ],
    },
};
