import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const isProjectPage = location.pathname === "/view-project";

  return (
    <nav className="fixed top-0 w-full z-[100] px-6 py-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-4 group">
          <div className="w-12 h-12 bg-white rounded-full p-1 flex items-center justify-center shadow-xl">
            <img src="/unilag.jpg" alt="Logo" className="w-full h-full object-contain" />
          </div>
          <span className="text-unilag-gold font-serif italic text-xl">Unilag</span>
        </Link>

        <div className="flex items-center gap-8">
          {isProjectPage ? (
            <Link to="/" className="text-unilag-gold text-[10px] font-black uppercase tracking-[0.3em] border-b border-unilag-gold/50 pb-1 hover:border-unilag-gold transition-all">
              Back to Exhibition
            </Link>
          ) : (
            <>
              <a href="#gallery" className="hidden md:block text-[10px] text-white/60 uppercase tracking-widest hover:text-unilag-gold transition-colors">Gallery</a>
              <Link to="/view-project" className="bg-unilag-gold text-unilag-maroon px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-white transition-all">
                View Project
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;