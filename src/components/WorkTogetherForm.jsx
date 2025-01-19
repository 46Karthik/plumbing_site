import React, { useState } from "react";
import "../styles.css";
import illustration from "../assets/img/contactimg.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const WorkTogetherForm = () => {
  const initialFormData = {
    name: '',
    company: '',
    email: '',
    phone: '',
    requirements: ''
  };

  const [formData, setFormData] = useState(initialFormData);

  const alphaPattern = /^[A-Za-z\s]+$/;

  const validateForm = () => {
    let isValid = true;

    // Trim the values to remove extra spaces
    formData.name = formData.name.trim();
    formData.company = formData.company.trim();
    formData.email = formData.email.trim();
    formData.phone = formData.phone.trim();
    formData.requirements = formData.requirements.trim();

    // Name validation
    if (!formData.name) {
      toast.error("Name is required", { position: "top-right" });
      isValid = false;
    } else if (!alphaPattern.test(formData.name)) {
      toast.error("Name must contain only alphabets and spaces", { position: "top-right" });
      isValid = false;
    } else if (formData.name.length < 3) {
      toast.error("Name must be at least 3 characters long", { position: "top-right" });
      isValid = false;
    }

    // Company validation
    if (!formData.company) {
      toast.error("Company name is required", { position: "top-right" });
      isValid = false;
    } else if (!alphaPattern.test(formData.company)) {
      toast.error("Company name must contain only alphabets and spaces", { position: "top-right" });
      isValid = false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      toast.error("Email is required", { position: "top-right" });
      isValid = false;
    } else if (!emailPattern.test(formData.email)) {
      toast.error("Invalid email format", { position: "top-right" });
      isValid = false;
    }

    // Phone validation
    const phonePattern = /^[0-9]+$/;
    if (!formData.phone) {
      toast.error("Phone number is required", { position: "top-right" });
      isValid = false;
    } else if (!phonePattern.test(formData.phone)) {
      toast.error("Phone number must contain only digits", { position: "top-right" });
      isValid = false;
    } else if (formData.phone.length < 10 || formData.phone.length > 10) {
      toast.error("Phone number must be 10 digits.", { position: "top-right" });
      isValid = false;
    }

    // Requirements validation
    if (!formData.requirements) {
      toast.error("Requirements are required", { position: "top-right" });
      isValid = false;
    } else if (formData.requirements.length > 500) {
      toast.error("Requirements cannot exceed 500 characters", { position: "top-right" });
      isValid = false;
    }

    return isValid;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch('https://qttzg82hp3.execute-api.ap-south-1.amazonaws.com/v2/enquiryFormEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      if (response.ok) {
        // Success toast
        toast.success('Email sent successfully! We will reach back to you soon!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        // Reset form fields
        setFormData(initialFormData);
      } else {
        // Error toast
        toast.error(`Failed to send email: ${result.message}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      // Error toast
      toast.error('Error sending email', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="work-together-container">
      <div className="illustration-section">
        <h1 className="montserrat-medium">
          <hr />
          LET US <br />
          <span className="blue">
            WORK <span>TOGETHER</span>
          </span>
        </h1>
        <img
          src={illustration}
          alt="Work Together"
          className="illustration-image"
        />
      </div>
      <form className="form-section" onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            className="form-input half-width montserrat-medium"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="company"
            placeholder="Enter Company Name"
            className="form-input half-width montserrat-medium"
            value={formData.company}
            onChange={handleChange}
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder="Enter Email ID"
          className="form-input full-width montserrat-medium"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Enter Phone Number"
          className="form-input full-width montserrat-medium"
          value={formData.phone}
          onChange={handleChange}
        />
        <textarea
          name="requirements"
          placeholder="Your Requirements in words"
          className="form-input full-width textarea-input montserrat-regular"
          value={formData.requirements}
          onChange={handleChange}
        ></textarea>
        <button type="submit" className="submit-button montserrat-medium">SUBMIT</button>
      </form>

      {/* Toast Container for notifications */}
      <ToastContainer />
    </div>
  );
};

export default WorkTogetherForm;
