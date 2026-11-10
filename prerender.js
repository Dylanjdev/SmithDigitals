import fs from 'fs';
import path from 'path';
import React from 'react';
import { PassThrough } from 'stream';
import { renderToPipeableStream, renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { HeadProvider } from 'react-head';
import { createServer } from 'vite';
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
    path: '/case-studies/appalachian-asenso',
    title: 'Appalachian Asenso Case Study | Smith Digitals LLC',
    description: 'See how Smith Digitals redesigned Appalachian Asenso to grow bookings, party inquiries, mobile speed, and local visibility in Pennington Gap.',
    robots: 'index, follow, max-image-preview:large'
  },
  {
    path: '/case-studies/discoverleeva',
    title: 'DiscoverLeeVa Case Study | Lee County Tourism Platform',
    description: 'See how Smith Digitals built DiscoverLeeVa, the official I Love Lee tourism portal, community calendar, visitor guide, and business directory.',
    robots: 'index, follow, max-image-preview:large'
  },
  {
    path: '/case-studies/power-pasture',
    title: 'Power Pasture™ Case Study | Renewable Energy Platform',
    description: "See how Smith Digitals built Power Pasture's B2B platform with interactive energy schematics, six industry funnels, and a 0.6-second load time.",
    robots: 'index, follow, max-image-preview:large'
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
    path: '/case-studies/loveleeva',
    title: 'LoveLeeVa Case Study | Rural Commerce & Community Platform',
    description: 'See how Smith Digitals built LoveLeeVa, a headless commerce and community-discovery platform for Lee County, Virginia.',
    robots: 'index, follow, max-image-preview:large'
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
    path: '/guides/what-is-responsive-web-design',
    title: 'What Is Responsive Web Design? A 2026 Guide | Smith Digitals',
    description: 'Learn how responsive web design works, why it matters, and how fluid grids, flexible images, media queries, and container queries shape modern websites.',
    robots: 'index, follow, max-image-preview:large'
  },
  {
    path: '/guides/how-to-structure-your-website-for-seo-growth',
    title: 'How to Structure Your Website for SEO Growth | Smith Digitals',
    description: 'Learn how to plan an SEO-friendly website hierarchy with topic clusters, clean URLs, internal links, breadcrumbs, and a practical three-level structure.',
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
const manifestPath = path.join(distPath, '.vite', 'manifest.json');
const assetManifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));

function resolveBuiltAssetUrl(sourceUrl) {
  const sourcePath = sourceUrl.replace(/^\//, '');
  const manifestEntry = assetManifest[sourcePath]
    || Object.values(assetManifest).find((entry) => entry.src === sourcePath);

  if (!manifestEntry?.file) {
    throw new Error(`Unable to resolve production asset for ${sourceUrl}`);
  }

  return `/${manifestEntry.file}`;
}

function rewriteBuiltAssetUrls(html) {
  return html.replace(
    /\b(src|href)="(\/src\/assets\/[^"]+)"/g,
    (_match, attribute, sourceUrl) => `${attribute}="${resolveBuiltAssetUrl(sourceUrl)}"`,
  );
}

const vite = await createServer({
  configFile: path.join(__dirname, 'vite.config.js'),
  server: { middlewareMode: true },
  appType: 'custom',
});

