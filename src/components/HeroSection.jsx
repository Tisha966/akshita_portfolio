import React from 'react';
 // Replace with your actual CSS file name

function HeroSection() {
  return (
    <section className="hero">
      <div className="image-row">
        
        <img src={`${process.env.PUBLIC_URL}/images/img1.jpg`} alt="makeup3" />
        <img src={`${process.env.PUBLIC_URL}/images/img3.jpg`} alt="makeup1" />
        <img src={`${process.env.PUBLIC_URL}/images/img.jpg`} alt="makeup2" />
        
      </div>
 <h2
  style={{
    fontSize: '2rem',
    fontWeight: 600,
    marginTop: '20px',
    textAlign: 'center',
  }}
>
  Unveiling <span style={{ color: '#d5a373' }}>Beauty</span>, One{' '}
  <span style={{ color: '#d5a373' }}>Brushstroke</span> at a Time — by{' '}
  <span style={{ color: '#d5a373' }}>Akshita Gupta</span>
</h2>



    </section>
  );
}

export default HeroSection;
