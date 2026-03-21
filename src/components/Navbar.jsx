import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Gallery', href: '#gallery' },
    { name: 'Video', href: '#video' },
    { name: 'About', href: '#about' },
  ];

  return (
    <nav className="fixed top-0 w-full z-[100] transition-all duration-300">
      {/* Background Tint */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/70 to-transparent h-32 md:h-48 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 h-24 md:h-32 flex items-center justify-between">
        {/* LOGO SECTION */}
        <Link onClick={() => setIsOpen(false)} to="/" className="flex items-center gap-4 md:gap-6 group">
          <div className="w-16 h-16 md:w-24 md:h-24 bg-white rounded-full p-1.5 shadow-2xl transition-transform group-hover:scale-105 flex items-center justify-center border-2 md:border-4 border-unilag-gold/30">
            <img src="/unilag.jpg" alt="Logo" className="w-[90%] h-[90%] object-contain" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-white font-serif text-xl md:text-3xl tracking-tighter leading-none">
              University Of Lagos
            </h1>
            <p className="text-unilag-gold text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] mt-1">
              UNILAG
            </p>
          </div>
        </Link>

        {/* DESKTOP MENU (Hidden on Mobile) */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-[11px] font-black uppercase tracking-[0.3em] text-white/80 hover:text-unilag-gold transition-all">{link.name}</a>
          ))}
          <Link to="/view-project">
            <button className="text-[11px] font-black uppercase tracking-[0.2em] text-unilag-maroon bg-unilag-gold px-8 py-3 rounded-sm hover:bg-white transition-all shadow-xl">
              View Project
            </button>
          </Link>
        </div>

        {/* MOBILE HAMBURGER BUTTON */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden flex flex-col gap-1.5 z-[110]"
        >
          <motion.span animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} className="w-8 h-0.5 bg-unilag-gold block"></motion.span>
          <motion.span animate={isOpen ? { opacity: 0 } : { opacity: 1 }} className="w-8 h-0.5 bg-unilag-gold block"></motion.span>
          <motion.span animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} className="w-8 h-0.5 bg-unilag-gold block"></motion.span>
        </button>
      </div>

      {/* MOBILE MENU PANEL */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-black z-[105] flex flex-col items-center justify-center gap-12 lg:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-2xl font-black uppercase tracking-[0.4em] text-white hover:text-unilag-gold"
              >
                {link.name}
              </a>
            ))}
            <Link to="/view-project" onClick={() => setIsOpen(false)}>
              <button className="text-[12px] font-black uppercase tracking-[0.2em] text-unilag-maroon bg-unilag-gold px-12 py-5 rounded-sm">
                View Project
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;