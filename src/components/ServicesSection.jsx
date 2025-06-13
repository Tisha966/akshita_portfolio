import React from 'react';

function ServicesSection() {
  const services = [
    {
      img: '/images/hero1.jpg',
      title: 'Soft Glam Look',
      desc: 'A subtle, radiant makeup style that enhances your features—perfect for daytime events and casual occasions.',
    },
    {
      img: '/images/hero2.jpg',
      title: 'Glam Look with Lashes',
      desc: 'For those who love drama—full lashes, glowing skin, and bold beauty for your big night out or celebration.',
    },
    {
      img: '/images/hero3.jpg',
      title: 'Formal / Party Makeup',
      desc: 'An elegant, long-lasting look for evening parties, corporate events, or formal occasions.',
    },
    {
      img: '/images/hero2.jpg',
      title: 'Bridal Makeup',
      desc: 'A timeless bridal transformation tailored to your outfit and vision. Trials available on request.',
    },
  ];

  return (
    <section className="services" id="services">
      <h2>SERVICES</h2>
      <p className="service-intro">
        Whether it’s your big day or a special event, I offer tailored makeup services to bring out your natural beauty with elegance and confidence.
      </p>
      <div className="scrolling-wrapper">
        <div className="scrolling-track">
          {[...services, ...services].map((service, index) => (
            <div className="service-card" key={index}>
              <img src={`${process.env.PUBLIC_URL}${service.img}`} alt={service.title} />
              <h3>{service.title}</h3>
              <p className="desc">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <button className="book-btn">Contact me for a booking</button>
    </section>
  );
}

export default ServicesSection;
