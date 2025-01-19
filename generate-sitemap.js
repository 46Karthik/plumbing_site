import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Define your site's base URL
const BASE_URL = 'https://electrapower.in/';

// Define all your static routes or import them from your routing config
const routes = [
  '/',
  '/aboutus',
  '/services-design-consulting',
  '/services-installation-commisioning',
  '/services-panelboard-control-systems',
  '/services-statutory-approvals',
  '/services-maintenance-repairs',
  '/services-valueadded',
  '/portfolio-projects',
  '/all-projects',
  '/contactus',
  '/careers'
];

// Create the sitemap
const sitemap = new SitemapStream({ hostname: BASE_URL });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const writeStream = createWriteStream(path.resolve(__dirname, 'public', 'sitemap.xml'));

// Add each route to the sitemap
routes.forEach(route => {
    sitemap.write({ url: route, changefreq: 'weekly', priority: 0.8 });
  });

// End the stream and write it to file
sitemap.end();

streamToPromise(sitemap).then(data => writeStream.write(data));
