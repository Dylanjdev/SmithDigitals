import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import AnimatedBackground from "./components/AnimatedBackground";
import ScrollToTop from "./components/ScrollToTop";
import PageLoader from "./components/PageLoader";
import { HeadProvider } from "react-head"; // if using react-head for SEO

// Lazy load pages for better performance
const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));
const OurWork = lazy(() => import("./pages/OurWork"));
const Pricing = lazy(() => import("./pages/Pricing"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));

function RedirectHandler() {
  const navigate = useNavigate();
  
  useEffect(() => {
    const redirect = sessionStorage.getItem('redirect');
    if (redirect) {
      sessionStorage.removeItem('redirect');
      const url = new URL(redirect);
      navigate(url.pathname + url.search + url.hash);
    }
  }, [navigate]);
  
  return null;
}

function App() {
  return (
    <HeadProvider>
      <Router>
        <RedirectHandler />
        <AnimatedBackground />
        <div className="content">
          <Navbar />
          <ScrollToTop />

          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/work" element={<OurWork />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            </Routes>
          </Suspense>

          <Footer />
        </div>
      </Router>
    </HeadProvider>
  );
}

export default App;
