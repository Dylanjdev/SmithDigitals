import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Title, Meta } from "react-head";
import CanonicalLink from "../components/CanonicalLink";
import appalachianAsensoLogo from "../assets/appalachianacenso.png";
import "./StoneMountainYogurt.css";
import "./AppalachianAsenso.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (index = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: index * 0.1 },
  }),
};

const challenges = [
  {
    title: "Navigational clarity",
    description:
      "Group mini golf, laser tag, birthday parties, and local guides into clear user paths without cluttering the homepage.",
  },
  {
    title: "Mobile-first conversions",
    description:
      "Capture local mobile searches from families looking for weekend activities and party venues in Lee County and surrounding areas.",
  },
  {
    title: "Streamlined party inquiries",
    description:
      "Educate parents on party packages and move them toward an immediate date-reservation request.",
  },
  {
    title: "Promoting local discovery",
    description:
      "Establish Appalachian Asenso as an anchor attraction in Pennington Gap through structured local day-trip guides.",
  },
];

const navigationHubs = [
  {
    title: "Attractions & open play",
    description: "Clear session pricing and duration details for mini golf and laser tag.",
  },
  {
    title: "Birthday party engine",
    description: "Dedicated package breakdowns and an automated booking-request workflow.",
  },
  {
    title: "Venue media & gallery",
    description: "Video walkthroughs and photo galleries for the laser tag arena and party rooms.",
  },
  {
    title: "Local guide & day-trip hub",
    description: "A five-stop Pennington Gap itinerary that positions the venue within regional tourism.",
  },
];

const metrics = [
  {
    label: "Online bookings",
    value: "+145%",
    impact: "More open-play mini golf and laser tag conversions",
  },
  {
    label: "Party inquiries",
    value: "+210%",
    impact: "More qualified leads for birthday party packages",
  },
  {
    label: "Mobile speed",
    value: "< 0.8s",
    impact: "Ultra-fast load times for mobile day-trippers",
  },
  {
    label: "Search position",
    value: "#1 organic",
    impact: "For indoor mini golf and laser tag searches in Pennington Gap",
  },
];

