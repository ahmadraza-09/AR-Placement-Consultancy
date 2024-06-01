import React, { useEffect, useState } from 'react';
import '../css/contact.css';
import axios from 'axios';

const ContactComp = () => {
  const [fileName, setFileName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [resume, setResume] = useState('');
  const [formError, setFormError] = useState('');
  const nameRegex = /^[a-zA-Z]{2,15}$/;
  const mobileNumberRegex = /^[0-9]{10}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  const firstNameHandler = (event) => {
    setFirstName(event.target.value);
  }

  const lastNameHandler = (event) => {
    setLastName(event.target.value);
  }

  const emailHandler = (event) => {
    setEmail(event.target.value);
  }

  const mobilenumberHandler = (event) => {
    setMobileNumber(event.target.value);
  }

  const messageHandler = (event) => {
    setMessage(event.target.value);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleFileChange = (e) => {
    setFileName(e.target.files[0].name);
    setResume(e.target.files[0]);
  };

  const submitHandler = (e) => {
    e.preventDefault(); {
        if (firstName === '') {
            setFormError("Enter your First Name");
            return false;
        } else if (!firstName.match(nameRegex)) {
            setFormError("Enter First Name in Letters");
            return false;
        } else if (lastName === '') {
            setFormError("Enter your Last Name");
            return false;
        } else if (!lastName.match(nameRegex)) {
            setFormError("Enter Last Name in Letters");
            return false;
        } else if (email === '') {
            setFormError("Enter your Email");
            return false;
        } else if (!email.match(emailRegex)) {
            setFormError("Enter Valid Email");
            return false;
        } else if (mobileNumber === '') {
            setFormError("Enter your Mobile Number");
            return false;
        } else if (!mobileNumber.match(mobileNumberRegex)) {
            setFormError("Only 10 Digits and Valid Mobile Number");
            return false;
        } else if (message === '') {
            setFormError("Write your Message");
            return false;
        } else if (resume === '') {
            setFormError("Upload your Resume");
            return false;
        } else if (resume.size > 5 * 1024 * 1024) {
            setFormError("File size exceeds the limit of 5MB");
        } else {
                const contactData = new FormData();
                contactData.append('firstname', firstName);
                contactData.append('lastname', lastName);
                contactData.append('email', email);
                contactData.append('mobilenumber', mobileNumber);
                contactData.append('message', message);
                contactData.append('resume', resume);
                axios.post('http://localhost:3060/auth/contact', contactData)
                    .then((response) => {
                    const responseData = response.data;
                    console.log("Response data:", responseData);
                        const message = responseData.message;
                        console.log("Message:", message);
                        if (message === "Please fill the form and upload the file") {
                            setFormError("Please fill the form and upload the file");
                        } else {
                            alert("Application Sent Successfully");
                            setFirstName('');
                            setLastName('');
                            setMobileNumber('');
                            setEmail('');
                            setMessage('');
                            setResume('');
                            setFileName('');
                            setFormError('');
                        }
                })
                .catch((error) => {
                    console.error("Error contacting:", error);
                    setFormError("Contact Request failed");
                });
            }
      }
  }

  return (
    <div className="contact-section">
      <div className="contact-section-left">
        <form onSubmit={submitHandler}>
          <h2>Contact</h2>
          {formError && <p className="error-message">{formError}</p>}
          <div className="input-box">
            <input type="text" placeholder="First Name" value={firstName} onChange={firstNameHandler}/>
            <input type="text" placeholder="Last Name" value={lastName} onChange={lastNameHandler}/>
          </div>
          <input type="email" placeholder="Email" value={email} onChange={emailHandler}/>
          <input type="text" placeholder="Mobile Number" value={mobileNumber} onChange={mobilenumberHandler}/>
          <textarea name="message" cols="30" rows="10" placeholder="Message" value={message} onChange={messageHandler}/>
          <input type="file" id="upload" onChange={handleFileChange} />
          <div className="input-box">
            <label htmlFor="upload" className="upload-resume">
              <i className="fa-solid fa-upload"></i>
              {fileName ? fileName : 'Upload Resume'}
            </label>
            <p><p className="upload-info">File size limit: 5 MB</p></p>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
      <div className="contact-section-right">
        <div className="contact-box">
          <div className="contact-box-left">
            <i className="fa-solid fa-location-dot"></i>
          </div>
          <div className="contact-box-right">
            <p>Plot Number 145, Sector 16A Greater Noida West, UP, IN</p>
          </div>
        </div>
        <div className="contact-box">
          <div className="contact-box-left">
            <i className="fa-solid fa-phone-volume"></i>
          </div>
          <div className="contact-box-right">
            <a href="tel:7070054306" target="_blank">+91 7070054306</a>
            <a href="tel:9354100593" target="_blank">+91 9354100593</a>
          </div>
        </div>
        <div className="contact-box">
          <div className="contact-box-left">
            <i className="fa-solid fa-envelope"></i>
          </div>
          <div className="contact-box-right">
            <a href="mailto:hr@arplacements.com" target="_blank">hr@arplacements.com</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComp;
