import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-transparent h-48 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 h-32 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-6 group">
          {/* EXTRA LARGE LOGO */}
          <div className="w-24 h-24 md:w-28 md:h-28 bg-white rounded-full p-2 shadow-2xl transition-transform group-hover:scale-105 flex items-center justify-center border-4 border-unilag-gold/30">
            <img src="/unilag.jpg" alt="Logo" className="w-[80%] h-[80%] object-contain" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-white font-serif text-3xl md:text-4xl tracking-tighter group-hover:text-unilag-gold transition-colors leading-none">
              Unilag
            </h1>
            <p className="text-unilag-gold text-[10px] font-black uppercase tracking-[0.4em] mt-2">
              University of Lagos
            </p>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-10">
          <a href="#gallery" className="text-[11px] font-black uppercase tracking-[0.3em] text-white/80 hover:text-unilag-gold transition-all">Gallery</a>
          <a href="#video" className="text-[11px] font-black uppercase tracking-[0.3em] text-white/80 hover:text-unilag-gold transition-all">Video</a>
          <a href="#about" className="text-[11px] font-black uppercase tracking-[0.3em] text-white/80 hover:text-unilag-gold transition-all">About</a>
          <Link to="/view-project">
            <button className="text-[11px] font-black uppercase tracking-[0.2em] text-unilag-maroon bg-unilag-gold px-8 py-3 rounded-sm hover:bg-white transition-all shadow-xl">
              View Project
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;