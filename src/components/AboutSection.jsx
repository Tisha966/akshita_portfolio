import React from 'react';


function AboutSection() {
  return (
    <section className="about" id="about">
      <div className="about-wrapper">
        <div className="about-text">
          <h2>Hi there! I'm Akshita</h2>
          <p>
            I'm a passionate makeup artist with a love for soft glam, radiant skin, and empowering beauty.
            I believe in enhancing your natural glow with a touch of art and heart. Let’s create something magical together! 💄✨
          </p>
          <button className="about-btn">Learn more about me</button>
        </div>
        <div className="about-images">
          <img className="img-main" src="/images/Akshita.jpg" alt="Akshita" />
          <img className="img-small" src="/images/Screenshot (298).png" alt="Makeup Work" />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
