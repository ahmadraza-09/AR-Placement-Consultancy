import React from 'react';
import { useParams } from 'react-router-dom';
import { industryData } from '../Data/industrydata'
import { useEffect } from 'react';
import '../css/knowmore.css';

const IndustryData = () => {
  const { industrySlug } = useParams();
  const industry = industryData?.find(industry => industry.slug === industrySlug);

  useEffect(() => {
    showTop();
  }, []);

  const showTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      {industry ? (
        <div className='know-more-section'>
          <div className="heading">
          <h2>{industry.title}</h2>
          </div>
          <img src={industry.image} alt={industry.title} />
          <br />
          <h3>Description</h3>
          <br />
          <p className='description'>{industry.description}</p>
          <br />
          <h3>What we provide you in {industry.title}</h3>
          <br />
          <div className="know-more-provide">
            <p className="bullet-point">1.{industry.practice[0]}</p>
            <p className="bullet-point">2.{industry.practice[1]}</p>
            <p className="bullet-point">3.{industry.practice[2]}</p>
            <p className="bullet-point">4.{industry.practice[3]}</p>
            <p className="bullet-point">5.{industry.practice[4]}</p>
          </div>
          <br />
          <h3>Contact Us</h3>
          <br />
          <div className="contact-box">
            <p><i class="fa-solid fa-envelope"></i><a href="mailto:hr@arplacements.com" target='_blank'>hr@arplacements.com</a></p>
            <br />
            <p><i class="fa-solid fa-phone-volume"></i><a href="tel:+91 7070054306" target='_blank'>+91 7070054306 </a></p>
            <br />
            <p><i class="fa-solid fa-phone-volume"></i><a href="tel:+91 9354100593" target='_blank'>+91 9354100593 </a></p>
            <br />
            <p><i class="fa-solid fa-location-dot"></i> Address: Plot Number 145, Sector 16A Greater Noida West, UP, IN</p>
          </div>
        </div>
      ) : (
        <p>Service details not found.</p>
      )}
    </>
  );
}

export default IndustryData;
