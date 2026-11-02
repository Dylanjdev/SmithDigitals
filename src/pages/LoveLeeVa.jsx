import { motion, MotionConfig } from "framer-motion";
import { Link } from "react-router-dom";
import { Title, Meta } from "react-head";
import CanonicalLink from "../components/CanonicalLink";
import loveLeeVaVisual from "../assets/LoveLeeVa.svg";
import "./LoveLeeVa.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (index = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: index * 0.08 },
  }),
};

const stagger = {
  show: { transition: { staggerChildren: 0.1 } },
};

const pillars = [
  {
    number: "01",
    name: "Goods",
    line: "Locally made products and custom craftsmanship",
    mark: "G",
  },
  {
    number: "02",
    name: "Power",
    line: "Resilient rural infrastructure and engineering",
    mark: "P",
  },
  {
    number: "03",
    name: "Talent",
    line: "Workforce development and technical mentorship",
    mark: "T",
  },
  {
    number: "04",
    name: "Adventure",
    line: "Tourism, events, and Appalachian discovery",
    mark: "A",
  },
];

const challenges = [
  "Sell physical products with accurate inventory, shipping, and taxes.",
  "Help residents and visitors discover local businesses.",
  "Publish community events and accept moderated submissions.",
  "Promote Lee County as a travel destination.",
  "Explain long-term workforce and rural-development goals.",
  "Create a distinct identity rooted in Appalachia.",
];

const communityTools = [
  {
    title: "Business directory",
    description: "Search and filters make Lee County organizations easier to find, while moderated submissions and logo uploads let the directory grow with the community.",
  },
  {
    title: "Community calendar",
    description: "Category filters, event detail pages, individual and bulk CSV submissions, and a subscribable live feed turn scattered listings into a shared resource.",
  },
  {
    title: "Local travel guides",
    description: "In-depth Lee County and Cumberland Gap content gives visitors a useful starting point and sends attention toward local places and organizations.",
  },
  {
    title: "Human workflows",
    description: "Custom-order and general-contact paths make room for work that does not fit neatly inside a standard storefront transaction.",
  },
];

const outcomes = [
  ["One catalog", "Odoo remains the central source for product and order data."],
  ["Verified checkout", "Price and inventory are validated on the server before purchase."],
  ["Self-service tools", "Businesses and organizers can submit listings and events."],
  ["Search-ready", "Public routes are prerendered with focused metadata and structured data."],
];

