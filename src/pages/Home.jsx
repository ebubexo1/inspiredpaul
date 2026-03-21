import React from 'react';
import Hero from '../sections/Hero';
import AboutProject from '../sections/AboutProject';
import ProjectGrid from '../sections/ProjectGrid';
import TechnicalSpecs from '../sections/TechnicalSpecs';

const Home = () => {
  return (
    <main className="bg-unilag-lightgold">
      {/* Hero contains the 60s Video */}
      <Hero />
      
      {/* AboutProject contains Paul's profile and text */}
      <AboutProject />
      
      {/* ProjectGrid contains the 4 static images */}
      <ProjectGrid />
      
      {/* TechnicalSpecs contains the Platform Infrastructure */}
      <TechnicalSpecs />
    </main>
  );
};

export default Home;