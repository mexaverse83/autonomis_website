
import fs from 'fs';

const SITE_URL = 'https://autonomis.co';

const staticPages = [
    '',
    '/blog',
];

// In a real build pipeline, you might fetch this from a CMS or read a JSON file.
// Hardcoding the sample articles here to ensure the script runs without TypeScript compilation steps.
const articles = [
    { slug: 'future-of-ai-agents' },
    { slug: 'evaluating-ai-reliability' }
];

const blogRoutes = articles.map(post => `/blog/${post.slug}`);

const allRoutes = [...staticPages, ...blogRoutes];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allRoutes
        .map((route) => {
            const isBlogIndex = route === '/blog';
            const isHome = route === '';
            const changefreq = isBlogIndex ? 'daily' : 'weekly';
            const priority = isHome ? '1.0' : (isBlogIndex ? '0.9' : '0.8');

            return `
  <url>
    <loc>${SITE_URL}${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
        })
        .join('')}
</urlset>
`;

fs.writeFileSync('public/sitemap.xml', sitemap);
console.log('✅ Sitemap generated successfully!');
