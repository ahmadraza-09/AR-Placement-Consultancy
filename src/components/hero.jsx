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
              <h2>We Provide Recruitment Over India</h2>
              <p>
                Our recruitment services help you find the right talent for your organization. Whether you're looking for permanent employees or temporary staff, we've got you covered. Our team of experts uses a comprehensive approach to match the skills and qualifications of candidates with your company's needs.
              </p>
              <button onClick={() => {navigate(`/service/recruitment`)}}>Know More</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='slider-card slider-card2'>
            <div className="overlay">
              <h2>We Provide Apprenticeship Over India</h2>
              <p>
                Our apprenticeship programs offer hands-on training and mentorship opportunities to individuals looking to kick-start their careers. Whether you're a recent graduate or switching fields, our programs provide valuable learning experiences to help you develop skills and gain practical knowledge in your chosen field.
              </p>
              <button onClick={() => {navigate(`/service/apprenticeship`)}}>Know More</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='slider-card slider-card3'>
            <div className="overlay">
              <h2>We Provide Manpower Over India</h2>
              <p>
                Our manpower solutions provide you with the workforce you need to meet your business objectives. Whether you need skilled labor for a specific project or temporary staff to cover peak seasons, we offer flexible staffing solutions to address your manpower requirements.
              </p>
              <button onClick={() => {navigate(`/service/manpower`)}}>Know More</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='slider-card slider-card4'>
            <div className="overlay">
              <h2>We Provide Staffing Solution Over India</h2>
              <p>
                Our staffing solutions provide comprehensive workforce management services to streamline your staffing processes and optimize your workforce. From recruitment to onboarding and beyond, we handle all aspects of staffing to ensure your organization operates efficiently and effectively.
              </p>
              <button onClick={() => {navigate(`/service/staffing-solution`)}}>Know More</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='slider-card slider-card5'>
            <div className="overlay">
              <h2>We Provide Skill Development Over India</h2>
              <p>
                Our skill development programs offer individuals the opportunity to enhance their skills and competencies to succeed in today's competitive job market. Whether you're looking to upgrade your existing skills or learn new ones, our programs provide practical training and support to help you achieve your career goals.
              </p>
              <button onClick={() => {navigate(`/service/skill-development`)}}>Know More</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='slider-card slider-card6'>
            <div className="overlay">
              <h2>We Provide Social Entrepreneurship Over India</h2>
              <p>
                Our social entrepreneurship initiatives empower individuals and communities to create positive change through innovative solutions to social and environmental challenges. Whether you're a budding social entrepreneur or an established organization looking to make a difference, we provide support and resources to help you achieve your social impact goals.
              </p>
              <button onClick={() => {navigate(`/service/social-entrepreneurship`)}}>Know More</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    </>
  )
}

export default Hero
