import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Smith Digitals. All rights reserved.</p>
      <div className="footer-links">
        <a href="mailto:dylanjsmith.dev@gmail.com">📧 dylanjsmith.dev@gmail.com</a>
        <Link to="/privacy-policy">Privacy Policy</Link>
        <a href="/contact">Contact</a>
      </div>
    </footer>
  );
}
