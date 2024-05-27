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
          <h3>What Industry Practice we provide you in {industry.title}</h3>
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
            <p><i class="fa-solid fa-envelope"></i><a href="mailto:info@heftyservices.com" target='_blank'>info@heftyservices.com</a></p>
            <br />
            <p><i class="fa-solid fa-envelope"></i><a href="mailto:hr@heftyservices.com" target='_blank'>hr@heftyservices.com</a></p>
            <br />
            <p><i class="fa-solid fa-phone-volume"></i><a href="tel:+91 9471876257" target='_blank'>+91 9471876257</a></p>
            <br />
            <p><i class="fa-solid fa-phone-volume"></i><a href="tel:+91 7870997066" target='_blank'>+91 7870997066</a></p>
            <br />
            <p><i class="fa-solid fa-phone-volume"></i><a href="tel:+91 6123557176" target='_blank'>+91 6123557176</a></p>
            <br />
            <p><i class="fa-solid fa-location-dot"></i> Address: B-80, P.C Colony,Lohia Nagar,Kankarbagh, Patna-20</p>
          </div>
        </div>
      ) : (
        <p>Service details not found.</p>
      )}
    </>
  );
}

export default IndustryData;
