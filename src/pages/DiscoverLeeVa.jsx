import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Title, Meta } from "react-head";
import CanonicalLink from "../components/CanonicalLink";
import iLoveLeeLogo from "../assets/ilovelee.webp";
import "./StoneMountainYogurt.css";
import "./DiscoverLeeVa.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (index = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: index * 0.09 },
  }),
};

const projectDetails = [
  ["Client", "I Love Lee Tourism"],
  ["Location", "Jonesville, VA"],
  ["Industry", "Government & Tourism"],
  ["Services", "Destination UX, Local SEO Engine, Directory Architecture"],
];

const metrics = [
  ["Search impressions", "12.3K"],
  ["Organic clicks", "99"],
  ["Average search rank", "10.9"],
  ["Initial launch window", "3 months"],
];

const strategicPillars = [
  {
    number: "01",
    title: "Shared community calendar",
    items: [
      [
        "Centralized event hub",
        "Local organizations, artisans, and venue hosts can aggregate upcoming county events in one accessible destination.",
      ],
      [
        "Increased visitor retention",
        "Real-time updates on performances, festivals, and community gatherings keep tourists and residents engaged.",
      ],
    ],
  },
  {
    number: "02",
    title: "Free dedicated business directory pages",
    items: [
      [
        "Individual SEO landing pages",
        "Every local business receives a dedicated, search-optimized page designed to maximize organic indexation.",
      ],
      [
        "Hyper-local backlinks",
        "Contextual directory links strengthen domain authority and search visibility for dining, lodging, retail, and service partners.",
      ],
    ],
  },
];

const performanceResults = [
  {
    value: "12,300+",
    title: "Total search impressions",
    description:
      "High-intent visibility for regional queries including “Cumberland Gap attractions,” “Lee County VA travel,” and local business listings.",
  },
  {
    value: "99",
    title: "Organic clicks",
    description:
      "A continued upward trajectory as new destination content and dedicated business pages reached search results.",
  },
  {
    value: "10.9",
    title: "Average position",
    description:
      "Front-page search placement across regional destination and business terms within the first three months.",
  },
];

const technicalSolutions = [
  {
    title: "Search-first architecture",
    description:
      "Structured LocalBusiness schema and geo-tagging give every registered Lee County business stronger machine-readable local context.",
  },
  {
    title: "Frictionless resource capture",
    description:
      "Visitors receive immediate digital access to the official Visitor Guide PDF, with direct phone requests available at (276) 346-7766.",
  },
  {
    title: "Regional partner integration",
    description:
      "Authority badges connect the portal with Virginia is for Lovers, The Crooked Road, and Heart of Appalachia.",
  },
  {
    title: "Mobile destination UX",
    description:
      "A lightweight, high-speed interface supports travelers planning from their phones while remaining efficient for search crawlers.",
  },
];

