import React from 'react';
import { useParams } from 'react-router-dom';
import { knowMoreData } from '../Data/servicedata';
import { useEffect } from 'react';
import '../css/knowmore.css';

const KnowMoreComp = () => {
  const { serviceSlug } = useParams();
  const knowmore = knowMoreData.find(knowmore => knowmore.slug === serviceSlug);

  useEffect(() => {
    showTop();
  }, []);

  const showTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      {knowmore ? (
        <div className='know-more-section'>
          <div className="heading">
          <h2>{knowmore.title}</h2>
          </div>
          <img src={knowmore.img} alt={knowmore.title} />
          <br />
          <h3>What service we provide you in {knowmore.title}</h3>
          <br />
          <div className="know-more-provide">
            <p className="bullet-point">{knowmore.features[0]}</p>
          </div>
          <br />
          <h3>Contact Us</h3>
          <br />
          <div className="contact-box">
            <p><i class="fa-solid fa-location-dot"></i> Address: Plot Number 145, Sector 16A Greater Noida West, UP, IN</p>
            <br />
            <p><i class="fa-solid fa-envelope"></i><a href="mailto:hr@arplacements.com" target='_blank'>hr@arplacements.com</a></p>
            <br />
            <p><i class="fa-solid fa-phone-volume"></i><a href="tel:7070054306" target='_blank'>+91 7070054306</a></p>
            <br />
            <p><i class="fa-solid fa-phone-volume"></i><a href="tel:9354100593 " target='_blank'>+91 9354100593 </a></p>
          </div>
        </div>
      ) : (
        <p>Service details not found.</p>
      )}
    </>
  );
}

export default KnowMoreComp;
