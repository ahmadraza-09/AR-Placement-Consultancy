import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/services.css';

const Services = () => {
  const navigate = useNavigate();

  const servicesData = [
    { slug: "permanent-staffing-service", title: "Permanent Staffing Service", img: "images/service-img1.jpg" },
    { slug: "recruitment-process-outsourcing", title: "Recruitment Process Outsourcing", img: "images/recruitment.jpg" },
    { slug: "human-resource-services", title: "Human Resource Services", img: "images/hr.jpg" },
    { slug: "campus-placement-service", title: "Campus Placement Service", img: "images/service-img4.jpg" },
  ];

  const handleNavigate = (slug) => {
    navigate(`/service/${slug}`);
  };

  return (
    <>
      <section className='services-section'>
        <h2>Our Services</h2>
        <p>We aim to provide fast, simple, cost-effective and high-end quality services by working closely with our clients and candidates, through our strategic, experience and Leaders. We provide a full range of solutions including permanent, temporary staffing, outsourcing and other HR solutions in the areas of IT, Sales, Marketing, Operation, Finance and Accounting, Human Resources, Manufacturing, Fashion, Supply Chain and Logistics. We cater to the needs of enthusiastic professionals in shaping their career and partnering with valuable clients in identifying Manpower Resources across the nation.</p>
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
