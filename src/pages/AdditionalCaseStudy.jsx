import { motion } from "framer-motion";
import { Title, Meta, Link as MetaLink } from "react-head";
import { Link, useParams } from "react-router-dom";
import projectImg2 from "../assets/church.png";
import projectImg3 from "../assets/warehouse-bg.jpg";
import rileeImg from "../assets/R.avif";
import CaseStudyExpansion from "../components/CaseStudyExpansion";
import "./StoneMountainYogurt.css";

const caseStudies = {
  "m-and-m-wholesale": {
    title: "M&M Wholesale Store",
    slug: "m-and-m-wholesale",
    url: "https://mm-wholesales.com/",
    image: projectImg3,
    kicker: "Ecommerce + Inventory Operations",
    lead: "M&M Wholesale Store needed more than a catalog. The platform had to support a changing inventory, secure access, and a smoother wholesale workflow for the people running the business.",
    metrics: [
      ["Platform", "Full-stack ecommerce"],
      ["Operations", "Custom admin dashboard"],
      ["Infrastructure", "Firebase-backed data"],
    ],
    challenge: "Create a wholesale storefront that could keep product information current without making every inventory update a manual website edit.",
    build: "A connected ecommerce system with real-time product updates, secure authentication, and a custom admin experience for managing the catalog behind the storefront.",
    items: [
      "Built a responsive product browsing and purchasing experience for wholesale customers.",
      "Created an admin dashboard for managing inventory and product information.",
      "Connected the platform to Firebase for real-time data and secure authentication.",
      "Structured the experience so the public storefront and internal operations work as one system.",
    ],
    result: "M&M Wholesale Store now has a stronger foundation for selling online and managing the operational work that keeps the catalog accurate.",
  },
  "freedom-in-christ": {
    title: "Freedom In Christ Church",
    slug: "freedom-in-christ",
    url: "https://dylanjdev.github.io/Freedom-In-Christ/",
    image: projectImg2,
    kicker: "Community Website + Information Design",
    lead: "Freedom In Christ Church needed a clear digital home where the local community could quickly find service times, ministries, events, and a sense of what to expect when visiting.",
    metrics: [
      ["Audience", "Local community"],
      ["Focus", "Services and ministries"],
      ["Experience", "Responsive web design"],
    ],
    challenge: "Organize the information people need before visiting while giving the church a welcoming, modern presence across phones and larger screens.",
    build: "A responsive church website with clear paths to service information, ministries, events, and community details, shaped around quick scanning and approachable communication.",
    items: [
      "Designed a clean responsive layout for visitors browsing on mobile and desktop.",
      "Established clear content paths for service times, ministries, and events.",
      "Created a visual system that feels welcoming without overwhelming the information.",
      "Made the most important visitor questions easy to find from the first screen.",
    ],
    result: "Freedom In Christ Church has a focused online home that helps people understand the community, find the next event, and take the next step.",
  },
  "hair-by-rilee": {
    title: "Hair By Rilee",
    slug: "hair-by-rilee",
    url: "https://www.hairbyrilee.com/",
    image: rileeImg,
    kicker: "Local SEO + Service Positioning",
    lead: "Hair By Rilee needed a focused landing page that could introduce the stylist, communicate the service, and make the business easier to discover in Lee County, Virginia.",
    metrics: [
      ["Market", "Lee County, VA"],
      ["Focus", "Local search visibility"],
      ["Stack", "Responsive HTML/CSS/JavaScript"],
    ],
    challenge: "Turn a social-first local service into a searchable, credible web presence with enough clarity for new visitors to understand the offer and get in touch.",
    build: "An SEO-optimized landing page with local business schema markup, geo-targeted content, responsive presentation, and social media integration.",
    items: [
      "Built a responsive landing page that introduces the stylist and services clearly.",
      "Added local business structured data and location-focused page signals.",
      "Connected the site experience to the brand's social media presence.",
      "Kept the path from discovery to contact simple for prospective clients.",
    ],
    result: "Hair By Rilee now has a concise digital foundation that supports local discovery and gives prospective clients a clear first impression.",
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.12 } }),
};

