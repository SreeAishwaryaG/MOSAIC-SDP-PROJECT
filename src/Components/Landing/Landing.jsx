// src/HomePage.js
import React from 'react';
import HeroSection from '../Landing/Hero';

import EventCarousel from '../Landing/EventCarousel';
import FaqComponent from '../Landing/FAQ';
import Header1 from '../Header/Header1';




const Landing = () => {
  return (
    <div>
      <Header1/>
      <HeroSection />
     <EventCarousel/>
      
      
    </div>
  );
};

export default Landing;
