import { motion } from "framer-motion";
import projectImg from "../assets/project1.png";
import React from "react";
import projectImg2 from "../assets/church.png";
import projectImg3 from "../assets/warehouse-bg.jpg";
import { Title, Meta, Link as MetaLink } from "react-head";
import "./OurWork.css";

export default function OurWork() {
  const projects = [
    {
      id: 1,
      title: "M&M Wholesale Store",
      description: "Full-stack e-commerce platform with custom admin dashboard for inventory management. Features real-time product updates, secure authentication, and streamlined wholesale operations.",
      url: "https://mmwholesale-46f85.web.app/",
      image: projectImg3,
      tags: ["Admin Dashboard", "Firebase"]
    },
    {
      id: 2,
      title: "Freedom In Christ Church",
      description: "Modern, responsive church website featuring service times, ministries, and events. Built with a clean design to engage the community in Jonesville, VA.",
      url: "https://dylanjdev.github.io/Freedom-In-Christ/",
      image: projectImg2,
      tags: ["Church", "Community", "Responsive Design"]
    },
    {
      id: 3,
      title: "McGuire's Lawn & Landscaping",
      description: "Custom responsive website with SEO optimization, Google Business setup, and a sleek design to boost visibility and attract new clients.",
      url: "https://mcguireslawnandlandscaping.com/",
      image: projectImg,
      tags: ["Business", "SEO", "Google Business"]
    }
  ];

  return (
    <>
      {/* ✅ SEO META TAGS */}
      <Title>Our Work | Smith Digitals | Web Design Portfolio</Title>
      <Meta
        name="description"
        content="See our portfolio at Smith Digitals — including M&M Wholesale Store with admin dashboard, Freedom In Christ Church, and McGuire's Lawn & Landscaping. We design responsive, SEO-optimized websites and e-commerce platforms."
      />
      <Meta
        name="keywords"
        content="web design portfolio, SEO projects, Smith Digitals work, church websites, business websites, website examples"
      />
      <Meta property="og:title" content="Smith Digitals | Web Design Portfolio" />
      <Meta
        property="og:description"
        content="Explore Smith Digitals' recent projects — built with SEO optimization and modern responsive design."
      />
      <Meta property="og:image" content="/og-image.png" />
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content="https://smithdigitals.com/our-work" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Smith Digitals | Web Design Portfolio" />
      <Meta
        name="twitter:description"
        content="Showcasing our best web design and SEO projects for small businesses and organizations."
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
            "Smith Digitals showcases completed web design and SEO projects for churches, businesses, and organizations.",
          creator: {
            "@type": "Organization",
            name: "Smith Digitals",
            url: "https://smithdigitals.com",
            logo: "https://smithdigitals.com/og-image.png"
          },
          hasPart: [
            {
              "@type": "CreativeWork",
              name: "M&M Wholesale Store",
              url: "https://mmwholesale-46f85.web.app/",
              description:
                "Full-stack e-commerce platform with custom admin dashboard for inventory management and wholesale operations."
            },
            {
              "@type": "CreativeWork",
              name: "Freedom In Christ Church Website",
              url: "https://dylanjdev.github.io/Freedom-In-Christ/",
              description:
                "Modern responsive church website featuring service times, ministries, and community engagement."
            },
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
        <p className="work-subtitle">Recent projects we've built for businesses and organizations</p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <img
                loading="lazy"
                src={project.image}
                alt={`${project.title} website preview`}
              />
              <div className="project-tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="project-tag">{tag}</span>
                ))}
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn"
              >
                Visit Website →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

