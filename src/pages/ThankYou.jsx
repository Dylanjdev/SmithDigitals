import { useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Title, Meta, Link as MetaLink } from "react-head";
import { Link } from "react-router-dom";
import logo from "../assets/smithlogo.png";
import "./ThankYou.css";

export default function ThankYou() {
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const conversionData = window.sessionStorage.getItem("smith_audit_conversion");

    if (!conversionData) return;

    let campaignSource = "facebook_landing_page";

    try {
      campaignSource = JSON.parse(conversionData).campaignSource || campaignSource;
    } catch {
      // Keep the default source if stored campaign data cannot be parsed.
    }

    window.sessionStorage.removeItem("smith_audit_conversion");
    window.gtag?.("event", "generate_lead", {
      campaign_source: campaignSource,
    });
    window.fbq?.("track", "Lead");
  }, []);

  return (
    <>
      <Title>Audit Request Received | Smith Digitals</Title>
      <Meta
        name="description"
        content="Your Google and SEO audit request has been received by Smith Digitals."
      />
      <Meta name="robots" content="noindex, nofollow" />
      <MetaLink rel="canonical" href="https://smithdigitals.com/thank-you/" />

      <main className="thank-you-page">
        <header className="thank-you-header">
          <div className="thank-you-shell">
            <Link to="/" className="thank-you-brand" aria-label="Smith Digitals home">
              <img src={logo} alt="" />
              <span>
                <strong>Smith Digitals</strong>
                <small>Independent digital studio</small>
              </span>
            </Link>
          </div>
        </header>

        <section className="thank-you-main">
          <div className="thank-you-orb" aria-hidden="true" />
          <motion.div
            className="thank-you-content thank-you-shell"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="thank-you-check" aria-hidden="true">✓</span>
            <p className="thank-you-eyebrow">Audit request received</p>
            <h1>You’re all set.</h1>
            <p className="thank-you-lede">
              Thanks for reaching out. I’ll personally review your website and local
              search presence, then follow up using the contact information you shared.
            </p>

            <div className="thank-you-next">
              <p>What happens next</p>
              <ol>
                <li><span>01</span>I review your website and Google visibility.</li>
                <li><span>02</span>I identify the clearest SEO opportunity.</li>
                <li><span>03</span>You receive a focused, practical recommendation.</li>
              </ol>
            </div>

            <div className="thank-you-actions">
              <Link to="/">Return to Smith Digitals <span aria-hidden="true">↗</span></Link>
              <a href="mailto:dylan@smithdigitals.com">Need me sooner? Email Dylan</a>
            </div>
          </motion.div>
        </section>

        <footer className="thank-you-footer">
          <div className="thank-you-shell">
            <p>© {new Date().getFullYear()} Smith Digitals LLC</p>
            <Link to="/privacy-policy">Privacy policy</Link>
          </div>
        </footer>
      </main>
    </>
  );
}
