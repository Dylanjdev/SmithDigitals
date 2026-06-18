import { motion } from "framer-motion";
import { Title, Meta, Link as MetaLink } from "react-head";
import logo from "../assets/smithlogo.png";
import { Link } from "react-router-dom";

export default function Home() {
  const clientPortalUrl = "https://billing.stripe.com/p/login/3cI9AT0gE5lK695bCB14400";
  const services = [
    { title: "Web Design & Development", desc: "Turn visitors into customers with a stunning, mobile-first website." },
    { title: "Digital Marketing Strategy", desc: "Data-driven campaigns that attract your ideal audience and convert them into loyal customers." },
    { title: "Social Media Marketing", desc: "Build a following and drive engagement across Facebook, Instagram, and more." },
    { title: "SEO Optimization", desc: "Rank higher on Google and get found by customers actively searching for you." },
    { title: "Google & Meta Ads", desc: "Targeted paid advertising that puts your business in front of ready-to-buy customers." },
    { title: "Google Business Setup", desc: "Dominate local search results and show up on Google Maps." },
    { title: "Branding & Logo Design", desc: "Build trust instantly with a memorable brand that reflects your values." },
    { title: "Analytics & Reporting", desc: "Know exactly what's working and where to invest your marketing dollars." },
  ];

  const stats = [
    { number: "15", label: "Projects Delivered" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "Growth", label: "Focused Digital Strategy" },
  ];

  const features = [
    {
      icon: "⚡",
      title: "Lightning Fast",
      desc: "Optimized performance that keeps your visitors engaged and improves SEO rankings."
    },
    {
      icon: "🔒",
      title: "Enterprise Security",
      desc: "Bank-level security measures to protect your business and customer data."
    },
    {
      icon: "📱",
      title: "Mobile First",
      desc: "Responsive design that works perfectly on all devices and screen sizes."
    },
    {
      icon: "🎯",
      title: "Targeted Marketing",
      desc: "Reach the right audience at the right time with targeted paid ads and social media campaigns."
    },
    {
      icon: "📊",
      title: "Data Driven",
      desc: "Detailed analytics and reporting to track your success and optimize every campaign."
    },
    {
      icon: "🚀",
      title: "Built to Scale",
      desc: "Strategies designed to grow with your business — from launch to market leader."
    },
  ];

  const techStack = [
    {
      category: "Web Development",
      technologies: ["React", "Vite", "Responsive Design", "Modern CSS", "Node.js", "RESTful APIs"]
    },
    {
      category: "Digital Marketing",
      technologies: ["Google Ads", "Meta Ads", "Social Media Management", "Content Strategy", "Paid Ad Optimization"]
    },
    {
      category: "Growth & Analytics",
      technologies: ["SEO", "Google Analytics", "Conversion Tracking", "Performance Audits", "Reporting"]
    }
  ];

  return (
    <>
      {/* ✅ SEO META TAGS */}
      <Title>Smith Digitals LLC | Digital Marketing & Web Design Agency | Southwest Virginia</Title>
      <Meta
        name="description"
        content="Smith Digitals LLC is a Southwest Virginia digital marketing and web design agency. We build modern websites and run data-driven marketing campaigns — SEO, Google Ads, social media, and more — to grow local businesses."
      />
      <Meta
        name="keywords"
        content="digital marketing agency, web design, SEO, Google Ads, Meta Ads, social media marketing, website developer, Southwest Virginia, small business marketing, Smith Digitals"
      />
      <Meta property="og:title" content="Smith Digitals LLC | Digital Marketing & Web Design Agency" />
      <Meta
        property="og:description"
        content="Full-service digital marketing and web design agency serving Southwest Virginia. Custom websites, paid ads, SEO, social media, and more."
      />
      <Meta property="og:image" content="https://smithdigitals.com/og-image.jpg" />
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content="https://smithdigitals.com/" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Smith Digitals | Digital Marketing & Web Design Agency" />
      <Meta
        name="twitter:description"
        content="Full-service digital marketing and web design for local businesses in Southwest Virginia. SEO, ads, social media, and custom websites."
      />
      <Meta name="twitter:image" content="https://smithdigitals.com/og-image.jpg" />
      <MetaLink rel="canonical" href="https://smithdigitals.com/" />

      {/* ✅ JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Smith Digitals LLC",
          url: "https://smithdigitals.com",
          logo: "https://smithdigitals.com/og-image.jpg",
          areaServed: ["Southwest Virginia", "Lee County, VA", "Wise County, VA", "Scott County, VA"],
          description:
            "Smith Digitals LLC is a full-service digital marketing and web design agency in Southwest Virginia. We build custom websites and run data-driven marketing campaigns including SEO, Google Ads, Meta Ads, and social media management.",
        })}
      </script>

      {/* ✅ PAGE CONTENT */}
      <div className="home-page">
        <p className="llc-notice" style={{textAlign: 'center', fontWeight: 'bold', marginTop: 8}}>Smith Digitals LLC is a registered Limited Liability Company.</p>

        {/* Hero Section */}
        <div className="hero">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            style={{ marginBottom: "1.5rem" }}
          >
            <img src={logo} alt="Smith Digitals Logo" className="hero-logo" />
          </motion.div>
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Your Digital Marketing & Web Design Partner
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Full-service digital marketing and web design for small businesses. From custom websites and SEO to Google Ads and social media — we grow your business online.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}
          >
            <Link to="/contact" className="hero-btn">
              Start Your Project
            </Link>
            <Link to="/pricing" className="hero-btn" style={{ background: "transparent", border: "2px solid #6366f1", color: "#6366f1" }}>
              View Pricing
            </Link>
          </motion.div>
        </div>

        <motion.section
          className="home-portal-callout"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="home-portal-eyebrow">Already a client?</p>
          <h2>Manage your subscription in the Client Portal</h2>
          <p>
            Use the secure Stripe Client Portal to review your plan, update billing,
            upgrade services, or cancel when needed.
          </p>
          <a
            href={clientPortalUrl}
            className="home-portal-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Client Portal
          </a>
        </motion.section>

        {/* Stats Section */}
        <section className="stats-section">
          <div className="stats-grid">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                className="stat-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Services Preview */}
        <div className="services-container">
          <h2 style={{ textAlign: "center", marginBottom: "var(--spacing-lg)" }}>What We Offer</h2>
          <p style={{ textAlign: "center", color: "var(--gray)", marginBottom: "var(--spacing-lg)", maxWidth: "600px", margin: "0 auto var(--spacing-lg)" }}>From building your online presence to marketing it — we handle every piece of your digital growth.</p>
          <div className="services-preview">
            {services.map((s, idx) => (
              <motion.div
                key={idx}
                className="service-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <h3>{s.title}</h3>
                <p className="service-desc">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tech Stack Section */}
        <section className="tech-stack-section">
          <div className="tech-stack-container">
            <div className="tech-stack-title">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Full-Stack Technology
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                style={{ color: "var(--gray)", fontSize: "1.1rem" }}
              >
                Modern technology and proven marketing strategies working together to deliver real results
              </motion.p>
            </div>
            <div className="tech-categories">
              {techStack.map((tech, idx) => (
                <motion.div
                  key={idx}
                  className="tech-category"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <h4>{tech.category}</h4>
                  <ul className="tech-list">
                    {tech.technologies.map((t, i) => (
                      <li key={i}>{t}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="why-choose-section">
          <div className="why-choose-container">
            <div className="why-choose-title">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Why Choose Smith Digitals
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                style={{ color: "var(--gray)", fontSize: "1.1rem" }}
              >
                We combine web development expertise with proven marketing strategies to deliver real, measurable results
              </motion.p>
            </div>
            <div className="features-grid">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  className="feature-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="feature-icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <motion.section
          style={{
            padding: "var(--spacing-3xl) var(--spacing-lg)",
            textAlign: "center",
            maxWidth: "var(--container-width)",
            margin: "0 auto",
            width: "100%"
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 style={{ marginBottom: "var(--spacing-md)" }}>Ready to Grow Your Business Online?</h2>
          <p style={{ fontSize: "1.1rem", marginBottom: "var(--spacing-lg)", maxWidth: "600px", margin: "0 auto var(--spacing-lg)" }}>
            Let's build your website, launch your campaigns, and create a full digital strategy that drives real, measurable growth.
          </p>
          <Link to="/contact" className="hero-btn">
            Get Started Today
          </Link>
        </motion.section>

        {/* Resources Section */}
        <motion.section
          style={{
            padding: "var(--spacing-2xl) var(--spacing-lg)",
            textAlign: "center",
            maxWidth: "var(--container-width)",
            margin: "0 auto",
            width: "100%",
            backgroundColor: "rgba(99, 102, 241, 0.02)",
            borderTop: "1px solid var(--border-color)"
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 style={{ marginBottom: "var(--spacing-md)", color: "var(--light-text)" }}>Learn More About SEO</h3>
          <p style={{ marginBottom: "var(--spacing-md)", color: "var(--gray)" }}>
            Dive deeper into SEO best practices with this comprehensive guide on schema markup
          </p>
          <a
            href="https://zerotomastery.io/blog/how-to-use-schema-markup-for-seo-and-get-more-traffic/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "var(--accent)",
              textDecoration: "none",
              fontWeight: "600",
              transition: "all 0.3s ease",
              display: "inline-block"
            }}
            onMouseEnter={(e) => e.target.style.transform = "translateX(4px)"}
            onMouseLeave={(e) => e.target.style.transform = "translateX(0)"}
          >
            Read: How to Use Schema Markup for SEO →
          </a>
        </motion.section>
      </div>
    </>
  );
}
