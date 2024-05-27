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
          <h3>Description</h3>
          <br />
          <p className='description'>{knowmore.description}</p>
          <br />
          <h3>What service we provide you in {knowmore.title}</h3>
          <br />
          <div className="know-more-provide">
            <p className="bullet-point">1.{knowmore.features[0]}</p>
            <p className="bullet-point">2.{knowmore.features[1]}</p>
            <p className="bullet-point">3.{knowmore.features[2]}</p>
            <p className="bullet-point">4.{knowmore.features[3]}</p>
            <p className="bullet-point">5.{knowmore.features[4]}</p>
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

export default KnowMoreComp;
