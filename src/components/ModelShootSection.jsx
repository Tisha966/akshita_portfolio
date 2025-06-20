import React from 'react';


function ModelShootSection() {
  const shootImages = [
    '/images/1_aksh.jpg',
    '/images/2_aksh.jpg',
    '/images/3_aksh.jpg',
    '/images/4_aksh.jpg',
    '/images/5_aksh.jpg',
    '/images/6_aksh.jpg',
    
  ];

  return (
    <section className="model-shoot-section" id="shoots">
      <h2 className="shoot-heading">Editorial & Model Shoots</h2>
      <p className="shoot-subtext">Bold, expressive, and stunning – here’s a glimpse of Akshita's creative work behind the lens.</p>
      <div className="shoot-grid">
        {shootImages.map((src, index) => (
          <div className="shoot-image-wrapper" key={index}>
  <img src={process.env.PUBLIC_URL + src} alt={`Shoot ${index + 1}`} className="shoot-image" />
 <div className="shoot-overlay">Look {index + 1}</div>

</div>

        ))}
      </div>
    </section>
  );
}

export default ModelShootSection;
