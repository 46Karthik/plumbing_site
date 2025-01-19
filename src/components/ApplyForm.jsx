import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ApplyForm = ({ jobTitles }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    whatsapp: '',
    role: '',
    experience: '',
    ctc: '',
    message: ''
  });
  const [file, setFile] = useState(null);
  const [fileError, setFileError] = useState("");
  const [agree, setAgree] = useState(false);
  
  const maxFileSize = 5 * 1024 * 1024;
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.size > maxFileSize) {
      setFileError("File size exceeds 5MB limit.");
      setFile(null);
    } else if (selectedFile && (selectedFile.type !== 'application/pdf' && selectedFile.type !== 'application/vnd.openxmlformats-officedocument.wordprocessingml.document')) {
      setFileError("Invalid file type. Only .pdf and .docx are allowed.");
      setFile(null);
    } else {
      setFileError("");
      setFile(selectedFile);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!agree) {
      toast.error("Please accept the Terms & Conditions and Privacy Policy.");
      return;
    }
    
    if (fileError) {
      toast.error("Please upload a valid file.");
      return;
    }

    try {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64File = reader.result.split(',')[1];
        const fileType = file.type; // Get the MIME type
        const response = await fetch('https://v46cu5z899.execute-api.ap-south-1.amazonaws.com/v2/jobApplicationEmail', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ ...formData, file: base64File, fileType })
        });

        const result = await response.json();
        if (response.ok) {
          toast.success('Form submitted successfully!');
          // Clear form fields, file, and checkbox after successful submission
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            mobile: '',
            whatsapp: '',
            role: '',
            experience: '',
            ctc: '',
            message: ''
          });
          setFile(null);
          setAgree(false);
          
          // Reset file input and checkbox
          document.querySelector('input[type="file"]').value = ''; // Reset file input
          document.querySelector('input[type="checkbox"]').checked = false; // Reset checkbox
        } else {
          toast.error(`Failed to submit form: ${result.message}`);
        }
      };
      reader.readAsDataURL(file);
    } catch (error) {
      toast.error('Error submitting form');
    }
  };

  return (
    <div className="apply-form-container">
      <h2 className="careers-apply-text montserrat-medium">Apply Here</h2>
      <form className="apply-form" onSubmit={handleSubmit}>
        <div className="careers-form-group montserrat-regular">
          <label>First Name <span style={{ color: "red" }}>*</span></label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </div>
        <div className="careers-form-group montserrat-regular">
          <label>Last Name <span style={{ color: "red" }}>*</span></label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </div>
        <div className="careers-form-group montserrat-regular">
          <label>Email Address <span style={{ color: "red" }}>*</span></label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="careers-form-group montserrat-regular">
          <label>Mobile Number <span style={{ color: "red" }}>*</span></label>
          <input
            type="tel"
            name="mobile"
            placeholder="+91XXXXX"
            pattern="^\+?\d{10,13}$"
            title="Please enter a valid phone number"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </div>
        <div className="careers-form-group montserrat-regular">
          <label>WhatsApp Number <span style={{ color: "red" }}>*</span></label>
          <input
            type="tel"
            name="whatsapp"
            pattern="^\+?\d{10,13}$"
            title="Please enter a valid WhatsApp number"
            value={formData.whatsapp}
            onChange={handleChange}
            required
          />
        </div>
        <div className="careers-form-group montserrat-regular">
          <label>Role Applying For <span style={{ color: "red" }}>*</span></label>
          <select name="role" value={formData.role} onChange={handleChange} required>
            <option value="">Select a role</option>
            {jobTitles.map((title, index) => (
              <option key={index} value={title}>{title}</option>
            ))}
          </select>
        </div>
        <div className="careers-form-group montserrat-regular">
          <label>Total Experience (Months) <span style={{ color: "red" }}>*</span></label>
          <input type="number" name="experience" min="0" value={formData.experience} onChange={handleChange} required />
        </div>
        <div className="careers-form-group montserrat-regular">
          <label>Current Annual CTC <span style={{ color: "red" }}>*</span></label>
          <input type="number" name="ctc" min="0" value={formData.ctc} onChange={handleChange} required />
        </div>
        <div className="careers-form-group montserrat-regular">
          <label>Upload Resume <span style={{ color: "red" }}>*(less than 5MB)</span></label>
          <input type="file" name="resume" onChange={handleFileChange} required />
          {fileError && <p style={{ color: "red" }}>{fileError}</p>}
        </div>
        <div className="careers-form-group montserrat-regular">
          <label>Message</label>
          <textarea name="message" maxLength="200" value={formData.message} onChange={handleChange}></textarea>
        </div>
        <div className="careers-form-group-checkbox montserrat-regular">
          <label>
            <input type="checkbox" onChange={() => setAgree(!agree)} checked={agree} /> I accept the Terms & Conditions and Privacy Policy
          </label>
        </div>
        <button type="submit" className="careers-submit-button montserrat-regular" disabled={!agree}>
          Submit
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ApplyForm;
