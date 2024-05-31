import React from 'react'
import { Navigation, Autoplay, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from "react-router-dom";

import '../css/hero.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Hero = () => {

  const navigate = useNavigate();

  return (
    <>
    <div className='hero'>
        <Swiper 
        modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
        autoplay={{ delay: 2500, disableOnInteraction: false }} 
        spaceBetween={30}
        slidesPerView={1}
        style={{ maxWidth: '100%', minWidth: '300px' , padding: '0px 0px' }}
        pagination={{ clickable: true }}
        navigation={true}
        breakpoints={{
          320: {
            navigation: false,
          },
          480: {
            navigation: false,
          },
          628: {
            navigation: false,
            
          }
        }}
      >
        <SwiperSlide>
          <div className='slider-card'>
            <div className="overlay">
              <h2>We Provide Permanent Staffing Service</h2>
              <p>
                Experience seamless recruitment with our Permanent Staffing Service, where we meticulously match top-tier talent to your long-term needs. Let us be your strategic partner in building a strong and enduring workforce.
              </p>
              <button onClick={() => {navigate(`/service/permanent-staffing-service`)}}>Know More</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='slider-card slider-card2'>
            <div className="overlay">
              <h2>We Provide Recruitment Process Outsourcing</h2>
              <p>
                Elevate your hiring efficiency with our Recruitment Process Outsourcing solutions, designed to streamline your talent acquisition process from sourcing to onboarding.
              </p>
              <button onClick={() => {navigate(`/service/recruitment-process-outsourcing`)}}>Know More</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='slider-card slider-card3'>
            <div className="overlay">
              <h2>We Provide Human Resource Services</h2>
              <p>
                Optimize your workforce with our comprehensive Human Resource Services, tailored to meet your organization's unique needs. From HR consulting to talent management, we're dedicated to empowering your team's success.
              </p>
              <button onClick={() => {navigate(`/service/human-resource-services`)}}>Know More</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='slider-card slider-card4'>
            <div className="overlay">
              <h2>We Provide Campus Placement Service</h2>
              <p>
                Unlock the potential of tomorrow's leaders with our Campus Placement Service, connecting organizations with top talent fresh from academia. Let us facilitate seamless transitions from campus to career, ensuring a bright future for both employers and graduates.
              </p>
              <button onClick={() => {navigate(`/service/campus-placement-service`)}}>Know More</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    </>
  )
}

export default Hero