export default function LoveLeeVa() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "LoveLeeVa: Building a Digital Platform for Rural Growth",
    headline: "A headless commerce and community-discovery platform for Lee County, Virginia",
    description:
      "A Smith Digitals case study covering the LoveLeeVa commerce, community discovery, tourism, and rural-development platform.",
    url: "https://smithdigitals.com/case-studies/loveleeva",
    about: {
      "@type": "Organization",
      name: "LoveLeeVa",
      url: "https://loveleeva.com/",
    },
    creator: {
      "@type": "Organization",
      name: "Smith Digitals LLC",
      url: "https://smithdigitals.com/",
    },
  };

  return (
    <>
      <Title>LoveLeeVa Case Study | Rural Commerce & Community Platform</Title>
      <Meta
        name="description"
        content="See how Smith Digitals built LoveLeeVa, a headless commerce and community-discovery platform connecting local goods, businesses, events, tourism, and rural growth in Lee County, Virginia."
      />
      <Meta
        name="keywords"
        content="LoveLeeVa, Lee County Virginia, headless commerce, rural development platform, Odoo React, community directory, Smith Digitals case study"
      />
      <Meta property="og:title" content="LoveLeeVa: Building a Digital Platform for Rural Growth" />
      <Meta
        property="og:description"
        content="Headless commerce, community tools, and Appalachian discovery brought together in one platform for Lee County, Virginia."
      />
      <Meta property="og:image" content="https://smithdigitals.com/og-image.jpg" />
      <Meta property="og:type" content="article" />
      <Meta property="og:url" content="https://smithdigitals.com/case-studies/loveleeva" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="LoveLeeVa | Smith Digitals Case Study" />
      <Meta
        name="twitter:description"
        content="A digital ecosystem for local commerce, community participation, tourism, and rural growth."
      />
      <CanonicalLink rel="canonical" href="https://smithdigitals.com/case-studies/loveleeva" />
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>

      <MotionConfig reducedMotion="user">
      <main className="llv-page">
        <div className="llv-breadcrumb">
          <Link to="/case-studies">← Back to Case Studies</Link>
        </div>

        <section className="llv-hero" aria-labelledby="llv-title">
          <motion.div
            className="llv-hero-copy"
            initial="hidden"
            animate="show"
            variants={stagger}
          >
            <motion.p className="llv-eyebrow" variants={fadeUp}>
              Lee County, Virginia · Commerce + community
            </motion.p>
            <motion.h1 id="llv-title" variants={fadeUp}>
              A digital<br />platform<br />built to <em>grow<br />from within.</em>
            </motion.h1>
            <motion.p className="llv-lead" variants={fadeUp}>
              LoveLeeVa brings local products, small businesses, community events,
              tourism resources, and rural-development initiatives into one cohesive
              digital experience.
            </motion.p>
            <motion.div className="llv-hero-actions" variants={fadeUp}>
              <a
                href="https://loveleeva.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="llv-button llv-button-primary"
              >
                Visit the platform <span aria-hidden="true">↗</span>
              </a>
              <a href="#solution" className="llv-text-link">
                Explore the build <span aria-hidden="true">↓</span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="llv-hero-visual"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.18 }}
          >
            <img src={loveLeeVaVisual} alt="LoveLeeVa Appalachian brand illustration" />
            <div className="llv-hero-stamp" aria-hidden="true">
              <span>We grow</span>
              <strong>our own</strong>
            </div>
          </motion.div>
        </section>

        <section className="llv-overview llv-contained">
          <motion.div
            className="llv-overview-heading"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={stagger}
          >
            <motion.p className="llv-eyebrow" variants={fadeUp}>Project overview</motion.p>
            <motion.h2 variants={fadeUp}>More than a storefront.</motion.h2>
          </motion.div>
          <motion.div
            className="llv-overview-copy"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={stagger}
          >
            <motion.p className="llv-big-copy" variants={fadeUp}>
              The project needed to support real commerce while telling a much larger
              story about what rural communities can build for themselves.
            </motion.p>
            <motion.p variants={fadeUp}>
              “We Grow Our Own” became the organizing idea: one clear message connecting
              products, infrastructure, people, and place without flattening any of them
              into a conventional small-business website.
            </motion.p>
          </motion.div>
        </section>

        <section className="llv-pillars" aria-labelledby="pillars-title">
          <div className="llv-contained">
            <motion.div
              className="llv-section-intro"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={stagger}
            >
              <motion.p className="llv-eyebrow" variants={fadeUp}>The organizing idea</motion.p>
              <motion.h2 id="pillars-title" variants={fadeUp}>Four pillars. One local ecosystem.</motion.h2>
            </motion.div>
            <div className="llv-pillar-grid">
              {pillars.map((pillar, index) => (
                <motion.article
                  key={pillar.name}
                  className="llv-pillar-card"
                  custom={index}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUp}
                >
                  <div className="llv-pillar-top">
                    <span>{pillar.number}</span>
                    <b aria-hidden="true">{pillar.mark}</b>
                  </div>
                  <h3>{pillar.name}</h3>
                  <p>{pillar.line}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="llv-challenge">
          <div className="llv-contained llv-challenge-layout">
            <motion.div
              className="llv-challenge-copy"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={stagger}
            >
              <motion.p className="llv-eyebrow llv-eyebrow-light" variants={fadeUp}>The challenge</motion.p>
              <motion.h2 variants={fadeUp}>Connect experiences that usually live apart.</motion.h2>
              <motion.p variants={fadeUp}>
                The public experience had to feel like one brand even though the work
                underneath it spans retail operations, civic participation, editorial
                publishing, and long-range economic development.
              </motion.p>
            </motion.div>
            <div className="llv-challenge-list">
              {challenges.map((challenge, index) => (
                <motion.div
                  key={challenge}
                  custom={index}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={fadeUp}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{challenge}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="solution" className="llv-solution llv-contained" aria-labelledby="solution-title">
          <motion.div
            className="llv-section-intro llv-section-intro-wide"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={stagger}
          >
            <motion.p className="llv-eyebrow" variants={fadeUp}>The solution</motion.p>
            <motion.h2 id="solution-title" variants={fadeUp}>
              A responsive ecosystem with a secure commerce core.
            </motion.h2>
            <motion.p variants={fadeUp}>
              A headless React experience keeps the brand and customer journey flexible,
              while specialized systems handle the operational work they do best.
            </motion.p>
          </motion.div>

          <motion.div
            className="llv-system-map"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
            aria-label="LoveLeeVa platform architecture"
          >
            <motion.div className="llv-system-front" variants={fadeUp}>
              <p>Customer experience</p>
              <h3>React storefront + community platform</h3>
              <div>
                <span>Shop</span><span>Directory</span><span>Calendar</span><span>Travel</span>
              </div>
            </motion.div>
            <motion.div className="llv-system-bridge" variants={fadeUp}>
              <span>Secure application layer</span>
              <strong>Cloudflare Worker</strong>
              <small>Credentials protected · requests validated · images optimized</small>
            </motion.div>
            <div className="llv-system-services">
              {[
                ["Commerce source of truth", "Odoo", "Catalog · pricing · inventory · customers · orders"],
                ["Transaction services", "Stripe · UPS · Avalara", "Payments · shipping · destination tax"],
                ["Community data", "Supabase", "Business directory · calendar · moderated submissions"],
              ].map(([label, title, description], index) => (
                <motion.article key={label} custom={index} variants={fadeUp}>
                  <p>{label}</p>
                  <h3>{title}</h3>
                  <span>{description}</span>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="llv-community">
          <div className="llv-contained llv-community-layout">
            <motion.div
              className="llv-community-heading"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={stagger}
            >
              <motion.p className="llv-eyebrow" variants={fadeUp}>Beyond commerce</motion.p>
              <motion.h2 variants={fadeUp}>The community can participate, not just browse.</motion.h2>
              <motion.p variants={fadeUp}>
                Discovery tools turn LoveLeeVa into shared local infrastructure—useful
                to residents, visitors, businesses, and event organizers alike.
              </motion.p>
            </motion.div>
            <div className="llv-community-list">
              {communityTools.map((tool, index) => (
                <motion.article
                  key={tool.title}
                  custom={index}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.35 }}
                  variants={fadeUp}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div><h3>{tool.title}</h3><p>{tool.description}</p></div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="llv-design llv-contained">
          <motion.div
            className="llv-design-board"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
          >
            <motion.div className="llv-design-copy" variants={fadeUp}>
              <p className="llv-eyebrow">Design approach</p>
              <h2>Rooted in place.<br />Built for now.</h2>
              <p>
                Forest green, moss, copper, clay, cream, and gold draw from Southwest
                Virginia without slipping into nostalgia. Warm textures and restrained
                motion pair with a clear, contemporary interface.
              </p>
              <p>
                Playfair Display, Oswald, and Lora balance editorial storytelling with
                the character of something made by hand.
              </p>
            </motion.div>
            <motion.div className="llv-design-sample" variants={fadeUp}>
              <div className="llv-swatches" aria-label="LoveLeeVa color palette">
                {[
                  ["Forest", "#173b2c"], ["Moss", "#78906a"], ["Copper", "#ad603f"],
                  ["Clay", "#bd7655"], ["Cream", "#f4ead7"], ["Gold", "#d29a4a"],
                ].map(([name, color]) => (
                  <div key={name}><i style={{ backgroundColor: color }} /><span>{name}</span></div>
                ))}
              </div>
              <div className="llv-type-sample" aria-label="LoveLeeVa typography sample">
                <span>Appalachian</span>
                <strong>WE GROW OUR OWN</strong>
                <em>Local roots, rural possibility.</em>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            className="llv-accessibility"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span>Accessibility, built in</span>
            <p>
              Responsive layouts, keyboard navigation, visible focus states,
              reduced-motion support, descriptive image text, and a skip link were
              treated as product requirements—not post-launch polish.
            </p>
          </motion.div>
        </section>

        <section className="llv-technical">
          <div className="llv-contained llv-technical-layout">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={stagger}
            >
              <motion.p className="llv-eyebrow llv-eyebrow-light" variants={fadeUp}>Technical approach</motion.p>
              <motion.h2 variants={fadeUp}>A modern stack, chosen around the work.</motion.h2>
              <motion.p variants={fadeUp}>
                Public routes are prerendered so meaningful content reaches search
                engines before JavaScript loads. Product images move securely from
                Odoo through the edge, where they are converted to WebP and cached.
              </motion.p>
            </motion.div>
            <motion.ul
              className="llv-stack"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
            >
              {[
                ["Experience", "React 19 · React Router · Vite"],
                ["Edge", "Cloudflare Workers · Cloudflare Images"],
                ["Commerce", "Odoo · Stripe Elements · PaymentIntents"],
                ["Operations", "UPS · Avalara · Odoo customer portal"],
                ["Community", "Supabase · Formspree · CSV workflows"],
                ["Discovery", "Prerendering · structured data · sitemaps"],
              ].map(([label, value], index) => (
                <motion.li key={label} custom={index} variants={fadeUp}>
                  <span>{label}</span><strong>{value}</strong>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </section>

        <section className="llv-outcome llv-contained">
          <motion.div
            className="llv-section-intro llv-section-intro-wide"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={stagger}
          >
            <motion.p className="llv-eyebrow" variants={fadeUp}>The outcome</motion.p>
            <motion.h2 variants={fadeUp}>One foundation for commerce, participation, and discovery.</motion.h2>
            <motion.p variants={fadeUp}>
              LoveLeeVa evolved from a brand website into an operational platform—one
              that can support today’s transactions while making room for tomorrow’s
              workforce and rural-development programs.
            </motion.p>
          </motion.div>
          <div className="llv-outcome-grid">
            {outcomes.map(([title, description], index) => (
              <motion.article
                key={title}
                custom={index}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
              >
                <span aria-hidden="true">✓</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </motion.article>
            ))}
          </div>
          <motion.div
            className="llv-quality"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p>Production confidence</p>
            <strong>Automated tests passed</strong>
            <strong>Lint clean</strong>
            <strong>Production build passed</strong>
          </motion.div>
        </section>

        <section className="llv-closing">
          <motion.div
            className="llv-closing-inner"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={stagger}
          >
            <motion.p className="llv-eyebrow llv-eyebrow-light" variants={fadeUp}>LoveLeeVa</motion.p>
            <motion.h2 variants={fadeUp}>Local roots.<br /><em>Rural possibility.</em></motion.h2>
            <motion.p variants={fadeUp}>
              See how locally made goods, community resources, and regional discovery
              come together in the live experience.
            </motion.p>
            <motion.div variants={fadeUp}>
              <a
                href="https://loveleeva.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="llv-button llv-button-light"
              >
                Explore LoveLeeVa <span aria-hidden="true">↗</span>
              </a>
            </motion.div>
          </motion.div>
        </section>
      </main>
      </MotionConfig>
    </>
  );
}
