import React, { useState } from 'react';
import './Contact.css'

const Contact= () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic to send form data here
  };

  return (
    <div className="contact-form-container" id='Contact-section'>
        <h1> Contact me!</h1>
      <form id="contact-form" onSubmit={handleSubmit} method="POST">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" value={formData.name} onChange={handleChange} name="name" placeholder='Enter your Name :'/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" aria-describedby="emailHelp" value={formData.email} onChange={handleChange} name="email" placeholder='Enter your Email :' />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea className="form-control" rows="5" value={formData.message} onChange={handleChange} name="message"  placeholder='Enter  Some message :' />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Contact;