export default function DiscoverLeeVa() {
  const pageUrl = "https://smithdigitals.com/case-studies/discoverleeva/";
  const portalUrl = "https://discoverleeva.com/";
  const pageTitle = "DiscoverLeeVa Case Study | Lee County Tourism Platform";
  const pageDescription =
    "See how Smith Digitals built DiscoverLeeVa, the official I Love Lee tourism portal, community calendar, visitor guide, and business directory.";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Architecting the Official I Love Lee Digital Gateway for Lee County Tourism",
    description: pageDescription,
    mainEntityOfPage: pageUrl,
    author: {
      "@type": "Organization",
      name: "Smith Digitals LLC",
      url: "https://smithdigitals.com/",
    },
    about: {
      "@type": "TouristDestination",
      name: "Lee County, Virginia",
      url: portalUrl,
      touristType: ["Outdoor recreation travelers", "Heritage travelers", "Regional visitors"],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Jonesville",
        addressRegion: "VA",
        addressCountry: "US",
      },
    },
    mentions: {
      "@type": "Organization",
      name: "I Love Lee Tourism",
      url: portalUrl,
    },
    image: "https://smithdigitals.com/og-image.jpg",
  };

  return (
    <>
      <Title>{pageTitle}</Title>
      <Meta name="description" content={pageDescription} />
      <Meta
        name="keywords"
        content="DiscoverLeeVa, I Love Lee Tourism, Lee County Virginia tourism, destination portal, tourism website, local business directory, Smith Digitals case study"
      />
      <Meta property="og:title" content={pageTitle} />
      <Meta property="og:description" content={pageDescription} />
      <Meta property="og:image" content="https://smithdigitals.com/og-image.jpg" />
      <Meta property="og:type" content="article" />
      <Meta property="og:url" content={pageUrl} />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content={pageTitle} />
      <Meta name="twitter:description" content={pageDescription} />
      <CanonicalLink rel="canonical" href={pageUrl} />
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>

      <main className="smy-page dlv-page">
        <div className="smy-breadcrumb">
          <Link to="/case-studies">← Back to Case Studies</Link>
        </div>

        <section className="smy-hero dlv-hero" aria-labelledby="dlv-title">
          <motion.div
            className="smy-hero-inner dlv-hero-inner"
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.09 } } }}
          >
            <motion.div className="dlv-logo-block" variants={fadeUp}>
              <img src={iLoveLeeLogo} alt="I Love Lee Virginia and DiscoverLeeVa.com logo" />
            </motion.div>
            <motion.p className="smy-kicker dlv-kicker" variants={fadeUp}>
              Smith Digitals LLC · Case study
            </motion.p>
            <motion.h1 id="dlv-title" className="smy-title dlv-title" variants={fadeUp}>
              Architecting the official “I Love Lee” digital gateway for Lee County tourism.
            </motion.h1>
            <motion.p className="smy-lead dlv-lead" variants={fadeUp}>
              A destination portal and regional tourism platform connecting Appalachian attractions,
              community events, visitor resources, and local businesses in one discoverable system.
            </motion.p>
            <motion.div className="smy-ctas" variants={fadeUp}>
              <a
                href={portalUrl}
                target="_blank"
                rel="noopener"
                className="smy-btn smy-btn-primary dlv-btn"
              >
                Explore DiscoverLeeVa.com →
              </a>
            </motion.div>
          </motion.div>
        </section>

        <section className="dlv-project-details" aria-label="Project details">
          {projectDetails.map(([label, value], index) => (
            <motion.article
              key={label}
              custom={index}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <p>{label}</p>
              <h2>{value}</h2>
            </motion.article>
          ))}
        </section>

        <section className="smy-metrics dlv-metrics" aria-label="Three-month performance metrics">
          {metrics.map(([label, value], index) => (
            <motion.article
              key={label}
              className="smy-metric-card dlv-metric-card"
              custom={index}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <p>{label}</p>
              <h3>{value}</h3>
            </motion.article>
          ))}
        </section>

        <section className="smy-section">
          <motion.div
            className="smy-section-inner dlv-section-inner"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ show: { transition: { staggerChildren: 0.09 } } }}
          >
            <motion.p className="smy-label dlv-label" variants={fadeUp}>01 · Executive summary</motion.p>
            <motion.h2 variants={fadeUp}>A scalable digital home for the whole county.</motion.h2>
            <motion.p variants={fadeUp}>
              Lee County Tourism, operating as I Love Lee, serves as the official destination marketing
              organization for Lee County, Virginia—an Appalachian hub for outdoor adventure, historical
              landmarks, and locally owned businesses.
            </motion.p>
            <motion.p variants={fadeUp}>
              Smith Digitals built the scalable infrastructure behind the{' '}
              <a href={portalUrl} target="_blank" rel="noopener" className="dlv-inline-link">
                official DiscoverLeeVa destination portal
              </a>
              , designed to aggregate regional attractions, centralize community events, and support
              local commerce through dedicated search-optimized business pages.
            </motion.p>
          </motion.div>
        </section>

        <section className="smy-section">
          <motion.div
            className="smy-section-inner dlv-section-inner"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ show: { transition: { staggerChildren: 0.09 } } }}
          >
            <motion.p className="smy-label dlv-label" variants={fadeUp}>02 · Core strategic pillars</motion.p>
            <motion.h2 variants={fadeUp}>Shared infrastructure that helps the region compound attention.</motion.h2>
            <div className="dlv-pillar-grid">
              {strategicPillars.map((pillar, index) => (
                <motion.article key={pillar.title} custom={index} variants={fadeUp}>
                  <span>{pillar.number}</span>
                  <h3>{pillar.title}</h3>
                  {pillar.items.map(([title, description]) => (
                    <div key={title} className="dlv-pillar-item">
                      <h4>{title}</h4>
                      <p>{description}</p>
                    </div>
                  ))}
                </motion.article>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="smy-section dlv-performance-section">
          <motion.div
            className="smy-section-inner dlv-section-inner"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ show: { transition: { staggerChildren: 0.09 } } }}
          >
            <motion.p className="smy-label dlv-label" variants={fadeUp}>03 · Google Search Console</motion.p>
            <motion.h2 variants={fadeUp}>A three-month organic performance breakthrough.</motion.h2>
            <motion.p variants={fadeUp}>
              Within 90 days of launch, the new portal structure produced rapid indexation and a sharp
              rise in organic visibility across regional destination and business searches.
            </motion.p>
            <div className="dlv-results-grid">
              {performanceResults.map((result, index) => (
                <motion.article key={result.title} custom={index} variants={fadeUp}>
                  <strong>{result.value}</strong>
                  <h3>{result.title}</h3>
                  <p>{result.description}</p>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="smy-section">
          <motion.div
            className="smy-section-inner dlv-section-inner"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ show: { transition: { staggerChildren: 0.09 } } }}
          >
            <motion.p className="smy-label dlv-label" variants={fadeUp}>04 · Technical architecture</motion.p>
            <motion.h2 variants={fadeUp}>Fast for travelers. Legible to search engines.</motion.h2>
            <motion.p variants={fadeUp}>
              Smith Digitals deployed a lightweight, mobile-first architecture tuned for both visitor
              planning and efficient search crawling.
            </motion.p>
            <div className="dlv-technical-grid">
              {technicalSolutions.map((solution, index) => (
                <motion.article key={solution.title} custom={index} variants={fadeUp}>
                  <span aria-hidden="true">0{index + 1}</span>
                  <h3>{solution.title}</h3>
                  <p>{solution.description}</p>
                  {index === 1 && <a href="tel:+12763467766">Call (276) 346-7766</a>}
                </motion.article>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="dlv-closing">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
            <p>Destination portal · Community calendar · Local business directory</p>
            <h2>Discover what Lee County has to offer.</h2>
            <a href={portalUrl} target="_blank" rel="noopener">
              Visit DiscoverLeeVa.com <span aria-hidden="true">↗</span>
            </a>
          </motion.div>
        </section>

        <footer className="smy-credit">
          <p>
            Prepared and built by <Link to="/">Smith Digitals LLC</Link>
          </p>
        </footer>
      </main>
    </>
  );
}