try {
  const { AppContent } = await vite.ssrLoadModule('/src/App.jsx');
  const { default: NotFound } = await vite.ssrLoadModule('/src/pages/NotFound.jsx');
  const [
    { default: Home },
    { default: Services },
    { default: Contact },
    { default: OurWork },
    { default: BBSBakery },
    { default: FitAndFierce },
    { default: JumpSportingGoods },
    { default: McGuiresLandscaping },
    { default: PaintingOutsideTheLines },
    { default: StoneMountainYogurt },
    { default: LoveLeeVa },
    { default: AppalachianAsenso },
    { default: DiscoverLeeVa },
    { default: PowerPasture },
    { default: UnicornTechs },
    { default: AdditionalCaseStudy },
    { default: GoogleRankingGuide },
    { default: LocalVsTraditionalSeoGuide },
    { default: ResponsiveWebDesignGuide },
    { default: WebsiteStructureSeoGuide },
    { default: CumberlandGapTourismGuide },
    { default: LeeCountyEconomicOutlook },
    { default: Pricing },
    { default: PrivacyPolicy },
    { default: TermsOfService },
    { default: FacebookLanding },
    { default: ThankYou },
    leeCountyModule,
  ] = await Promise.all([
    vite.ssrLoadModule('/src/pages/Home.jsx'),
    vite.ssrLoadModule('/src/pages/Services.jsx'),
    vite.ssrLoadModule('/src/pages/Contact.jsx'),
    vite.ssrLoadModule('/src/pages/OurWork.jsx'),
    vite.ssrLoadModule('/src/pages/BBSBakery.jsx'),
    vite.ssrLoadModule('/src/pages/FitAndFierce.jsx'),
    vite.ssrLoadModule('/src/pages/JumpSportingGoods.jsx'),
    vite.ssrLoadModule('/src/pages/McGuiresLandscaping.jsx'),
    vite.ssrLoadModule('/src/pages/PaintingOutsideTheLines.jsx'),
    vite.ssrLoadModule('/src/pages/StoneMountainYogurt.jsx'),
    vite.ssrLoadModule('/src/pages/LoveLeeVa.jsx'),
    vite.ssrLoadModule('/src/pages/AppalachianAsenso.jsx'),
    vite.ssrLoadModule('/src/pages/DiscoverLeeVa.jsx'),
    vite.ssrLoadModule('/src/pages/PowerPasture.jsx'),
    vite.ssrLoadModule('/src/pages/UnicornTechs.jsx'),
    vite.ssrLoadModule('/src/pages/AdditionalCaseStudy.jsx'),
    vite.ssrLoadModule('/src/pages/GoogleRankingGuide.jsx'),
    vite.ssrLoadModule('/src/pages/LocalVsTraditionalSeoGuide.jsx'),
    vite.ssrLoadModule('/src/pages/ResponsiveWebDesignGuide.jsx'),
    vite.ssrLoadModule('/src/pages/WebsiteStructureSeoGuide.jsx'),
    vite.ssrLoadModule('/src/pages/CumberlandGapTourismGuide.jsx'),
    vite.ssrLoadModule('/src/pages/LeeCountyEconomicOutlook.jsx'),
    vite.ssrLoadModule('/src/pages/Pricing.jsx'),
    vite.ssrLoadModule('/src/pages/PrivacyPolicy.jsx'),
    vite.ssrLoadModule('/src/pages/TermsOfService.jsx'),
    vite.ssrLoadModule('/src/pages/FacebookLanding.jsx'),
    vite.ssrLoadModule('/src/pages/ThankYou.jsx'),
    vite.ssrLoadModule('/src/pages/LeeCountyWebDesign.jsx'),
  ]);
  const prerenderPages = {
    Home,
    Services,
    Contact,
    OurWork,
    BBSBakery,
    FitAndFierce,
    JumpSportingGoods,
    McGuiresLandscaping,
    PaintingOutsideTheLines,
    StoneMountainYogurt,
    LoveLeeVa,
    AppalachianAsenso,
    DiscoverLeeVa,
    PowerPasture,
    UnicornTechs,
    AdditionalCaseStudy,
    GoogleRankingGuide,
    LocalVsTraditionalSeoGuide,
    ResponsiveWebDesignGuide,
    WebsiteStructureSeoGuide,
    CumberlandGapTourismGuide,
    LeeCountyEconomicOutlook,
    Pricing,
    PrivacyPolicy,
    TermsOfService,
    FacebookLanding,
    ThankYou,
    LeeCountyWebDesignHub: leeCountyModule.LeeCountyWebDesignHub,
    WebDesignLocation: leeCountyModule.WebDesignLocation,
  };

  function renderApp(element) {
    return new Promise((resolve, reject) => {
      let markup = '';
      let renderError = null;
      const output = new PassThrough();
      output.setEncoding('utf8');
      output.on('data', chunk => { markup += chunk; });
      output.on('error', reject);
      output.on('end', () => {
        if (renderError) {
          reject(renderError);
        } else {
          resolve(markup);
        }
      });

      const stream = renderToPipeableStream(element, {
        onAllReady() {
          stream.pipe(output);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          renderError = error;
        },
      });
    });
  }

  function prepareHtml(headMarkup, bodyMarkup) {
    const managedHeadTags = /<title>[\s\S]*?<\/title>|<meta\s+(?:name="(?:description|keywords|author|robots)"|property="(?:og:[^"]+|article:[^"]+)")[^>]*\/?>|<meta\s+name="twitter:[^"]+"[^>]*\/?>|<link\s+rel="canonical"[^>]*\/?>|<script\s+type="application\/ld\+json">[\s\S]*?<\/script>/g;
    const html = indexHtml
      .replace(managedHeadTags, '')
      .replace('</head>', `${headMarkup}</head>`)
      .replace('<div id="root"></div>', `<div id="root">${bodyMarkup}</div>`);

    return rewriteBuiltAssetUrls(html);
  }

  async function renderRoute(location, robots = 'index, follow') {
    const renderLocation = async (headTags) => renderApp(
      React.createElement(
        HeadProvider,
        { headTags },
        React.createElement(
          StaticRouter,
          { location },
          React.createElement(AppContent, { pages: prerenderPages, prerender: true }),
        ),
      ),
    );

    const headTags = [];
    const markup = await renderLocation(headTags);

    const robotTag = headTags.find(tag => tag.type === 'meta' && tag.props.name === 'robots');
    if (robotTag) {
      const index = headTags.indexOf(robotTag);
      headTags[index] = React.cloneElement(robotTag, { content: robots });
    } else {
      headTags.push(React.createElement('meta', { name: 'robots', content: robots }));
    }

    return prepareHtml(renderToStaticMarkup(headTags), markup);
  }

  const homeHtml = await renderRoute('/');
  fs.writeFileSync(indexPath, homeHtml);
  console.log('✓ Generated /index.html');

  for (const route of routes) {
    const html = await renderRoute(`${route.path}/`, route.robots);
    const routePath = path.join(distPath, route.path.slice(1));
    fs.mkdirSync(routePath, { recursive: true });
    fs.writeFileSync(path.join(routePath, 'index.html'), html);
    console.log(`✓ Generated ${route.path}/index.html`);
  }

  const notFoundHtml = await renderRoute('/__not-found__', 'noindex, follow');
  fs.writeFileSync(path.join(distPath, '404.html'), notFoundHtml);

  const generatedHtmlFiles = [];
  const collectHtmlFiles = (directory) => {
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      const entryPath = path.join(directory, entry.name);
      if (entry.isDirectory()) {
        collectHtmlFiles(entryPath);
      } else if (entry.name.endsWith('.html')) {
        generatedHtmlFiles.push(entryPath);
      }
    }
  };

  collectHtmlFiles(distPath);
  for (const htmlFile of generatedHtmlFiles) {
    const html = fs.readFileSync(htmlFile, 'utf-8');
    if (html.includes('/src/assets/')) {
      throw new Error(`Unresolved source asset URL in ${htmlFile}`);
    }
    if (html.includes('<div hidden id="S:') || html.includes('<template id="B:')) {
      throw new Error(`Unresolved streaming Suspense boundary in ${htmlFile}`);
    }
  }
  console.log('✓ Generated /404.html');
} finally {
  await vite.close();
}

console.log('\n✅ Prerendering complete! Routes now include static page content and metadata.');
