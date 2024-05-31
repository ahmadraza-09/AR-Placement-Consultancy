import React from 'react';
import { useState, useEffect } from 'react';
import { Navigation, Autoplay, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../css/companyregistered.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const CompanyRegistered = () => {

    const [showButtons, setShowButtons] = useState(true);

    const companies = [
        { name: '360 Advertising Production', logo: 'images/360-advertising.png' },
        { name: 'PNA News', logo: 'images/news.png' },
        { name: 'PNB Kitchenmate', logo: 'images/pnb.png' },
        { name: 'Asian Footwears', logo: 'images/asian.webp' },
        { name: 'RVS College Jamshedpur', logo: 'images/rvs.avif' },
        { name: 'GLA', logo: 'images/gla.png' },
    ];

    useEffect(() => {
        const slidesPerView = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
        setShowButtons(companies.length > slidesPerView);
    }, [companies.length]);

    return (
        <>
            <div className="company-registered-section">
                <h2>Our Partners</h2>
                <Swiper
                    modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
                    // autoplay={{ delay: 2500, disableOnInteraction: false }}
                    spaceBetween={30}
                    slidesPerView={3}
                    style={{ maxWidth: '850px', minWidth: '300px', padding: '40px 20px' }}
                    // pagination={{ clickable: true }}
                    navigation={true}
                    scrollbar={{ draggable: true }}
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

                    {companies.map((company, index) => (
                        <SwiperSlide key={index}>
                            <div className="company-card">
                                <img src={company.logo} alt={company.name} />
                                <h2>{company.name}</h2>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
}

export default CompanyRegistered;
