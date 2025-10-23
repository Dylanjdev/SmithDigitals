import { motion } from "framer-motion";
import { Title, Meta, Link as MetaLink } from "react-head";
import "./Contact.css";

export default function Contact() {
  return (
    <>
      {/* ✅ SEO META TAGS */}
      <Title>Contact | Smith Digitals | Web Design & SEO Experts</Title>
      <Meta
        name="description"
        content="Contact Smith Digitals for custom web design, SEO, branding, or Google Business setup. Let's build something great together — reach out today."
      />
      <Meta
        name="keywords"
        content="contact Smith Digitals, web design quote, SEO services, small business website help, web developer contact"
      />
      <Meta property="og:title" content="Contact Smith Digitals | Web Design & SEO" />
      <Meta
        property="og:description"
        content="Let's talk about your project goals — Smith Digitals creates modern, affordable websites and SEO strategies that grow your business."
      />
      <Meta property="og:type" content="website" />
      <Meta property="og:image" content="/og-image.png" />
      <Meta property="og:url" content="https://smithdigitals.com/contact" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Contact Smith Digitals" />
      <Meta
        name="twitter:description"
        content="Reach out to Smith Digitals for affordable web design, SEO, and branding services."
      />
      <Meta name="twitter:image" content="/og-image.png" />
      <MetaLink rel="canonical" href="https://smithdigitals.com/contact" />

      {/* ✅ STRUCTURED DATA (LOCAL BUSINESS) */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Smith Digitals",
          image: "https://smithdigitals.com/og-image.png",
          url: "https://smithdigitals.com",
          email: "dylanjsmith.dev@gmail.com",
          description:
            "Web design, SEO, and digital branding for small businesses — affordable, modern, and results-driven.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Virginia",
            addressCountry: "USA",
          },
          areaServed: "United States",
          sameAs: [
            "https://www.linkedin.com",
            "https://github.com",
            "https://facebook.com",
          ],
          contactPoint: {
            "@type": "ContactPoint",
            email: "dylanjsmith.dev@gmail.com",
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
            <a href="mailto:dylanjsmith.dev@gmail.com">dylanjsmith.dev@gmail.com</a>
          </motion.p>
        </div>

        {/* Contact Form */}
        <motion.form
          className="contact-form"
          action="https://formspree.io/f/mjkoladb"
          method="POST"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <label>
            Name *
            <input type="text" name="name" placeholder="Your Name" required />
          </label>

          <label>
            Email *
            <input type="email" name="email" placeholder="Your Email" required />
          </label>

          <label>
            Phone
            <input type="tel" name="phone" placeholder="Optional" />
          </label>

          <label>
            Website (if any)
            <input type="url" name="website" placeholder="https://example.com" />
          </label>

          <label>
            What kind of project are you interested in? *
            <div className="select-wrapper">
              <select name="projectType" required>
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

          <label>
            Budget (optional)
            <input type="text" name="budget" placeholder="Approximate budget" />
          </label>

          <label>
            Additional Details
            <textarea
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
