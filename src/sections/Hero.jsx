import React from 'react';
import { motion } from 'framer-motion';
import VideoPlayer from '../components/VideoPlayer';

const Hero = () => {
  // Animation variants for the "Stagger" effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Each child waits 0.3s before starting
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    },
  };

  return (
    <section id="video" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-black">
      
      {/* 1. THE TINTED BACKGROUND WITH SCALE ANIMATION */}
      <motion.div 
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="/art1.jpg" 
          alt="African Art Background" 
          className="w-full h-full object-cover"
        />
        {/* The Tint Overlays */}
        <div className="absolute inset-0 bg-black/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-unilag-maroon/20"></div>
      </motion.div>

      {/* 2. THE CONTENT LAYER */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto text-center pt-32"
      >
        {/* Animated Subtitle */}
        <motion.h2 
          variants={itemVariants}
          className="text-unilag-gold font-bold text-xs tracking-[0.6em] uppercase mb-6 drop-shadow-lg"
        >
          FINE & APPLIED ARTS • UNIVERSITY OF LAGOS
        </motion.h2>

        {/* Animated Main Title */}
        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.85] mb-8"
        >
          Where <span className="text-unilag-gold italic font-serif">Tradition</span> <br/> 
          Meets <motion.span 
                  animate={{ color: ["#ffffff", "#dc2626", "#ffffff"] }} 
                  transition={{ duration: 4, repeat: Infinity }}
                >Vision</motion.span>
        </motion.h1>

        {/* Animated Description */}
        <motion.p 
          variants={itemVariants}
          className="text-slate-400 max-w-2xl mx-auto text-lg mb-12 font-medium"
        >
          A 60-second cinematic exploration of contemporary African culture 
          integrated into a high-performance React environment.
        </motion.p>
        
        {/* Animated Video Player Container */}
        <motion.div 
          variants={itemVariants}
          className="max-w-4xl mx-auto shadow-[0_0_50px_rgba(125,0,0,0.3)] border-4 border-white/5 rounded-[2.5rem] overflow-hidden"
        >
          <VideoPlayer videoSrc="/project1.mp4" posterSrc="/video-thumbnail.jpg" />
        </motion.div>

        {/* Floating Call to Action */}
        <motion.div variants={itemVariants} className="mt-12">
          <button className="bg-unilag-gold text-unilag-maroon px-10 py-4 rounded-sm font-black uppercase text-xs tracking-widest hover:bg-white transition-all shadow-2xl">
            Explore Collection
          </button>
        </motion.div>
      </motion.div>

      {/* Visual Scroll Indicator (Bonus for Aesthetics Marks) */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-1 h-12 bg-gradient-to-b from-unilag-gold to-transparent rounded-full"
      />
    </section>
  );
};

export default Hero;