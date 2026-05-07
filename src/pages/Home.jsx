import { motion } from "framer-motion";
import { Title, Meta, Link as MetaLink } from "react-head";
import logo from "../assets/smithlogo.png";
import { Link } from "react-router-dom";

export default function Home() {
  const clientPortalUrl = "https://billing.stripe.com/p/login/3cI9AT0gE5lK695bCB14400";
  const services = [
    { title: "Web Design & Development", desc: "Turn visitors into customers with a stunning, mobile-first website." },
    { title: "SEO Optimization", desc: "Rank higher on Google and get found by customers actively searching for you." },
    { title: "Google Business Setup", desc: "Dominate local search results and show up on Google Maps." },
    { title: "Monthly Maintenance", desc: "Never worry about downtime, security, or outdated plugins again." },
    { title: "Branding & Logo Design", desc: "Build trust instantly with a memorable brand that reflects your values." },
    { title: "Performance Optimization", desc: "Boost conversions with lightning-fast page loads that keep visitors engaged." },
    { title: "Analytics & Reporting", desc: "Know exactly what's working and where to invest your marketing dollars." },
  ];

  const stats = [
    { number: "8", label: "Projects Delivered" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "2x", label: "Average Traffic Increase" },
    { number: "24/7", label: "Support Available" },
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
      title: "SEO Optimized",
      desc: "Built with search engines in mind to help your business get discovered."
    },
    {
      icon: "📊",
      title: "Data Driven",
      desc: "Detailed analytics and reporting to track your success and optimize campaigns."
    },
    {
      icon: "🚀",
      title: "Built to Scale",
      desc: "Architecture designed to grow with your business, not hold you back."
    },
  ];

  const techStack = [
    {
      category: "Frontend",
      technologies: ["React", "Vite", "Responsive Design", "Modern CSS"]
    },
    {
      category: "Backend",
      technologies: ["Node.js", "Express.js", "RESTful APIs", "Database Design"]
    },
    {
      category: "DevOps",
      technologies: ["Deployment", "Performance Optimization", "Security Hardening", "Monitoring"]
    }
  ];

  return (
    <>
      {/* ✅ SEO META TAGS */}
      <Title>Smith Digitals LLC | Southwest Virginia Website Developer</Title>
      <Meta
        name="description"
        content="Smith Digitals LLC is a Southwest Virginia website developer building modern, responsive sites optimized for SEO, speed, and conversions for local businesses."
      />
      <Meta
        name="keywords"
        content="web design, SEO, website builder, web developer, Google Business, small business websites, branding, Smith Digitals"
      />
      <Meta property="og:title" content="Smith Digitals LLC | Southwest Virginia Website Developer" />
      <Meta
        property="og:description"
        content="Modern websites built to grow local businesses across Southwest Virginia. Affordable, custom, and SEO-ready."
      />
      <Meta property="og:image" content="https://smithdigitals.com/og-image.jpg" />
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content="https://smithdigitals.com/" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Smith Digitals | Southwest Virginia Website Developer" />
      <Meta
        name="twitter:description"
        content="Modern, responsive, and SEO-optimized websites for local businesses in Southwest Virginia."
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
            "Smith Digitals LLC builds custom, SEO-optimized websites for small businesses in Southwest Virginia. Web design, branding, and Google Business services.",
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
            Modern Digital Solutions Built for Growth
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Full-stack web design, SEO optimization, and digital strategy crafted for small businesses that want to stand out online.
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
                Built with modern, scalable technologies that ensure performance and reliability
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
                We combine technical expertise with business strategy to deliver real results
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
          <h2 style={{ marginBottom: "var(--spacing-md)" }}>Ready to Transform Your Online Presence?</h2>
          <p style={{ fontSize: "1.1rem", marginBottom: "var(--spacing-lg)", maxWidth: "600px", margin: "0 auto var(--spacing-lg)" }}>
            Let's discuss your project and create a strategy that drives real business growth.
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

