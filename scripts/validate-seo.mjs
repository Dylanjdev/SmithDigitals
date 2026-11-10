import fs from "node:fs";
import path from "node:path";

const distDirectory = path.resolve("dist");
const sitemapPath = path.join(distDirectory, "sitemap.xml");
const errors = [];
const caseStudyBacklinks = [
  {
    page: "case-studies/power-pasture/index.html",
    url: "https://powerpasture.com/",
    anchorPattern: /Power Pasture/i,
  },
  {
    page: "case-studies/discoverleeva/index.html",
    url: "https://discoverleeva.com/",
    anchorPattern: /DiscoverLeeVa/i,
  },
  {
    page: "case-studies/appalachian-asenso/index.html",
    url: "https://appalachianasenso.com/",
    anchorPattern: /Appalachian Asenso/i,
  },
  {
    page: "case-studies/loveleeva/index.html",
    url: "https://loveleeva.com/",
    anchorPattern: /LoveLeeVa/i,
  },
  {
    page: "case-studies/stone-mountain-yogurt/index.html",
    url: "https://stone-mountain-yogurt.com/",
    anchorPattern: /Stone Mountain Yogurt/i,
  },
  {
    page: "case-studies/the-unicorn-techs/index.html",
    url: "https://theunicorntechs.com/",
    anchorPattern: /The Unicorn Techs/i,
  },
  {
    page: "case-studies/fit-and-fierce/index.html",
    url: "https://fitandfierce.studio/",
    anchorPattern: /Fit\s*&\s*Fierce/i,
  },
  {
    page: "case-studies/jump-sporting-goods/index.html",
    url: "https://www.jumpsportinggoods.com/",
    anchorPattern: /Jump Sporting Goods/i,
  },
  {
    page: "case-studies/painting-outside-the-lines/index.html",
    url: "https://paintingoutsidethelinesstudios.com/",
    anchorPattern: /Painting Outside The Lines/i,
  },
  {
    page: "case-studies/bbs-bakery/index.html",
    url: "https://bbs-bakery.com/",
    anchorPattern: /BB'?s Bakery|BBS Bakery/i,
  },
  {
    page: "case-studies/m-and-m-wholesale/index.html",
    url: "https://mm-wholesales.com/",
    anchorPattern: /M&M Wholesale/i,
  },
  {
    page: "case-studies/freedom-in-christ/index.html",
    url: "https://dylanjdev.github.io/Freedom-In-Christ/",
    anchorPattern: /Freedom In Christ/i,
  },
  {
    page: "case-studies/mcguires-landscaping/index.html",
    url: "https://mcguireslawnandlandscaping.com/",
    anchorPattern: /McGuire'?s Lawn & Landscaping/i,
  },
  {
    page: "case-studies/hair-by-rilee/index.html",
    url: "https://www.hairbyrilee.com/",
    anchorPattern: /Hair By Rilee/i,
  },
];

function collectHtmlFiles(directory, files = []) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      collectHtmlFiles(entryPath, files);
    } else if (entry.name.endsWith(".html")) {
      files.push(entryPath);
    }
  }
  return files;
}

function decodeHtml(value) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function matchAll(html, expression) {
  return [...html.matchAll(expression)].map((match) => decodeHtml(match[1]));
}

function routeFileForUrl(url) {
  const pathname = new URL(url).pathname.replace(/^\/+|\/+$/g, "");
  return pathname
    ? path.join(distDirectory, pathname, "index.html")
    : path.join(distDirectory, "index.html");
}

function normalizeExternalUrl(value) {
  try {
    const url = new URL(decodeHtml(value));
    url.hash = "";
    return url.href;
  } catch {
    return null;
  }
}

function collectAnchors(html) {
  return [...html.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi)].map((match) => {
    const attributes = match[1];
    const href = attributes.match(/\bhref="([^"]+)"/i)?.[1] || "";
    const rel = attributes.match(/\brel="([^"]+)"/i)?.[1] || "";
    const target = attributes.match(/\btarget="([^"]+)"/i)?.[1] || "";
    const text = decodeHtml(match[2].replace(/<[^>]+>/g, " "))
      .replace(/\s+/g, " ")
      .trim();

    return { href, rel, target, text };
  });
}

function validateClientBacklink(html, relativeFile, backlink) {
  const expectedUrl = normalizeExternalUrl(backlink.url);
  const matchingLinks = collectAnchors(html).filter(
    (link) => normalizeExternalUrl(link.href) === expectedUrl,
  );

  if (!matchingLinks.length) {
    errors.push(`${relativeFile}: missing direct client backlink to ${backlink.url}`);
    return;
  }

  if (!matchingLinks.some((link) => backlink.anchorPattern.test(link.text))) {
    errors.push(`${relativeFile}: client backlink needs descriptive brand anchor text`);
  }

  for (const link of matchingLinks) {
    const relTokens = link.rel.toLowerCase().split(/\s+/).filter(Boolean);
    const equityBlockingTokens = ["nofollow", "sponsored", "ugc"].filter((token) =>
      relTokens.includes(token),
    );
    if (equityBlockingTokens.length) {
      errors.push(
        `${relativeFile}: client backlink must not use ${equityBlockingTokens.join(", ")}`,
      );
    }
    if (link.target === "_blank" && !relTokens.includes("noopener")) {
      errors.push(`${relativeFile}: new-tab client backlink must use noopener`);
    }
  }
}

