import { motion, useReducedMotion } from "framer-motion";
import { Title, Meta, Link as MetaLink } from "react-head";
import { Link, Navigate, useParams } from "react-router-dom";
import {
  getLeeCountyWebDesignLocation,
  getLeeCountyWebDesignPath,
  leeCountyWebDesignHub,
  leeCountyWebDesignLocations,
} from "../content/leeCountyWebDesignLocations";
import "./LeeCountyWebDesign.css";

const siteUrl = "https://smithdigitals.com";
const imageUrl = `${siteUrl}/og-image.jpg`;

const coreServices = [
  {
    number: "01",
    title: "Strategy and structure",
    description:
      "The offer, audience, pages, and conversion path are mapped before the visual work begins, so every screen has a job.",
  },
  {
    number: "02",
    title: "Custom design and development",
    description:
      "A responsive website built around your business—not a generic theme filled with interchangeable copy.",
  },
  {
    number: "03",
    title: "Local SEO foundations",
    description:
      "Search-friendly page structure, metadata, schema, internal links, and location signals are included from the start.",
  },
  {
    number: "04",
    title: "Launch and improvement",
    description:
      "Analytics, technical checks, and a clear maintenance path make the website useful long after launch day.",
  },
];

const process = [
  ["Discover", "We define the customer, service area, strongest offer, and business outcome."],
  ["Direct", "I shape the content, page hierarchy, visual direction, and search strategy."],
  ["Build", "The site is designed and developed as one connected, responsive system."],
  ["Launch", "Everything goes live with measurement in place and room to keep improving."],
];

const hubFaqItems = [
  {
    question: "Does Smith Digitals serve all of Lee County, Virginia?",
    answer:
      "Yes. Smith Digitals works with businesses across Lee County, including Pennington Gap, Jonesville, Ewing, Rose Hill, St. Charles, Dryden, and Keokee, as well as nearby Southwest Virginia communities.",
  },
  {
    question: "Is local SEO included with a new website?",
    answer:
      "Every website starts with technical and on-page SEO foundations. The exact local SEO scope depends on the business, its service area, and the competitiveness of the searches it needs to reach.",
  },
  {
    question: "Can Smith Digitals redesign an existing Lee County business website?",
    answer:
      "Yes. A project can be a new build or a strategic redesign. The first step is identifying what the current site does well, where it loses customers, and what the next version needs to accomplish.",
  },
];

const getLocationFaqItems = (location) => [
  {
    question: `Do you build websites for businesses in ${location.name}?`,
    answer: `Yes. Smith Digitals works with businesses serving ${location.name} and the surrounding Southwest Virginia market. You work directly with Dylan Smith from the initial strategy through design, development, and launch.`,
  },
  {
    question: `Can a website help me rank locally in ${location.name}?`,
    answer: `${location.faqLead} No one can guarantee a Google ranking. The work focuses on the signals you can control: useful content, sound site structure, speed, accurate details, local relevance, and a strong conversion path.`,
  },
  {
    question: "Will I be able to update the website after launch?",
    answer:
      "Yes. The right editing and maintenance setup is chosen for the project. You can manage agreed-upon content yourself, continue with Smith Digitals, or use a combination of both.",
  },
  {
    question: "How much does a small-business website cost?",
    answer:
      "The investment depends on scope, content, integrations, and business goals. After a short discovery conversation, you receive a clear recommendation and proposal before any work begins.",
  },
];

