import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import OurWork from "./pages/OurWork";
import Pricing from "./pages/Pricing";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import AnimatedBackground from "./components/AnimatedBackground";
import ScrollToTop from "./components/ScrollToTop";
import { HeadProvider } from "react-head"; // if using react-head for SEO

function App() {
  return (
    <HeadProvider>
      <Router>
        <AnimatedBackground />
        <div className="content">
          <Navbar />
          <ScrollToTop />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/work" element={<OurWork />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    </HeadProvider>
  );
}

export default App;
