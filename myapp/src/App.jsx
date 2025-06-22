import React from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import TopBanner from './components/TopBanner';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Internships from './components/Internships';
import VibeCoding from './components/VibeCoding';
import Workshops from './components/Workshops';
import FinalHero from './components/FinalHero';
import Footer from './components/Footer';
import AuthPage from './components/auth/AuthPage'; // Corrected import path

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Smooth scrolling for navigation links on the homepage
  React.useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const target = document.querySelector(location.hash);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location]);

  return (
    <div className="app">
      <Routes>
        {/* Homepage Route */}
        <Route
          path="/"
          element={
            <>
              <TopBanner />
              <Navigation navigate={navigate} />
              <Hero />
              <Internships />
              <VibeCoding />
              <Workshops />
              <FinalHero />
              <Footer />
            </>
          }
        />
        {/* Auth Route */}
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </div>
  );
};

export default App;