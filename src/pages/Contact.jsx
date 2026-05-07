import { motion } from "framer-motion";
import { Title, Meta, Link as MetaLink } from "react-head";
import "./Contact.css";

export default function Contact() {
  return (
    <>
      {/* ✅ SEO META TAGS */}
      <Title>Contact Smith Digitals | Southwest Virginia Website Developer</Title>
      <Meta
        name="description"
        content="Contact Smith Digitals, a Southwest Virginia website developer, for custom web design, SEO, branding, or Google Business setup."
      />
      <Meta
        name="keywords"
        content="contact Smith Digitals, web design quote, SEO services, small business website help, web developer contact"
      />
      <Meta property="og:title" content="Contact Smith Digitals | Southwest Virginia Website Developer" />
      <Meta
        property="og:description"
        content="Let's talk about your project goals. Smith Digitals builds modern, affordable websites and SEO strategies for businesses across Southwest Virginia."
      />
      <Meta property="og:type" content="website" />
      <Meta property="og:image" content="https://smithdigitals.com/og-image.jpg" />
      <Meta property="og:url" content="https://smithdigitals.com/contact" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Contact Smith Digitals" />
      <Meta
        name="twitter:description"
        content="Reach out to Smith Digitals for affordable web design, SEO, and branding services in Southwest Virginia."
      />
      <Meta name="twitter:image" content="https://smithdigitals.com/og-image.jpg" />
      <MetaLink rel="canonical" href="https://smithdigitals.com/contact" />

      {/* ✅ STRUCTURED DATA (LOCAL BUSINESS) */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Smith Digitals",
          image: "https://smithdigitals.com/og-image.jpg",
          url: "https://smithdigitals.com",
          email: "dylan@smithdigitals.com",
          description:
            "Web design, SEO, and digital branding for small businesses in Southwest Virginia — affordable, modern, and results-driven.",
          address: {
            "@type": "PostalAddress",
            addressRegion: "VA",
            addressCountry: "US",
          },
          areaServed: ["Southwest Virginia", "Lee County, VA", "Wise County, VA", "Scott County, VA"],
          contactPoint: {
            "@type": "ContactPoint",
            email: "dylan@smithdigitals.com",
            contactType: "Customer Support",
          },
        })}
      </script>

      {/* ✅ PAGE CONTENT */}
      <div className="contact-page">
        {/* Hero Section */}
        <div className="contact-hero">
          <motion.h1
            className="contact-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Get in Touch
          </motion.h1>

          <motion.p
            className="contact-subtitle"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Tell us about your project, your goals, or just ask a question.  
            We’ll help bring your vision to life.
          </motion.p>

          {/* Email */}
          <motion.p
            className="contact-email"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            Or email directly:{" "}
            <a href="mailto:dylan@smithdigitals.com">dylan@smithdigitals.com</a>
          </motion.p>
        </div>

        {/* Contact Form */}
        <motion.form
          className="contact-form"
          action="https://formspree.io/f/mrblnree"
          method="POST"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <label htmlFor="contact-name">
            Name *
            <input id="contact-name" type="text" name="name" placeholder="Your Name" autoComplete="name" required />
          </label>

          <label htmlFor="contact-email">
            Email *
            <input id="contact-email" type="email" name="email" placeholder="Your Email" autoComplete="email" required />
          </label>

          <label htmlFor="contact-phone">
            Phone
            <input id="contact-phone" type="tel" name="phone" placeholder="Optional" autoComplete="tel" />
          </label>

          <label htmlFor="contact-website">
            Website (if any)
            <input id="contact-website" type="url" name="website" placeholder="https://example.com" autoComplete="url" />
          </label>

          <label htmlFor="contact-project-type">
            What kind of project are you interested in? *
            <div className="select-wrapper">
              <select id="contact-project-type" name="projectType" required>
                <option value="">Select one</option>
                <option value="new-website">New Website</option>
                <option value="website-tweak">Small Tweak</option>
                <option value="seo-optimization">SEO Optimization</option>
                <option value="google-business-setup">Google Business Setup</option>
                <option value="branding-logo-design">Branding / Logo Design</option>
                <option value="other">Other</option>
              </select>
            </div>
          </label>

          <label htmlFor="contact-budget">
            Budget (optional)
            <input id="contact-budget" type="text" name="budget" placeholder="Approximate budget" />
          </label>

          <label htmlFor="contact-message">
            Additional Details
            <textarea
              id="contact-message"
              name="message"
              placeholder="Tell us more about your project, ideas, or questions..."
            />
          </label>

          <button type="submit" className="contact-btn">
            Send Message
          </button>
        </motion.form>
      </div>
    </>
  );
}
