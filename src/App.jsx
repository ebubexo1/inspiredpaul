import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Component Imports
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Make sure this file exists in src/components/
import Hero from './sections/Hero';
import ProjectGrid from './sections/ProjectGrid';
import AboutProject from './sections/AboutProject';
import ProjectDetail from './pages/ProjectDetail';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { 
    window.scrollTo(0, 0); 
  }, [pathname]);
  return null;
}

const Home = () => (
  <motion.div 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Hero />
    <ProjectGrid />
    <AboutProject />
  </motion.div>
);

function App() {
  return (
    <Router>
      {/* The 'flex flex-col min-h-screen' classes ensure that the 
        footer stays at the bottom even if the page content is short.
      */}
      <div className="flex flex-col min-h-screen bg-[#050505] selection:bg-unilag-gold selection:text-unilag-maroon">
        <ScrollToTop />
        <Navbar />
        
        {/* 'flex-grow' pushes the footer down */}
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/view-project" element={<ProjectDetail />} />
            </Routes>
          </AnimatePresence>
        </main>

        {/* FOOTER ADDED HERE - Outside of Routes so it shows on every page */}
        <Footer />
      </div>
    </Router>
  );
}

export default App; 