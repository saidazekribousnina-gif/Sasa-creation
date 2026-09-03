// Génère public/sitemap.xml à chaque build — source: src/i18n (3 langues)
// Site one-page + 7 pages produits, hreflang par entrée.
import { writeFileSync, mkdirSync, readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

// URL de production — surchargée par SITE_URL en CI si domaine futur
const SITE_URL = process.env.SITE_URL || 'https://sasa-creation.vercel.app';

// Slugs extraits du bundle FR (source de vérité)
const __dirname = dirname(fileURLToPath(import.meta.url));
const frBundle = readFileSync(resolve(__dirname, '../src/i18n/fr.ts'), 'utf8');
const slugMatches = [...frBundle.matchAll(/slug: "([^"]+)"/g)];
const slugs = slugMatches.map((m) => m[1]);

if (slugs.length === 0) {
  throw new Error('Aucun slug trouvé dans src/i18n/fr.ts — sitemap abandonné');
}

const today = new Date().toISOString().split('T')[0];

function urlEntry(loc, priority = '1.0', changefreq = 'weekly') {
  return `  <url>
    <loc>${SITE_URL}${loc}</loc>
    <xhtml:link rel="alternate" hreflang="fr" href="${SITE_URL}${loc}" />
    <xhtml:link rel="alternate" hreflang="en" href="${SITE_URL}${loc}" />
    <xhtml:link rel="alternate" hreflang="ar" href="${SITE_URL}${loc}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}${loc}" />
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

const entries = [
  urlEntry('/', '1.0', 'weekly'),
  ...slugs.map((slug) => urlEntry(`/produit/${slug}`, '0.8', 'monthly')),
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join('\n')}
</urlset>
`;

const outPath = resolve(__dirname, '../public/sitemap.xml');
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, sitemap, 'utf8');
console.log(`sitemap.xml généré (${outPath}) — ${SITE_URL} — ${slugs.length + 1} URLs`);
