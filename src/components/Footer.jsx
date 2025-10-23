export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Smith Digitals. All rights reserved.</p>
      <div className="footer-links">
        <a href="mailto:dylanjsmith.dev@gmail.com">📧 dylanjsmith.dev@gmail.com</a>
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/contact">Contact</a>
      </div>
    </footer>
  );
}