function SeoHead({ location }) {
  const isHub = !location;
  const name = isHub ? leeCountyWebDesignHub.name : location.name;
  const path = isHub
    ? leeCountyWebDesignHub.path
    : getLeeCountyWebDesignPath(location.slug);
  const title = isHub
    ? leeCountyWebDesignHub.title
    : `Web Design in ${name}, VA | Smith Digitals`;
  const description = isHub
    ? leeCountyWebDesignHub.description
    : `Custom web design for ${name}, Virginia businesses. Smith Digitals builds fast, credible websites with local SEO foundations and clear paths to new leads.`;
  const canonical = `${siteUrl}${path}`;
  const placeName = isHub ? "Lee County, Virginia" : `${name}, Virginia`;

  const breadcrumbs = [
    { name: "Smith Digitals", item: siteUrl },
    {
      name: "Web Design in Lee County",
      item: `${siteUrl}${leeCountyWebDesignHub.path}`,
    },
  ];

  if (!isHub) {
    breadcrumbs.push({ name: `Web Design in ${name}`, item: canonical });
  }

  const faqItems = isHub ? hubFaqItems : getLocationFaqItems(location);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Smith Digitals",
      },
      {
        "@type": isHub ? "CollectionPage" : "WebPage",
        "@id": `${canonical}#webpage`,
        url: canonical,
        name: title,
        description,
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${canonical}#service` },
      },
      {
        "@type": "Service",
        "@id": `${canonical}#service`,
        name: `Web Design in ${placeName}`,
        serviceType: "Website Design and Development",
        url: canonical,
        description,
        provider: {
          "@type": "ProfessionalService",
          "@id": `${siteUrl}/#business`,
          name: "Smith Digitals LLC",
          url: siteUrl,
          email: "dylan@smithdigitals.com",
        },
        areaServed: {
          "@type": isHub ? "AdministrativeArea" : "Place",
          name: placeName,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((breadcrumb, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: breadcrumb.name,
          item: breadcrumb.item,
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <Title>{title}</Title>
      <Meta name="description" content={description} />
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta
        name="keywords"
        content={`web design ${name} VA, website designer ${name}, small business website, local SEO, Lee County web design, Smith Digitals`}
      />
      <Meta property="og:title" content={title} />
      <Meta property="og:description" content={description} />
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content={canonical} />
      <Meta property="og:image" content={imageUrl} />
      <Meta property="og:locale" content="en_US" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content={title} />
      <Meta name="twitter:description" content={description} />
      <Meta name="twitter:image" content={imageUrl} />
      <MetaLink rel="canonical" href={canonical} />
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </>
  );
}

function Breadcrumbs({ location }) {
  return (
    <nav className="lcw-breadcrumbs" aria-label="Breadcrumb">
      <Link to="/">Smith Digitals</Link>
      <span aria-hidden="true">/</span>
      {location ? (
        <>
          <Link to={leeCountyWebDesignHub.path}>Web Design in Lee County</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{location.name}</span>
        </>
      ) : (
        <span aria-current="page">Web Design in Lee County</span>
      )}
    </nav>
  );
}

function PageFaq({ kicker, title, items }) {
  return (
    <section className="lcw-section lcw-shell lcw-faq" aria-labelledby="location-faq-title">
      <div className="lcw-section-heading">
        <p className="lcw-kicker">{kicker}</p>
        <h2 id="location-faq-title">{title}</h2>
      </div>
      <div className="lcw-faq-list">
        {items.map((item) => (
          <details key={item.question}>
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function LeeCountyWebDesignHub() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <SeoHead />
      <main className="lcw-page">
        <section className="lcw-hero lcw-hub-hero">
          <div className="lcw-shell">
            <Breadcrumbs />
            <motion.div
              className="lcw-hero-grid"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div>
                <p className="lcw-kicker"><span /> Lee County, Virginia</p>
                <h1>Web design in Lee County for businesses ready to be found.</h1>
              </div>
              <div className="lcw-hero-aside">
                <p>
                  Smith Digitals builds custom websites that give local businesses a
                  credible first impression, a stronger search foundation, and a clear
                  path from visitor to customer.
                </p>
                <div className="lcw-actions">
                  <Link className="lcw-button lcw-button-primary" to="/contact">
                    Start a project <span aria-hidden="true">↗</span>
                  </Link>
                  <Link className="lcw-text-link" to="/case-studies">
                    See the work <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="lcw-location-index" aria-labelledby="community-title">
          <div className="lcw-shell">
            <div className="lcw-section-heading lcw-section-heading-split">
              <div>
                <p className="lcw-kicker">Local coverage</p>
                <h2 id="community-title">Choose your community.</h2>
              </div>
              <p>
                Each page explains how the same core capability is shaped around the
                real customers, service area, and search intent of that community.
              </p>
            </div>
            <div className="lcw-location-grid">
              {leeCountyWebDesignLocations.map((location, index) => (
                <Link
                  className="lcw-location-card"
                  to={getLeeCountyWebDesignPath(location.slug)}
                  key={location.slug}
                >
                  <span className="lcw-location-number">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <p>{location.relationship}</p>
                    <h3>{location.name}</h3>
                  </div>
                  <span className="lcw-location-arrow" aria-hidden="true">↗</span>
                </Link>
              ))}
            </div>
            <p className="lcw-coverage-note">
              Based elsewhere in Lee County? Smith Digitals serves businesses
              county-wide. <Link to="/contact">Tell me where you work ↗</Link>
            </p>
          </div>
        </section>

        <section className="lcw-section lcw-shell lcw-intro-grid">
          <div className="lcw-section-heading">
            <p className="lcw-kicker">Local context, serious craft</p>
            <h2>A website built for how business actually moves here.</h2>
          </div>
          <div className="lcw-prose">
            <p>
              In Lee County, a new customer may hear about a business from a friend,
              see its name on social media, and then search Google before making contact.
              The website is where those separate moments become confidence—or doubt.
            </p>
            <p>
              I build that experience as one connected system: clear positioning,
              responsive design, useful content, thoughtful development, local search
              fundamentals, and direct ways to call, book, buy, or request a quote.
            </p>
            <p>
              Businesses that serve regional visitors can also use the
              {" "}<Link to="/guides/lee-county-cumberland-gap-tourism">Cumberland Gap tourism guide</Link>
              {" "}to connect their website, Maps presence, and local partnerships.
            </p>
          </div>
        </section>

        <section className="lcw-services" aria-labelledby="hub-services-title">
          <div className="lcw-shell">
            <div className="lcw-section-heading">
              <p className="lcw-kicker">What the work includes</p>
              <h2 id="hub-services-title">More than a better-looking homepage.</h2>
            </div>
            <div className="lcw-service-grid">
              {coreServices.map((service) => (
                <article className="lcw-service-card" key={service.number}>
                  <span>{service.number}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="lcw-section lcw-shell lcw-proof-callout">
          <p className="lcw-kicker">Built close to the work</p>
          <blockquote>
            “Local” is not a keyword pasted into generic copy. It is knowing who the
            customer is, what they need to trust, and how they decide.
          </blockquote>
          <div>
            <p>
              Smith Digitals is founder-led. The person learning your business is the
              same person shaping the strategy, designing the experience, and building
              the site.
            </p>
            <Link to="/case-studies/fit-and-fierce">See a Pennington Gap project ↗</Link>
          </div>
        </section>

        <PageFaq
          kicker="Planning your project"
          title="Lee County web design, answered."
          items={hubFaqItems}
        />

        <section className="lcw-cta">
          <div className="lcw-shell">
            <p className="lcw-kicker">Have a project in Lee County?</p>
            <h2>Let’s give your business a digital presence worth finding.</h2>
            <Link className="lcw-button lcw-button-light" to="/contact">
              Start the conversation <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

export function WebDesignLocation() {
  const { locationSlug } = useParams();
  const location = getLeeCountyWebDesignLocation(locationSlug);
  const prefersReducedMotion = useReducedMotion();

  if (!location) {
    return <Navigate to={leeCountyWebDesignHub.path} replace />;
  }

  const otherLocations = leeCountyWebDesignLocations.filter(
    (item) => item.slug !== location.slug,
  );

  return (
    <>
      <SeoHead location={location} />
      <main className="lcw-page">
        <section className="lcw-hero lcw-location-hero">
          <div className="lcw-shell">
            <Breadcrumbs location={location} />
            <motion.div
              className="lcw-hero-grid"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div>
                <p className="lcw-kicker"><span /> {location.relationship}</p>
                <h1>Web Design in <em>{location.name}, VA</em></h1>
              </div>
              <div className="lcw-hero-aside">
                <p>
                  Custom websites for {location.name} businesses that need to look
                  credible, explain their value clearly, and turn local searches into
                  real conversations.
                </p>
                <div className="lcw-actions">
                  <Link className="lcw-button lcw-button-primary" to="/contact">
                    Discuss your website <span aria-hidden="true">↗</span>
                  </Link>
                  <Link className="lcw-text-link" to="/pricing">
                    View engagements <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </motion.div>
            <div className="lcw-signal-row" aria-label="Project principles">
              <div><strong>Custom</strong><span>Designed for the business</span></div>
              <div><strong>Local</strong><span>Search foundations included</span></div>
              <div><strong>Direct</strong><span>One senior partner</span></div>
            </div>
          </div>
        </section>

        <section className="lcw-section lcw-shell lcw-intro-grid">
          <div className="lcw-section-heading">
            <p className="lcw-kicker">The {location.name} opportunity</p>
            <h2>Be the clear choice before the first call.</h2>
          </div>
          <div className="lcw-prose">
            <p>{location.landscape}</p>
            <p>{location.audience}</p>
          </div>
        </section>

        <section className="lcw-priorities" aria-labelledby="priority-title">
          <div className="lcw-shell lcw-priorities-grid">
            <div>
              <p className="lcw-kicker">Built around local decisions</p>
              <h2 id="priority-title">What the site needs to accomplish.</h2>
              <p>
                Good local web design makes the next decision easier. For a business
                serving {location.name}, that means a focused set of priorities.
              </p>
            </div>
            <ol>
              {location.priorities.map((priority, index) => (
                <li key={priority}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{priority}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="lcw-services" aria-labelledby="services-title">
          <div className="lcw-shell">
            <div className="lcw-section-heading lcw-section-heading-split">
              <div>
                <p className="lcw-kicker">From first idea to launch</p>
                <h2 id="services-title">One connected web design system.</h2>
              </div>
              <p>
                Strategy, content direction, design, code, and search fundamentals stay
                connected because one partner owns the complete result.
              </p>
            </div>
            <div className="lcw-service-grid">
              {coreServices.map((service) => (
                <article className="lcw-service-card" key={service.number}>
                  <span>{service.number}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="lcw-section lcw-shell lcw-process" aria-labelledby="process-title">
          <div className="lcw-section-heading">
            <p className="lcw-kicker">A direct process</p>
            <h2 id="process-title">From business problem to working website.</h2>
          </div>
          <div className="lcw-process-list">
            {process.map(([title, description], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="lcw-case-band">
          <div className="lcw-shell lcw-case-band-grid">
            <div>
              <p className="lcw-kicker">Proof from Lee County</p>
              <h2>See how local context becomes a real digital experience.</h2>
            </div>
            <div>
              <p>
                Explore the website built for Fit &amp; Fierce, a Pennington Gap studio
                with a clear community, a distinct point of view, and a local audience.
              </p>
              <Link to="/case-studies/fit-and-fierce">View the case study ↗</Link>
            </div>
          </div>
        </section>

        <PageFaq
          kicker="Common questions"
          title={`Web design in ${location.name}, answered.`}
          items={getLocationFaqItems(location)}
        />

        <section className="lcw-nearby" aria-labelledby="nearby-title">
          <div className="lcw-shell">
            <div className="lcw-section-heading lcw-section-heading-split">
              <div>
                <p className="lcw-kicker">Also serving the region</p>
                <h2 id="nearby-title">Web design near {location.name}.</h2>
              </div>
              <Link className="lcw-text-link" to={leeCountyWebDesignHub.path}>
                View Lee County coverage <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="lcw-nearby-links">
              {otherLocations.map((item) => (
                <Link to={getLeeCountyWebDesignPath(item.slug)} key={item.slug}>
                  {item.name} <span aria-hidden="true">↗</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="lcw-cta">
          <div className="lcw-shell">
            <p className="lcw-kicker">Serving {location.name}?</p>
            <h2>Build a website that makes the next customer more likely.</h2>
            <Link className="lcw-button lcw-button-light" to="/contact">
              Start the conversation <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
