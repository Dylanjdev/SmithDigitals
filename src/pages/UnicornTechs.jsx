import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import uniImg from "../assets/Uni.png";
import { Title, Meta, Link as MetaLink } from "react-head";
import "./UnicornTechs.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12 },
  }),
};

export default function UnicornTechs() {
  return (
    <>
      <Title>The Unicorn Techs | Case Study | Smith Digitals LLC</Title>
      <Meta
        name="description"
        content="Case study: Smith Digitals built The Unicorn Techs website around executive fiduciary advisory, AI readiness, trust-gap elimination, and enterprise AI execution positioning."
      />
      <Meta
        name="keywords"
        content="The Unicorn Techs, executive fiduciary advisory, AI readiness, enterprise AI strategy, Smith Digitals case study"
      />
      <Meta property="og:title" content="The Unicorn Techs | Case Study | Smith Digitals LLC" />
      <Meta
        property="og:description"
        content="How Smith Digitals positioned The Unicorn Techs around AI readiness-first strategy and trust-gap elimination between leadership and engineering delivery."
      />
      <Meta property="og:image" content="https://smithdigitals.com/og-image.jpg" />
      <Meta property="og:type" content="article" />
      <Meta property="og:url" content="https://smithdigitals.com/case-studies/the-unicorn-techs" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="The Unicorn Techs | Smith Digitals Case Study" />
      <Meta
        name="twitter:description"
        content="Executive advisory positioning for AI readiness and delivery alignment."
      />
      <MetaLink rel="canonical" href="https://smithdigitals.com/case-studies/the-unicorn-techs" />

      <div className="uni-page">
        <div className="uni-breadcrumb">
          <Link to="/case-studies">← Back to Case Studies</Link>
        </div>

        <section className="uni-hero">
          <motion.div
            className="uni-hero-inner"
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.div className="uni-logo-block" variants={fadeUp}>
              <img src={uniImg} alt="The Unicorn Techs website preview" className="uni-logo" />
            </motion.div>
            <motion.p className="uni-kicker" variants={fadeUp}>
              Executive Fiduciary Advisory + Enterprise AI Positioning
            </motion.p>
            <motion.h1 className="uni-title" variants={fadeUp}>
              Built to close the trust gap between strategy and delivery.
            </motion.h1>
            <motion.p className="uni-lead" variants={fadeUp}>
              The Unicorn Techs needed a focused digital presence that clearly communicates its core value:
              helping leadership teams eliminate margin bleed by aligning go-to-market promises with real
              engineering execution and AI readiness.
            </motion.p>
            <motion.div className="uni-ctas" variants={fadeUp}>
              <a
                href="https://theunicorntechs.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="uni-btn uni-btn-primary"
              >
                Visit Website →
              </a>
            </motion.div>
          </motion.div>
        </section>

        <section className="uni-metrics">
          {[
            { label: "Core message", value: "We stop the bleed" },
            { label: "Pillar", value: "The Spark" },
            { label: "Positioning", value: "Physics over hype" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              className="uni-metric-card"
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

        <section className="uni-section">
          <motion.div
            className="uni-section-inner"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.p className="uni-label" variants={fadeUp}>The challenge</motion.p>
            <motion.h2 variants={fadeUp}>Translate high-level AI strategy into credible execution language.</motion.h2>
            <motion.p variants={fadeUp}>
              The Unicorn Techs operates in a complex category where leadership messaging can quickly become
              abstract. The site needed to communicate fiduciary-grade advisory clearly and tie every claim
              to practical outcomes in delivery, risk, and margin performance.
            </motion.p>
          </motion.div>
        </section>

        <section className="uni-section uni-section-alt">
          <motion.div
            className="uni-section-inner"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.p className="uni-label" variants={fadeUp}>What we built</motion.p>
            <motion.h2 variants={fadeUp}>A positioning-first site for executive decision confidence.</motion.h2>
            <div className="uni-list">
              {[
                "Structured messaging around trust-gap elimination between GTM strategy and engineering reality.",
                "Highlighted AI-readiness-first approach and Skull Session clarity framework.",
                "Reinforced vendor-neutral, fiduciary guidance with no-spiff positioning.",
                "Built a clean CTA path to start conversations and convert executive interest.",
              ].map((item, i) => (
                <motion.p key={item} custom={i} variants={fadeUp}>
                  {item}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="uni-section">
          <motion.div
            className="uni-section-inner"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.p className="uni-label" variants={fadeUp}>Result</motion.p>
            <motion.h2 variants={fadeUp}>Sharper authority and clearer enterprise AI narrative.</motion.h2>
            <motion.p variants={fadeUp}>
              The final site gives The Unicorn Techs a strong strategic presence: clear differentiation,
              concise executive language, and a narrative built around measurable operational reality instead
              of hype. It now supports both trust-building and conversion with leadership audiences.
            </motion.p>
          </motion.div>
        </section>

        <footer className="uni-credit">
          <p>
            Built by <Link to="/">Smith Digitals</Link>
          </p>
        </footer>
      </div>
    </>
  );
}
