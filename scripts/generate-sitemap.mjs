// Génère public/sitemap.xml à chaque build — source: src/i18n (3 langues)
// Site one-page : une seule URL, trois hreflang.
import { writeFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

// URL de production — surchargée par SITE_URL en CI si domaine futur
const SITE_URL = process.env.SITE_URL || 'https://sasa-creation.vercel.app';

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>${SITE_URL}/</loc>
    <xhtml:link rel="alternate" hreflang="fr" href="${SITE_URL}/" />
    <xhtml:link rel="alternate" hreflang="en" href="${SITE_URL}/" />
    <xhtml:link rel="alternate" hreflang="ar" href="${SITE_URL}/" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}/" />
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`;

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = resolve(__dirname, '../public/sitemap.xml');
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, sitemap, 'utf8');
console.log(`sitemap.xml généré (${outPath}) — ${SITE_URL}`);
