import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-statement">
        <p>Smith Digitals</p>
        <h2>Independent by design.<br />Built for ambitious work.</h2>
        <a href="mailto:dylan@smithdigitals.com">dylan@smithdigitals.com ↗</a>
      </div>
      <div className="footer-content">
        <div className="footer-section">
          <h4>Capabilities</h4>
          <Link to="/services">Strategy & positioning</Link>
          <Link to="/services">Web design & development</Link>
          <Link to="/web-design/lee-county-va">Web design in Lee County</Link>
          <Link to="/services">Ecommerce & automation</Link>
          <Link to="/services">SEO & paid media</Link>
        </div>

        <div className="footer-section">
          <h4>Explore</h4>
          <Link to="/">Home</Link>
          <Link to="/services">Capabilities</Link>
          <Link to="/case-studies">Case Studies</Link>
          <Link to="/guides/how-to-rank-on-google-for-free">Google ranking guide</Link>
          <Link to="/guides/local-seo-vs-regular-seo">Local SEO vs. regular SEO</Link>
          <Link to="/guides/lee-county-cumberland-gap-tourism">Cumberland Gap tourism guide</Link>
          <Link to="/blog/lee-county-economic-outlook">Lee County economic outlook</Link>
          <Link to="/pricing">Ways to work together</Link>
          <Link to="/contact">Start a project</Link>
        </div>

        <div className="footer-section">
          <h4>Client access</h4>
          <a href="https://billing.stripe.com/p/login/3cI9AT0gE5lK695bCB14400" target="_blank" rel="noopener noreferrer">
            Client Billing Portal
          </a>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-of-service">Terms of Service</Link>
        </div>

        <div className="footer-section">
          <h4>Connect</h4>
          <a href="mailto:dylan@smithdigitals.com">Email Dylan</a>
          <a href="https://www.facebook.com/share/14Wd9ExAiEQ/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
            Facebook ↗
          </a>
          <a href="https://www.instagram.com/smithdigitals2025?igsh=MnZ1a3Y1aWN0bGJj&utm_source=qr" target="_blank" rel="noopener noreferrer">
            Instagram ↗
          </a>
        </div>
      </div>

      <div className="footer-links">
        <p>© {new Date().getFullYear()} Smith Digitals LLC.</p>
        <p>Founder-led by Dylan Smith · Virginia, working everywhere</p>
      </div>
    </footer>
  );
}
