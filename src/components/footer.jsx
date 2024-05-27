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
                <img src="images/hefty-logo.png" alt="" />
                {/* <p>Your trusted partner in wellness, offering comprehensive medical resources and services.</p> */}
                <div className="contact-col">
                    <p>
                        <i class="fa-solid fa-location-dot"></i>
                        <p>B-80, P.C Colony,Lohia Nagar,Kankarbagh, Patna-20</p>
                    </p>
                </div>
                <div className="contact-col">
                    <p><i class="fa-solid fa-phone-volume"></i><a href="tel:9471876257" target='_blank'>+91 9471876257</a></p>
                    <p><i class="fa-solid fa-phone-volume"></i><a href="tel:7870997066" target='_blank'>+91 7870997066</a></p>
                    <p><i class="fa-solid fa-phone-volume"></i><a href="tel:6123557176" target='_blank'>+91 6123557176</a></p>
                    <p><i class="fa-solid fa-envelope"></i><a href="mailto:info@heftyservices.com" target='_blank'>info@heftyservices.com</a></p>
                    <p><i class="fa-solid fa-envelope"></i><a href="mailto:hr@heftyservices.com" target='_blank'>hr@heftyservices.com</a></p>
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
                <a onClick={() => {navigate('/industrypractice')}}>industry practices</a>
                <a onClick={() => {navigate('/ourbranches')}}>our Branches</a>
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
                <a>Recruitment & Apprenticeship</a>
                <a>Manpower staffing</a>
                <a>Skill Development</a>
                <a>Social entrepreneurship</a>
            </div>
            <div class="footer-col">
                <h4>Connect With Us</h4>
                <div class="social-links">
                    <a><i class="fab fa-facebook-f"></i></a>
                    <a><i class="fab fa-twitter"></i></a>
                    <a><i class="fab fa-instagram"></i></a>
                    <a><i class="fab fa-linkedin-in"></i></a>
                </div>
                <div className="news-letter">
                    <input type="text"  placeholder='Enter your E-Mail'/>
                    <button>Subscribe</button>
                </div>
            </div>
        </div>

        <div className="footer-copyright">
            <div className="footer-copyright-left">
                <p>© 2024</p> <img src="images/hefty-logo.png" alt="" />
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
