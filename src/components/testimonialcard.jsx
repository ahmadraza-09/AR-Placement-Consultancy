import React from 'react'
import { Navigation, Autoplay, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../css/testimonialcard.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const TestimonialCard = () => {
  return (
    <>
      <Swiper 
        modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]} // Include Autoplay module here
        autoplay={{ delay: 2500, disableOnInteraction: false }} // Configure autoplay options
        spaceBetween={30}
        slidesPerView={3}
        style={{ maxWidth: '850px', minWidth: '300px' , padding: '40px 20px' }}
        pagination={{ clickable: true }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className='swiperslide'
      >
        <SwiperSlide style={{width: '250px'}}>  
          <div className="testimonial-card">
            <div className="image-and-name">
              <img src="images/asset1.png" alt="" />
              <div className="name-stars">
                <h4>Ahmad Raza</h4>
                <div className="stars">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <h6>New Delhi</h6>
              </div>
            </div>

            <p>
              "I will seen very experince of the following people"
            </p>
          </div>
          
        </SwiperSlide>
        <SwiperSlide style={{width: '250px'}}>
          <div className="testimonial-card">
            <div className="image-and-name">
              <img src="images/asset2.png" alt="" />
              <div className="name-stars">
                <h4>Ahmad Raza</h4>
                <div className="stars">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <h6>Patna</h6>
              </div>
            </div>

            <p>
              "I will seen very experince of the following people"
            </p>
          </div>
          
        </SwiperSlide>
        <SwiperSlide style={{width: '250px'}}>
          <div className="testimonial-card">
            <div className="image-and-name">
              <img src="images/asset3.png" alt="" />
              <div className="name-stars">
                <h4>Ahmad Raza</h4>
                <div className="stars">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <h6>Ranchi</h6>
              </div>
            </div>

            <p>
              "I will seen very experince of the following people"
            </p>
          </div>
          
        </SwiperSlide>
        <SwiperSlide style={{width: '250px'}}>
          <div className="testimonial-card">
            <div className="image-and-name">
              <img src="images/asset4.png" alt="" />
              <div className="name-stars">
                <h4>Ahmad Raza</h4>
                <div className="stars">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <h6>Goa</h6>
              </div>
            </div>

            <p>
              "I will seen very experince of the following people"
            </p>
          </div>
          
        </SwiperSlide>
        <SwiperSlide style={{width: '250px'}}>
          <div className="testimonial-card">
            <div className="image-and-name">
              <img src="images/asset3.png" alt="" />
              <div className="name-stars">
                <h4>Ahmad Raza</h4>
                <div className="stars">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <h6>Lakhnow</h6>
              </div>
            </div>

            <p>
              "I will seen very experince of the following people"
            </p>
          </div>
          
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default TestimonialCard
