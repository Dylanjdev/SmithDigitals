import { motion } from "framer-motion";
import { Title, Meta, Link as MetaLink } from "react-head";
import logo from "../assets/smithlogo.png";
import { Link } from "react-router-dom";

export default function Home() {
  const services = [
    { title: "Web Design & Development", desc: "Custom responsive websites crafted for your brand." },
    { title: "SEO Optimization", desc: "Improve your search rankings and attract the right audience." },
    { title: "Google Business Setup", desc: "Set up your profile to get found faster online." },
    { title: "Monthly Maintenance", desc: "Keep your website fast, secure, and up-to-date." },
    { title: "Branding & Logo Design", desc: "Create a strong visual identity that stands out." },
    { title: "Performance Optimization", desc: "Speed up your website and improve user experience." },
    { title: "Analytics & Reporting", desc: "Understand your visitors and make data-driven decisions." },
  ];

  return (
    <>
      {/* ✅ SEO META TAGS */}
      <Title>Smith Digitals | Web Design, SEO & Branding Experts</Title>
      <Meta
        name="description"
        content="Smith Digitals builds modern, responsive websites optimized for SEO, speed, and conversions. Affordable web design, Google Business setup, and monthly maintenance plans available."
      />
      <Meta
        name="keywords"
        content="web design, SEO, website builder, web developer, Google Business, small business websites, branding, Smith Digitals"
      />
      <Meta property="og:title" content="Smith Digitals | Web Design & SEO Experts" />
      <Meta
        property="og:description"
        content="Modern websites built to grow your business. Affordable, custom, and SEO-ready by Smith Digitals."
      />
      <Meta property="og:image" content="/og-image.png" />
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content="https://smithdigitals.com/" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Smith Digitals | Web Design & SEO Experts" />
      <Meta
        name="twitter:description"
        content="Modern, responsive, and optimized websites built for growth. Smith Digitals — professional design and SEO."
      />
      <Meta name="twitter:image" content="/og-image.png" />
      <MetaLink rel="canonical" href="https://smithdigitals.com/" />

      {/* ✅ JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Smith Digitals",
          url: "https://smithdigitals.com",
          logo: "https://smithdigitals.com/og-image.png",
          sameAs: [
            "https://www.facebook.com/smithdigitals",
            "https://www.instagram.com/smithdigitals",
          ],
          description:
            "Smith Digitals builds custom, SEO-optimized websites for small businesses. Web design, branding, and Google Business services.",
        })}
      </script>

      {/* ✅ PAGE CONTENT */}
      <div className="home-page">
        {/* Hero Section */}
        <div className="hero">
          <motion.img
            src={logo}
            alt="Smith Digitals Logo"
            className="hero-logo"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Building modern websites that grow your business
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Clean, sleek, and professional digital experiences.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <Link to="/contact" className="hero-btn">
              Get in Touch
            </Link>
          </motion.div>
        </div>

        {/* Services Preview */}
        <div className="services-container">
          <div className="services-preview">
            {services.map((s, idx) => (
              <motion.div
                key={idx}
                className="service-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
              >
                <h3>{s.title}</h3>
                <p className="service-desc">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

