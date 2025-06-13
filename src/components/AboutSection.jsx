import React from 'react';

function AboutSection() {
  return (
    <section className="about" id="about">
      <div className="about-wrapper">
        <div className="about-content-left">
          <h2>Hi there! I'm Akshita</h2>
          <p>
            I'm a certified makeup artist who believes beauty begins with confidence.
            With a deep love for soft glam, radiant skin, and elegant transformations, 
            I’ve helped over <span className="highlight">100 brides</span> look and feel their best on their most important day.
          </p>
          <p>
            I’m also a trained <span className="highlight">hairstylist</span>, offering complete beauty packages that ensure a cohesive and polished look .
          </p>
          <p>
            My journey in makeup spans over <span className="highlight">4 years</span>, specializing in bridal, editorial, and event looks across India.
            Let’s create a timeless look that tells your story. 💄✨
          </p>
        </div>

        <div className="about-stats-right">
          <div className="stat-box">
            <h3>100+</h3>
            <p>Bridal Clients</p>
          </div>
          <div className="stat-box">
            <h3>4+</h3>
            <p>Years of Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
