import React from 'react';
import { motion } from 'framer-motion';

const ProjectGrid = () => {
  const images = [
    { id: 1, src: "/1.jpg", tag: "Editorial Design" },
    { id: 2, src: "/2.jpg", tag: "Product Branding" },
    { id: 3, src: "/3.jpg", tag: "Layout Design" },
    { id: 4, src: "/4.jpg", tag: "Digital Campaign" },
    { id: 5, src: "/5.jpg", tag: "Book Illustration" }, // Fixed ID to 5
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="gallery" className="py-32 px-6 bg-[#080808]">
      <div className="max-w-[1400px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16 border-l-4 border-unilag-gold pl-6"
        >
          <h3 className="text-unilag-gold font-serif text-4xl italic">The Collection.</h3>
          <p className="text-zinc-500 text-[10px] uppercase tracking-[0.3em] mt-2">VSA 490 Digital Assets</p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          // lg:grid-cols-5 makes it 5 in a row
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {images.map((img) => (
            <motion.div 
              key={img.id} 
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="relative aspect-[3/4] overflow-hidden rounded-xl bg-zinc-900 group cursor-pointer"
            >
              <img 
                src={img.src} 
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-unilag-gold font-black uppercase tracking-widest text-[9px] border-b border-unilag-gold pb-1">
                  {img.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectGrid;