import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import stoneYogurtImg from "../assets/StoneYogurt.webp";
import { Title, Meta, Link as MetaLink } from "react-head";
import "./StoneMountainYogurt.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12 },
  }),
};

export default function StoneMountainYogurt() {
  return (
    <>
      <Title>Stone Mountain Yogurt | Case Study | Smith Digitals LLC</Title>
      <Meta
        name="description"
        content="Case study: Smith Digitals rebuilt Stone Mountain Yogurt's outdated website into an SEO-optimized storefront and developed a customized Twilio API for automated customer text messaging."
      />
      <Meta
        name="keywords"
        content="Stone Mountain Yogurt, Twilio API, texting automation, SEO website redesign, Smith Digitals case study"
      />
      <Meta property="og:title" content="Stone Mountain Yogurt | Case Study | Smith Digitals LLC" />
      <Meta
        property="og:description"
        content="How Smith Digitals transformed Stone Mountain Yogurt with SEO-focused redesign and custom Twilio text automation."
      />
      <Meta property="og:image" content="https://smithdigitals.com/og-image.jpg" />
      <Meta property="og:type" content="article" />
      <Meta property="og:url" content="https://smithdigitals.com/case-studies/stone-mountain-yogurt" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Stone Mountain Yogurt | Smith Digitals Case Study" />
      <Meta
        name="twitter:description"
        content="SEO rebuild + custom Twilio API text messaging for Stone Mountain Yogurt."
      />
      <MetaLink rel="canonical" href="https://smithdigitals.com/case-studies/stone-mountain-yogurt" />

      <div className="smy-page">
        <div className="smy-breadcrumb">
          <Link to="/case-studies">← Back to Case Studies</Link>
        </div>

        <section className="smy-hero">
          <motion.div
            className="smy-hero-inner"
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.div className="smy-logo-block" variants={fadeUp}>
              <img src={stoneYogurtImg} alt="Stone Mountain Yogurt website preview" className="smy-logo" />
            </motion.div>
            <motion.p className="smy-kicker" variants={fadeUp}>
              SEO Redesign + Twilio Automation
            </motion.p>
            <motion.h1 className="smy-title" variants={fadeUp}>
              From outdated site to growth-ready digital storefront.
            </motion.h1>
            <motion.p className="smy-lead" variants={fadeUp}>
              Stone Mountain Yogurt had an older website that no longer reflected the brand and did not support
              strong discoverability. The rebuild focused on search visibility, modern UX, and direct customer
              communication through SMS automation.
            </motion.p>
            <motion.div className="smy-ctas" variants={fadeUp}>
              <a
                href="https://stone-mountain-yogurt.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="smy-btn smy-btn-primary"
              >
                Visit Website →
              </a>
            </motion.div>
          </motion.div>
        </section>

        <section className="smy-metrics">
          {[
            { label: "Before", value: "Outdated website" },
            { label: "After", value: "SEO-optimized build" },
            { label: "Automation", value: "Custom Twilio API" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              className="smy-metric-card"
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

        <section className="smy-section">
          <motion.div
            className="smy-section-inner"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.p className="smy-label" variants={fadeUp}>The challenge</motion.p>
            <motion.h2 variants={fadeUp}>Modernize the site and improve discoverability.</motion.h2>
            <motion.p variants={fadeUp}>
              The previous website lacked structure for search and did not provide a strong customer experience
              across devices. Stone Mountain Yogurt needed a cleaner site architecture and a way to engage
              customers beyond the website itself.
            </motion.p>
          </motion.div>
        </section>

        <section className="smy-section smy-section-alt">
          <motion.div
            className="smy-section-inner"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.p className="smy-label" variants={fadeUp}>What we built</motion.p>
            <motion.h2 variants={fadeUp}>A new SEO foundation with direct SMS automation.</motion.h2>
            <div className="smy-list">
              {[
                "Redesigned the full website experience with a faster, modern, mobile-first layout.",
                "Implemented SEO-focused page structure and metadata to improve search performance.",
                "Developed a customized Twilio API integration for automated customer text messaging.",
                "Aligned content and conversion flow so visitors can quickly find info and take action.",
              ].map((item, i) => (
                <motion.p key={item} custom={i} variants={fadeUp}>
                  {item}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="smy-section">
          <motion.div
            className="smy-section-inner"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.p className="smy-label" variants={fadeUp}>Result</motion.p>
            <motion.h2 variants={fadeUp}>Stronger visibility and better customer communication.</motion.h2>
            <motion.p variants={fadeUp}>
              Stone Mountain Yogurt now has a modern, SEO-optimized website that supports long-term local search
              growth, plus a custom Twilio-powered texting workflow that helps the business stay connected with
              customers in real time.
            </motion.p>
          </motion.div>
        </section>

        <footer className="smy-credit">
          <p>
            Built by <Link to="/">Smith Digitals</Link>
          </p>
        </footer>
      </div>
    </>
  );
}
