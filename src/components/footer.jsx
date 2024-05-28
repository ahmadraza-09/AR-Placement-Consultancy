import React from 'react'
import '../css/footer.css';
import { useNavigate } from "react-router-dom";

const Footer = () => {

    const navigate = useNavigate();

  return (
    <>
      <footer>
        <div class="row">
            <div class="footer-col">
                {/* <h2>Health<span>Care</span></h2> */}
                <img src="/images/logo.jpg" alt="" />
                {/* <p>Your trusted partner in wellness, offering comprehensive medical resources and services.</p> */}
                <div className="contact-col">
                    <p>
                        <i class="fa-solid fa-location-dot"></i>
                        <p>Plot Number 145, Sector 16A Greater Noida West, UP, IN</p>
                    </p>
                </div>
                <div className="contact-col">
                    <p><i class="fa-solid fa-phone-volume"></i><a href="tel:7070054306" target='_blank'>+91 7070054306</a></p>
                    <p><i class="fa-solid fa-phone-volume"></i><a href="tel:9354100593 " target='_blank'>+91 9354100593 </a></p>
                    <p><i class="fa-solid fa-envelope"></i><a href="mailto:hr@arplacements.com" target='_blank'>hr@arplacements.com</a></p>
                </div>
                <div className="contact-col">
                    <p>
                        <i class="fa-regular fa-clock"></i>
                        <p>Mon – Sun: 10:30 am – 06.00 pm</p>
                    </p>
                </div>
            </div>
            <div class="footer-col">
                <h4>menu</h4>
                <a onClick={() => {navigate('/')}}>home</a>
                <a onClick={() => {navigate('/services')}}>service</a>
                <a onClick={() => {navigate('/industry')}}>industry</a>
                <a onClick={() => {navigate('/blog')}}>blogs</a>
                <a onClick={() => {navigate('/about')}}>about</a>
                <a onClick={() => {navigate('/gallery')}}>gallery</a>
                <a onClick={() => {navigate('/contact')}}>contact</a>
            </div>
            <div class="footer-col">
                <h4>get help</h4>
                <a onClick={() => {navigate('/faq')}}>FAQ</a>
                <a>shipping</a>
                <a>privacy policy</a>
                <a>payment options</a>
            </div>
            <div class="footer-col">
                <h4>services</h4>
                <a>Permanent Staffing Service</a>
                <a>Recruitment Process Outsourcing</a>
                <a>Human Resource Services</a>
                <a>Campus Placement Service</a>
            </div>
            <div class="footer-col">
                <h4>Connect With Us</h4>
                <div class="social-links">
                    <a href='' target='_blank'><i class="fab fa-facebook-f"></i></a>
                    <a href='' target='_blank'><i class="fab fa-twitter"></i></a>
                    <a href='https://www.instagram.com/arplacementnoida' target='_blank'><i class="fab fa-instagram"></i></a>
                    <a href='https://www.linkedin.com/company/arplacement' target='_blank'><i class="fab fa-linkedin-in"></i></a>
                </div>
                <div className="news-letter">
                    <input type="text"  placeholder='Enter your E-Mail'/>
                    <button>Subscribe</button>
                </div>
            </div>
        </div>

        <div className="footer-copyright">
            <div className="footer-copyright-left">
                <p>© 2024</p> <img src="/images/logo.jpg" alt="" />
            </div>

            <div className="footer-copyright-right">
                All Rights Reserved
            </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
