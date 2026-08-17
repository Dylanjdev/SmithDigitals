import { motion } from "framer-motion";
import { Title, Meta, Link as MetaLink } from "react-head";
import { Link } from "react-router-dom";
import articleMarkdown from "../content/lee-county-economic-outlook.md?raw";
import "./GoogleRankingGuide.css";
import "./LeeCountyEconomicOutlook.css";

const pageUrl = "https://smithdigitals.com/blog/lee-county-economic-outlook/";
const pageTitle = "Lee County, Virginia Economic Outlook | Smith Digitals";
const pageDescription =
  "Can Lee County, Virginia turn its economy around? A data-led look at population, migration, tourism, local business, infrastructure, and the path to sustainable growth.";

const stats = [
  {
    value: "21,642",
    label: "2025 population estimate",
    source: "https://www.census.gov/quickfacts/fact/table/leecountyvirginia/NES010222",
    sourceLabel: "Census Bureau",
  },
  {
    value: "+183",
    label: "Net domestic migration, 2023–24",
    source: "https://usafacts.org/answers/is-the-population-growing-or-shrinking/county/lee-county-va/",
    sourceLabel: "USAFacts",
  },
  {
    value: "729,249",
    label: "Cumberland Gap visitors in 2024",
    source: "https://www.nps.gov/cuga/learn/news/tourism-to-cumberland-gap-national-historical-park-contributes-%2424-310-000-to-local-economy.htm",
    sourceLabel: "National Park Service",
  },
  {
    value: "50+",
    label: "Businesses interested in a renewed chamber",
    source: "https://www.facebook.com/heather.hitchler.9",
    sourceLabel: "Heather Hitchler",
  },
];

const navigation = [
  ["where-lee-county-actually-stands", "Where Lee County stands"],
  ["the-population-number-i-find-more-interesting-than-the-population-total", "The migration signal"],
  ["lee-county-already-has-more-entrepreneurs-than-you-might-think", "Local entrepreneurs"],
  ["tourism-might-be-the-biggest-opportunity-sitting-in-plain-sight", "The tourism opportunity"],
  ["housing-might-be-more-important-than-it-looks", "Housing and infrastructure"],
  ["a-renewed-chamber-could-help-connect-the-pieces", "Renewing the chamber"],
  ["what-could-lee-county-do-right-now", "What Lee County can do"],
  ["the-road-ahead", "The road ahead"],
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      headline: "The Economic Outlook of Lee County, Virginia: Is a Turnaround Possible?",
      description: pageDescription,
      image: "https://smithdigitals.com/og-image.jpg",
      datePublished: "2026-08-17",
      dateModified: "2026-08-17",
      mainEntityOfPage: pageUrl,
      articleSection: "Regional Economic Development",
      about: [
        { "@type": "Place", name: "Lee County, Virginia" },
        { "@type": "Thing", name: "Economic development" },
      ],
      author: {
        "@type": "Organization",
        name: "Smith Digitals LLC",
        url: "https://smithdigitals.com/",
      },
      publisher: {
        "@type": "Organization",
        name: "Smith Digitals LLC",
        url: "https://smithdigitals.com/",
        logo: {
          "@type": "ImageObject",
          url: "https://smithdigitals.com/og-image.jpg",
        },
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://smithdigitals.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Lee County Economic Outlook",
          item: pageUrl,
        },
      ],
    },
  ],
};

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[’']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function renderInline(value) {
  const parts = value.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);

  return parts.filter(Boolean).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={`${part}-${index}`}>{part.slice(2, -2)}</strong>;
    }

    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      return (
        <a
          key={`${linkMatch[2]}-${index}`}
          href={linkMatch[2]}
          className={linkMatch[1].startsWith("Source:") ? "economic-source-link" : undefined}
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkMatch[1]}
        </a>
      );
    }

    return part;
  });
}

