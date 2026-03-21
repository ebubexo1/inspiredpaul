import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectDetail = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-32 pb-20 px-6 min-h-screen bg-slate-50 text-slate-900"
    >
      <div className="max-w-4xl mx-auto">
        
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="mb-12 text-center">
          <Link to="/" className="text-unilag-maroon font-black text-[10px] uppercase tracking-[0.3em] hover:text-unilag-gold transition-colors">
            ← Return to Home
          </Link>
          <h1 className="text-5xl md:text-6xl font-serif italic mt-8 mb-4">Project Documentation</h1>
          <div className="w-20 h-1 bg-unilag-gold mx-auto"></div>
        </motion.div>

        {/* FEATURED IMAGE - NO CROP VERSION */}
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-4 rounded-3xl shadow-2xl mb-16"
        >
          <img 
            src="/paul.jpg" 
            alt="Documentation" 
            /* h-auto and object-contain ensures the entire paper/photo is visible */
            className="w-full h-auto rounded-2xl" 
          />
        </motion.div>

        {/* INFO GRID */}
        <div className="grid md:grid-cols-2 gap-12 bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
          <div>
            <h4 className="font-black uppercase text-[10px] tracking-widest text-unilag-maroon mb-4">Technical Process</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              The project involved high-resolution scanning of physical assets, 
              followed by digital compositing in Adobe Suite and final deployment 
              using the React framework.
            </p>
          </div>
          <div>
            <h4 className="font-black uppercase text-[10px] tracking-widest text-unilag-maroon mb-4">Exam Specs</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              <strong>Course:</strong> VSA 490 (Digital Media Design)<br/>
              <strong>Assessment:</strong> First Semester (2025/2026)<br/>
              <strong>Lecturer:</strong> Dr. Timothy Olusola Ogunfuwa
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;