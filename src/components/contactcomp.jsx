import React from 'react'
import '../css/contact.css';
import { useEffect } from 'react';

const ContactComp = () => {


    useEffect(() => {
        showTop();
    }, []);

    const showTop = () => {
        window.scrollTo(0, 0);
    };

  return (
    <>
      <div className="contact-section">
        <div className="contact-section-left">
          <form>
            <h2>Contact</h2>
            <input type="text" placeholder='Name'/>
            <input type="email" placeholder='Email'/>
            <input type="text" placeholder='Mobile Number'/>
            <textarea typeof='text' cols="30" rows="10" placeholder='Message'></textarea>
            <button>Send</button>
          </form>
        </div>
        <div className="contact-section-right">
          <div className="contact-box">
            <div className="contact-box-left">
              <i class="fa-solid fa-location-dot"></i>
            </div>
            <div className="contact-box-right">
              <p>Plot Number 145, Sector 16A Greater Noida West, UP, IN</p>
            </div>
          </div>
          <div className="contact-box">
            <div className="contact-box-left">
              <i class="fa-solid fa-phone-volume"></i>
              <i class="fa-solid fa-phone-volume"></i>
            </div>
            <div className="contact-box-right">
              <a href="tel:7070054306" target='_blank'>+91 7070054306 </a>
              <a href="tel:9354100593" target='_blank'>+91 9354100593</a>
            </div>
          </div>
          <div className="contact-box">
            <div className="contact-box-left">
              <i class="fa-solid fa-envelope"></i>
            </div>
            <div className="contact-box-right">
              <a href="mailto:hr@arplacements.com" target='_blank'>hr@arplacements.com</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactComp
