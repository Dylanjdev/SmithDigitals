import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define all routes and their metadata
const routes = [
  {
    path: '/services',
    title: 'Web Design Services in Southwest Virginia | Smith Digitals',
    description: 'Explore Smith Digitals services in Southwest Virginia — custom web design, SEO optimization, Google Business setup, and branding for local businesses.',
    robots: 'index, follow'
  },
  {
    path: '/case-studies',
    title: 'Case Studies | Smith Digitals Portfolio',
    description: 'Explore real client case studies from Smith Digitals, including e-commerce builds, local SEO wins, and high-converting websites.',
    robots: 'index, follow'
  },
  {
    path: '/case-studies/fit-and-fierce',
    title: 'Fit & Fierce Studio | Case Study | Smith Digitals',
    description: 'Case study for Fit & Fierce Studio: inclusive fitness web presence built by Smith Digitals.',
    robots: 'index, follow'
  },
  {
    path: '/case-studies/jump-sporting-goods',
    title: 'Jump Sporting Goods | Case Study | Smith Digitals',
    description: 'Case study for Jump Sporting Goods: custom apparel e-commerce platform built by Smith Digitals.',
    robots: 'index, follow'
  },
  {
    path: '/case-studies/painting-outside-the-lines',
    title: 'Painting Outside The Lines | Case Study | Smith Digitals',
    description: 'Case study for Painting Outside The Lines Studio: creative class-based website experience by Smith Digitals.',
    robots: 'index, follow'
  },
  {
    path: '/case-studies/bbs-bakery',
    title: 'BBS Bakery | Case Study | Smith Digitals',
    description: 'Case study for BBS Bakery: Square Checkout API integration and local SEO gains in Bristol, VA.',
    robots: 'index, follow'
  },
  {
    path: '/case-studies/mcguires-landscaping',
    title: 'McGuire\'s Lawn & Landscaping | Case Study | Smith Digitals',
    description: 'Case study for McGuire\'s Lawn & Landscaping: 6 free quote submissions in one week, all converted to customers.',
    robots: 'index, follow'
  },
  {
    path: '/case-studies/stone-mountain-yogurt',
    title: 'Stone Mountain Yogurt | Case Study | Smith Digitals',
    description: 'Case study for Stone Mountain Yogurt: SEO redesign and customized Twilio API text automation.',
    robots: 'index, follow'
  },
  {
    path: '/case-studies/the-unicorn-techs',
    title: 'The Unicorn Techs | Case Study | Smith Digitals',
    description: 'Case study for The Unicorn Techs: executive fiduciary advisory positioning for AI readiness and delivery alignment.',
    robots: 'index, follow'
  },
  {
    path: '/pricing',
    title: 'Web Design Pricing in Southwest Virginia | Smith Digitals',
    description: 'Transparent pricing for web design, SEO, and maintenance services in Southwest Virginia. Custom packages available to fit your budget and goals.',
    robots: 'index, follow'
  },
  {
    path: '/contact',
    title: 'Contact Smith Digitals | Southwest Virginia Website Developer',
    description: 'Ready to grow your business online? Contact Smith Digitals for a free consultation on web design, SEO, and branding in Southwest Virginia.',
    robots: 'index, follow'
  },
  {
    path: '/privacy-policy',
    title: 'Privacy Policy | Smith Digitals',
    description: 'Smith Digitals privacy policy - learn how we collect, use, and protect your information.',
    robots: 'noindex, follow'
  },
  {
    path: '/terms-of-service',
    title: 'Terms of Service | Smith Digitals',
    description: 'Terms of service for Smith Digitals LLC. Read our terms and conditions for using our website and services.',
    robots: 'noindex, follow'
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
      `<link rel="canonical" href="https://smithdigitals.com${route.path}/" />`
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
      `<meta property="og:url" content="https://smithdigitals.com${route.path}/" />`
    )
    .replace(
      /<meta\s+name="twitter:title"\s+content="[\s\S]*?"\s*\/>/,
      `<meta name="twitter:title" content="${route.title}" />`
    )
    .replace(
      /<meta\s+name="twitter:description"\s+content="[\s\S]*?"\s*\/>/,
      `<meta name="twitter:description" content="${route.description}" />`
    )
    .replace(
      /<meta\s+name="robots"\s+content="[\s\S]*?"\s*\/>/,
      `<meta name="robots" content="${route.robots}" />`
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
