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

    const handleWhatsAppClick = () => {
        const phoneNumber = '7070054306';
        const message = 'Hello, I would like to inquire about your services.';
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
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
                    <a href="tel:7070054306" target="_blank">+91 7070054306 </a>
                </div>
                
                <div className="contact-info">
                    <i class="fa-solid fa-envelope"></i>
                    <a href="mailto:hr@arplacements.com" target="_blank" >hr@arplacements.com</a>
                </div>
            </div>
            <div className="contact-address-banner-right">
                <div className="contact-info">
                    <a href="https://www.instagram.com/arplacementnoida" target='_blank'><img src="/images/instagram-img.png" alt="" /></a>
                    |
                    <a onClick={handleWhatsAppClick} target='_blank'><img src="/images/whatsapp-img.png" alt="" /></a>
                    |
                    <a href="https://www.linkedin.com/company/arplacement/" target='_blank'><img src="/images/linkedin-img.png" alt="" /></a>
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
                <img src="/images/logo.jpg" alt="" />
            </div>
            <ul className="menu-section">
                <li className={location.pathname === '/' ? 'active-menu' : ''} onClick={() => {navigate('/')}}>Home</li>
                <li className={
                    location.pathname === '/services' 
                    || location.pathname === '/service/permanent-staffing-service'
                    || location.pathname === '/service/recruitment-process-outsourcing'
                    || location.pathname === '/service/human-resource-services'
                    || location.pathname === '/service/Human Resource Services'
                    ? 'active-menu' : ''} onClick={() => {navigate('/services')}}>Service</li>
                <li className={
                    location.pathname === '/industry'
                    || location.pathname === '/industry/it-software'
                    || location.pathname === '/industry/healthcare'
                    || location.pathname === '/industry/pharma-biotech'
                    || location.pathname === '/industry/export-import'
                    || location.pathname === '/industry/automobile'
                    || location.pathname === '/industry/manufacturing'
                    || location.pathname === '/industry/real-estate'
                    || location.pathname === '/industry/education-training'
                    || location.pathname === '/industry/packaging-print'
                    || location.pathname === '/industry/it-hardware-networking'
                    || location.pathname === '/industry/banking-financial-services'
                    || location.pathname === '/industry/advertising'
                    || location.pathname === '/industry/engineering'
                    || location.pathname === '/industry/fmcg-telecom'
                    || location.pathname === '/industry/retail'
                    || location.pathname === '/industry/bpo-call-center'
                    || location.pathname === '/industry/architecture'
                    || location.pathname === '/industry/garment'
                    ? 'active-menu' : ''} onClick={() => {navigate('/industry')}}>Industry</li>
                <li className={location.pathname === '/about' ? 'active-menu' : ''} onClick={() => {navigate('/about')}}>About</li>
                {/* <li className={location.pathname === '/gallery' ? 'active-menu' : ''} onClick={() => {navigate('/gallery')}}>Gallery</li> */}
                <li className={location.pathname === '/blog' ? 'active-menu' : ''} onClick={() => {navigate('/blog')}}>Blogs</li>
                <li className={location.pathname === '/contact' ? 'active-menu' : ''} onClick={() => {navigate('/contact')}}>Contact</li>
            </ul>
            <div className="job-section">
                {/* <button onClick={() => {navigate('/oppeningjobs')}}>Opening Jobs</button> */}
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
