import React from 'react';

function TestimonialsSections() {
  const testimonials = [
    {
      img: '/images/hero3.jpg',
      text: '“Professional, warm, and extremely talented. My go-to for every event now.”',
      name: '— Riya Malhotra, Client',
    },
    {
      img: '/images/hero1.jpg',
      text: '“Her makeup lasted through tears, laughter and dancing. Just wow!”',
      name: '— Sanya Kapoor, Bride',
    },
    {
      img: '/images/hero2.jpg',
      text: '“Loved the subtlety and elegance. Akshita is a magician with brushes!”',
      name: '— Juhi Mehta, Model',
    },
    {
      img: '/images/hero3.jpg',
      text: '“From trial to wedding day, she was perfect. Thank you for everything.”',
      name: '— Tanya Verma, Client',
    },
  ];

  return (
    <section className="testimonials">
      <h2 className="testimonial-heading">Voices of Elegance & Confidence</h2>
      <p className="testimonial-subtext">
        Real words from beautiful souls I've had the joy to work with ✨
      </p>
      <div className="testimonial-grid">
        {testimonials.map((item, index) => (
          <div className="testimonial" key={index}>
            <img src={`${process.env.PUBLIC_URL}${item.img}`} alt="client" />
            <blockquote>
              {item.text}<br />
              <span className="client-name">{item.name}</span>
            </blockquote>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TestimonialsSections;
