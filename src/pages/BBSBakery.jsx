import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import bbsLogo from "../assets/bbslogo.jpg";
import { Title, Meta, Link as MetaLink } from "react-head";
import "./BBSBakery.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12 },
  }),
};

export default function BBSBakery() {
  return (
    <>
      <Title>BBS Bakery | Case Study | Smith Digitals LLC</Title>
      <Meta
        name="description"
        content="Case study: Smith Digitals built BBS Bakery's website with online ordering via Square Checkout API and local SEO that ranked above Blackbird Bakery in Bristol, VA within 3 months."
      />
      <Meta
        name="keywords"
        content="BBS Bakery, Square Checkout API, bakery website, local SEO, Bristol VA, Smith Digitals case study"
      />
      <Meta property="og:title" content="BBS Bakery | Case Study | Smith Digitals LLC" />
      <Meta
        property="og:description"
        content="How Smith Digitals launched BBS Bakery with Square online ordering and fast local SEO growth in Southwest Virginia."
      />
      <Meta property="og:image" content="https://smithdigitals.com/og-image.jpg" />
      <Meta property="og:type" content="article" />
      <Meta property="og:url" content="https://smithdigitals.com/case-studies/bbs-bakery" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="BBS Bakery | Smith Digitals Case Study" />
      <Meta
        name="twitter:description"
        content="Square Checkout ordering + local SEO wins for BBS Bakery in just 3 months."
      />
      <MetaLink rel="canonical" href="https://smithdigitals.com/case-studies/bbs-bakery" />

      <div className="bbs-page">
        <div className="bbs-breadcrumb">
          <Link to="/case-studies">← Back to Case Studies</Link>
        </div>

        <section className="bbs-hero">
          <motion.div
            className="bbs-hero-inner"
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.div className="bbs-logo-block" variants={fadeUp}>
              <img src={bbsLogo} alt="BBS Bakery logo" className="bbs-logo" />
            </motion.div>
            <motion.p className="bbs-kicker" variants={fadeUp}>
              Bakery Website + Local SEO
            </motion.p>
            <motion.h1 className="bbs-title" variants={fadeUp}>
              From local bakery brand to online orders in motion.
            </motion.h1>
            <motion.p className="bbs-lead" variants={fadeUp}>
              BBS Bakery needed more than a pretty site. They needed a conversion-focused online presence
              that made it easy for customers to browse, order, and check out from any device.
            </motion.p>
            <motion.div className="bbs-ctas" variants={fadeUp}>
              <a
                href="https://www.bbs-bakery.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bbs-btn bbs-btn-primary"
              >
                Visit Website →
              </a>
            </motion.div>
          </motion.div>
        </section>

        <section className="bbs-metrics">
          {[
            { label: "Online ordering", value: "Square Checkout API" },
            { label: "SEO timeline", value: "3 months" },
            { label: "Ranking outcome", value: "Above Blackbird Bakery" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              className="bbs-metric-card"
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <p>{item.label}</p>
              <h3>{item.value}</h3>
            </motion.div>
          ))}
        </section>

        <section className="bbs-section">
          <motion.div
            className="bbs-section-inner"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.p className="bbs-label" variants={fadeUp}>The challenge</motion.p>
            <motion.h2 variants={fadeUp}>Turn bakery traffic into online buyers.</motion.h2>
            <motion.p variants={fadeUp}>
              BBS Bakery had a strong local product and loyal customers, but needed a modern site that could
              support ordering at scale and improve visibility in local search. The business goal was clear:
              reduce purchase friction and grow discoverability in nearby markets.
            </motion.p>
          </motion.div>
        </section>

        <section className="bbs-section bbs-section-alt">
          <motion.div
            className="bbs-section-inner"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.p className="bbs-label" variants={fadeUp}>What we built</motion.p>
            <motion.h2 variants={fadeUp}>Square-powered checkout plus local SEO fundamentals.</motion.h2>
            <div className="bbs-list">
              {[
                "Integrated online ordering through the Square Checkout API.",
                "Designed a responsive shopping experience for mobile-first users.",
                "Refined page structure and copy for local-intent search queries.",
                "Improved technical SEO signals for indexing and ranking momentum.",
              ].map((item, i) => (
                <motion.p key={item} custom={i} variants={fadeUp}>
                  {item}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="bbs-section">
          <motion.div
            className="bbs-section-inner"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.p className="bbs-label" variants={fadeUp}>Result</motion.p>
            <motion.h2 variants={fadeUp}>Ranking gains in less than one quarter.</motion.h2>
            <motion.p variants={fadeUp}>
              Within just 3 months of launch, BBS Bakery began ranking above Blackbird Bakery in Bristol, VA
              for relevant local search visibility. Combined with streamlined Square checkout, that meant both
              stronger discovery and better conversion once visitors landed on the site.
            </motion.p>
          </motion.div>
        </section>

        <footer className="bbs-credit">
          <p>
            Built by <Link to="/">Smith Digitals</Link>
          </p>
        </footer>
      </div>
    </>
  );
}
