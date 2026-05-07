import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import jumpImg from "../assets/Jump.png";
import { Title, Meta, Link as MetaLink } from "react-head";
import "./JumpSportingGoods.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

export default function JumpSportingGoods() {
  const categories = [
    { icon: "🏫", label: "Schools", sub: "Elementary, middle & high school" },
    { icon: "✝️", label: "Faith-Based", sub: "Churches & religious organizations" },
    { icon: "🏛️", label: "Municipal", sub: "Parks, public works & town hall" },
    { icon: "🚒", label: "Emergency Services", sub: "Fire, police & sheriff departments" },
    { icon: "⚽", label: "Sports & Teams", sub: "Travel ball & team gear" },
    { icon: "🏥", label: "Healthcare", sub: "Nurses & medical staff" },
  ];

  return (
    <>
      {/* SEO */}
      <Title>Jump Sporting Goods | Case Study | Smith Digitals LLC</Title>
      <Meta
        name="description"
        content="Case study: Smith Digitals built the e-commerce website for Jump Sporting Goods LLC, a custom apparel company in Dryden, VA serving schools, teams, and organizations across Southwest Virginia."
      />
      <Meta name="keywords" content="Jump Sporting Goods, custom apparel website, e-commerce, Smith Digitals case study, Dryden VA, SWVA schools" />
      <Meta property="og:title" content="Jump Sporting Goods | Case Study | Smith Digitals LLC" />
      <Meta property="og:description" content="How Smith Digitals built the custom e-commerce platform for Jump Sporting Goods in Dryden, VA." />
      <Meta property="og:image" content="https://smithdigitals.com/og-image.jpg" />
      <Meta property="og:type" content="article" />
      <Meta property="og:url" content="https://smithdigitals.com/case-studies/jump-sporting-goods" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Jump Sporting Goods | Smith Digitals Case Study" />
      <Meta name="twitter:description" content="How Smith Digitals built the e-commerce platform for Jump Sporting Goods, custom apparel for Southwest Virginia." />
      <MetaLink rel="canonical" href="https://smithdigitals.com/case-studies/jump-sporting-goods" />

      <div className="jsg-page">

        {/* ── BREADCRUMB ── */}
        <div className="jsg-breadcrumb">
          <Link to="/case-studies">← Back to Case Studies</Link>
        </div>

        {/* ── HERO ── */}
        <section className="jsg-hero">
          <motion.div
            className="jsg-hero-inner"
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.15 } } }}
          >
            <motion.div className="jsg-logo-block" variants={fadeUp}>
              <img src={jumpImg} alt="Jump Sporting Goods logo" className="jsg-logo-img" />
            </motion.div>
            <motion.p className="jsg-tagline" variants={fadeUp}>Dryden, VA · Custom Apparel</motion.p>
            <motion.h1 className="jsg-headline" variants={fadeUp}>
              Your source for custom apparel<br />for schools, teams & organizations.
            </motion.h1>
            <motion.p className="jsg-hero-desc" variants={fadeUp}>
              Jump Sporting Goods LLC is a custom apparel company based in Dryden, Virginia. They specialize in
              high-quality sublimated shirts, hats, cups, stickers, and sports equipment — designed specifically
              for the schools, teams, and organizations that make up Southwest Virginia communities.
            </motion.p>
            <motion.div className="jsg-badges" variants={fadeUp}>
              <span className="jsg-badge">Custom Orders</span>
              <span className="jsg-badge">E-Commerce</span>
              <span className="jsg-badge">Local Business</span>
            </motion.div>
            <motion.div className="jsg-hero-ctas" variants={fadeUp}>
              <a
                href="https://www.facebook.com/jumpsportinggoods"
                target="_blank"
                rel="noopener noreferrer"
                className="jsg-btn jsg-btn-secondary"
              >
                Follow on Facebook
              </a>
              <a
                href="https://www.jumpsportinggoods.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="jsg-btn jsg-btn-primary"
              >
                Visit Store →
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* ── WHO THEY SERVE ── */}
        <section className="jsg-categories">
          <div className="jsg-categories-inner">
            <motion.p
              className="jsg-section-label"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              Who they serve
            </motion.p>
            <motion.h2
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              Built for the whole community.
            </motion.h2>
            <motion.p
              className="jsg-section-desc"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              Jump Sporting Goods isn't just one type of customer. They serve virtually every corner of
              Southwest Virginia — from elementary school spirit wear to emergency services uniforms.
            </motion.p>
            <div className="jsg-grid">
              {categories.map((c, i) => (
                <motion.div
                  key={c.label}
                  className="jsg-category-card"
                  custom={i}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={fadeUp}
                >
                  <span className="jsg-cat-icon">{c.icon}</span>
                  <h3>{c.label}</h3>
                  <p>{c.sub}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ABOUT THE BUSINESS ── */}
        <section className="jsg-about">
          <motion.div
            className="jsg-about-inner"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ show: { transition: { staggerChildren: 0.15 } } }}
          >
            <motion.p className="jsg-section-label" variants={fadeUp}>About the business</motion.p>
            <motion.h2 variants={fadeUp}>Serving SWVA, one order at a time.</motion.h2>
            <motion.p className="jsg-about-body" variants={fadeUp}>
              Jump Sporting Goods has built a loyal customer base across Southwest Virginia by doing one
              thing really well — delivering quality custom apparel on time, with a personal touch. Every
              order is tailored to the organization it's made for, from school mascot tees to department
              insignia gear.
            </motion.p>
            <motion.p className="jsg-about-body" variants={fadeUp}>
              Their product catalog spans shirts, hats, cups, stickers, and sports equipment. Whether
              it's a youth baseball team needing uniforms or a local fire department ordering custom gear,
              Jump handles it all from their location at 164 Cross Creek, Dryden, VA.
            </motion.p>
            <motion.p className="jsg-about-body" variants={fadeUp}>
              Smith Digitals built their custom e-commerce website to make ordering easier for
              organizations — with a browsable product catalog organized by customer type, so schools,
              teams, and departments can quickly find and order exactly what they need.
            </motion.p>
          </motion.div>
        </section>

        {/* ── WHAT WE BUILT ── */}
        <section className="jsg-built">
          <motion.div
            className="jsg-built-inner"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ show: { transition: { staggerChildren: 0.15 } } }}
          >
            <motion.p className="jsg-section-label" variants={fadeUp}>What we built</motion.p>
            <motion.h2 variants={fadeUp}>A custom e-commerce experience.</motion.h2>
            <div className="jsg-built-grid">
              {[
                { icon: "🛒", title: "Shopify Integration", desc: "Full product catalog with buy-now functionality powered by Shopify Buy Button — no complex backend required." },
                { icon: "📂", title: "Organized by Customer", desc: "Products are categorized by who they're for: schools, faith orgs, emergency services, sports teams, and more." },
                { icon: "📱", title: "Mobile-First Design", desc: "Fully responsive layout that works seamlessly on phones and desktops for customers ordering from anywhere." },
                { icon: "📞", title: "Custom Order Pipeline", desc: "Clear pathways for organizations to request custom sublimated orders with contact info and social integration." },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  className="jsg-built-card"
                  custom={i}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={fadeUp}
                >
                  <span className="jsg-built-icon">{item.icon}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── SCHOOLS SERVED ── */}
        <section className="jsg-schools">
          <motion.div
            className="jsg-schools-inner"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.p className="jsg-section-label" variants={fadeUp}>Schools on the platform</motion.p>
            <motion.h2 variants={fadeUp}>Trusted by schools across the region.</motion.h2>
            <motion.p className="jsg-schools-desc" variants={fadeUp}>
              Jump Sporting Goods has dedicated product pages for dozens of SWVA schools — from
              elementary through high school — making it easy for staff, parents, and students to find
              their school's apparel.
            </motion.p>
            <motion.div className="jsg-school-tags" variants={fadeUp}>
              {[
                "Lee High School", "Thomas Walker HS", "Trinity High School", "Ridgeview HS",
                "Wise Central HS", "Gate City HS", "East Side HS", "J.I. Burton HS",
                "Pennington Middle", "Jonesville Middle", "Dryden Elementary", "Elk Knob Elementary",
                "St. Charles Elementary", "Flatwoods Elementary", "Rose Hill Elementary", "Rye Cove"
              ].map((school) => (
                <span key={school} className="jsg-school-tag">{school}</span>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* ── CONTACT / LOCATION ── */}
        <section className="jsg-contact">
          <motion.div
            className="jsg-contact-inner"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ show: { transition: { staggerChildren: 0.15 } } }}
          >
            <motion.p className="jsg-section-label" variants={fadeUp}>Get in touch</motion.p>
            <motion.h2 variants={fadeUp}>Ready to place an order?</motion.h2>
            <motion.p className="jsg-contact-desc" variants={fadeUp}>
              Jump Sporting Goods handles both standard and fully custom sublimated orders. Reach out
              directly to get started on gear for your school, team, or organization.
            </motion.p>
            <motion.div className="jsg-contact-details" variants={fadeUp}>
              <div className="jsg-contact-item">
                <span className="jsg-contact-icon">📍</span>
                <span>164 Cross Creek, Dryden, VA 24243</span>
              </div>
              <div className="jsg-contact-item">
                <span className="jsg-contact-icon">📞</span>
                <a href="tel:2768706583" className="jsg-contact-link">276-870-6583</a>
              </div>
              <div className="jsg-contact-item">
                <span className="jsg-contact-icon">✉️</span>
                <a href="mailto:jump2010@yahoo.com" className="jsg-contact-link">jump2010@yahoo.com</a>
              </div>
            </motion.div>
            <motion.div className="jsg-contact-ctas" variants={fadeUp}>
              <a
                href="https://www.jumpsportinggoods.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="jsg-btn jsg-btn-primary"
              >
                Browse the Store →
              </a>
              <a
                href="https://www.facebook.com/jumpsportinggoods"
                target="_blank"
                rel="noopener noreferrer"
                className="jsg-btn jsg-btn-secondary"
              >
                Facebook
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* ── FOOTER / CREDIT ── */}
        <footer className="jsg-credit">
          <a
            href="https://www.jumpsportinggoods.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="jsg-credit-logo-link"
          >
            <img src={jumpImg} alt="Jump Sporting Goods" className="jsg-credit-logo" />
            <span className="jsg-credit-name">Jump Sporting Goods LLC · Dryden, VA</span>
          </a>
          <p className="jsg-credit-built">
            Built by{" "}
            <Link to="/" className="jsg-credit-smith">Smith Digitals</Link>
          </p>
        </footer>

      </div>
    </>
  );
}
