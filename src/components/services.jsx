import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/services.css';

const Services = () => {
  const navigate = useNavigate();

  const servicesData = [
    { slug: "recruitment", title: "Recruitment", img: "images/service-img1.jpg" },
    { slug: "apprenticeship", title: "Apprenticeship", img: "images/service-img2.jpg" },
    { slug: "manpower", title: "Manpower", img: "images/service-img3.jpg" },
    { slug: "staffing-solution", title: "Staffing Solution", img: "images/service-img4.jpg" },
    { slug: "skill-development", title: "Skill Development", img: "images/service-img5.jpg" },
    { slug: "social-entrepreneurship", title: "Social Entrepreneurship", img: "images/service-img6.jpg" }
  ];

  const handleNavigate = (slug) => {
    navigate(`/services/${slug}`);
  };

  return (
    <>
      <section className='services-section'>
        <h2>Our Services</h2>
        <p>Hefty Source & Services Private limited providing excellence in recruitment and placement services across
            domains carving a niche for ourselves in the recruitment service.</p>
        <div className="service-card-box">
          {servicesData.map(service => (
            <div key={service.slug} className="service-card">
              <div className="service-card-image">
                <img src={service.img} alt={service.title} />
              </div>
              <div className="service-card-content">
                <h2>{service.title}</h2>
                <button onClick={() => handleNavigate(service.slug)}>Know More</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Services;
