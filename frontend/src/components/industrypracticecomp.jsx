import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/services.css';

const IndustryPracticeComp = () => {
    const navigate = useNavigate();

    useEffect(() => {
        showTop();
    }, []);

    const showTop = () => {
        window.scrollTo(0, 0);
    };

    const industryPractices = [
        { slug: 'it-software', name: 'IT - Software', image: 'images/it.avif' },
        { slug: 'healthcare', name: 'Healthcare', image: 'images/healthcare.jpg' },
        { slug: 'pharma-biotech', name: 'Pharma Biotech', image: 'images/industry-practice2.jpg' },
        { slug: 'export-import', name: 'Export & Import', image: 'images/industry-practice3.jpg' },
        { slug: 'automobile', name: 'Automobile', image: 'images/industry-practice4.jpg' },
        { slug: 'manufacturing', name: 'Manufacturing', image: 'images/industry-practice5.jpeg' },
        { slug: 'packaging-print', name: 'Packaging & Print', image: 'images/industry-practice6.jpg'},
        { slug: 'real-estate', name: 'Real Estate', image: 'images/industry-practice7.jpg'},
        { slug: 'education-training', name: 'Education & Training', image: 'images/industry-practice8.jpg'},
        { slug: 'it-hardware-networking', name: 'IT Hardware & Networking', image: 'images/industry-practice9.jpg'},
        { slug: 'advertising', name: 'Advertising/MR/PR/Events', image: 'images/advertising.jpg'},
        { slug: 'banking-financial-services', name: 'Banking/Financial Services', image: 'images/industry-practice11.jpg'},
        { slug: 'engineering', name: 'Engineering', image: 'images/industry-practice12.jpg'},
        { slug: 'bpo-call-center', name: 'BPO & Call Center', image: 'images/industry-practice13.jpg'},
        { slug: 'fmcg-telecom', name: 'FMCG/F&B ', image: 'images/industry-practice14.jpg'},
        { slug: 'retail', name: 'Retails', image: 'images/retail.jpg'},
        { slug: 'architecture', name: 'Architecture/Interior Design', image: 'images/interior.jpg'},
        { slug: 'garment', name: 'Textile/Garment/Fashion', image: 'images/garment.jpg'},
    ];

    const handleNavigate = (slug) => {
        navigate(`/industry/${slug}`);
    };

    return (
        <>
            <section className='services-section industry-practice'>
                <h2>INDUSTRY</h2>
                <p>We recognize that each industry has its own nuances in terms of management style, hiring practices and compensation norms. In order to provide clients with specialized recruiting solutions, Hefty services has developed expertise in the following industry segments.</p>
                <div className="service-card-box">
                    {industryPractices.map((practice) => (
                        <div key={practice.slug} className="service-card">
                            <div className="service-card-image">
                                <img src={practice.image} alt={practice.name} />
                            </div>
                            <div className="service-card-content">
                                <h2>{practice.name}</h2>
                                <button onClick={() => handleNavigate(practice.slug)}>Know More</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default IndustryPracticeComp;
