import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectDetail = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0 }}
      className="pt-40 pb-20 px-6 bg-white min-h-screen selection:bg-unilag-maroon selection:text-white"
    >
      <div className="max-w-4xl mx-auto">
        
        {/* TOP BREADCRUMB */}
        <Link 
          to="/" 
          className="text-unilag-maroon font-black text-[10px] uppercase tracking-[0.4em] mb-8 block hover:opacity-70 transition-opacity"
        >
          ← Return to Home
        </Link>
        
        <header className="mb-16">
          <h1 className="text-5xl md:text-7xl font-serif italic text-slate-900 leading-tight">
            The <span className="text-unilag-maroon">Technical</span> <br/>Manifesto.
          </h1>
          <div className="w-24 h-1 bg-unilag-gold mt-6"></div>
        </header>

        {/* IMAGE CASE STUDY: object-top fix included */}
        <div className="rounded-[2rem] overflow-hidden shadow-2xl mb-20 bg-slate-100 border border-slate-100">
          <img 
            src="/paul.jpg" 
            alt="Lead Artist Documentation" 
            className="w-full h-[600px] md:h-[800px] object-cover object-top" 
          />
        </div>

        {/* GRID CONTENT */}
        <div className="grid md:grid-cols-2 gap-16 text-slate-600">
          <div className="space-y-6">
            <h3 className="font-black text-slate-900 uppercase text-xs tracking-widest">Project Scope</h3>
            <p className="leading-relaxed text-sm">
              Submitted for <strong>VSA 490: Digital Media Design</strong>. This project serves as a bridge 
              between traditional Unilag Fine Arts principles and 21st-century web technologies.
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="font-black text-slate-900 uppercase text-xs tracking-widest">Digital Toolkit</h3>
            <div className="flex flex-wrap gap-2">
              {['React 18', 'Tailwind', 'Framer Motion', 'Vite'].map(tool => (
                <span key={tool} className="px-4 py-1.5 bg-slate-100 text-[10px] font-bold rounded-full uppercase tracking-tighter">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;