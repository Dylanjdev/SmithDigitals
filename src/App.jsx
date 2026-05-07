import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import PageLoader from "./components/PageLoader";
import { HeadProvider } from "react-head"; // if using react-head for SEO

// Lazy load pages for better performance
const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));
const OurWork = lazy(() => import("./pages/OurWork"));
const FitAndFierce = lazy(() => import("./pages/FitAndFierce"));
const JumpSportingGoods = lazy(() => import("./pages/JumpSportingGoods"));
const PaintingOutsideTheLines = lazy(() => import("./pages/PaintingOutsideTheLines"));
const BBSBakery = lazy(() => import("./pages/BBSBakery"));
const McGuiresLandscaping = lazy(() => import("./pages/McGuiresLandscaping"));
const StoneMountainYogurt = lazy(() => import("./pages/StoneMountainYogurt"));
const Pricing = lazy(() => import("./pages/Pricing"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));

function App() {
  return (
    <HeadProvider>
      <Router>
        <div className="content">
          <Navbar />
          <ScrollToTop />

          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/case-studies" element={<OurWork />} />
              <Route path="/case-studies/fit-and-fierce" element={<FitAndFierce />} />
              <Route path="/case-studies/jump-sporting-goods" element={<JumpSportingGoods />} />
              <Route path="/case-studies/painting-outside-the-lines" element={<PaintingOutsideTheLines />} />
              <Route path="/case-studies/bbs-bakery" element={<BBSBakery />} />
              <Route path="/case-studies/mcguires-landscaping" element={<McGuiresLandscaping />} />
              <Route path="/case-studies/stone-mountain-yogurt" element={<StoneMountainYogurt />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
            </Routes>
          </Suspense>

          <Footer />
        </div>
      </Router>
    </HeadProvider>
  );
}

export default App;
