import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CookieConsent } from './components/CookieConsent';
import { HomePage } from './pages/HomePage';
import { OverOnsPage } from './pages/OverOnsPage';
import { ApplicatiesPage } from './pages/ApplicatiesPage';
import { ContactPage } from './pages/ContactPage';
import { FAQPage } from './pages/FAQPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { AlgemeneVoorwaardenPage } from './pages/AlgemeneVoorwaardenPage';
import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/over-ons" element={<OverOnsPage />} />
          <Route path="/applicaties" element={<ApplicatiesPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/algemene-voorwaarden" element={<AlgemeneVoorwaardenPage />} />
        </Routes>
        <Footer />
        <CookieConsent />
      </div>
    </Router>
  );
}