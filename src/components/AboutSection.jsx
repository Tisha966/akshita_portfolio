import React from 'react';

function AboutSection() {
  return (
    <section className="about" id="about">
      <div className="about-wrapper">
        <div className="about-text">
          <h2>Hi there! I'm Akshita</h2>
          <p>
            I'm a certified makeup artist who believes beauty begins with confidence.
            With a deep love for soft glam, radiant skin, and elegant transformations, 
            I’ve helped over <span style={{ color: '#d5a373', fontWeight: '600' }}>100 brides</span> look and feel their best on their most important day.
          </p>
          <p>
            My journey in makeup spans over <span style={{ color: '#d5a373', fontWeight: '600' }}>4 years</span>, specializing in bridal, editorial, and event looks across India.
            Let’s create a timeless look that tells your story. 💄✨
          </p>

          <div className="about-stats">
            <div>
              <h3>100+</h3>
              <p>Bridal Clients</p>
            </div>
            <div>
              <h3>4+</h3>
              <p>Years of Experience</p>
            </div>
            
          </div>

          
        </div>

        <div className="about-images">
          <img className="img-main" src={`${process.env.PUBLIC_URL}/images/Akshita.jpg`} alt="Akshita" />
          <img className="img-small" src={`${process.env.PUBLIC_URL}/images/Screenshot (298).png`} alt="Makeup Work" />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
