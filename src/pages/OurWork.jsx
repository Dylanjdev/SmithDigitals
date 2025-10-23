import { motion } from "framer-motion";
import projectImg from "../assets/project1.png";
import { Title, Meta, Link as MetaLink } from "react-head";
import "./OurWork.css";

export default function OurWork() {
  return (
    <>
      {/* ✅ SEO META TAGS */}
      <Title>Our Work | Smith Digitals | Web Design Portfolio</Title>
      <Meta
        name="description"
        content="See our portfolio at Smith Digitals — including McGuire's Lawn & Landscaping. We design responsive, SEO-optimized websites that help businesses grow."
      />
      <Meta
        name="keywords"
        content="web design portfolio, SEO projects, Smith Digitals work, McGuire's Lawn and Landscaping website, website examples"
      />
      <Meta property="og:title" content="Smith Digitals | Web Design Portfolio" />
      <Meta
        property="og:description"
        content="Explore Smith Digitals' recent projects, including McGuire's Lawn & Landscaping — built with SEO optimization and a modern responsive design."
      />
      <Meta property="og:image" content="/og-image.png" />
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content="https://smithdigitals.com/our-work" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Smith Digitals | Web Design Portfolio" />
      <Meta
        name="twitter:description"
        content="Showcasing our best web design and SEO projects for small businesses."
      />
      <Meta name="twitter:image" content="/og-image.png" />
      <MetaLink rel="canonical" href="https://smithdigitals.com/our-work" />

      {/* ✅ JSON-LD STRUCTURED DATA */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: "Our Work - Smith Digitals",
          description:
            "Smith Digitals showcases completed web design and SEO projects, including McGuire's Lawn & Landscaping.",
          creator: {
            "@type": "Organization",
            name: "Smith Digitals",
            url: "https://smithdigitals.com",
            logo: "https://smithdigitals.com/og-image.png"
          },
          hasPart: [
            {
              "@type": "CreativeWork",
              name: "McGuire's Lawn & Landscaping Website",
              url: "https://mcguireslawnandlandscaping.com/",
              image: "https://smithdigitals.com/assets/project1.png",
              description:
                "Custom responsive website with SEO optimization, Google Business setup, and branding."
            }
          ]
        })}
      </script>

      {/* ✅ PAGE CONTENT */}
      <div className="work-page">
        <h2>Our Work</h2>
        <motion.div
          className="project-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <img
            loading="lazy"
            src={projectImg}
            alt="McGuire's Lawn and Landscaping website preview"
          />
          <h3>McGuire's Lawn & Landscaping</h3>
          <p>
            Custom responsive website with SEO optimization, Google Business setup,
            and a sleek design to boost visibility and attract new clients.
          </p>
          <a
            href="https://mcguireslawnandlandscaping.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn"
          >
            Visit Website
          </a>
        </motion.div>
      </div>
    </>
  );
}

