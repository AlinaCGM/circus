import React, { useState } from "react";
import MapPlaceholder from "../../assets/placeholder-map.png";
import "bootstrap/dist/css/bootstrap.min.css";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send the data to a server)
    console.log(formData);
  };

  return (
    <div>
    <div className="container d-flex justify-content-center align-items-center">
      <div className="jumbotron jumbotron-fluid">
        <header>
          <h2>Contact Us</h2>
        </header>
      </div>
      <div className="row">
        <div className="col-6">
          <div>
            <img
              src={MapPlaceholder}
              alt="Map Placeholder"
              style={{ width: "100%", height: "300px" }}
            />
          </div>
          <div className="contact-info">
            <p>Address: 123 Centralen, Stockholm, Sweden</p>
            <p>Email: contact@ouremail.com</p>
            <p>Phone: +46 (123) 456-7890</p>
          </div>
        </div>
        <div className="col-6">
          <h3>Contact Form</h3>
          <form className="mb-3" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  
  );
}

export default ContactUs;
