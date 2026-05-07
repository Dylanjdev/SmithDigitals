import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import potlImg from "../assets/PaintingInsideTheStudio.webp";
import { Title, Meta, Link as MetaLink } from "react-head";
import "./PaintingOutsideTheLines.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

export default function PaintingOutsideTheLines() {
  const occasions = [
    { icon: "💑", label: "Date Night" },
    { icon: "👯‍♀️", label: "Girls Night" },
    { icon: "🎨", label: "Kids Painting" },
    { icon: "🎂", label: "Birthday Parties" },
    { icon: "🎄", label: "Holiday Events" },
    { icon: "🏢", label: "Corporate Groups" },
    { icon: "🤝", label: "Team Building" },
    { icon: "🙏", label: "Praise & Paint" },
    { icon: "🏫", label: "School Programs" },
    { icon: "💐", label: "Bridal Showers" },
    { icon: "🌆", label: "Town Pride" },
  ];

  return (
    <>
      {/* SEO */}
      <Title>Painting Outside The Lines Studio | Case Study | Smith Digitals LLC</Title>
      <Meta
        name="description"
        content="Case study: Smith Digitals built the website for Painting Outside The Lines Studio in Pennington Gap, VA — a creative art studio offering guided painting classes, paint parties, and social art experiences."
      />
      <Meta name="keywords" content="Painting Outside The Lines Studio, art studio website, painting classes, Pennington Gap VA, Smith Digitals case study" />
      <Meta property="og:title" content="Painting Outside The Lines Studio | Case Study | Smith Digitals LLC" />
      <Meta property="og:description" content="How Smith Digitals built the website for Painting Outside The Lines Studio, a guided art studio in Pennington Gap, Virginia." />
      <Meta property="og:image" content="https://smithdigitals.com/og-image.jpg" />
      <Meta property="og:type" content="article" />
      <Meta property="og:url" content="https://smithdigitals.com/case-studies/painting-outside-the-lines" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Painting Outside The Lines Studio | Smith Digitals Case Study" />
      <Meta name="twitter:description" content="How Smith Digitals built the website for Painting Outside The Lines Studio in Pennington Gap, VA." />
      <MetaLink rel="canonical" href="https://smithdigitals.com/case-studies/painting-outside-the-lines" />

      <div className="potl-page">

        {/* ── BREADCRUMB ── */}
        <div className="potl-breadcrumb">
          <Link to="/case-studies">← Back to Case Studies</Link>
        </div>

        {/* ── HERO ── */}
        <section className="potl-hero">
          <motion.div
            className="potl-hero-inner"
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.15 } } }}
          >
            <motion.div className="potl-logo-block" variants={fadeUp}>
              <img src={potlImg} alt="Inside Painting Outside The Lines Studio" className="potl-hero-img" />
            </motion.div>
            <motion.p className="potl-tagline" variants={fadeUp}>Pennington Gap, VA · Art Studio</motion.p>
            <motion.h1 className="potl-headline" variants={fadeUp}>
              Where art meets life —<br />no experience required.
            </motion.h1>
            <motion.p className="potl-hero-desc" variants={fadeUp}>
              Painting Outside The Lines Studio is a guided art studio on Main Street in Pennington Gap,
              Virginia. They offer canvas painting classes, social paint experiences, and themed events
              for everyone — from first-timers to seasoned artists — with all supplies and beverages
              included.
            </motion.p>
            <motion.div className="potl-badges" variants={fadeUp}>
              <span className="potl-badge">Guided Classes</span>
              <span className="potl-badge">Paint Parties</span>
              <span className="potl-badge">Local Studio</span>
            </motion.div>
            <motion.div className="potl-hero-ctas" variants={fadeUp}>
              <a
                href="https://www.facebook.com/p/Painting-Outside-the-Lines-Studio-61557459762829/"
                target="_blank"
                rel="noopener noreferrer"
                className="potl-btn potl-btn-secondary"
              >
                Follow on Facebook
              </a>
              <a
                href="https://paintingoutsidethelinesstudios.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="potl-btn potl-btn-primary"
              >
                Visit Studio →
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* ── WHAT THEY OFFER ── */}
        <section className="potl-offerings">
          <div className="potl-offerings-inner">
            <motion.p
              className="potl-section-label"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              What they offer
            </motion.p>
            <motion.h2
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              More than a painting class.
            </motion.h2>
            <div className="potl-offer-grid">
              {[
                { icon: "🖼️", title: "Canvas Painting Classes", desc: "Guided sessions in an intimate studio setting. Walk away with a finished piece that's uniquely yours — no experience needed." },
                { icon: "🥂", title: "Social Paint Experience", desc: "Creativity meets community. Professional guidance in an atmosphere designed for connection — all supplies and beverages included." },
                { icon: "🎁", title: "Take-Home Paint Kits", desc: "Bring the studio experience home. Paint kits let guests recreate the magic on their own schedule." },
                { icon: "📅", title: "Ladies Night — Every Thursday", desc: "A weekly staple in Pennington Gap. Every Thursday from 6–8 PM, join a room full of creativity and good company." },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  className="potl-offer-card"
                  custom={i}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={fadeUp}
                >
                  <span className="potl-offer-icon">{item.icon}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ABOUT THE STUDIO ── */}
        <section className="potl-about">
          <motion.div
            className="potl-about-inner"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ show: { transition: { staggerChildren: 0.15 } } }}
          >
            <motion.p className="potl-section-label" variants={fadeUp}>About the studio</motion.p>
            <motion.h2 variants={fadeUp}>Art for everyone in Lee County.</motion.h2>
            <motion.p className="potl-about-body" variants={fadeUp}>
              Painting Outside The Lines Studio opened on Main Street in Pennington Gap to bring
              accessible, high-quality art experiences to Southwest Virginia. Their philosophy is
              simple: you don't need experience to create something beautiful. Expert instructors
              guide every session, walking guests through techniques step by step.
            </motion.p>
            <motion.p className="potl-about-body" variants={fadeUp}>
              The studio is thoughtfully designed — natural light, comfortable seating, and an
              atmosphere that makes artistry feel effortless. Whether it's a first date, a birthday
              party, or a corporate team-building event, they tailor every experience to the group.
            </motion.p>
            <motion.p className="potl-about-body" variants={fadeUp}>
              Smith Digitals designed and built their website to reflect the warmth and creativity of
              the studio itself — organized around their class schedule, event offerings, and the
              story of a space that's already become a community landmark in Lee County, Virginia.
            </motion.p>
          </motion.div>
        </section>

        {/* ── OCCASIONS ── */}
        <section className="potl-occasions">
          <div className="potl-occasions-inner">
            <motion.p
              className="potl-section-label"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              Perfect for every occasion
            </motion.p>
            <motion.h2
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              Every occasion deserves art.
            </motion.h2>
            <motion.p
              className="potl-occasions-desc"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              From private parties to corporate retreats, Painting Outside The Lines Studio has an
              experience for it. Private bookings are available for groups of all sizes.
            </motion.p>
            <motion.div
              className="potl-occasion-tags"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              {occasions.map((o) => (
                <span key={o.label} className="potl-occasion-tag">
                  {o.icon} {o.label}
                </span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── WHAT WE BUILT ── */}
        <section className="potl-built">
          <motion.div
            className="potl-built-inner"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ show: { transition: { staggerChildren: 0.15 } } }}
          >
            <motion.p className="potl-section-label" variants={fadeUp}>What we built</motion.p>
            <motion.h2 variants={fadeUp}>A website as creative as the studio.</motion.h2>
            <div className="potl-built-grid">
              {[
                { icon: "🗓️", title: "Class Schedule Integration", desc: "Live class listings and event registration connected to Constant Contact, so the schedule is always up to date." },
                { icon: "📱", title: "Mobile-First Design", desc: "Fully responsive layout built for the phones customers use to find and book classes on the go." },
                { icon: "🎨", title: "Brand-Aligned Aesthetic", desc: "Visual design that captures the warmth and creativity of the studio — inviting, colorful, and welcoming." },
                { icon: "📍", title: "Local SEO Foundation", desc: "Optimized for 'painting classes Pennington Gap' and Lee County searches to drive foot traffic from the region." },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  className="potl-built-card"
                  custom={i}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={fadeUp}
                >
                  <span className="potl-built-icon">{item.icon}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── CONTACT / LOCATION ── */}
        <section className="potl-contact">
          <motion.div
            className="potl-contact-inner"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ show: { transition: { staggerChildren: 0.15 } } }}
          >
            <motion.p className="potl-section-label" variants={fadeUp}>Visit the studio</motion.p>
            <motion.h2 variants={fadeUp}>Come paint with us.</motion.h2>
            <motion.p className="potl-contact-desc" variants={fadeUp}>
              Walk-ins welcome — or browse the full class schedule online and reserve your spot. No
              experience required. Just show up and have fun.
            </motion.p>
            <motion.div className="potl-contact-details" variants={fadeUp}>
              <div className="potl-contact-item">
                <span className="potl-contact-icon">📍</span>
                <span>140 Main Street, Pennington Gap, VA 24277</span>
              </div>
              <div className="potl-contact-item">
                <span className="potl-contact-icon">📞</span>
                <a href="tel:2766908848" className="potl-contact-link">276-690-8848</a>
              </div>
              <div className="potl-contact-item">
                <span className="potl-contact-icon">✉️</span>
                <a href="mailto:stac68camaro@gmail.com" className="potl-contact-link">stac68camaro@gmail.com</a>
              </div>
              <div className="potl-contact-item">
                <span className="potl-contact-icon">🗓️</span>
                <span>Ladies Night every Thursday · 6:00 – 8:00 PM</span>
              </div>
            </motion.div>
            <motion.div className="potl-contact-ctas" variants={fadeUp}>
              <a
                href="https://paintingoutsidethelinesstudios.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="potl-btn potl-btn-primary"
              >
                View Classes →
              </a>
              <a
                href="https://www.facebook.com/p/Painting-Outside-the-Lines-Studio-61557459762829/"
                target="_blank"
                rel="noopener noreferrer"
                className="potl-btn potl-btn-secondary"
              >
                Facebook
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* ── FOOTER / CREDIT ── */}
        <footer className="potl-credit">
          <a
            href="https://paintingoutsidethelinesstudios.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="potl-credit-logo-link"
          >
            <img src={potlImg} alt="Painting Outside The Lines Studio" className="potl-credit-logo" />
            <span className="potl-credit-name">Painting Outside The Lines Studio · Pennington Gap, VA</span>
          </a>
          <p className="potl-credit-built">
            Built by{" "}
            <Link to="/" className="potl-credit-smith">Smith Digitals</Link>
          </p>
        </footer>

      </div>
    </>
  );
}
