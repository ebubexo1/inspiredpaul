import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Components & Sections
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import ProjectGrid from './sections/ProjectGrid';
import AboutProject from './sections/AboutProject';
import TechnicalSpecs from './sections/TechnicalSpecs';
import ProjectDetail from './pages/ProjectDetail';

// 1. HELPER: This resets scroll position whenever you change pages
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// 2. MAIN HOME PAGE COMPONENT
// We group the home sections together so they show on one page
const Home = () => (
  <>
    <Hero />
    <ProjectGrid />
    <AboutProject />
    <TechnicalSpecs />
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#050505] selection:bg-unilag-gold selection:text-unilag-maroon">
        <ScrollToTop />
        <Navbar />
        
        <main>
          {/* AnimatePresence allows pages to fade out before the new one fades in */}
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/view-project" element={<ProjectDetail />} />
            </Routes>
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;