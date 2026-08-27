import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  leeCountyWebDesignHub,
  leeCountyWebDesignLocations,
  getLeeCountyWebDesignPath
} from './src/content/leeCountyWebDesignLocations.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define all routes and their metadata
const routes = [
  {
    path: '/case-studies',
    title: 'Case Studies | Smith Digitals LLC | Web Design Portfolio',
    description: 'Explore selected work by Smith Digitals across web design, ecommerce, SEO, automation, executive positioning, and digital growth.',
    robots: 'index, follow'
  },
  {
    path: '/case-studies/bbs-bakery',
    title: 'BBS Bakery Case Study | Smith Digitals',
    description: 'See how Smith Digitals built BBS Bakery an online ordering experience with Square Checkout and a local SEO strategy.',
    robots: 'index, follow'
  },
  {
    path: '/case-studies/fit-and-fierce',
    title: 'Fit & Fierce Studio Case Study | Smith Digitals',
    description: 'Explore the inclusive dance fitness studio website built by Smith Digitals for Fit & Fierce Studio.',
    robots: 'index, follow'
  },
  {
    path: '/case-studies/jump-sporting-goods',
    title: 'Jump Sporting Goods Case Study | Smith Digitals',
    description: 'See how Smith Digitals built a custom apparel ecommerce experience for Jump Sporting Goods.',
    robots: 'index, follow'
  },
  {
    path: '/case-studies/mcguires-landscaping',
    title: "McGuire's Landscaping Case Study | Smith Digitals",
    description: "Explore the lead-generation website and quote funnel Smith Digitals built for McGuire's Lawn & Landscaping.",
    robots: 'index, follow'
  },
  {
    path: '/case-studies/painting-outside-the-lines',
    title: 'Painting Outside The Lines Studios Case Study | Smith Digitals',
    description: 'Explore the creative studio website built by Smith Digitals for Painting Outside The Lines Studios.',
    robots: 'index, follow'
  },
  {
    path: '/case-studies/stone-mountain-yogurt',
    title: 'Stone Mountain Yogurt Case Study | Smith Digitals',
    description: 'See how Smith Digitals rebuilt Stone Mountain Yogurt with SEO improvements and Twilio messaging automation.',
    robots: 'index, follow'
  },
  {
    path: '/case-studies/the-unicorn-techs',
    title: 'The Unicorn Techs Case Study | Smith Digitals',
    description: 'Explore the executive advisory website Smith Digitals built for The Unicorn Techs.',
    robots: 'index, follow'
  },
  {
    path: '/case-studies/m-and-m-wholesale',
    title: 'M&M Wholesale Store Case Study | Smith Digitals',
    description: 'Explore the full-stack ecommerce platform and custom inventory dashboard Smith Digitals built for M&M Wholesale Store.',
    robots: 'index, follow'
  },
  {
    path: '/case-studies/freedom-in-christ',
    title: 'Freedom In Christ Church Case Study | Smith Digitals',
    description: 'Explore the responsive community website Smith Digitals built for Freedom In Christ Church.',
    robots: 'index, follow'
  },
  {
    path: '/case-studies/hair-by-rilee',
    title: 'Hair By Rilee Case Study | Smith Digitals',
    description: 'Explore the local SEO landing page and service positioning Smith Digitals built for Hair By Rilee.',
    robots: 'index, follow'
  },
  {
    path: '/services',
    title: 'Web Design Services in Southwest Virginia | Smith Digitals',
    description: 'Explore Smith Digitals services in Southwest Virginia — custom web design, SEO optimization, Google Business setup, and branding for local businesses.',
    robots: 'index, follow'
  },
  {
    path: leeCountyWebDesignHub.path,
    title: leeCountyWebDesignHub.title,
    description: leeCountyWebDesignHub.description,
    robots: 'index, follow, max-image-preview:large'
  },
  ...leeCountyWebDesignLocations.map(location => ({
    path: getLeeCountyWebDesignPath(location.slug),
    title: `Web Design in ${location.name}, VA | Smith Digitals`,
    description: `Custom web design for ${location.name}, Virginia businesses. Smith Digitals builds fast, credible websites with local SEO foundations and clear paths to new leads.`,
    robots: 'index, follow, max-image-preview:large'
  })),
  {
    path: '/guides/how-to-rank-on-google-for-free',
    title: 'How to Rank on Google for Free | Smith Digitals',
    description: 'Learn how small businesses can improve local Google visibility for free with a complete Business Profile, genuine reviews, useful content, and local SEO.',
    robots: 'index, follow, max-image-preview:large'
  },
  {
    path: '/guides/local-seo-vs-regular-seo',
    title: 'Local SEO vs. Regular SEO: What Is the Difference? | Smith Digitals',
    description: 'A practical, in-depth guide to the difference between local SEO and regular SEO, including ranking signals, content strategy, links, measurement, and which approach your business needs.',
    robots: 'index, follow, max-image-preview:large'
  },
  {
    path: '/guides/lee-county-cumberland-gap-tourism',
    title: 'Cumberland Gap Tourism Guide for Lee County, VA | Smith Digitals',
    description: 'How Lee County, VA businesses can attract Cumberland Gap visitors using Google Maps, local SEO, regional content, and local tourism partnerships.',
    robots: 'index, follow, max-image-preview:large'
  },
  {
    path: '/blog/lee-county-economic-outlook',
    title: 'Lee County, Virginia Economic Outlook | Smith Digitals',
    description: 'Can Lee County, Virginia turn its economy around? A data-led look at population, migration, tourism, local business, infrastructure, and the path to sustainable growth.',
    robots: 'index, follow, max-image-preview:large'
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
    path: '/facebook',
    title: 'Outrank Competitors & Capture More Local Leads | Smith Digitals',
    description: 'Claim a free five-minute Google and SEO audit from Smith Digitals and uncover opportunities to attract more high-intent local leads.',
    robots: 'noindex, nofollow'
  },
  {
    path: '/thank-you',
    title: 'Audit Request Received | Smith Digitals',
    description: 'Your Google and SEO audit request has been received by Smith Digitals.',
    robots: 'noindex, nofollow'
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
