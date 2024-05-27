import React from 'react'
import '../css/header.css'
import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const [navbarsection, setNavbarSection] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);


    useEffect(() => {
        showTop();
    }, []);

    const showTop = () => {
        window.scrollTo(0, 0);
    };

    const changeBackground = () => {
        if (window.scrollY >= 100) {
            setNavbarSection(true);
        } else {
            setNavbarSection(false);
        }
    }
    
    window.addEventListener('scroll', changeBackground);
    
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

  return (
    <>
      <div className={navbarsection ? 'navbar-section active' : 'navbar-section'}>
        {/* Banner */}
        <div className="contact-address-banner">
            <div className="contact-address-banner-left">
                <div className="contact-info">
                    <i class="fa-solid fa-phone"></i>
                    <a href="tel:9471876257" target="_blank">+91 9471876257</a>
                </div>
                
                <div className="contact-info">
                    <i class="fa-solid fa-envelope"></i>
                    <a href="mailto:info@heftyservices.com" target="_blank" >info@heftyservices.com</a>
                </div>
            </div>
            <div className="contact-address-banner-right">
                <div className="contact-info">
                    <img src="/images/instagram-img.png" alt="" />
                    |
                    <img src="/images/whatsapp-img.png" alt="" />
                    |
                    <img src="/images/linkedin-img.png" alt="" />
                    |
                    <img src="/images/twitter-img.png" alt="" />
                    |
                    <img src="/images/facebook-img.png" alt="" />
                </div>

            </div>
        </div>

        {/* Navbar */}
        <div className="navbar">
            <input type="checkbox" id='check' checked={menuOpen} onChange={toggleMenu}/>
            <div className="logo-section" onClick={() => {navigate('/')}}>
                {/* <h2 className='logo'>Job<span>Tech</span></h2> */}
                <img src="/images/hefty-logo.png" alt="" />
            </div>
            <ul className="menu-section">
                <li className={location.pathname === '/' ? 'active-menu' : ''} onClick={() => {navigate('/')}}>Home</li>
                <li className={
                    location.pathname === '/services' 
                    || location.pathname === '/services/recruitment'
                    || location.pathname === '/services/apprenticeship'
                    || location.pathname === '/services/manpower'
                    || location.pathname === '/services/staffing-solution'
                    || location.pathname === '/services/skill-development'
                    || location.pathname === '/services/social-entrepreneurship'
                    ? 'active-menu' : ''} onClick={() => {navigate('/services')}}>Service</li>
                <li className={
                    location.pathname === '/industrypractice'
                    || location.pathname === '/industrypractice/aerospace-defense'
                    || location.pathname === '/industrypractice/healthcare-pharma'
                    || location.pathname === '/industrypractice/outsourcing-offshoring'
                    || location.pathname === '/industrypractice/automobile-auto-components'
                    || location.pathname === '/industrypractice/industrial-infrastructure'
                    || location.pathname === '/industrypractice/consumer-durables-building-materials'
                    || location.pathname === '/industrypractice/real-estate-services'
                    || location.pathname === '/industrypractice/education-internet'
                    || location.pathname === '/industrypractice/electrical-electronics'
                    || location.pathname === '/industrypractice/metals-minerals-mining'
                    || location.pathname === '/industrypractice/financial-services'
                    || location.pathname === '/industrypractice/oil-gas'
                    || location.pathname === '/industrypractice/media-entertainment'
                    || location.pathname === '/industrypractice/fmcg-telecom'
                    || location.pathname === '/industrypractice/retail-logistics'
                    ? 'active-menu' : ''} onClick={() => {navigate('/industrypractice')}}>Industry Practices</li>
                <li className={location.pathname === '/ourbranches' ? 'active-menu' : ''} onClick={() => {navigate('/ourbranches')}}>Our Branches</li>
                <li className={location.pathname === '/about' ? 'active-menu' : ''} onClick={() => {navigate('/about')}}>About</li>
                <li className={location.pathname === '/gallery' ? 'active-menu' : ''} onClick={() => {navigate('/gallery')}}>Gallery</li>
                <li className={location.pathname === '/contact' ? 'active-menu' : ''} onClick={() => {navigate('/contact')}}>Contact</li>
                <li>
                    <li className={location.pathname === '/adminlogin' ? 'active-menu' : ''}>More</li>
                    <div className="more-dropdown">
                        <li className={location.pathname === '/adminlogin' ? 'active-menu' : ''} onClick={() => {navigate('/adminlogin')}}>Admin Login</li>
                    </div>
                </li>
            </ul>
            <div className="job-section">
                <button onClick={() => {navigate('/oppeningjobs')}}>Opening Jobs</button>
                <label className={menuOpen} htmlFor="check">
                    {menuOpen ? <i className="fa-solid fa-close"></i> : <i className="fa-solid fa-bars"></i>}
                </label>
            </div>
        </div>
      </div>
    </>
  )
}

export default Header;
