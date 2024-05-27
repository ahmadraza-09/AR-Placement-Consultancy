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
              <p>B-80, P.C Colony,Lohia Nagar,Kankarbagh, Patna-20</p>
            </div>
          </div>
          <div className="contact-box">
            <div className="contact-box-left">
              <i class="fa-solid fa-phone-volume"></i>
              <i class="fa-solid fa-phone-volume"></i>
              <i class="fa-solid fa-phone-volume"></i>
            </div>
            <div className="contact-box-right">
              <a href="tel:9471876257" target='_blank'>+91 9471876257</a>
              <a href="tel:7870997066" target='_blank'>+91 7870997066</a>
              <a href="tel:6123557176" target='_blank'>+91 6123557176</a>
            </div>
          </div>
          <div className="contact-box">
            <div className="contact-box-left">
              <i class="fa-solid fa-envelope"></i>
              <i class="fa-solid fa-envelope"></i>
            </div>
            <div className="contact-box-right">
              <a href="mailto:info@heftyservices.com" target='_blank'>info@heftyservices.com</a>
              <a href="mailto:hr@heftyservices.com" target='_blank'>hr@heftyservices.com</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactComp
