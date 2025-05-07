import React, { useState } from 'react';
import './Measurements.css'; 
import img1 from './images/111.jpg'

const Measurement = () => {
  const [formData, setFormData] = useState({
    name: '',
    neck: '',
    chest: '',
    shoulder: '',
    arms: '',
    belly: '',
    length: '',
    comment: '',
  });

  const [customers, setCustomers] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setCustomers([...customers, formData]);

    const formDataObject = new FormData();
    for (const key in formData) {
      formDataObject.append(key, formData[key]);
    }

    try {
      const response = await fetch('https://formspree.io/f/xyzwwzbo', {
        method: 'POST',
        body: formDataObject,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        alert('Measurement submitted successfully!');
      } else {
        alert('Oops! Something went wrong while sending email.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Network error while submitting form.');
    }

    setFormData({
      name: '',
      neck: '',
      chest: '',
      shoulder: '',
      arms: '',
      belly: '',
      length: '',
      comment: '',
    });
  };

  return (
    <div style={{ marginTop:"120px" , padding:"1rem"}}>
      <div className="measurement-container">
        <div className="form-section">
          <h2>Body Measurements</h2>
        
          <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />

            <label>Neck Size (inches):</label>
            <input type="number" name="neck" value={formData.neck} onChange={handleChange} required />

            <label>Chest Size (inches):</label>
            <input type="number" name="chest" value={formData.chest} onChange={handleChange} required />

            <label>Shoulder Size (inches):</label>
            <input type="number" name="shoulder" value={formData.shoulder} onChange={handleChange} required />

            <label>Arms Length (inches):</label>
            <input type="number" name="arms" value={formData.arms} onChange={handleChange} required />

            <label>Belly Size (inches):</label>
            <input type="number" name="belly" value={formData.belly} onChange={handleChange} required />

            <label>Length (inches):</label>
            <input type="number" name="length" value={formData.length} onChange={handleChange} required />

            <label>Design Comment:</label>
            <textarea name="comment" value={formData.comment} onChange={handleChange}></textarea>

            <button type='submit'>Submit Measurement</button>
          </form>
        </div>

        <div className="details-section">
          <div className="image-circle">
            <img src={img1} alt="Customer" />
          </div>
          <h3 style={{marginTop:"50px"}}>Customer Details</h3>
          {customers.length === 0 ? (
            <p>No measurements submitted yet.</p>
          ) : (
            customers.map((customer, index) => (
              <div key={index} className="customer-card">
                <strong>Name:</strong> {customer.name} <br />
                <strong>Neck:</strong> {customer.neck}" <br />
                <strong>Chest:</strong> {customer.chest}" <br />
                <strong>Shoulder:</strong> {customer.shoulder}" <br />
                <strong>Arms:</strong> {customer.arms}" <br />
                <strong>Belly:</strong> {customer.belly}" <br />
                <strong>Length:</strong> {customer.length}" <br />
                <strong>Comment:</strong> {customer.comment}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Measurement;
