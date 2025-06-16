import React, { useState } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";

const Contact = () => {
  console.log("Contact component loaded");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        formData,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then((response) => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        alert("Failed to send message, please try again later.");
        console.error(error);
      });
  };

  return (
    <div className="contact-form-container" id="Contact-section">
      <h1>Contact me!</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            name="name"
            placeholder="Enter your Name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            name="email"
            placeholder="Enter your Email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            className="form-control"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            name="message"
            placeholder="Enter your message"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
