import { FaLaptopCode, FaSearch, FaGoogle, FaTools, FaPalette } from "react-icons/fa";
import { motion } from "framer-motion";
import { Title, Meta, Link as MetaLink } from "react-head";

export default function Services() {
  const services = [
    { 
      title: "Web Design & Development", 
      desc: "Custom responsive websites crafted for your brand.",
      icon: <FaLaptopCode size={40} />
    },
    { 
      title: "SEO Optimization", 
      desc: "Boost your visibility and attract the right audience.",
      icon: <FaSearch size={40} />
    },
    { 
      title: "Google Business Setup", 
      desc: "Get discovered faster with a professional profile.",
      icon: <FaGoogle size={40} />
    },
    { 
      title: "Monthly Maintenance", 
      desc: "Keep your site fast, secure, and up-to-date.",
      icon: <FaTools size={40} />
    },
    { 
      title: "Branding & Logo Design", 
      desc: "Create a strong identity that stands out online.",
      icon: <FaPalette size={40} />
    },
  ];

  return (
    <>
      {/* ✅ SEO META TAGS */}
      <Title>Our Services | Smith Digitals | Web Design & SEO Experts</Title>
      <Meta
        name="description"
        content="Explore Smith Digitals services — custom web design, SEO optimization, Google Business setup, and branding. Affordable, high-quality solutions for small businesses."
      />
      <Meta
        name="keywords"
        content="web design services, SEO optimization, Google Business setup, website maintenance, logo design, branding, Smith Digitals"
      />
      <Meta property="og:title" content="Smith Digitals | Professional Web Design & SEO Services" />
      <Meta
        property="og:description"
        content="We build responsive websites, optimize SEO, and manage your online presence — affordable and effective digital solutions by Smith Digitals."
      />
      <Meta property="og:image" content="/og-image.png" />
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content="https://smithdigitals.com/services" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Smith Digitals | Professional Web Design & SEO Services" />
      <Meta
        name="twitter:description"
        content="Web design, SEO, branding, and Google Business setup tailored to your goals."
      />
      <Meta name="twitter:image" content="/og-image.png" />
      <MetaLink rel="canonical" href="https://smithdigitals.com/services" />

      {/* ✅ JSON-LD STRUCTURED DATA */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Web Design, SEO Optimization, Branding",
          provider: {
            "@type": "Organization",
            name: "Smith Digitals",
            url: "https://smithdigitals.com",
            logo: "https://smithdigitals.com/og-image.png",
            sameAs: [
              "https://www.facebook.com/smithdigitals",
              "https://www.instagram.com/smithdigitals"
            ]
          },
          description:
            "Smith Digitals offers professional web design, SEO, and branding services tailored to small businesses. We help you grow online with fast, responsive, and optimized websites."
        })}
      </script>

      {/* ✅ PAGE CONTENT */}
      <div className="services-page">
        <h1 className="services-title">Our Services</h1>
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
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
