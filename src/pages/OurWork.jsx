import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import projectImg from "../assets/project1.png";
import React from "react";
import projectImg2 from "../assets/church.png";
import projectImg3 from "../assets/warehouse-bg.jpg";
import bbsLogo from "../assets/bbslogo.jpg";
import rileeImg from "../assets/R.avif";
import paintingStudioImg from "../assets/PaintingInsideTheStudio.webp";
import jumpImg from "../assets/Jump.png";
import fitImg from "../assets/fit.png";
import stoneYogurtImg from "../assets/StoneYogurt.webp";
import { Title, Meta, Link as MetaLink } from "react-head";
import "./OurWork.css";

export default function OurWork() {
  const projects = [
    {
      id: 1,
      title: "Stone Mountain Yogurt",
      description: "Website rebuilt from a poor legacy experience into an SEO-optimized storefront, with a customized Twilio API that automates outbound customer text messaging.",
      url: "https://stone-mountain-yogurt.com/",
      image: stoneYogurtImg,
      tags: ["SEO", "Twilio API", "Custom Automation"],
      caseStudy: "/case-studies/stone-mountain-yogurt"
    },
    {
      id: 2,
      title: "Fit & Fierce Studio",
      description: "Inclusive dance fitness studio focused on helping every client feel strong, confident, supported, and sexy through high-energy, body-positive training for all levels.",
      url: "https://fitandfierce.studio/",
      image: fitImg,
      tags: ["Dance Fitness", "Inclusive", "All Levels"],
      caseStudy: "/case-studies/fit-and-fierce"
    },
    {
      id: 3,
      title: "Jump Sporting Goods LLC",
      description: "Custom e-commerce website for custom apparel serving schools, faith organizations, municipalities, rescue departments, and more with streamlined online ordering.",
      url: "https://www.jumpsportinggoods.com/",
      image: jumpImg,
      tags: ["E-commerce", "Custom Apparel", "Business"],
      caseStudy: "/case-studies/jump-sporting-goods"
    },
    {
      id: 4,
      title: "Painting Outside The Lines Studios",
      description: "Creative art studio website showcasing painting classes, workshops, and artistic services with an engaging visual design.",
      url: "https://paintingoutsidethelinesstudios.com/",
      image: paintingStudioImg,
      tags: ["Art Studio", "Creative", "Business"],
      caseStudy: "/case-studies/painting-outside-the-lines"
    },
    {
      id: 5,
      title: "BBS Bakery",
      description: "Bakery website featuring online ordering through Square Checkout API, responsive design, and SEO strategy that helped rank above Blackbird Bakery in Bristol, VA within 3 months.",
      url: "https://www.bbs-bakery.com/",
      image: bbsLogo,
      tags: ["Bakery", "Square Checkout", "Local SEO"],
      caseStudy: "/case-studies/bbs-bakery"
    },
    {
      id: 6,
      title: "M&M Wholesale Store",
      description: "Full-stack e-commerce platform with custom admin dashboard for inventory management. Features real-time product updates, secure authentication, and streamlined wholesale operations.",
      url: "https://mm-wholesales.com/",
      image: projectImg3,
      tags: ["Admin Dashboard", "Firebase"]
    },
    {
      id: 7,
      title: "Freedom In Christ Church",
      description: "Modern, responsive church website featuring service times, ministries, and events. Built with a clean design to engage the community in Jonesville, VA.",
      url: "https://dylanjdev.github.io/Freedom-In-Christ/",
      image: projectImg2,
      tags: ["Church", "Community", "Responsive Design"]
    },
    {
      id: 8,
      title: "McGuire's Lawn & Landscaping",
      description: "Lead-generation landscaping website with SEO optimization and quote funnel strategy that produced 6 free quote form submissions in one week, all turning into customers.",
      url: "https://mcguireslawnandlandscaping.com/",
      image: projectImg,
      tags: ["Lead Generation", "SEO", "Quote Forms"],
      caseStudy: "/case-studies/mcguires-landscaping"
    },
    {
      id: 9,
      title: "Hair By Rilee",
      description: "SEO-optimized landing page for a Virginia-based hair stylist featuring local business schema markup, geo-targeting, and social media integration. Built with responsive HTML/CSS/JavaScript and optimized for local search visibility in Lee County, VA.",
      url: "https://www.hairbyrilee.com/",
      image: rileeImg,
      tags: ["Business", "SEO", "Local Search"]
    },
  ];

  return (
    <>
      {/* ✅ SEO META TAGS */}
      <Title>Case Studies | Smith Digitals LLC | Web Design Portfolio</Title>
      <Meta
        name="description"
        content="See our portfolio at Smith Digitals LLC — including Fit & Fierce Studio, Jump Sporting Goods LLC, BBS Bakery, M&M Wholesale Store with admin dashboard, Freedom In Christ Church, and McGuire's Lawn & Landscaping. We design responsive, SEO-optimized websites and e-commerce platforms."
      />
      <Meta
        name="keywords"
        content="web design portfolio, SEO projects, Smith Digitals work, church websites, business websites, website examples"
      />
      <Meta property="og:title" content="Smith Digitals LLC | Case Studies" />
      <Meta
        property="og:description"
        content="Explore Smith Digitals' recent projects — built with SEO optimization and modern responsive design."
      />
      <Meta property="og:image" content="https://smithdigitals.com/og-image.jpg" />
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content="https://smithdigitals.com/case-studies" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Smith Digitals | Case Studies" />
      <Meta
        name="twitter:description"
        content="Showcasing our best web design and SEO projects for small businesses and organizations."
      />
      <Meta name="twitter:image" content="https://smithdigitals.com/og-image.jpg" />
      <MetaLink rel="canonical" href="https://smithdigitals.com/case-studies" />

      {/* ✅ JSON-LD STRUCTURED DATA */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: "Case Studies - Smith Digitals",
          description:
            "Smith Digitals showcases completed web design and SEO projects for churches, businesses, and organizations.",
          creator: {
            "@type": "Organization",
            name: "Smith Digitals LLC",
            url: "https://smithdigitals.com",
            logo: "https://smithdigitals.com/og-image.jpg"
          },
          hasPart: [
            {
              "@type": "CreativeWork",
              name: "Fit & Fierce Studio",
              url: "https://fitandfierce.studio/",
              description:
                "Inclusive dance fitness studio focused on confidence, body positivity, and high-energy training for all levels in a supportive, zero-judgment environment."
            },
            {
              "@type": "CreativeWork",
              name: "Jump Sporting Goods LLC",
              url: "https://www.jumpsportinggoods.com/",
              description:
                "Custom e-commerce website for custom apparel serving schools, faith organizations, municipalities, rescue departments, and more."
            },
            {
              "@type": "CreativeWork",
              name: "BBS Bakery Website",
              url: "https://www.bbs-bakery.com/",
              description:
                "Bakery website with online ordering through Square Checkout API and local SEO gains, ranking above Blackbird Bakery in Bristol, VA within 3 months."
            },
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
                "Lead-generation landscaping website with SEO optimization and free quote funnel strategy that produced 6 submissions in one week, all converting to customers."
            },
            {
              "@type": "CreativeWork",
              name: "Hair By Rilee",
              url: "https://www.hairbyrilee.com/",
              description:
                "SEO-optimized landing page for a Virginia-based hair stylist featuring local business schema markup, geo-targeting, and social media integration."
            },
            {
              "@type": "CreativeWork",
              name: "Stone Mountain Yogurt Website",
              url: "https://stone-mountain-yogurt.com/",
              description:
                "Website rebuilt from an outdated version into an SEO-optimized experience with a customized Twilio API for outbound text messaging automation."
            }
          ]
        })}
      </script>

      {/* ✅ PAGE CONTENT */}
      <div className="work-page">
        <h1>Case Studies</h1>
        <p className="llc-notice"><strong>Smith Digitals LLC is a registered Limited Liability Company.</strong></p>
        <p className="work-subtitle">Real results we've delivered for businesses and organizations</p>
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
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              {project.caseStudy && (
                <Link to={project.caseStudy} className="project-btn" style={{ marginBottom: "0.75rem", display: "inline-block" }}>
                  View Case Study →
                </Link>
              )}
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn"
                style={project.caseStudy ? { background: "transparent", border: "1px solid var(--accent)", color: "var(--accent)", boxShadow: "none" } : {}}
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

