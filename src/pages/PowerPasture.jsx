import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Title, Meta } from "react-head";
import CanonicalLink from "../components/CanonicalLink";
import powerPastureLogo from "../assets/powerpasture.webp";
import "./StoneMountainYogurt.css";
import "./PowerPasture.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (index = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: index * 0.08 },
  }),
};

const projectDetails = [
  ["Client", "Power Pasture™"],
  ["Industry", "Clean Energy & Infrastructure"],
  ["Target audience", "Data Centers, Industrial & Health"],
  ["Services", "UX/UI Design, Interactive Schematics, CRO"],
];

const metrics = [
  ["Integrated energy hub", "4 sources"],
  ["Structured vertical funnels", "6 use cases"],
  ["Page load speed", "0.6s"],
  ["Responsive dark schema", "100%"],
];

const challenges = [
  {
    label: "Complex technical messaging",
    title: "Explain an integrated system without creating cognitive overload.",
    items: [
      [
        "Multi-source energy integration",
        "Show how geothermal, hydro, solar, and wind work independently and together inside one site-specific generation model.",
      ],
      [
        "B2B enterprise trust",
        "Communicate subsurface exchange modules, generation assets, and grid links clearly to engineers, investors, and infrastructure leaders.",
      ],
    ],
  },
  {
    label: "Conversion & layout UX",
    title: "Move distinct enterprise buyers to the right technical story quickly.",
    items: [
      [
        "Diverse application targeting",
        "Guide data center builders, hospital campuses, developers, and industrial operators toward their relevant infrastructure solution.",
      ],
      [
        "High-impact modern aesthetic",
        "Pair high-contrast vector schematics with clear calls to action, including “Get Your Power Pasture™.”",
      ],
    ],
  },
];

const energySources = [
  {
    code: "GEO/01",
    name: "Geothermal",
    trait: "Steady · 24/7",
    description: "Thermal exchange loops and around-the-clock base-load potential.",
  },
  {
    code: "HYDRO/02",
    name: "Hydro",
    trait: "High-density",
    description: "Water-resource evaluation and dispatchable generation capacity.",
  },
  {
    code: "SOLAR/03",
    name: "Solar",
    trait: "Scalable",
    description: "Land-responsive phased deployment with modular inverter links.",
  },
  {
    code: "WIND/04",
    name: "Wind",
    trait: "Complementary",
    description: "Site-driven resource diversity that helps balance local demand.",
  },
];

const verticals = [
  "Data Centers",
  "Home Developments",
  "Hospitals",
  "Office Buildings",
  "Shopping Centers",
  "Manufacturing & Industrial",
];

const technicalStack = [
  {
    number: "01",
    title: "Frontend UX",
    description: "Mobile-first responsive CSS Grid with a high-contrast dark schema.",
  },
  {
    number: "02",
    title: "Schematic engine",
    description: "Lightweight vector and SVG diagrams engineered for sub-second visual rendering.",
  },
  {
    number: "03",
    title: "Performance optimization",
    description: "A 0.6-second total loading time across desktop and mobile experiences.",
  },
  {
    number: "04",
    title: "Enterprise lead capture",
    description: "Direct routing to consulting teams through focused “Get Your Power Pasture™” action funnels.",
  },
];

