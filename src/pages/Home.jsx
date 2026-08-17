import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { Title, Meta, Link as MetaLink } from "react-head";
import { Link } from "react-router-dom";
import { useRef } from "react";

const ease = [0.16, 1, 0.3, 1];

export default function Home() {
  const heroRef = useRef(null);
  const closingRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.25,
  });
  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(heroScrollProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(heroScrollProgress, [0, 0.85], [1, 0]);
  const heroScale = useTransform(heroScrollProgress, [0, 1], [1, 0.94]);
  const { scrollYProgress: closingScrollProgress } = useScroll({
    target: closingRef,
    offset: ["start end", "end start"],
  });
  const closingMarkY = useTransform(closingScrollProgress, [0, 1], [100, -80]);
  const closingMarkRotate = useTransform(closingScrollProgress, [0, 1], [-8, 6]);

  const capabilityRail = ["Strategy", "Brand", "Web", "Ecommerce", "SEO", "Paid Media", "Automation"];
  const capabilities = [
    {
      number: "01",
      title: "Digital flagships",
      desc: "High-conviction websites that sharpen your position, earn trust fast, and turn attention into action.",
      tags: ["Strategy", "UX/UI", "Development"],
    },
    {
      number: "02",
      title: "Growth engines",
      desc: "Search, paid media, and conversion systems designed around measurable business outcomes—not vanity metrics.",
      tags: ["SEO", "Google + Meta", "Analytics"],
    },
    {
      number: "03",
      title: "Brand systems",
      desc: "Clear visual and verbal direction that makes every customer touchpoint feel like it belongs to the same company.",
      tags: ["Identity", "Messaging", "Creative"],
    },
    {
      number: "04",
      title: "Smart infrastructure",
      desc: "Integrations, ecommerce, and automation that make the experience behind the scenes as strong as the one out front.",
      tags: ["Ecommerce", "APIs", "Automation"],
    },
  ];

  const process = [
    {
      number: "01",
      title: "Find the leverage",
      desc: "I get close to the business, the audience, and the real constraint before deciding what to make.",
    },
    {
      number: "02",
      title: "Set the direction",
      desc: "Positioning, experience, content, and technology align around one clear strategic idea.",
    },
    {
      number: "03",
      title: "Build the system",
      desc: "I design and develop the work end to end, with direct feedback loops and no account-manager relay.",
    },
    {
      number: "04",
      title: "Launch and compound",
      desc: "The work goes live with measurement in place, then improves through real behavior and real data.",
    },
  ];

  return (
    <>
      <Title>Smith Digitals | Founder-Led Studio for Ambitious Brands</Title>
      <Meta
        name="description"
        content="Smith Digitals is a founder-led studio building high-impact brands, websites, ecommerce, SEO, paid campaigns, and automation for ambitious businesses."
      />
      <Meta
        name="keywords"
        content="digital studio, founder-led agency, web design, web development, brand strategy, ecommerce, SEO, digital marketing, automation, Smith Digitals"
      />
      <Meta property="og:title" content="Smith Digitals | One Studio. Agency-Scale Impact." />
      <Meta
        property="og:description"
        content="Strategy, design, technology, and growth—built end to end by one accountable senior partner."
      />
      <Meta property="og:image" content="https://smithdigitals.com/og-image.jpg" />
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content="https://smithdigitals.com/" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Smith Digitals | One Studio. Agency-Scale Impact." />
      <Meta
        name="twitter:description"
        content="A founder-led digital studio for ambitious businesses ready to look, work, and grow bigger."
      />
      <Meta name="twitter:image" content="https://smithdigitals.com/og-image.jpg" />
      <MetaLink rel="canonical" href="https://smithdigitals.com/" />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Smith Digitals LLC",
          url: "https://smithdigitals.com",
          logo: "https://smithdigitals.com/og-image.jpg",
          founder: {
            "@type": "Person",
            name: "Dylan Smith",
          },
          areaServed: ["United States", "Southwest Virginia"],
          description:
            "A founder-led digital studio delivering strategy, brand, web development, ecommerce, SEO, paid media, and automation for ambitious businesses.",
        })}
      </script>

      <main className="home-page">
        <motion.div
          className="hd-scroll-progress"
          style={{ scaleX: smoothProgress }}
          aria-hidden="true"
        />

        <section className="hd-hero" ref={heroRef}>
          <div className="hd-hero-glow" aria-hidden="true" />
          <motion.div
            className="hd-hero-copy"
            style={prefersReducedMotion ? undefined : {
              y: heroY,
              opacity: heroOpacity,
              scale: heroScale,
            }}
          >
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease }}
            >
              <p className="hd-eyebrow">
                <span />
                Independent digital studio · Virginia to anywhere
              </p>
              <h1>
                One studio.
                <br />
                <em>Agency-scale</em> impact.
              </h1>
              <p className="hd-hero-intro">
                I’m Dylan—the strategist, designer, and developer behind Smith Digitals.
                I build the kind of digital presence people expect from a much larger
                agency, with one senior partner accountable from first idea to launch.
              </p>
              <div className="hd-actions">
                <Link to="/contact" className="hd-button hd-button-primary">
                  Start a project <span aria-hidden="true">↗</span>
                </Link>
                <Link to="/services" className="hd-button hd-button-text">
                  Explore capabilities <span aria-hidden="true">→</span>
                </Link>
              </div>
            </motion.div>
          </motion.div>

          <div className="hd-scroll-cue" aria-hidden="true">
            <span>Scroll to explore</span>
            <i />
          </div>
        </section>

        <motion.div
          className="hd-capability-rail"
          aria-label="Smith Digitals capabilities"
          initial={prefersReducedMotion ? false : { clipPath: "inset(0 100% 0 0)" }}
          whileInView={{ clipPath: "inset(0 0% 0 0)" }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease }}
        >
          <div className="hd-capability-track">
            {[0, 1].map((group) => (
              <div
                className="hd-capability-group"
                key={group}
                aria-hidden={group === 1 ? "true" : undefined}
              >
                {capabilityRail.map((item) => (
                  <span key={`${group}-${item}`}>
                    {item} <i>✦</i>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </motion.div>

        <section className="hd-manifesto hd-shell">
          <motion.p
            className="hd-section-kicker"
            initial={prefersReducedMotion ? false : { opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.65, ease }}
          >
            The studio model
          </motion.p>
          <div className="hd-manifesto-grid">
            <motion.h2
              initial={prefersReducedMotion ? false : { opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease }}
            >
              <span className="hd-reveal-line">Built intentionally small.</span>
              <span className="hd-reveal-line hd-reveal-accent">Made to play big.</span>
            </motion.h2>
            <motion.div
              className="hd-manifesto-copy"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 55 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.85, delay: 0.14, ease }}
            >
              <p>
                Smith Digitals is an independent, founder-led studio. That means no
                junior handoffs, no bloated meetings, and no layers between your
                challenge and the person solving it.
              </p>
              <p>
                I bring strategy, design, development, and growth into one focused
                system—giving ambitious businesses the range of an agency and the
                attention of a true creative partner.
              </p>
              <Link to="/services">See how I can help <span aria-hidden="true">↗</span></Link>
            </motion.div>
          </div>
        </section>

        <section className="hd-proof">
          <div className="hd-shell hd-proof-grid">
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.18, ease }}
            >
              <strong>15</strong>
              <span>Projects delivered</span>
            </motion.div>
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.28, ease }}
            >
              <strong>01</strong>
              <span>Senior point of contact</span>
            </motion.div>
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.38, ease }}
            >
              <strong>360°</strong>
              <span>Strategy through execution</span>
            </motion.div>
            <motion.p
              initial={prefersReducedMotion ? false : { opacity: 0, x: 55 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, delay: 0.34, ease }}
            >
              Big-agency standards.
              <br />
              <em>Zero big-agency drag.</em>
            </motion.p>
          </div>
        </section>

        <section className="hd-capabilities hd-shell" id="capabilities">
          <motion.div
            className="hd-section-heading"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 55 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.85, ease }}
          >
            <div>
              <p className="hd-section-kicker">Capabilities</p>
              <h2>One partner across the<br />entire digital experience.</h2>
            </div>
            <p className="hd-section-aside">
              Every engagement is shaped around the business problem—not a
              predetermined list of deliverables.
            </p>
          </motion.div>
          <div className="hd-capability-list">
            {capabilities.map((capability, index) => (
              <motion.article
                key={capability.title}
                initial={prefersReducedMotion ? false : {
                  opacity: 0,
                  x: index % 2 === 0 ? -70 : 70,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.8, delay: index * 0.07, ease }}
              >
                <span className="hd-capability-number">{capability.number}</span>
                <h3>{capability.title}</h3>
                <p>{capability.desc}</p>
                <div>
                  {capability.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="hd-process" id="approach">
          <div className="hd-shell">
            <motion.div
              className="hd-section-heading hd-section-heading-light"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 55 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.85, ease }}
            >
              <div>
                <p className="hd-section-kicker">The approach</p>
                <h2>Agency rigor.<br />Founder access.</h2>
              </div>
              <p className="hd-section-aside">
                You work directly with me at every stage. The person shaping the
                strategy is the same person sweating the final details.
              </p>
            </motion.div>
            <div className="hd-process-grid">
              {process.map((step, index) => (
                <motion.article
                  key={step.number}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 75, rotateX: 8 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease }}
                >
                  <span>{step.number}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="hd-closing" ref={closingRef}>
          <motion.div
            className="hd-closing-mark"
            style={prefersReducedMotion ? undefined : {
              y: closingMarkY,
              rotate: closingMarkRotate,
            }}
            aria-hidden="true"
          >
            S
          </motion.div>
          <motion.div
            className="hd-shell"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 55 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
          >
            <p className="hd-section-kicker">Have something ambitious in mind?</p>
            <h2 className="hd-closing-title">
              <span className="hd-reveal-line">Your next chapter should</span>
              <motion.span
                className="hd-reveal-line"
                initial={prefersReducedMotion ? false : { opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.18, ease }}
              >
                look bigger than your last.
              </motion.span>
            </h2>
            <div className="hd-closing-bottom">
              <p>
                Tell me where the business is headed. I’ll help build the digital
                presence to meet it there.
              </p>
              <Link to="/contact" className="hd-button hd-button-light">
                Start a conversation <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
}
