import { FaLaptopCode, FaSearch, FaGoogle, FaTools, FaPalette, FaBullhorn, FaChartLine } from "react-icons/fa";
import { motion } from "framer-motion";
import { Title, Meta, Link as MetaLink } from "react-head";

export default function Services() {
  const services = [
    { 
      title: "Web Design & Development", 
      desc: "Fully responsive, modern websites built with clean code and optimized for all devices. Includes mobile-first design, fast loading times, and conversion-focused layouts.",
      icon: <FaLaptopCode size={40} />
    },
    { 
      title: "Digital Marketing Strategy", 
      desc: "A complete, data-driven marketing plan built around your business goals — covering channels, messaging, audience targeting, and a roadmap from launch through long-term growth.",
      icon: <FaBullhorn size={40} />
    },
    { 
      title: "Social Media Marketing", 
      desc: "Strategic social media management across Facebook, Instagram, and more — content creation, scheduling, community engagement, and paid social campaigns to grow your audience.",
      icon: <FaChartLine size={40} />
    },
    { 
      title: "Google & Meta Ads", 
      desc: "Targeted paid advertising campaigns on Google Search, Display, and Meta platforms. We handle strategy, copy, creative, and optimization to maximize return on every dollar spent.",
      icon: <FaGoogle size={40} />
    },
    { 
      title: "SEO Optimization", 
      desc: "Complete on-page and technical SEO implementation — keyword research, meta tags, schema markup, sitemap optimization, and performance tuning to rank higher in search results.",
      icon: <FaSearch size={40} />
    },
    { 
      title: "Google Business Setup", 
      desc: "Professional Google Business Profile configuration with optimized descriptions, categories, photos, and posting strategy to increase local visibility and drive foot traffic.",
      icon: <FaGoogle size={40} />
    },
    { 
      title: "Monthly Maintenance & Management", 
      desc: "Ongoing website updates, security monitoring, plugin management, backups, uptime tracking, and content changes to ensure your website stays secure, fast, and current.",
      icon: <FaTools size={40} />
    },
    { 
      title: "Branding & Logo Design", 
      desc: "Custom logo design, brand guidelines, color palettes, typography selection, and visual assets that create a cohesive and professional brand identity across all platforms.",
      icon: <FaPalette size={40} />
    },
  ];

  return (
    <>
      {/* ✅ SEO META TAGS */}
      <Title>Digital Marketing & Web Design Services | Smith Digitals | Southwest Virginia</Title>
      <Meta
        name="description"
        content="Smith Digitals offers full-service digital marketing and web design in Southwest Virginia — Google Ads, Meta Ads, social media marketing, SEO, branding, and custom websites for local businesses."
      />
      <Meta
        name="keywords"
        content="digital marketing services, web design, Google Ads, Meta Ads, social media marketing, SEO optimization, branding, Southwest Virginia, Smith Digitals"
      />
      <Meta property="og:title" content="Smith Digitals | Digital Marketing & Web Design Services" />
      <Meta
        property="og:description"
        content="Full-service digital marketing and web design for local businesses in Southwest Virginia — from websites to paid ads, social media, and SEO."
      />
      <Meta property="og:image" content="https://smithdigitals.com/og-image.jpg" />
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content="https://smithdigitals.com/services" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Smith Digitals | Digital Marketing & Web Design Services" />
      <Meta
        name="twitter:description"
        content="Web design, SEO, Google Ads, Meta Ads, and social media marketing for local businesses in Southwest Virginia."
      />
      <Meta name="twitter:image" content="https://smithdigitals.com/og-image.jpg" />
      <MetaLink rel="canonical" href="https://smithdigitals.com/services" />

      {/* ✅ JSON-LD STRUCTURED DATA */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Web Design, Digital Marketing, SEO, Google Ads, Meta Ads, Social Media Marketing",
          provider: {
            "@type": "Organization",
            name: "Smith Digitals",
            url: "https://smithdigitals.com",
            logo: "https://smithdigitals.com/og-image.jpg",
            areaServed: ["Southwest Virginia", "Lee County, VA", "Wise County, VA", "Scott County, VA"],
            sameAs: [
              "https://www.facebook.com/smithdigitals",
              "https://www.instagram.com/smithdigitals"
            ]
          },
          description:
            "Smith Digitals is a full-service digital marketing and web design agency in Southwest Virginia. We help local businesses grow online with custom websites, SEO, Google Ads, Meta Ads, social media marketing, and branding."
        })}
      </script>

      {/* ✅ PAGE CONTENT */}
      <div className="services-page">
        <h1 className="services-title">Our Services</h1>
        <p style={{ textAlign: "center", color: "var(--gray)", maxWidth: "640px", margin: "0 auto 3rem", fontSize: "1.1rem" }}>We're a full-service digital marketing and web design agency — everything you need to build your brand and grow your business online, in one place.</p>
        <div className="services-grid">
          {services.map((s, idx) => (
            <motion.div
              key={s.title}
              className="service-card"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 20px rgba(99,102,241,0.3)",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
            >
              <div className="service-icon" aria-hidden="true">{s.icon}</div>
              <h2>{s.title}</h2>
              <p>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
