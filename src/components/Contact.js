import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <div className="section-container">
        <h2 className="section-title">Contact Me</h2>
        <p style={{ textAlign: 'center', maxWidth: '600px', margin: '-30px auto 40px auto', color: 'var(--text-secondary)' }}>
          Have a question or want to work together? Feel free to reach out!
        </p>
        <form 
          action="https://formspree.io/f/mnnbyeyw" // <-- IMPORTANT: REPLACE THIS
          method="POST" 
          className="contact-form"
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;