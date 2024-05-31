import React from 'react'
import { useEffect } from 'react';
import '../css/services.css';
import Services from './services';

const ServicesPage = () => {


  useEffect(() => {
      showTop();
  }, []);

  const showTop = () => {
      window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="service-page">
        <Services/>
      </div>
    </>
  )
}

export default ServicesPage