export default function PowerPasture() {
  const pageUrl = "https://smithdigitals.com/case-studies/power-pasture/";
  const websiteUrl = "https://powerpasture.com/";
  const pageTitle = "Power Pasture™ Case Study | Renewable Energy Platform";
  const pageDescription =
    "See how Smith Digitals built Power Pasture's B2B platform with interactive energy schematics, six industry funnels, and a 0.6-second load time.";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Building a High-Tech Enterprise Platform for Power Pasture™ Renewable Energy Infrastructure",
    description: pageDescription,
    mainEntityOfPage: pageUrl,
    author: {
      "@type": "Organization",
      name: "Smith Digitals LLC",
      url: "https://smithdigitals.com/",
    },
    about: {
      "@type": "Organization",
      name: "Power Pasture™",
      url: websiteUrl,
      knowsAbout: [
        "Geothermal energy",
        "Hydroelectric power",
        "Solar energy",
        "Wind energy",
        "Renewable energy infrastructure",
      ],
    },
    image: "https://smithdigitals.com/og-image.jpg",
  };

  return (
    <>
      <Title>{pageTitle}</Title>
      <Meta name="description" content={pageDescription} />
      <Meta
        name="keywords"
        content="Power Pasture, renewable energy infrastructure, B2B energy website, data center energy, interactive schematics, UX design, Smith Digitals case study"
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

      <main className="smy-page pp-page">
        <div className="smy-breadcrumb pp-breadcrumb">
          <Link to="/case-studies">← Back to Case Studies</Link>
        </div>

        <section className="smy-hero pp-hero" aria-labelledby="pp-title">
          <div className="pp-grid-overlay" aria-hidden="true" />
          <motion.div
            className="smy-hero-inner pp-hero-inner"
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          >
            <motion.div className="pp-logo-block" variants={fadeUp}>
              <img src={powerPastureLogo} alt="Power Pasture renewable energy infrastructure logo" />
            </motion.div>
            <motion.p className="smy-kicker pp-kicker" variants={fadeUp}>
              Smith Digitals LLC · B2B web architecture & brand launch
            </motion.p>
            <motion.h1 id="pp-title" className="smy-title pp-title" variants={fadeUp}>
              Building a high-tech enterprise platform for Power Pasture™ renewable energy infrastructure.
            </motion.h1>
            <motion.p className="smy-lead pp-lead" variants={fadeUp}>
              One site-specific generation model. Four renewable resources. A conversion system built
              for the people planning power-intensive infrastructure.
            </motion.p>
            <motion.div className="smy-ctas" variants={fadeUp}>
              <a
                href={websiteUrl}
                target="_blank"
                rel="noopener"
                className="smy-btn smy-btn-primary pp-btn"
              >
                Visit PowerPasture.com →
              </a>
            </motion.div>
          </motion.div>
          <div className="pp-system-mark" aria-hidden="true">
            <span>GEO</span><span>HYDRO</span><span>SOLAR</span><span>WIND</span>
          </div>
        </section>

        <section className="pp-project-details" aria-label="Project details">
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

        <section className="smy-metrics pp-metrics" aria-label="Project metrics">
          {metrics.map(([label, value], index) => (
            <motion.article
              key={label}
              className="smy-metric-card pp-metric-card"
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
            className="smy-section-inner pp-section-inner"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          >
            <motion.p className="smy-label pp-label" variants={fadeUp}>01 · Executive summary</motion.p>
            <motion.h2 variants={fadeUp}>Technical precision translated into an enterprise buying experience.</motion.h2>
            <motion.p variants={fadeUp}>
              Power Pasture™ delivers local, site-specific renewable energy infrastructure by combining
              geothermal, hydro, solar, and wind into integrated generation models. Its systems are
              designed for power-intensive applications including high-density data centers, advanced
              manufacturing, hospital campuses, and master-planned residential communities.
            </motion.p>
            <motion.p variants={fadeUp}>
              Smith Digitals architected and deployed{' '}
              <a href={websiteUrl} target="_blank" rel="noopener" className="pp-inline-link">
                the Power Pasture™ enterprise platform
              </a>
              —an interactive dark-mode experience with technical resource schematics and a B2B lead
              funnel tailored to infrastructure decision-makers.
            </motion.p>
          </motion.div>
        </section>

        <section className="smy-section">
          <motion.div
            className="smy-section-inner pp-section-inner"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          >
            <motion.p className="smy-label pp-label" variants={fadeUp}>02 · Strategic challenges</motion.p>
            <motion.h2 variants={fadeUp}>Make a sophisticated infrastructure model clear enough to act on.</motion.h2>
            <div className="pp-challenge-grid">
              {challenges.map((challenge, index) => (
                <motion.article key={challenge.label} custom={index} variants={fadeUp}>
                  <p className="pp-card-label">{challenge.label}</p>
                  <h3>{challenge.title}</h3>
                  {challenge.items.map(([title, description]) => (
                    <div key={title} className="pp-challenge-item">
                      <h4>{title}</h4>
                      <p>{description}</p>
                    </div>
                  ))}
                </motion.article>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="smy-section pp-energy-section">
          <motion.div
            className="smy-section-inner pp-section-inner"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          >
            <motion.p className="smy-label pp-label" variants={fadeUp}>03 · Interactive energy explorer</motion.p>
            <motion.h2 variants={fadeUp}>Four resource stories. One integrated energy hub.</motion.h2>
            <motion.p variants={fadeUp}>
              The modular selector lets enterprise buyers examine each resource independently, then
              understand how the combined model responds to site conditions and demand.
            </motion.p>
            <div className="pp-source-grid">
              {energySources.map((source, index) => (
                <motion.article key={source.code} custom={index} variants={fadeUp}>
                  <div className="pp-source-topline">
                    <span>{source.code}</span>
                    <i aria-hidden="true" />
                  </div>
                  <h3>{source.name}</h3>
                  <strong>{source.trait}</strong>
                  <p>{source.description}</p>
                </motion.article>
              ))}
            </div>
            <motion.p className="pp-schematic-note" variants={fadeUp}>
              Lightweight schematics—GEO/01 through WIND/04—illustrate thermal loops, intake
              generators, phased deployment, and grid links without slowing the experience.
            </motion.p>
          </motion.div>
        </section>

        <section className="smy-section">
          <motion.div
            className="smy-section-inner pp-section-inner"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          >
            <motion.p className="smy-label pp-label" variants={fadeUp}>04 · Targeted application funnels</motion.p>
            <motion.h2 variants={fadeUp}>Six paths for six high-demand infrastructure contexts.</motion.h2>
            <motion.p variants={fadeUp}>
              Dedicated breakdown modules move each buyer from broad technical interest to a relevant
              application story and a focused consulting action.
            </motion.p>
            <div className="pp-vertical-grid">
              {verticals.map((vertical, index) => (
                <motion.article
                  key={vertical}
                  custom={index}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={fadeUp}
                >
                  <span>0{index + 1}</span>
                  <h3>{vertical}</h3>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="smy-section">
          <motion.div
            className="smy-section-inner pp-section-inner"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          >
            <motion.p className="smy-label pp-label" variants={fadeUp}>05 · Technical architecture</motion.p>
            <motion.h2 variants={fadeUp}>Engineered for speed, accessibility, and instant asset rendering.</motion.h2>
            <div className="pp-technical-grid">
              {technicalStack.map((item, index) => (
                <motion.article key={item.title} custom={index} variants={fadeUp}>
                  <span>{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="pp-closing">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
            <p>Four resources · Six verticals · One local generation model</p>
            <h2>Build power around the site.</h2>
            <a href={websiteUrl} target="_blank" rel="noopener">
              Get your Power Pasture™ <span aria-hidden="true">↗</span>
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
