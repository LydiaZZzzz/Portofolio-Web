import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-page">
      <h2>Contact</h2>
      <p>
        Want to work together or have a question? Fill out the form below or email me at <a href="mailto:yunqingzhao@email.com">yzhao73@uw.com</a>
      </p>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows={5} required />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact; 