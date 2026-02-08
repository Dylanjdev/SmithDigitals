import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define all routes and their metadata
const routes = [
  {
    path: '/services',
    title: 'Our Services | Smith Digitals | Web Design & SEO Experts',
    description: 'Explore Smith Digitals services — custom web design, SEO optimization, Google Business setup, and branding. Affordable, high-quality solutions for small businesses.'
  },
  {
    path: '/work',
    title: 'Our Work | Smith Digitals Portfolio',
    description: 'View our portfolio of custom websites and digital solutions. See how we\'ve helped businesses grow with professional web design and SEO.'
  },
  {
    path: '/pricing',
    title: 'Pricing | Affordable Web Design & SEO | Smith Digitals',
    description: 'Transparent pricing for web design, SEO, and maintenance services. Custom packages available to fit your budget and goals.'
  },
  {
    path: '/contact',
    title: 'Contact Us | Get Your Free Quote | Smith Digitals',
    description: 'Ready to grow your business online? Contact Smith Digitals for a free consultation and quote on web design, SEO, and branding services.'
  },
  {
    path: '/privacy-policy',
    title: 'Privacy Policy | Smith Digitals',
    description: 'Smith Digitals privacy policy - learn how we collect, use, and protect your information.'
  },
  {
    path: '/terms-of-service',
    title: 'Terms of Service | Smith Digitals',
    description: 'Terms of service for Smith Digitals LLC. Read our terms and conditions for using our website and services.'
  }
];

// Read the base index.html
const distPath = path.join(__dirname, 'dist');
const indexPath = path.join(distPath, 'index.html');
const indexHtml = fs.readFileSync(indexPath, 'utf-8');

// Generate static HTML for each route
routes.forEach(route => {
  // Update title and description (handling multiline tags)
  let html = indexHtml
    .replace(
      /<title>.*?<\/title>/,
      `<title>${route.title}</title>`
    )
    .replace(
      /<meta\s+name="description"\s+content="[\s\S]*?"\s*\/>/,
      `<meta name="description" content="${route.description}" />`
    )
    .replace(
      /<link\s+rel="canonical"\s+href="[\s\S]*?"\s*\/>/,
      `<link rel="canonical" href="https://smithdigitals.com${route.path}" />`
    )
    .replace(
      /<meta\s+property="og:title"\s+content="[\s\S]*?"\s*\/>/,
      `<meta property="og:title" content="${route.title}" />`
    )
    .replace(
      /<meta\s+property="og:description"\s+content="[\s\S]*?"\s*\/>/,
      `<meta property="og:description" content="${route.description}" />`
    )
    .replace(
      /<meta\s+property="og:url"\s+content="[\s\S]*?"\s*\/>/,
      `<meta property="og:url" content="https://smithdigitals.com${route.path}" />`
    )
    .replace(
      /<meta\s+name="twitter:title"\s+content="[\s\S]*?"\s*\/>/,
      `<meta name="twitter:title" content="${route.title}" />`
    )
    .replace(
      /<meta\s+name="twitter:description"\s+content="[\s\S]*?"\s*\/>/,
      `<meta name="twitter:description" content="${route.description}" />`
    );

  // Create directory if needed
  const routePath = path.join(distPath, route.path);
  if (!fs.existsSync(routePath)) {
    fs.mkdirSync(routePath, { recursive: true });
  }

  // Write the HTML file
  const htmlPath = path.join(routePath, 'index.html');
  fs.writeFileSync(htmlPath, html);
  console.log(`✓ Generated ${route.path}/index.html`);
});

console.log('\n✅ Prerendering complete! All routes have static HTML with proper SEO meta tags.');
