import React, { useState } from 'react';
import './Contact.css';
import contactImage from './images/contact.jpg'; // apni image ka path daalo

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append('name', formData.name);
    form.append('email', formData.email);
    form.append('message', formData.message);

    try {
      const response = await fetch('https://formspree.io/f/xldbbdoa', {
        method: 'POST',
        body: form,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setStatus('Your message has been sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Oops! Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('Error submitting form. Please check your connection.');
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-top">
        <div className="contact-form">
          <h2>Convey Your Message With Us</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Your Name" name='name' value={formData.name} onChange={handleChange} required />
            <input type="email" placeholder="Your Email" name='email' value={formData.email} onChange={handleChange} required />
            <textarea placeholder="Your Message" rows="5" name='message' value={formData.message} onChange={handleChange} required></textarea>
            <button type="submit">Send Message</button>
          </form>
          {status && <p style={{ color: 'green', marginTop: '10px' }}>{status}</p>}
        </div>

        <div className="contact-image">
          <img src={contactImage} alt="Contact Us" />
        </div>
      </div>

      <hr style={{
        border: 'none',
        height: '4px',
        background: 'linear-gradient(to right, #ff6a00, #ee0979)',
        borderRadius: '2px',
        width: '80%',
        margin: '20px auto'
      }} />

      <div className="contact-bottom">
        <div className="contact-map">
          <iframe
            title="Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3399.627822708181!2d74.31828627430585!3d31.561827145094966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191bcfa3aaa041%3A0x2507b8f020014662!2sIcon%20shopping%20center!5e0!3m2!1sen!2s!4v1746424045457!5m2!1sen!2s"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="contact-info">
          <h3>Contact Info</h3>
          <p><strong>Email:</strong> info@stitchspeaks.com</p>
          <p><strong>WhatsApp:</strong> +92 315 4526202</p>
          <p><strong>Phone:</strong> +92 3154526202</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
