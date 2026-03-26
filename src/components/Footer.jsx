import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  // Function to handle the smooth scroll back to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] pt-24 pb-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          
          {/* 1. BRAND COLUMN */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-full p-1 shadow-lg">
                <img src="/unilag.jpg" alt="UNILAG" className="w-full h-full object-contain" />
              </div>
              <h2 className="text-white font-serif text-2xl italic tracking-tight">Unilag</h2>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              A digital media exploration by the Department of Fine & Applied Arts, 
              University of Lagos. Bridging heritage and technology.
            </p>
          </div>

          {/* 2. ACADEMIC INFO COLUMN */}
          <div>
            <h4 className="text-unilag-gold font-black uppercase text-[10px] tracking-[0.3em] mb-8">
              Course Details
            </h4>
            <ul className="text-slate-400 text-sm space-y-4">
              <li className="flex flex-col">
                <span className="text-white font-bold">VSA 490</span>
                <span className="text-[11px] text-slate-500">Digital Media Design</span>
              </li>
              <li className="flex flex-col">
                <span className="text-[11px] text-slate-500">2025/2026 Academic Session</span>
              </li>
            </ul>
          </div>

          {/* 3. NAVIGATION & ACTION */}
          <div className="flex flex-col items-start md:items-end">
            <h4 className="text-unilag-gold font-black uppercase text-[10px] tracking-[0.3em] mb-8">
              Quick Links
            </h4>
            <div className="flex flex-col gap-4 text-sm text-slate-400 md:text-right">
              <a href="#video" className="hover:text-unilag-gold transition-colors">Project Video</a>
              <a href="#gallery" className="hover:text-unilag-gold transition-colors">Art Gallery</a>
              <a href="#about" className="hover:text-unilag-gold transition-colors">About Project</a>
              <button 
                onClick={scrollToTop}
                className="text-unilag-gold font-bold flex items-center gap-2 group md:justify-end mt-2"
              >
                Back to Top
                <span className="group-hover:-translate-y-1 transition-transform duration-300">↑</span>
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-slate-600 uppercase tracking-[0.2em] font-medium">
            © 2026 University of Lagos • Faculty of Creative Arts
          </p>
          
          {/* Status Indicators (The 'Unilag' Dots) */}
          <div className="flex gap-4">
            <motion.div 
              whileHover={{ scale: 1.5 }}
              className="w-2 h-2 rounded-full bg-unilag-maroon shadow-[0_0_12px_rgba(125,0,0,0.8)]"
              title="Maroon Heritage"
            />
            <motion.div 
              whileHover={{ scale: 1.5 }}
              className="w-2 h-2 rounded-full bg-unilag-gold shadow-[0_0_12px_rgba(255,215,0,0.8)]"
              title="Gold Excellence"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;