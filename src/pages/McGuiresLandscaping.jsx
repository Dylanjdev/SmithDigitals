import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import projectImg from "../assets/project1.png";
import { Title, Meta, Link as MetaLink } from "react-head";
import "./McGuiresLandscaping.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12 },
  }),
};

export default function McGuiresLandscaping() {
  return (
    <>
      <Title>McGuire's Lawn & Landscaping | Case Study | Smith Digitals LLC</Title>
      <Meta
        name="description"
        content="Case study: Smith Digitals built a lead-gen website for McGuire's Lawn & Landscaping that generated 6 free quote form submissions in one week, all becoming customers."
      />
      <Meta
        name="keywords"
        content="McGuire's Lawn and Landscaping, landscaping website, lead generation website, quote form conversions, Smith Digitals case study"
      />
      <Meta property="og:title" content="McGuire's Lawn & Landscaping | Case Study | Smith Digitals LLC" />
      <Meta
        property="og:description"
        content="How Smith Digitals built a landscaping website that turned quote requests into paying customers in one week."
      />
      <Meta property="og:image" content="https://smithdigitals.com/og-image.jpg" />
      <Meta property="og:type" content="article" />
      <Meta property="og:url" content="https://smithdigitals.com/case-studies/mcguires-landscaping" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="McGuire's Landscaping | Smith Digitals Case Study" />
      <Meta
        name="twitter:description"
        content="6 quote form submissions in one week, all converted to customers."
      />
      <MetaLink rel="canonical" href="https://smithdigitals.com/case-studies/mcguires-landscaping" />

      <div className="ml-page">
        <div className="ml-breadcrumb">
          <Link to="/case-studies">← Back to Case Studies</Link>
        </div>

        <section className="ml-hero">
          <motion.div
            className="ml-hero-inner"
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.div className="ml-logo-block" variants={fadeUp}>
              <img src={projectImg} alt="McGuire's Lawn & Landscaping website preview" className="ml-logo" />
            </motion.div>
            <motion.p className="ml-kicker" variants={fadeUp}>
              Landscaping Lead Generation Website
            </motion.p>
            <motion.h1 className="ml-title" variants={fadeUp}>
              Built to turn quote requests into booked jobs.
            </motion.h1>
            <motion.p className="ml-lead" variants={fadeUp}>
              McGuire's Lawn & Landscaping needed a site that did one thing really well: capture local
              demand and convert that traffic into real customers through a simple, high-intent quote flow.
            </motion.p>
            <motion.div className="ml-ctas" variants={fadeUp}>
              <a
                href="https://mcguireslawnandlandscaping.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-btn ml-btn-primary"
              >
                Visit Website →
              </a>
            </motion.div>
          </motion.div>
        </section>

        <section className="ml-metrics">
          {[
            { label: "Quote forms", value: "6 in one week" },
            { label: "Conversion", value: "6 became customers" },
            { label: "Focus", value: "Local lead generation" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              className="ml-metric-card"
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

        <section className="ml-section">
          <motion.div
            className="ml-section-inner"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.p className="ml-label" variants={fadeUp}>The challenge</motion.p>
            <motion.h2 variants={fadeUp}>Get more qualified local leads.</motion.h2>
            <motion.p variants={fadeUp}>
              Before launch, the business needed stronger online visibility and a cleaner path for visitors to
              request services. The goal was to increase booked work by simplifying first contact.
            </motion.p>
          </motion.div>
        </section>

        <section className="ml-section ml-section-alt">
          <motion.div
            className="ml-section-inner"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.p className="ml-label" variants={fadeUp}>What we built</motion.p>
            <motion.h2 variants={fadeUp}>A conversion-first quote funnel.</motion.h2>
            <div className="ml-list">
              {[
                "Built a responsive website optimized for local landscaping searches.",
                "Designed a streamlined free quote form to reduce friction and improve completion rates.",
                "Structured service pages and messaging around high-intent homeowner needs.",
                "Improved technical and on-page SEO to increase visibility in local results.",
              ].map((item, i) => (
                <motion.p key={item} custom={i} variants={fadeUp}>
                  {item}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="ml-section">
          <motion.div
            className="ml-section-inner"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.p className="ml-label" variants={fadeUp}>Result</motion.p>
            <motion.h2 variants={fadeUp}>Immediate revenue impact after launch.</motion.h2>
            <motion.p variants={fadeUp}>
              In one week, the free quote form generated 6 submissions and every one of those inquiries
              turned into a customer. The website is now consistently functioning as a real lead-generation
              asset, not just an online brochure.
            </motion.p>
          </motion.div>
        </section>

        <footer className="ml-credit">
          <p>
            Built by <Link to="/">Smith Digitals</Link>
          </p>
        </footer>
      </div>
    </>
  );
}