function renderMarkdown(markdown) {
  const lines = markdown
    .replace(/^# .*\n\n\*\*By Smith Digitals LLC\*\*\n\n/, "")
    .split(/\r?\n/);
  const blocks = [];

  for (let index = 0; index < lines.length;) {
    const line = lines[index].trim();

    if (!line || line === "---") {
      index += 1;
      continue;
    }

    const heading = line.match(/^(#{1,3})\s+(.+)$/);
    if (heading) {
      const text = heading[2];
      const id = slugify(text);
      const isOpeningHeading = text === "If You Only Look at the Population, You Might Miss the Bigger Story";
      const HeadingTag = heading[1].length === 1 || isOpeningHeading ? "h2" : "h3";
      blocks.push(
        <HeadingTag key={`heading-${index}`} id={id}>
          {renderInline(text)}
        </HeadingTag>,
      );
      index += 1;
      continue;
    }

    if (line.startsWith("* ")) {
      const items = [];
      while (index < lines.length && lines[index].trim().startsWith("* ")) {
        items.push(lines[index].trim().slice(2));
        index += 1;
      }
      blocks.push(
        <ul key={`list-${index}`}>
          {items.map((item) => <li key={item}>{renderInline(item)}</li>)}
        </ul>,
      );
      continue;
    }

    if (line.startsWith("> ")) {
      const quote = [];
      while (index < lines.length && lines[index].trim().startsWith("> ")) {
        quote.push(lines[index].trim().slice(2));
        index += 1;
      }
      blocks.push(<blockquote key={`quote-${index}`}>{renderInline(quote.join(" "))}</blockquote>);
      continue;
    }

    const paragraph = [line];
    index += 1;
    while (
      index < lines.length
      && lines[index].trim()
      && lines[index].trim() !== "---"
      && !/^(#{1,3})\s+/.test(lines[index].trim())
      && !lines[index].trim().startsWith("* ")
      && !lines[index].trim().startsWith("> ")
    ) {
      paragraph.push(lines[index].trim());
      index += 1;
    }

    const text = paragraph.join(" ");
    const isEmphasis = /^\*\*.+\*\*$/.test(text);
    blocks.push(
      <p key={`paragraph-${index}`} className={isEmphasis ? "economic-emphasis" : undefined}>
        {renderInline(text)}
      </p>,
    );
  }

  return blocks;
}

export default function LeeCountyEconomicOutlook() {
  return (
    <>
      <Title>{pageTitle}</Title>
      <Meta name="description" content={pageDescription} />
      <Meta
        name="keywords"
        content="Lee County Virginia economy, Lee County economic development, Cumberland Gap tourism, Southwest Virginia business, Lee County Chamber of Commerce"
      />
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta property="og:type" content="article" />
      <Meta property="og:url" content={pageUrl} />
      <Meta property="og:title" content={pageTitle} />
      <Meta property="og:description" content={pageDescription} />
      <Meta property="og:image" content="https://smithdigitals.com/og-image.jpg" />
      <Meta property="article:published_time" content="2026-08-17" />
      <Meta property="article:modified_time" content="2026-08-17" />
      <Meta property="article:author" content="Smith Digitals LLC" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content={pageTitle} />
      <Meta name="twitter:description" content={pageDescription} />
      <Meta name="twitter:image" content="https://smithdigitals.com/og-image.jpg" />
      <MetaLink rel="canonical" href={pageUrl} />
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>

      <main className="guide-page economic-outlook-page">
        <header className="guide-hero economic-hero">
          <div className="guide-shell">
            <nav className="guide-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span>Regional outlook</span>
            </nav>
            <div>
              <p className="guide-eyebrow">Lee County, Virginia · Economic development · 28 minute read</p>
              <h1>The economic outlook of Lee County</h1>
              <p className="economic-hero-question">Is a turnaround possible?</p>
              <p className="guide-deck">
                Population decline is real. So are the signals moving in the other
                direction: migration, tourism, investment, entrepreneurship, and a renewed
                push to connect the county&apos;s businesses.
              </p>
              <div className="guide-byline">
                <span className="guide-author-mark" aria-hidden="true">SD</span>
                <p>
                  By <strong>Smith Digitals LLC</strong>
                  <span>Published August 17, 2026</span>
                </p>
              </div>
            </div>
          </div>
        </header>

        <section className="economic-stat-band" aria-label="Key figures from the article">
          <div className="guide-shell">
            {stats.map(({ value, label, source, sourceLabel }, index) => (
              <motion.article
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <strong>{value}</strong>
                <span>{label}</span>
                <a href={source} target="_blank" rel="noopener noreferrer">
                  Source: {sourceLabel} <span aria-hidden="true">↗</span>
                </a>
              </motion.article>
            ))}
          </div>
        </section>

        <div className="guide-shell guide-layout economic-layout">
          <article className="guide-article economic-article">
            <aside className="economic-editor-note">
              <p>The short version</p>
              <h2>A turnaround is possible—but it would look like momentum, not a miracle.</h2>
              <p>
                Lee County does not need to become a major city. It needs more of its
                existing assets working together: local businesses, visitors, industrial
                land, housing, infrastructure, digital visibility, and the people already
                committed to the community.
              </p>
            </aside>
            {renderMarkdown(articleMarkdown)}
          </article>

          <aside className="guide-sidebar" aria-label="Article navigation">
            <div>
              <p>In this outlook</p>
              <nav>
                {navigation.map(([href, label]) => (
                  <a key={href} href={`#${href}`}>{label}</a>
                ))}
              </nav>
              <a
                href="https://www.facebook.com/heather.hitchler.9"
                target="_blank"
                rel="noopener noreferrer"
              >
                Follow Heather Hitchler <span aria-hidden="true">↗</span>
              </a>
              <Link to="/contact">Build local visibility <span aria-hidden="true">↗</span></Link>
            </div>
          </aside>
        </div>

        <section className="guide-cta economic-cta">
          <div className="guide-shell">
            <p>Local momentum starts with visibility</p>
            <h2>Make it easier to discover what Lee County is building.</h2>
            <div>
              <p>
                Smith Digitals helps local businesses turn good work into a clear,
                credible online presence that reaches customers inside and outside the county.
              </p>
              <Link to="/contact">Start a conversation <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