export default function AdditionalCaseStudy() {
  const { slug } = useParams();
  const project = caseStudies[slug] || caseStudies["m-and-m-wholesale"];
  const pageUrl = `https://smithdigitals.com/case-studies/${project.slug}`;
  const pageTitle = `${project.title} | Case Study | Smith Digitals LLC`;
  const pageDescription = `Case study: ${project.title}. ${project.lead}`;

  return (
    <>
      <Title>{pageTitle}</Title>
      <Meta name="description" content={pageDescription} />
      <Meta property="og:title" content={pageTitle} />
      <Meta property="og:description" content={pageDescription} />
      <Meta property="og:image" content="https://smithdigitals.com/og-image.jpg" />
      <Meta property="og:type" content="article" />
      <Meta property="og:url" content={pageUrl} />
      <Meta name="twitter:card" content="summary_large_image" />
      <MetaLink rel="canonical" href={pageUrl} />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: pageTitle,
          description: pageDescription,
          mainEntityOfPage: pageUrl,
          author: { "@type": "Organization", name: "Smith Digitals LLC" },
          image: "https://smithdigitals.com/og-image.jpg",
        })}
      </script>

      <main className="smy-page">
        <div className="smy-breadcrumb"><Link to="/case-studies">← Back to Case Studies</Link></div>
        <section className="smy-hero">
          <motion.div className="smy-hero-inner" initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.12 } } }}>
            <motion.div className="smy-logo-block" variants={fadeUp}><img src={project.image} alt={`${project.title} project preview`} className="smy-logo" /></motion.div>
            <motion.p className="smy-kicker" variants={fadeUp}>{project.kicker}</motion.p>
            <motion.h1 className="smy-title" variants={fadeUp}>{project.title}: a digital system built around the work.</motion.h1>
            <motion.p className="smy-lead" variants={fadeUp}>{project.lead}</motion.p>
            <motion.div className="smy-ctas" variants={fadeUp}><a href={project.url} target="_blank" rel="noopener noreferrer" className="smy-btn smy-btn-primary">Visit Website →</a></motion.div>
          </motion.div>
        </section>

        <section className="smy-metrics">
          {project.metrics.map(([label, value], index) => (
            <motion.div key={label} className="smy-metric-card" custom={index} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
              <p>{label}</p><h3>{value}</h3>
            </motion.div>
          ))}
        </section>

        <section className="smy-section"><motion.div className="smy-section-inner" initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ show: { transition: { staggerChildren: 0.12 } } }}>
          <motion.p className="smy-label" variants={fadeUp}>The challenge</motion.p>
          <motion.h2 variants={fadeUp}>{project.challenge}</motion.h2>
        </motion.div></section>

        <section className="smy-section smy-section-alt"><motion.div className="smy-section-inner" initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ show: { transition: { staggerChildren: 0.12 } } }}>
          <motion.p className="smy-label" variants={fadeUp}>What I built</motion.p>
          <motion.h2 variants={fadeUp}>{project.build}</motion.h2>
          <div className="smy-list">{project.items.map((item, index) => <motion.p key={item} custom={index} variants={fadeUp}>{item}</motion.p>)}</div>
        </motion.div></section>

        <section className="smy-section"><motion.div className="smy-section-inner" initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ show: { transition: { staggerChildren: 0.12 } } }}>
          <motion.p className="smy-label" variants={fadeUp}>Result</motion.p>
          <motion.h2 variants={fadeUp}>{project.result}</motion.h2>
        </motion.div></section>

        <CaseStudyExpansion client={project.slug} />
        <footer className="smy-credit"><p>Built by <Link to="/">Smith Digitals</Link></p></footer>
      </main>
    </>
  );
}
