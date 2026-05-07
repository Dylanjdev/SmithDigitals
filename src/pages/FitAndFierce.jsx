import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import fitImg from "../assets/fit.png";
import { Title, Meta, Link as MetaLink } from "react-head";
import "./FitAndFierce.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

export default function FitAndFierce() {
  return (
    <>
      {/* SEO */}
      <Title>Fit & Fierce Studio | Case Study | Smith Digitals LLC</Title>
      <Meta
        name="description"
        content="Case study: Smith Digitals built the website for Fit & Fierce, an inclusive dance fitness studio in Pennington Gap, VA focused on body-positive, high-energy training for all levels."
      />
      <Meta name="keywords" content="Fit and Fierce Studio, dance fitness website, inclusive fitness, Smith Digitals case study, Pennington Gap VA" />
      <Meta property="og:title" content="Fit & Fierce Studio | Case Study | Smith Digitals LLC" />
      <Meta property="og:description" content="How Smith Digitals built the web presence for Fit & Fierce, an inclusive dance fitness studio in Virginia." />
      <Meta property="og:image" content="https://smithdigitals.com/og-image.jpg" />
      <Meta property="og:type" content="article" />
      <Meta property="og:url" content="https://smithdigitals.com/case-studies/fit-and-fierce" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Fit & Fierce Studio | Smith Digitals Case Study" />
      <Meta name="twitter:description" content="How Smith Digitals built the web presence for Fit & Fierce inclusive dance fitness studio." />
      <MetaLink rel="canonical" href="https://smithdigitals.com/case-studies/fit-and-fierce" />

      <div className="ff-page">

        {/* ── BACK BREADCRUMB ── */}
        <div className="ff-breadcrumb">
          <Link to="/case-studies">← Back to Case Studies</Link>
        </div>

        {/* ── HERO ── */}
        <section className="ff-hero">
          <motion.div className="ff-hero-inner" initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.15 } } }}>
            <motion.div className="ff-logo-block" variants={fadeUp}>
              <img src={fitImg} alt="Fit & Fierce Studio logo" className="ff-logo-img" />
            </motion.div>
            <motion.p className="ff-tagline" variants={fadeUp}>Pennington Gap, VA</motion.p>
            <motion.h1 className="ff-headline" variants={fadeUp}>
              Where every body belongs.
            </motion.h1>
            <motion.p className="ff-hero-desc" variants={fadeUp}>
              Fit &amp; Fierce is a dance fitness studio in Pennington Gap, Virginia built on one simple belief — fitness should feel good for <strong>every body</strong>. Instructor Sam Davis created a space where women of all shapes, sizes, and experience levels can sweat, laugh, and build real confidence through high-energy movement.
            </motion.p>
            <motion.div className="ff-badges" variants={fadeUp}>
              <span className="ff-badge">Body-positive</span>
              <span className="ff-badge">All levels</span>
              <span className="ff-badge">Zero judgment</span>
            </motion.div>
            <motion.div className="ff-hero-ctas" variants={fadeUp}>
              <a href="https://www.facebook.com/profile.php?id=61574160265586" target="_blank" rel="noopener noreferrer" className="ff-btn ff-btn-secondary">
                View Classes on Facebook
              </a>
              <a href="https://fitandfierce.studio/" target="_blank" rel="noopener noreferrer" className="ff-btn ff-btn-primary">
                Visit Studio →
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* ── FEATURE TILES ── */}
        <section className="ff-features">
          {[
            { icon: "🎓", label: "All Levels", sub: "Beginner to advanced" },
            { icon: "🤝", label: "Inclusive", sub: "Supportive by design" },
            { icon: "⚡", label: "High Energy", sub: "Dance + sculpt training" },
          ].map((f, i) => (
            <motion.div
              key={f.label}
              className="ff-feature-card"
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <span className="ff-feature-icon">{f.icon}</span>
              <h3>{f.label}</h3>
              <p>{f.sub}</p>
            </motion.div>
          ))}
        </section>

        {/* ── THE VIBE ── */}
        <section className="ff-vibe">
          <motion.div
            className="ff-vibe-inner"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ show: { transition: { staggerChildren: 0.15 } } }}
          >
            <motion.p className="ff-section-label" variants={fadeUp}>The vibe</motion.p>
            <motion.h2 variants={fadeUp}>Feminine. Bold. Unapologetic.</motion.h2>
            <motion.p className="ff-vibe-desc" variants={fadeUp}>
              Classes blend dance-inspired choreography with full-body sculpting, set to high-energy music in an atmosphere that's bold, feminine, and completely judgment-free. No fitness background required — just show up.
            </motion.p>
            <motion.div className="ff-vibe-image-wrap" variants={fadeUp}>
              <img src={fitImg} alt="Fit & Fierce dance fitness class" className="ff-vibe-img" />
              <a
                href="https://www.facebook.com/profile.php?id=61574160265586"
                target="_blank"
                rel="noopener noreferrer"
                className="ff-play-btn"
              >
                ▶ Play Class Preview
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* ── QUOTE ── */}
        <section className="ff-quote-section">
          <motion.blockquote
            className="ff-quote"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="ff-quote-mark">"</span>
            Fit &amp; Fierce isn't just a workout — it's a community. Sam built something rare: a place where women genuinely cheer each other on and leave feeling more powerful than when they walked in.
            <span className="ff-quote-mark">"</span>
            <cite>— Smith Digitals, on working with Fit &amp; Fierce</cite>
          </motion.blockquote>
        </section>

        {/* ── INSTRUCTOR ── */}
        <section className="ff-instructor">
          <motion.div
            className="ff-instructor-inner"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ show: { transition: { staggerChildren: 0.15 } } }}
          >
            <motion.p className="ff-section-label" variants={fadeUp}>Meet your instructor</motion.p>
            <motion.h2 variants={fadeUp}>Sam Davis, Founder &amp; Instructor</motion.h2>
            <motion.p className="ff-instructor-bio" variants={fadeUp}>
              Sam Davis is the founder and lead instructor at Fit &amp; Fierce. She started the studio with a clear mission: give women in Lee County a fitness space that genuinely welcomes them — regardless of size, experience, or ability.
            </motion.p>
            <motion.p className="ff-instructor-bio" variants={fadeUp}>
              Her coaching style is high-energy but approachable, pushing clients to dig deeper while making sure no one feels left behind. The result is a loyal, tight-knit community of women who keep coming back — not just for the workout, but for each other.
            </motion.p>
          </motion.div>
        </section>

        {/* ── FACEBOOK ── */}
        <section className="ff-facebook">
          <motion.div
            className="ff-facebook-inner"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="ff-section-label">Stay Connected</p>
            <div className="ff-fb-card">
              <div className="ff-fb-header">
                <img src={fitImg} alt="Fit & Fierce Facebook page" className="ff-fb-avatar" />
                <div>
                  <strong>fit &amp; fierce | Pennington Gap VA</strong>
                  <span>2,622 likes · 85 talking about this</span>
                </div>
              </div>
              <p className="ff-fb-bio">
                Fit &amp; Fierce runs an active Facebook community with over 2,600 followers. Sam posts class schedules, updates, and content there regularly — making it the go-to hub for anyone looking to join or stay in the loop.
              </p>
              <p className="ff-fb-note">Class schedules and announcements are updated on Facebook weekly.</p>
              <a
                href="https://www.facebook.com/profile.php?id=61574160265586"
                target="_blank"
                rel="noopener noreferrer"
                className="ff-btn ff-btn-secondary"
              >
                View Page →
              </a>
            </div>
          </motion.div>
        </section>

        {/* ── LOCATION CTA ── */}
        <section className="ff-location">
          <motion.div
            className="ff-location-inner"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ show: { transition: { staggerChildren: 0.15 } } }}
          >
            <motion.p className="ff-section-label" variants={fadeUp}>Visit Fit &amp; Fierce</motion.p>
            <motion.p className="ff-address" variants={fadeUp}>
              282 West Gate Mall Cir, Pennington Gap, VA, United States
            </motion.p>
            <motion.p className="ff-location-sub" variants={fadeUp}>
              Located in the West Gate Mall area of Pennington Gap, Virginia, Fit &amp; Fierce is open to anyone ready to move. No experience required — just the willingness to show up.
            </motion.p>
            <motion.div className="ff-location-ctas" variants={fadeUp}>
              <a
                href="https://www.facebook.com/profile.php?id=61574160265586"
                target="_blank"
                rel="noopener noreferrer"
                className="ff-btn ff-btn-secondary"
              >
                Check Class Updates on Facebook
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* ── SITE FOOTER / CREDIT ── */}
        <footer className="ff-credit">
          <a href="https://fitandfierce.studio/" target="_blank" rel="noopener noreferrer" className="ff-credit-logo-link">
            <img src={fitImg} alt="Fit & Fierce Studio" className="ff-credit-logo" />
            <span className="ff-credit-name">Fit &amp; Fierce • Inclusive Dance Fitness Studio</span>
          </a>
          <p className="ff-credit-built">
            Built by{" "}
            <Link to="/" className="ff-credit-smith">Smith Digitals</Link>
          </p>
        </footer>

      </div>
    </>
  );
}
