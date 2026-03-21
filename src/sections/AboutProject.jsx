import React from 'react';
import { motion } from 'framer-motion';

const AboutProject = () => {
  return (
    <section id="about" className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        
        {/* THE IMAGE CONTAINER */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute -inset-4 bg-unilag-gold/20 rounded-full blur-3xl group-hover:bg-unilag-maroon/10 transition-all"></div>
          <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-slate-100">
            <img 
              src="/paul.jpg" 
              alt="Lead Artist" 
              /* FIXED: object-top ensures the head is never cut off */
              className="w-full h-[550px] md:h-[650px] object-cover object-top transition-all duration-700 group-hover:scale-105" 
            />
            {/* Elegant Overlay Label */}
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-xl">
              <p className="text-unilag-maroon font-black text-[10px] uppercase tracking-widest">Project Lead / VSA 490</p>
            </div>
          </div>
        </motion.div>

        {/* TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-unilag-maroon font-black text-xs uppercase tracking-[0.4em]">
            The Visionary
          </span>
          <h3 className="text-5xl font-serif italic text-slate-900 mt-6 mb-8 leading-tight">
            Preserving Culture <br/>through <span className="text-unilag-maroon border-b-4 border-unilag-gold/30">Digital Art.</span>
          </h3>
          <p className="text-slate-600 text-lg mb-10 font-light leading-relaxed">
            This project explores the delicate balance between ancestral 
            African aesthetics and modern digital toolkits. By utilizing 
            React and Motion Graphics, we bring the "Àṣà" spirit into the 
            21st-century web experience.
          </p>
          <div className="h-px w-full bg-slate-100 mb-10"></div>
          <div className="flex gap-16">
            <div>
              <p className="text-3xl font-black text-unilag-maroon">01</p>
              <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mt-1">Full Campaign</p>
            </div>
            <div>
              <p className="text-3xl font-black text-unilag-maroon">60s</p>
              <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mt-1">Runtime</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutProject;