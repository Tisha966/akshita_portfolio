import React from 'react';

function ServicesSection() {
  return (
    <section className="services">
      <h2>SERVICES</h2>
      <div className="service-list">
        <div>
          <img src="/images/hero1.jpg" alt="no lashes" />
          <p>Full face without lashes</p>
        </div>
        <div>
          <img src="/images/hero2.jpg" alt="with lashes" />
          <p>Full face with lashes</p>
        </div>
        <div>
          <img src="/images/hero3.jpg" alt="formal makeup" />
          <p>Formal makeup</p>
        </div>
        <div>
          <img src="/images/hero2.jpg" alt="bridal makeup" />
          <p>Bridal makeup</p>
        </div>
      </div>
      <button className="book-btn">Contact me for a booking</button>
    </section>
  );
}

export default ServicesSection;