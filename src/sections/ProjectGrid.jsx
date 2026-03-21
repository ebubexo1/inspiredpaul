import React from 'react';
import { motion } from 'framer-motion';

const ProjectGrid = () => {
  const images = [
    { id: 1, src: "/project-1.jpg", tag: "Sculpture" },
    { id: 2, src: "/project-2.jpg", tag: "Textile" },
    { id: 3, src: "/project-3.jpg", tag: "Painting" },
    { id: 4, src: "/project-4.jpg", tag: "Digital" },
  ];

  // 1. Container Variants (Controls the timing of the children)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // 0.2s gap between each image appearing
      },
    },
  };

  // 2. Individual Item Variants (The actual movement)
  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  return (
    <section id="gallery" className="py-32 px-6 bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        
        {/* Animated Section Header */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16 border-l-4 border-unilag-gold pl-6"
        >
          <h3 className="text-unilag-gold font-serif text-4xl italic">The Collection.</h3>
          <p className="text-zinc-500 text-xs uppercase tracking-[0.3em] mt-2">VSA 490 Digital Assets</p>
        </motion.div>

        {/* 3. The Animated Grid Container */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }} // Triggers slightly before it enters the screen
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {images.map((img) => (
            <motion.div 
              key={img.id} 
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }} // Gentle lift on hover
              className="relative aspect-[3/4] overflow-hidden rounded-xl bg-zinc-900 group cursor-pointer"
            >
              <img 
                src={img.src} 
                alt={img.tag} 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110" 
              />
              
              {/* Animated Tag Overlay */}
              <div className="absolute inset-0 flex items-end p-8 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <motion.span 
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
                  className="text-unilag-gold font-black uppercase tracking-[0.4em] text-[10px] border-b border-unilag-gold pb-1"
                >
                  {img.tag}
                </motion.span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectGrid;