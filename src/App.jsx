import { HeadProvider } from "react-head";
import AnimatedBackground from "./components/AnimatedBackground";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import OurWork from "./pages/OurWork";
import Pricing from "./pages/Pricing"; // <-- import Pricing page
import ScrollToTop from "./components/ScrollToTop";
import PrivacyPolicy from "./pages/PrivacyPolicy";
function App() {
  return (
    <HeadProvider>
    <Router>
      {/* Animated background always behind everything */}
      <AnimatedBackground />

      {/* Content wrapper with z-index above background */}
      <div className="content">
        {/* Navbar always on top */}
        <Navbar />
         <ScrollToTop />

        {/* Page content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/work" element={<OurWork />} />
          <Route path="/pricing" element={<Pricing />} /> {/* <-- add route */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>

        {/* Footer always on bottom */}
        <Footer />
      </div>
    </Router>
    </HeadProvider>
  );
}

export default App;
