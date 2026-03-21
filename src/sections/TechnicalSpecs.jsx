import React from 'react';

const TechnicalSpecs = () => {
  return (
    <section className="py-24 px-6 bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto border-t border-white/5 pt-20">
        <div className="grid md:grid-cols-3 gap-16">
          <div>
            <h4 className="text-unilag-gold font-bold mb-6 uppercase text-[10px] tracking-[0.3em]">Framework</h4>
            <p className="text-sm leading-relaxed text-slate-400 font-light">
              Powered by Vite & React 18. The site utilizes a component-based 
              architecture for seamless scalability and fast load times.
            </p>
          </div>
          <div>
            <h4 className="text-unilag-gold font-bold mb-6 uppercase text-[10px] tracking-[0.3em]">Visuals</h4>
            <p className="text-sm leading-relaxed text-slate-400 font-light">
              High-definition H.264 video rendering ensures that every 
              motion sequence maintains cinematic clarity at 1080p resolution.
            </p>
          </div>
          <div>
            <h4 className="text-unilag-gold font-bold mb-6 uppercase text-[10px] tracking-[0.3em]">Branding</h4>
            <p className="text-sm leading-relaxed text-slate-400 font-light">
              Strict adherence to University of Lagos brand guidelines, 
              focusing on the Maroon and Gold heritage color palette.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSpecs;