import React from 'react';
import { Navigation, Autoplay, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../css/testimonialcard.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fullStar, faStarHalfAlt as halfStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';

const TestimonialCard = () => {
  const testimonials = [
    {
      name: 'Priya Nair',
      rating: 4.5,
      address: 'Marine Drive, Mumbai',
      review: 'Great support and guidance throughout the process. Highly recommend their consultancy.',
      image: 'images/profile.jpg'
    },
    {
      name: 'Rahul Sharma',
      rating: 5,
      address: 'Lajpat Nagar, New Delhi',
      review: 'Excellent service and professional approach. Helped me land my dream job in no time!',
      image: 'images/profile.jpg'
    },
    {
      name: 'Amit Gupta',
      rating: 4,
      address: 'Sector 18, Noida',
      review: 'The team is very knowledgeable and responsive. They made my job search so much easier.',
      image: 'images/profile.jpg'
    },
    {
      name: 'Neha Jain',
      rating: 4,
      address: 'Connaught Place, New Delhi',
      review: 'Professional and efficient service. They understand the market well and offer great advice.',
      image: 'images/profile.jpg'
    },
    {
      name: 'Rohit Verma',
      rating: 4.5,
      address: 'Brigade Road, Bengaluru',
      review: 'Amazing consultancy service! They were with me every step of the way and provided excellent opportunities.',
      image: 'images/profile.jpg'
    },
  ];

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 !== 0 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    return (
      <>
        {Array(fullStars).fill(<FontAwesomeIcon icon={fullStar} />)}
        {halfStars > 0 && <FontAwesomeIcon icon={halfStar} />}
        {Array(emptyStars).fill(<FontAwesomeIcon icon={emptyStar} />)}
      </>
    );
  };

  return (
    <>
      <Swiper
        modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        spaceBetween={30}
        slidesPerView={3}
        style={{ maxWidth: '850px', minWidth: '300px', padding: '40px 20px' }}
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
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} style={{ width: '250px' }}>
            <div className="testimonial-card">
              <div className="image-and-name">
                <img src={testimonial.image} alt="" />
                <div className="name-stars">
                  <h4>{testimonial.name}</h4>
                  <div className="stars">
                    {renderStars(testimonial.rating)}
                  </div>
                  <h6>{testimonial.address}</h6>
                </div>
              </div>
              <p>{testimonial.review}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default TestimonialCard;
