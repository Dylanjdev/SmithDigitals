import { FaLaptopCode, FaSearch, FaGoogle, FaTools, FaPalette, FaBullhorn, FaChartLine } from "react-icons/fa";
import { motion } from "framer-motion";
import { Title, Meta, Link as MetaLink } from "react-head";
import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    { 
      title: "Web Design & Development", 
      desc: "High-conviction websites built around positioning, user experience, speed, accessibility, and conversion—not decoration alone.",
      icon: <FaLaptopCode size={40} />
    },
    { 
      title: "Digital Marketing Strategy", 
      desc: "A focused growth plan connecting the audience, offer, messaging, channels, and measurement around the outcomes that matter.",
      icon: <FaBullhorn size={40} />
    },
    { 
      title: "Social Media Marketing", 
      desc: "Content systems and paid social campaigns that make the brand more recognizable, more useful, and easier to choose.",
      icon: <FaChartLine size={40} />
    },
    { 
      title: "Google & Meta Ads", 
      desc: "Search and social campaigns shaped from targeting through creative and optimization, with clear visibility into performance.",
      icon: <FaGoogle size={40} />
    },
    { 
      title: "SEO Optimization", 
      desc: "Technical foundations, content strategy, structured data, and local search work designed to earn compounding visibility.",
      icon: <FaSearch size={40} />
    },
    { 
      title: "Google Business Setup", 
      desc: "A complete local search presence—from profile structure and categories to content, tracking, and reputation signals.",
      icon: <FaGoogle size={40} />
    },
    { 
      title: "Monthly Maintenance & Management", 
      desc: "Ongoing optimization, reporting, technical care, and content updates that keep the work sharp after launch.",
      icon: <FaTools size={40} />
    },
    { 
      title: "Branding & Logo Design", 
      desc: "Positioning, identity, typography, color, and practical brand rules that create consistency everywhere the business shows up.",
      icon: <FaPalette size={40} />
    },
  ];

  return (
    <>
      {/* ✅ SEO META TAGS */}
      <Title>Capabilities | Strategy, Brand, Web & Growth | Smith Digitals</Title>
      <Meta
        name="description"
        content="Explore Smith Digitals capabilities across strategy, brand identity, web design and development, ecommerce, SEO, paid media, automation, and ongoing optimization."
      />
      <Meta
        name="keywords"
        content="digital marketing services, web design, Google Ads, Meta Ads, social media marketing, SEO optimization, branding, Southwest Virginia, Smith Digitals"
      />
      <Meta property="og:title" content="Smith Digitals | Digital Marketing & Web Design Services" />
      <Meta
        property="og:description"
        content="Strategy, brand, web, ecommerce, automation, SEO, and paid media—brought together by one accountable senior partner."
      />
      <Meta property="og:image" content="https://smithdigitals.com/og-image.jpg" />
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content="https://smithdigitals.com/services" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Smith Digitals | Digital Marketing & Web Design Services" />
      <Meta
        name="twitter:description"
        content="Explore end-to-end digital capabilities from a founder-led studio built for ambitious work."
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
            "Smith Digitals is a founder-led digital studio delivering strategy, brand, web development, SEO, paid media, ecommerce, and automation."
        })}
      </script>

      {/* ✅ PAGE CONTENT */}
      <div className="services-page inner-page">
        <div className="inner-page-hero">
          <p className="inner-page-eyebrow">Capabilities · End to end</p>
          <h1 className="services-title">One partner across the entire digital experience.</h1>
          <p>
            I bring strategy, creative, technology, and growth together around one
            business problem. Every engagement is shaped to fit—never pulled from a
            generic checklist.
          </p>
        </div>
        <div className="services-principle">
          <span>Built founder to founder</span>
          <p>
            You work directly with me from the first conversation through the final
            launch. One point of view, one accountable partner, and no handoff gap.
          </p>
        </div>
        <div className="services-grid">
          {services.map((s, idx) => (
            <motion.div
              key={s.title}
              className="service-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
            >
              <span className="service-index">0{idx + 1}</span>
              <div className="service-icon" aria-hidden="true">{s.icon}</div>
              <h2>{s.title}</h2>
              <p>{s.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="inner-page-cta">
          <p>Not sure which capability comes first?</p>
          <h2>Start with the business goal.</h2>
          <Link to="/contact">Tell me what you’re building ↗</Link>
        </div>
      </div>
    </>
  );
}
