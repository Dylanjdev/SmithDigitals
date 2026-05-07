import "./PrivacyPolicy.css";
import { Title, Meta, Link as MetaLink } from "react-head";

export default function PrivacyPolicy() {
  return (
    <>
      {/* SEO META TAGS */}
      <Title>Privacy Policy | Smith Digitals</Title>
      <Meta
        name="description"
        content="Read Smith Digitals' privacy policy. Learn how we collect, use, and protect your information."
      />
      <Meta name="robots" content="noindex, follow" />
      <MetaLink rel="canonical" href="https://smithdigitals.com/privacy-policy" />

      <div className="privacy-page">
      <h1>Privacy Policy</h1>
      <p><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>

      <section>
        <h2>1. Introduction</h2>
        <p>
          At Smith Digitals, we respect your privacy. This Privacy Policy explains how we collect, use, and protect your information when you visit our website or contact us.
        </p>
      </section>

      <section>
        <h2>2. Information We Collect</h2>
        <p>
          We may collect basic contact details you provide (like your name, email, and message) through forms or email. We do not sell or share your information with third parties.
        </p>
      </section>

      <section>
        <h2>3. How We Use Your Information</h2>
        <ul>
          <li>To respond to your inquiries or requests.</li>
          <li>To improve our website and services.</li>
          <li>To send updates or project-related information (if requested).</li>
        </ul>
      </section>

      <section>
        <h2>4. Data Security</h2>
        <p>
          We take reasonable steps to protect your information from unauthorized access, alteration, or disclosure.
        </p>
      </section>

      <section>
        <h2>5. Third-Party Services</h2>
        <p>
          Our site may include links to third-party websites. We are not responsible for their privacy practices or content.
        </p>
      </section>

      <section>
        <h2>6. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please reach out at{" "}
          <a href="mailto:dylan@smithdigitals.com">dylan@smithdigitals.com</a>.
        </p>
      </section>
    </div>
    </>
  );
}
