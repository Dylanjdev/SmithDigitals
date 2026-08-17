import { motion } from "framer-motion";
import { Title, Meta, Link as MetaLink } from "react-head";
import "./Contact.css";

export default function Contact() {
  return (
    <>
      {/* ✅ SEO META TAGS */}
      <Title>Start a Project | Smith Digitals</Title>
      <Meta
        name="description"
        content="Start a conversation with Dylan at Smith Digitals about strategy, brand, web design and development, ecommerce, SEO, paid media, or automation."
      />
      <Meta
        name="keywords"
        content="contact Smith Digitals, start a digital project, web design inquiry, brand strategy, SEO, ecommerce, automation"
      />
      <Meta property="og:title" content="Contact Smith Digitals | Southwest Virginia Website Developer" />
      <Meta
        property="og:description"
        content="Bring the business challenge. Dylan will respond personally with the clearest next step."
      />
      <Meta property="og:type" content="website" />
      <Meta property="og:image" content="https://smithdigitals.com/og-image.jpg" />
      <Meta property="og:url" content="https://smithdigitals.com/contact" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Contact Smith Digitals" />
      <Meta
        name="twitter:description"
        content="Start a conversation about strategy, brand, web, ecommerce, growth, or automation."
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
            "Founder-led strategy, brand, web development, ecommerce, SEO, paid media, and automation for ambitious businesses.",
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
            transition={{ duration: 0.65 }}
          >
            Let’s build what the next stage demands.
          </motion.h1>

          <motion.p
            className="contact-subtitle"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.65 }}
          >
            Tell me where the business is now, where it needs to go, and what is
            getting in the way. I’ll respond personally with the clearest next step.
          </motion.p>

          {/* Email */}
          <motion.p
            className="contact-email"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16, duration: 0.65 }}
          >
            Prefer email? Write to me directly:{" "}
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
          transition={{ delay: 0.12, duration: 0.7 }}
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
            What kind of challenge are you bringing? *
            <div className="select-wrapper">
              <select id="contact-project-type" name="projectType" required>
                <option value="">Select one</option>
                <option value="new-website">New Website</option>
                <option value="website-tweak">Website Redesign / Optimization</option>
                <option value="digital-strategy">Digital Strategy</option>
                <option value="ecommerce-automation">Ecommerce / Automation</option>
                <option value="seo-optimization">SEO Optimization</option>
                <option value="paid-media">Google / Meta Advertising</option>
                <option value="google-business-setup">Google Business Setup</option>
                <option value="branding-logo-design">Branding / Logo Design</option>
                <option value="other">Other</option>
              </select>
            </div>
          </label>

          <label htmlFor="contact-budget">
            Investment range (optional)
            <input id="contact-budget" type="text" name="budget" placeholder="What have you set aside?" />
          </label>

          <label htmlFor="contact-message">
            Additional Details
            <textarea
              id="contact-message"
              name="message"
              placeholder="What are you building, changing, or trying to unlock?"
            />
          </label>

          <button type="submit" className="contact-btn">
            Start the conversation ↗
          </button>
        </motion.form>
      </div>
    </>
  );
}
