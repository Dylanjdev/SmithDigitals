import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
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
const BBSBakery = lazy(() => import("./pages/BBSBakery"));
const FitAndFierce = lazy(() => import("./pages/FitAndFierce"));
const JumpSportingGoods = lazy(() => import("./pages/JumpSportingGoods"));
const McGuiresLandscaping = lazy(() => import("./pages/McGuiresLandscaping"));
const PaintingOutsideTheLines = lazy(() => import("./pages/PaintingOutsideTheLines"));
const StoneMountainYogurt = lazy(() => import("./pages/StoneMountainYogurt"));
const UnicornTechs = lazy(() => import("./pages/UnicornTechs"));
const AdditionalCaseStudy = lazy(() => import("./pages/AdditionalCaseStudy"));
const GoogleRankingGuide = lazy(() => import("./pages/GoogleRankingGuide"));
const LocalVsTraditionalSeoGuide = lazy(() => import("./pages/LocalVsTraditionalSeoGuide"));
const CumberlandGapTourismGuide = lazy(() => import("./pages/CumberlandGapTourismGuide"));
const LeeCountyEconomicOutlook = lazy(() => import("./pages/LeeCountyEconomicOutlook"));
const Pricing = lazy(() => import("./pages/Pricing"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const FacebookLanding = lazy(() => import("./pages/FacebookLanding"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const LeeCountyWebDesignHub = lazy(() =>
  import("./pages/LeeCountyWebDesign").then((module) => ({
    default: module.LeeCountyWebDesignHub,
  })),
);
const WebDesignLocation = lazy(() =>
  import("./pages/LeeCountyWebDesign").then((module) => ({
    default: module.WebDesignLocation,
  })),
);

function AppContent() {
  const location = useLocation();
  const normalizedPath = location.pathname.replace(/\/+$/, "") || "/";
  const isCampaignPage = ["/facebook", "/thank-you"].includes(normalizedPath);

  return (
    <div className={isCampaignPage ? "content campaign-content" : "content"}>
      {!isCampaignPage && <Navbar />}
      <ScrollToTop />

      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/web-design/lee-county-va" element={<LeeCountyWebDesignHub />} />
          <Route path="/web-design/lee-county-va/:locationSlug" element={<WebDesignLocation />} />
          <Route path="/case-studies" element={<OurWork />} />
          <Route path="/case-studies/bbs-bakery" element={<BBSBakery />} />
          <Route path="/case-studies/fit-and-fierce" element={<FitAndFierce />} />
          <Route path="/case-studies/jump-sporting-goods" element={<JumpSportingGoods />} />
          <Route path="/case-studies/mcguires-landscaping" element={<McGuiresLandscaping />} />
          <Route path="/case-studies/painting-outside-the-lines" element={<PaintingOutsideTheLines />} />
          <Route path="/case-studies/stone-mountain-yogurt" element={<StoneMountainYogurt />} />
          <Route path="/case-studies/the-unicorn-techs" element={<UnicornTechs />} />
          <Route path="/case-studies/m-and-m-wholesale" element={<AdditionalCaseStudy />} />
          <Route path="/case-studies/freedom-in-christ" element={<AdditionalCaseStudy />} />
          <Route path="/case-studies/hair-by-rilee" element={<AdditionalCaseStudy />} />
          <Route path="/guides/how-to-rank-on-google-for-free" element={<GoogleRankingGuide />} />
          <Route path="/guides/local-seo-vs-regular-seo" element={<LocalVsTraditionalSeoGuide />} />
          <Route path="/guides/lee-county-cumberland-gap-tourism" element={<CumberlandGapTourismGuide />} />
          <Route path="/blog/lee-county-economic-outlook" element={<LeeCountyEconomicOutlook />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/facebook" element={<FacebookLanding />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </Suspense>

      {!isCampaignPage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <HeadProvider>
      <Router>
        <AppContent />
      </Router>
    </HeadProvider>
  );
}

export default App;
