import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Services</h4>
          <Link to="/services">Web Design & Development</Link>
          <Link to="/services">SEO Optimization</Link>
          <Link to="/services">Google Business Setup</Link>
          <Link to="/services">Branding & Logo Design</Link>
          <Link to="/services">Monthly Maintenance</Link>
        </div>

        <div className="footer-section">
          <h4>Company</h4>
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/case-studies">Case Studies</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/contact">Contact</Link>
          <a href="https://billing.stripe.com/p/login/3cI9AT0gE5lK695bCB14400" target="_blank" rel="noopener noreferrer">
            Client Billing Portal
          </a>
        </div>

        <div className="footer-section">
          <h4>Legal</h4>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-of-service">Terms of Service</Link>
          <p style={{ fontSize: "0.85rem", color: "var(--gray)" }}>
            Smith Digitals LLC is a registered Limited Liability Company.
          </p>
        </div>

        <div className="footer-section">
          <h4>Connect</h4>
          <a href="mailto:dylan@smithdigitals.com">📧 Email Us</a>
          <a href="https://www.facebook.com/share/14Wd9ExAiEQ/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
            f Facebook
          </a>
          <a href="https://www.instagram.com/smithdigitals2025?igsh=MnZ1a3Y1aWN0bGJj&utm_source=qr" target="_blank" rel="noopener noreferrer">
            📷 Instagram
          </a>
        </div>
      </div>

      <div className="footer-links">
        <p>© {new Date().getFullYear()} Smith Digitals LLC. All rights reserved.</p>
      </div>
    </footer>
  );
}