export default function AppalachianAsenso() {
  const pageUrl = "https://smithdigitals.com/case-studies/appalachian-asenso/";
  const pageTitle = "Appalachian Asenso Case Study | Smith Digitals LLC";
  const pageDescription =
    "See how Smith Digitals redesigned Appalachian Asenso to grow bookings, party inquiries, mobile speed, and local visibility in Pennington Gap.";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Appalachian Asenso Web Redesign & Digital Transformation",
    description: pageDescription,
    mainEntityOfPage: pageUrl,
    author: {
      "@type": "Organization",
      name: "Smith Digitals LLC",
      url: "https://smithdigitals.com/",
    },
    about: {
      "@type": "LocalBusiness",
      name: "Appalachian Asenso",
      url: "https://appalachianasenso.com/",
      telephone: "+1-276-345-3563",
      address: {
        "@type": "PostalAddress",
        streetAddress: "282 Westgate Mall Cir, Ste 104",
        addressLocality: "Pennington Gap",
        addressRegion: "VA",
        addressCountry: "US",
      },
    },
    image: "https://smithdigitals.com/og-image.jpg",
  };

  return (
    <>
      <Title>{pageTitle}</Title>
      <Meta name="description" content={pageDescription} />
      <Meta
        name="keywords"
        content="Appalachian Asenso, Pennington Gap mini golf, laser tag website, birthday party bookings, local SEO, Smith Digitals case study"
      />
      <Meta property="og:title" content={pageTitle} />
      <Meta property="og:description" content={pageDescription} />
      <Meta property="og:image" content="https://smithdigitals.com/og-image.jpg" />
      <Meta property="og:type" content="article" />
      <Meta property="og:url" content={pageUrl} />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content={pageTitle} />
      <Meta name="twitter:description" content={pageDescription} />
      <CanonicalLink rel="canonical" href={pageUrl} />
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>

      <main className="smy-page asenso-page">
        <div className="smy-breadcrumb">
          <Link to="/case-studies">← Back to Case Studies</Link>
        </div>

        <section className="smy-hero asenso-hero">
          <motion.div
            className="smy-hero-inner"
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div className="smy-logo-block asenso-logo-block" variants={fadeUp}>
              <img
                src={appalachianAsensoLogo}
                alt="Appalachian Asenso logo"
                className="smy-logo asenso-logo"
              />
            </motion.div>
            <motion.p className="smy-kicker" variants={fadeUp}>
              Pennington Gap, Virginia · Family entertainment & recreation
            </motion.p>
            <motion.h1 className="smy-title" variants={fadeUp}>
              Appalachian Asenso: web redesign and digital transformation.
            </motion.h1>
            <motion.p className="smy-lead" variants={fadeUp}>
              A conversion-focused web architecture built to capture regional entertainment traffic,
              turn local families into party bookings, and make every venue experience easy to find
              across devices.
            </motion.p>
            <motion.div className="smy-ctas" variants={fadeUp}>
              <a
                href="https://appalachianasenso.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="smy-btn smy-btn-primary"
              >
                Visit Website →
              </a>
            </motion.div>
          </motion.div>
        </section>

        <section className="smy-metrics asenso-metrics" aria-label="Project results">
          {metrics.map((metric, index) => (
            <motion.article
              key={metric.label}
              className="smy-metric-card asenso-metric-card"
              custom={index}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <p>{metric.label}</p>
              <h3>{metric.value}</h3>
              <span>{metric.impact}</span>
            </motion.article>
          ))}
        </section>

        <section className="smy-section">
          <motion.div
            className="smy-section-inner"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.p className="smy-label" variants={fadeUp}>Executive summary</motion.p>
            <motion.h2 variants={fadeUp}>One venue, several reasons to visit.</motion.h2>
            <motion.p variants={fadeUp}>
              Appalachian Asenso is a local indoor attraction offering 18-hole glow mini golf,
              30-minute action-packed laser tag sessions, birthday party hosting, and private group
              events in Pennington Gap, Virginia.
            </motion.p>
            <motion.p variants={fadeUp}>
              Smith Digitals created a conversion-focused experience designed around regional
              discovery, fast mobile decision-making, and clear booking paths for families and groups.
            </motion.p>
          </motion.div>
        </section>

        <section className="smy-section smy-section-alt">
          <motion.div
            className="smy-section-inner"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.p className="smy-label" variants={fadeUp}>Client challenges & business goals</motion.p>
            <motion.h2 variants={fadeUp}>Make the right next step obvious for every visitor.</motion.h2>
            <div className="asenso-detail-grid">
              {challenges.map((challenge, index) => (
                <motion.article key={challenge.title} custom={index} variants={fadeUp}>
                  <span aria-hidden="true">0{index + 1}</span>
                  <h3>{challenge.title}</h3>
                  <p>{challenge.description}</p>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="smy-section">
          <motion.div
            className="smy-section-inner"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.p className="smy-label" variants={fadeUp}>The Smith Digitals solution</motion.p>
            <motion.h2 variants={fadeUp}>A vibrant “Find It Fast” experience built for action.</motion.h2>
            <motion.p variants={fadeUp}>
              A sleek dark theme with neon accents mirrors the blacklight mini-golf and laser-tag
              atmosphere while keeping the information architecture direct and easy to scan.
            </motion.p>
            <div className="asenso-detail-grid asenso-hub-grid">
              {navigationHubs.map((hub, index) => (
                <motion.article key={hub.title} custom={index} variants={fadeUp}>
                  <span aria-hidden="true">0{index + 1}</span>
                  <h3>{hub.title}</h3>
                  <p>{hub.description}</p>
                </motion.article>
              ))}
            </div>
            <div className="smy-list asenso-solution-list">
              <motion.p variants={fadeUp}>
                <strong>Conversion architecture:</strong> persistent sticky headers, prominent “Book
                Now” actions, direct click-to-call access at <a href="tel:+12763453563">(276) 345-3563</a>,
                and clearly displayed operating hours.
              </motion.p>
              <motion.p variants={fadeUp}>
                <strong>Local SEO & schema:</strong> local structured data, Google review feeds, and
                address mapping for 282 Westgate Mall Cir, Ste 104 support high-intent regional search
                visibility.
              </motion.p>
            </div>
          </motion.div>
        </section>

        <section className="smy-section smy-section-alt">
          <motion.div
            className="smy-section-inner"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.p className="smy-label" variants={fadeUp}>Key results & impact</motion.p>
            <motion.h2 variants={fadeUp}>Faster discovery translated into measurable growth.</motion.h2>
            <motion.p variants={fadeUp}>
              The redesigned experience increased open-play bookings by 145%, lifted qualified birthday
              party inquiries by 210%, delivered mobile load times under 0.8 seconds, and reached the #1
              organic position for the venue’s core Pennington Gap mini golf and laser tag search terms.
            </motion.p>
          </motion.div>
        </section>

        <footer className="smy-credit">
          <p>
            Prepared and built by <Link to="/">Smith Digitals LLC</Link>
          </p>
        </footer>
      </main>
    </>
  );
}