const htmlFiles = collectHtmlFiles(distDirectory);
const indexedPages = [];

for (const htmlFile of htmlFiles) {
  const html = fs.readFileSync(htmlFile, "utf8");
  const relativeFile = path.relative(distDirectory, htmlFile);
  const titles = matchAll(html, /<title(?:\s[^>]*)?>([\s\S]*?)<\/title>/gi);
  const descriptions = matchAll(
    html,
    /<meta[^>]+name="description"[^>]+content="([^"]*)"/gi,
  );
  const robots = matchAll(
    html,
    /<meta[^>]+name="robots"[^>]+content="([^"]+)"/gi,
  );
  const canonicals = matchAll(
    html,
    /<link[^>]+rel="canonical"[^>]+href="([^"]+)"/gi,
  );
  const openGraphUrls = matchAll(
    html,
    /<meta[^>]+property="og:url"[^>]+content="([^"]+)"/gi,
  );
  const isNotFound = relativeFile === "404.html";
  const isIndexable = robots.length === 1 && !robots[0].includes("noindex");

  if (titles.length !== 1) errors.push(`${relativeFile}: expected one title, found ${titles.length}`);
  if (descriptions.length !== 1) errors.push(`${relativeFile}: expected one description, found ${descriptions.length}`);
  if (robots.length !== 1) errors.push(`${relativeFile}: expected one robots directive, found ${robots.length}`);
  if (!isNotFound && canonicals.length !== 1) {
    errors.push(`${relativeFile}: expected one canonical, found ${canonicals.length}`);
  }
  if (isIndexable && openGraphUrls.length !== 1) {
    errors.push(`${relativeFile}: expected one og:url, found ${openGraphUrls.length}`);
  }
  if (canonicals.length === 1 && openGraphUrls.length === 1 && canonicals[0] !== openGraphUrls[0]) {
    errors.push(`${relativeFile}: og:url does not match the canonical URL`);
  }
  if (isIndexable && (html.match(/<h1\b/gi) || []).length !== 1) {
    errors.push(`${relativeFile}: indexable pages must contain exactly one h1`);
  }
  if (isIndexable && descriptions[0] && descriptions[0].length > 165) {
    errors.push(`${relativeFile}: description is ${descriptions[0].length} characters`);
  }
  if (html.includes("/src/assets/")) {
    errors.push(`${relativeFile}: contains an unresolved source asset URL`);
  }
  if (html.includes('<div hidden id="S:') || html.includes('<template id="B:')) {
    errors.push(`${relativeFile}: contains an unresolved streaming Suspense boundary`);
  }

  for (const match of html.matchAll(
    /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g,
  )) {
    try {
      JSON.parse(match[1]);
    } catch (error) {
      errors.push(`${relativeFile}: invalid JSON-LD (${error.message})`);
    }
  }

  if (isIndexable && titles[0] && descriptions[0] && canonicals[0]) {
    indexedPages.push({ relativeFile, title: titles[0], description: descriptions[0], canonical: canonicals[0] });
  }
}

for (const field of ["title", "description", "canonical"]) {
  const seen = new Map();
  for (const page of indexedPages) {
    const previous = seen.get(page[field]);
    if (previous) {
      errors.push(`${page.relativeFile}: duplicate ${field} also used by ${previous}`);
    } else {
      seen.set(page[field], page.relativeFile);
    }
  }
}

if (!fs.existsSync(sitemapPath)) {
  errors.push("sitemap.xml is missing from dist");
} else {
  const sitemap = fs.readFileSync(sitemapPath, "utf8");
  const sitemapUrls = matchAll(sitemap, /<loc>([^<]+)<\/loc>/gi);
  const uniqueUrls = new Set(sitemapUrls);
  if (uniqueUrls.size !== sitemapUrls.length) errors.push("sitemap.xml contains duplicate URLs");
  for (const url of sitemapUrls) {
    if (!fs.existsSync(routeFileForUrl(url))) {
      errors.push(`sitemap URL has no generated page: ${url}`);
    }
  }
}

const caseStudyIndexFile = path.join(distDirectory, "case-studies", "index.html");
if (!fs.existsSync(caseStudyIndexFile)) {
  errors.push("case-studies/index.html: missing case-study index");
} else {
  const caseStudyIndexHtml = fs.readFileSync(caseStudyIndexFile, "utf8");
  for (const backlink of caseStudyBacklinks) {
    validateClientBacklink(caseStudyIndexHtml, "case-studies/index.html", backlink);
  }
}

for (const backlink of caseStudyBacklinks) {
  const backlinkPage = path.join(distDirectory, backlink.page);
  if (!fs.existsSync(backlinkPage)) {
    errors.push(`${backlink.page}: missing case-study page`);
    continue;
  }

  const html = fs.readFileSync(backlinkPage, "utf8");
  validateClientBacklink(html, backlink.page, backlink);

  const robots = matchAll(
    html,
    /<meta[^>]+name="robots"[^>]+content="([^"]+)"/gi,
  )[0]?.toLowerCase();
  if (!robots || robots.includes("noindex") || robots.includes("nofollow")) {
    errors.push(`${backlink.page}: client backlink page must be indexable and follow links`);
  }
}

if (errors.length) {
  console.error(`SEO validation failed with ${errors.length} issue(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`SEO validation passed for ${htmlFiles.length} HTML files and ${indexedPages.length} indexable pages.`);
