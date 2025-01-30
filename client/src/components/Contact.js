import React, { useState, useEffect } from "react";
import { FiRefreshCcw } from "react-icons/fi";
import emailjs from "emailjs-com";
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "+91",
    state: "",
    city: "",
    program: "",
    course: "",
    captchaInput: "",
    consent: false,
  });

  const [randomCaptcha, setRandomCaptcha] = useState("");

  useEffect(() => {
    generateRandomCaptcha();
  }, []);

  const generateRandomCaptcha = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const captcha = Array(6)
      .fill("")
      .map(() => characters.charAt(Math.floor(Math.random() * characters.length)))
      .join("");
    setRandomCaptcha(captcha);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.captchaInput !== randomCaptcha) {
      alert("Verification text does not match. Please try again.");
      return;
    }

    emailjs
      .sendForm(
        "service_3ed972u",
        "template_zk1fyff",
        e.target,
        "ZnIrZI85v_pjWa64X"
      )
      .then(
        (result) => {
          alert("Form submitted successfully!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            countryCode: "+91",
            state: "",
            city: "",
            program: "",
            course: "",
            captchaInput: "",
            consent: false,
          });
          generateRandomCaptcha();
        },
        (error) => {
          alert("Error submitting form: ", error.text);
        }
      );
  };

  return (
    <div className="contact-container">
      {/* Enquiry Form Card */}
      <div className="form-card">
        <h1 className="form-title">Enquiry Form</h1>
        <form onSubmit={handleSubmit} className="form">
          {/* Form inputs */}
          <input
            type="text"
            name="name"
            placeholder="Enter Name *"
            value={formData.name}
            onChange={handleChange}
            required
            className="input"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Email Address *"
            value={formData.email}
            onChange={handleChange}
            required
            className="input"
          />
          <div className="row">
            <select
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
              required
              className="input-z"
            >
              <option value="+91">+91</option>
              <option value="+1">+1</option>
              <option value="+44">+44</option>
            </select>
            <input
              type="text"
              name="phone"
              placeholder="Enter Mobile Number *"
              value={formData.phone}
              onChange={handleChange}
              required
              className="input-small"
            />
          </div>
          <div className="row">
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
              className="input-small2"
            >
              <option value="">Select State *</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Gujarat">Gujarat</option>
            </select>
            <select
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              className="input-small2"
            >
              <option value="">Select City *</option>
              <option value="Nashik">Nashik</option>
              <option value="Mumbai">Mumbai</option>
            </select>
          </div>
          <div className="row">
            <select
              name="program"
              value={formData.program}
              onChange={handleChange}
              required
              className="input-small2"
            >
              <option value="">Select Program *</option>
              <option value="MCA">MCA</option>
              <option value="BCA">BCA</option>
            </select>
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
              className="input-small2"
            >
              <option value="">Select Course *</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Information Technology">Information Technology</option>
            </select>
          </div>
          <div className="captcha-row">
            <span className="captcha">{randomCaptcha}</span>
            <button
              type="button"
              onClick={generateRandomCaptcha}
              className="refresh-btn"
            >
              <FiRefreshCcw />
            </button>
            <input
              type="text"
              name="captchaInput"
              placeholder="Enter text as shown"
              value={formData.captchaInput}
              onChange={handleChange}
              required
              className="captcha-input"
            />
          </div>
          <div className="verification-text">
            Please type the text shown above to verify your identity.
          </div>
          <div className="row checkbox-row">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              required
              className="checkbox"
            />
            <label>
  I agree to receive information regarding my submitted enquiry on <br />
  K K Wagh Institute of Engineering Education and Research.*
</label>

          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>

      {/* Map and Contact Address Card */}
      <div className="contact-details">
        <div className="map-container">
          {/* Embed your map here */}
          <iframe
            title="Google Map Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234.30465641736447!2d73.82216219309251!3d20.013781184354162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddebab15555555%3A0xdb01367e9d5cf969!2sK.K%20Wagh%20Institute%20Of%20Engineering%20Education%20and%20Research!5e0!3m2!1sen!2sin!4v1738175445671!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="address-card">
          <div className="card">
            <h3>Contact Address</h3>
            <p>K K Wagh Institute of Engineering Education and Research</p>
            <p>Address Line 1, City, State, ZIP Code</p>
            <p>Phone: +91 123 456 7890</p>
            <p>Email: contact@kkwagh.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
