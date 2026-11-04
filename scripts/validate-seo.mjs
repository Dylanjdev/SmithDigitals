import fs from "node:fs";
import path from "node:path";

const distDirectory = path.resolve("dist");
const sitemapPath = path.join(distDirectory, "sitemap.xml");
const errors = [];

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

if (errors.length) {
  console.error(`SEO validation failed with ${errors.length} issue(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`SEO validation passed for ${htmlFiles.length} HTML files and ${indexedPages.length} indexable pages.`);
