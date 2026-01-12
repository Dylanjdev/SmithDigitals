import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Smith Digitals. All rights reserved.</p>
      <div className="footer-links">
        <a href="mailto:dylanjsmith.dev@gmail.com">📧 dylanjsmith.dev@gmail.com</a>
        <Link to="/privacy-policy">Privacy Policy</Link>
        <a href="#contact">Contact</a>
        <div className="social-icons">
          <a href="https://www.facebook.com/share/14Wd9ExAiEQ/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/smithdigitals2025?igsh=MnZ1a3Y1aWN0bGJj&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
