import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Fragment, lazy, Suspense } from "react";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import PageLoader from "./components/PageLoader";
import { HeadProvider } from "react-head";
import NotFound from "./pages/NotFound";

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
const LoveLeeVa = lazy(() => import("./pages/LoveLeeVa"));
const AppalachianAsenso = lazy(() => import("./pages/AppalachianAsenso"));
const DiscoverLeeVa = lazy(() => import("./pages/DiscoverLeeVa"));
const PowerPasture = lazy(() => import("./pages/PowerPasture"));
const UnicornTechs = lazy(() => import("./pages/UnicornTechs"));
const AdditionalCaseStudy = lazy(() => import("./pages/AdditionalCaseStudy"));
const GoogleRankingGuide = lazy(() => import("./pages/GoogleRankingGuide"));
const LocalVsTraditionalSeoGuide = lazy(() => import("./pages/LocalVsTraditionalSeoGuide"));
const ResponsiveWebDesignGuide = lazy(() => import("./pages/ResponsiveWebDesignGuide"));
const WebsiteStructureSeoGuide = lazy(() => import("./pages/WebsiteStructureSeoGuide"));
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

const defaultPageComponents = {
  Home,
  Services,
  Contact,
  OurWork,
  BBSBakery,
  FitAndFierce,
  JumpSportingGoods,
  McGuiresLandscaping,
  PaintingOutsideTheLines,
  StoneMountainYogurt,
  LoveLeeVa,
  AppalachianAsenso,
  DiscoverLeeVa,
  PowerPasture,
  UnicornTechs,
  AdditionalCaseStudy,
  GoogleRankingGuide,
  LocalVsTraditionalSeoGuide,
  ResponsiveWebDesignGuide,
  WebsiteStructureSeoGuide,
  CumberlandGapTourismGuide,
  LeeCountyEconomicOutlook,
  Pricing,
  PrivacyPolicy,
  TermsOfService,
  FacebookLanding,
  ThankYou,
  LeeCountyWebDesignHub,
  WebDesignLocation,
};

export function AppContent({ pages = defaultPageComponents, prerender = false }) {
  const {
    Home: HomePage,
    Services: ServicesPage,
    Contact: ContactPage,
    OurWork: OurWorkPage,
    BBSBakery: BBSBakeryPage,
    FitAndFierce: FitAndFiercePage,
    JumpSportingGoods: JumpSportingGoodsPage,
    McGuiresLandscaping: McGuiresLandscapingPage,
    PaintingOutsideTheLines: PaintingOutsideTheLinesPage,
    StoneMountainYogurt: StoneMountainYogurtPage,
    LoveLeeVa: LoveLeeVaPage,
    AppalachianAsenso: AppalachianAsensoPage,
    DiscoverLeeVa: DiscoverLeeVaPage,
    PowerPasture: PowerPasturePage,
    UnicornTechs: UnicornTechsPage,
    AdditionalCaseStudy: AdditionalCaseStudyPage,
    GoogleRankingGuide: GoogleRankingGuidePage,
    LocalVsTraditionalSeoGuide: LocalVsTraditionalSeoGuidePage,
    ResponsiveWebDesignGuide: ResponsiveWebDesignGuidePage,
    WebsiteStructureSeoGuide: WebsiteStructureSeoGuidePage,
    CumberlandGapTourismGuide: CumberlandGapTourismGuidePage,
    LeeCountyEconomicOutlook: LeeCountyEconomicOutlookPage,
    Pricing: PricingPage,
    PrivacyPolicy: PrivacyPolicyPage,
    TermsOfService: TermsOfServicePage,
    FacebookLanding: FacebookLandingPage,
    ThankYou: ThankYouPage,
    LeeCountyWebDesignHub: LeeCountyWebDesignHubPage,
    WebDesignLocation: WebDesignLocationPage,
  } = pages;
  const location = useLocation();
  const normalizedPath = location.pathname.replace(/\/+$/, "") || "/";
  const isCampaignPage = ["/facebook", "/thank-you"].includes(normalizedPath);
  const RouteBoundary = prerender ? Fragment : Suspense;
  const routeBoundaryProps = prerender ? {} : { fallback: <PageLoader /> };

  return (
    <div className={isCampaignPage ? "content campaign-content" : "content"}>
      {!isCampaignPage && <Navbar />}
      <ScrollToTop />

      <RouteBoundary {...routeBoundaryProps}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/web-design/lee-county-va" element={<LeeCountyWebDesignHubPage />} />
          <Route path="/web-design/lee-county-va/:locationSlug" element={<WebDesignLocationPage />} />
          <Route path="/case-studies" element={<OurWorkPage />} />
          <Route path="/case-studies/bbs-bakery" element={<BBSBakeryPage />} />
          <Route path="/case-studies/fit-and-fierce" element={<FitAndFiercePage />} />
          <Route path="/case-studies/jump-sporting-goods" element={<JumpSportingGoodsPage />} />
          <Route path="/case-studies/mcguires-landscaping" element={<McGuiresLandscapingPage />} />
          <Route path="/case-studies/painting-outside-the-lines" element={<PaintingOutsideTheLinesPage />} />
          <Route path="/case-studies/stone-mountain-yogurt" element={<StoneMountainYogurtPage />} />
          <Route path="/case-studies/loveleeva" element={<LoveLeeVaPage />} />
          <Route path="/case-studies/appalachian-asenso" element={<AppalachianAsensoPage />} />
          <Route path="/case-studies/discoverleeva" element={<DiscoverLeeVaPage />} />
          <Route path="/case-studies/power-pasture" element={<PowerPasturePage />} />
          <Route path="/case-studies/the-unicorn-techs" element={<UnicornTechsPage />} />
          <Route path="/case-studies/:slug" element={<AdditionalCaseStudyPage />} />
          <Route path="/guides/how-to-rank-on-google-for-free" element={<GoogleRankingGuidePage />} />
          <Route path="/guides/local-seo-vs-regular-seo" element={<LocalVsTraditionalSeoGuidePage />} />
          <Route path="/guides/what-is-responsive-web-design" element={<ResponsiveWebDesignGuidePage />} />
          <Route path="/guides/how-to-structure-your-website-for-seo-growth" element={<WebsiteStructureSeoGuidePage />} />
          <Route path="/guides/lee-county-cumberland-gap-tourism" element={<CumberlandGapTourismGuidePage />} />
          <Route path="/blog/lee-county-economic-outlook" element={<LeeCountyEconomicOutlookPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          <Route path="/facebook" element={<FacebookLandingPage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </RouteBoundary>

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
