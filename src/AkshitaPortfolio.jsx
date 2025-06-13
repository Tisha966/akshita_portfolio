import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import Footer from './components/Footer';
import TestimonialsSections from './components/TestimonialsSections';


function AkshitaPortfolio() {
  return (
    <div className="app">
      <Navbar />
      
      
      
      
     
      <section id="home">
  <HeroSection />
</section>



<section id="about">
  <AboutSection />
</section>
<section id="services">
  <ServicesSection />
</section>
<section id="testimonials">
  <TestimonialsSections />
</section>

<section id="contact">
  <Footer />
</section>

    </div>
  );
}

export default AkshitaPortfolio;
