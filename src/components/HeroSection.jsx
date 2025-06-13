import React from 'react';

function HeroSection() {
  return (
    <section className="hero">
      <div className="image-row">
        <img src="/images/hero1.jpg" alt="makeup1" />
        <img src="/images/hero2.jpg" alt="makeup2" />
        <img src="/images/hero3.jpg" alt="makeup3" />
      </div>
      <h2><span className="mua">MUA</span> based in <span className="location">India</span></h2>
    </section>
  );
}

export default HeroSection;