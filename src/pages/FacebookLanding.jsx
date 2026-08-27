import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Title, Meta, Link as MetaLink } from "react-head";
import { Link } from "react-router-dom";
import logo from "../assets/smithlogo.png";
import "./FacebookLanding.css";

const campaignFields = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "fbclid",
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function FacebookLanding() {
  const prefersReducedMotion = useReducedMotion();
  const [status, setStatus] = useState("idle");
  const [campaignData] = useState(() => {
    const params = new URLSearchParams(window.location.search);

    return campaignFields.reduce((values, field) => {
      values[field] = params.get(field) || "";
      return values;
    }, {});
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch(event.currentTarget.action, {
        method: "POST",
        body: new FormData(event.currentTarget),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) throw new Error("Form submission failed");

      window.sessionStorage.setItem(
        "smith_audit_conversion",
        JSON.stringify({
          campaignSource: campaignData.utm_source || "facebook_landing_page",
        }),
      );
      window.location.assign("/thank-you/");
    } catch {
      setStatus("error");
    }
  };

  const scrollToForm = () => {
    document.getElementById("facebook-lead-form")?.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <>
      <Title>Outrank Competitors & Capture More Local Leads | Smith Digitals</Title>
      <Meta
        name="description"
        content="Claim a free five-minute Google and SEO audit from Smith Digitals and uncover opportunities to attract more high-intent local leads."
      />
      <Meta name="robots" content="noindex, nofollow" />
      <Meta property="og:title" content="Outrank Competitors & Capture More Local Leads | Smith Digitals" />
      <Meta
        property="og:description"
        content="Claim a free five-minute Google and SEO audit for your business."
      />
      <Meta property="og:image" content="https://smithdigitals.com/og-image.jpg" />
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content="https://smithdigitals.com/facebook" />
      <MetaLink rel="canonical" href="https://smithdigitals.com/facebook" />

      <main className="fb-page">
        <header className="fb-header">
          <div className="fb-shell fb-header-inner">
            <div className="fb-brand" aria-label="Smith Digitals">
              <img src={logo} alt="" />
              <span>
                <strong>Smith Digitals</strong>
                <small>Independent digital studio</small>
              </span>
            </div>
            <button type="button" className="fb-header-cta" onClick={scrollToForm}>
              Claim your free audit <span aria-hidden="true">↘</span>
            </button>
          </div>
        </header>

        <section className="fb-hero">
          <div className="fb-orb fb-orb-one" aria-hidden="true" />
          <div className="fb-orb fb-orb-two" aria-hidden="true" />
          <div className="fb-shell fb-hero-grid">
            <motion.div
              className="fb-hero-copy"
              initial={prefersReducedMotion ? false : "hidden"}
              animate="visible"
              variants={reveal}
              transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="fb-kicker">
                <span aria-hidden="true" /> For ambitious businesses
              </p>
              <h1>
                Outrank your competitors &amp; capture more
                <em>high-intent local leads.</em>
              </h1>
              <p className="fb-hero-lede">
                Find out what is holding your business back on Google—and where the
                clearest opportunities are to attract local customers ready to act.
              </p>
              <div className="fb-inline-proof" aria-label="Local client result">
                <strong>36</strong>
                <span>
                  <b>Local proof</b>
                  McGuire’s Lawn &amp; Landscaping just received 36 leads in one month.
                </span>
              </div>
              <ul className="fb-hero-points" aria-label="What Smith Digitals improves">
                <li><span>01</span> See how your business currently appears on Google</li>
                <li><span>02</span> Uncover missed local SEO opportunities</li>
                <li><span>03</span> Get a practical recommendation you can act on</li>
              </ul>
              <button type="button" className="fb-primary-button" onClick={scrollToForm}>
                Claim my free 5-minute audit <span aria-hidden="true">↗</span>
              </button>
              <p className="fb-microcopy">Personally reviewed by Dylan. Free, focused, and no pressure.</p>
            </motion.div>

            <motion.aside
              className="fb-lead-card"
              id="facebook-lead-form"
              aria-labelledby="lead-form-title"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 32, rotate: 1.5 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.78, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="fb-card-label">Free local visibility review</p>
              <h2 id="lead-form-title">Claim your free 5-minute Google &amp; SEO audit.</h2>
              <p className="fb-card-intro">
                Share your website and best contact. I’ll personally review your
                local search presence and send back a focused recommendation.
              </p>
              <form action="https://formspree.io/f/mrblnree" method="POST" onSubmit={handleSubmit}>
                <input type="hidden" name="source" value="Facebook landing page" />
                <input type="hidden" name="page" value="/facebook" />
                <input type="hidden" name="_subject" value="New Google & SEO audit request from Facebook" />
                {campaignFields.map((field) => (
                  <input key={field} type="hidden" name={field} value={campaignData[field]} />
                ))}
                <label htmlFor="fb-name">
                  Your name
                  <input id="fb-name" name="name" type="text" autoComplete="name" placeholder="Jane Smith" required />
                </label>
                <label htmlFor="fb-contact">
                  Email or phone
                  <input id="fb-contact" name="contact" type="text" autoComplete="email" inputMode="email" placeholder="you@business.com or (555) 555-5555" required />
                </label>
                <label htmlFor="fb-website">
                  Website URL
                  <input id="fb-website" name="website" type="text" autoComplete="url" inputMode="url" placeholder="yourbusiness.com" required />
                </label>
                <button type="submit" disabled={status === "submitting"}>
                  {status === "submitting" ? "Sending…" : "Claim my free audit"}
                  {status !== "submitting" && <span aria-hidden="true">↗</span>}
                </button>
                {status === "error" && (
                  <p className="fb-form-error" role="alert">
                    Something went wrong. Try again or email <a href="mailto:dylan@smithdigitals.com">dylan@smithdigitals.com</a>.
                  </p>
                )}
                <p className="fb-form-privacy">
                  Your information stays private. By submitting, you agree to the{" "}
                  <Link to="/privacy-policy">privacy policy</Link>.
                </p>
              </form>
            </motion.aside>
          </div>
        </section>

        <section className="fb-proof-strip" aria-label="Smith Digitals at a glance">
          <div className="fb-shell">
            <div><strong>15</strong><span>projects delivered</span></div>
            <div><strong>01</strong><span>senior point of contact</span></div>
            <div><strong>360°</strong><span>strategy through launch</span></div>
            <div><strong>VA → anywhere</strong><span>local attention, broad capability</span></div>
          </div>
        </section>

        <section className="fb-case-study">
          <div className="fb-shell fb-case-grid">
            <motion.div
              className="fb-case-result"
              initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.65 }}
            >
              <span className="fb-case-number">36</span>
              <p>leads generated in one month</p>
              <small>McGuire’s Lawn & Landscaping</small>
            </motion.div>
            <motion.div
              className="fb-case-copy"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.65 }}
            >
              <p className="fb-section-label">Proof over promises</p>
              <h2>A better website should do more than look better.</h2>
              <p>
                For McGuire’s, a focused lead-generation site and quote funnel
                generated 36 leads in one month. Clear positioning and a simple next
                step made it easier for the right people to act.
              </p>
              <Link to="/case-studies/mcguires-landscaping" target="_blank">
                See the full case study <span aria-hidden="true">↗</span>
              </Link>
            </motion.div>
          </div>
        </section>

        <section className="fb-difference">
          <div className="fb-shell">
            <div className="fb-section-heading">
              <p className="fb-section-label">Why Smith Digitals</p>
              <h2>One partner. One clear goal: meaningful growth.</h2>
            </div>
            <div className="fb-difference-grid">
              {[
                ["01", "Strategy before screens", "We find the real constraint before deciding what to design, build, or promote."],
                ["02", "Built around action", "Every message, page, and interaction helps the right customer take the next step."],
                ["03", "Direct senior access", "You work directly with Dylan from the first conversation through launch and improvement."],
              ].map(([number, title, description], index) => (
                <motion.article
                  key={title}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                >
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="fb-fit">
          <div className="fb-shell fb-fit-grid">
            <div>
              <p className="fb-section-label">A good fit if…</p>
              <h2>You are ready for the website to pull its weight.</h2>
            </div>
            <ul>
              <li><span aria-hidden="true">✓</span> Your business is solid, but the online experience undersells it.</li>
              <li><span aria-hidden="true">✓</span> You get attention, but not enough calls, bookings, or sales.</li>
              <li><span aria-hidden="true">✓</span> You want clear advice and execution—not another layer of vendors.</li>
              <li><span aria-hidden="true">✓</span> You are ready to invest in a digital system built for growth.</li>
            </ul>
          </div>
        </section>

        <section className="fb-final-cta">
          <div className="fb-shell">
            <p className="fb-section-label">Your next move</p>
            <h2>See what your competitors may be getting right.</h2>
            <button type="button" onClick={scrollToForm}>
              Claim your free 5-minute audit <span aria-hidden="true">↗</span>
            </button>
          </div>
        </section>

        <footer className="fb-footer">
          <div className="fb-shell">
            <p>© {new Date().getFullYear()} Smith Digitals LLC</p>
            <div>
              <a href="mailto:dylan@smithdigitals.com">dylan@smithdigitals.com</a>
              <Link to="/privacy-policy">Privacy</Link>
            </div>
          </div>
        </footer>

        <button type="button" className="fb-mobile-cta" onClick={scrollToForm}>
          Claim your free audit <span aria-hidden="true">↗</span>
        </button>
      </main>
    </>
  );
}
