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
        { slug: 'aerospace-defense', name: 'Aerospace & Defense', image: 'images/industry-practice1.jpg' },
        { slug: 'healthcare-pharma', name: 'Healthcare Pharma, & Diagnostics', image: 'images/industry-practice2.jpg' },
        { slug: 'outsourcing-offshoring', name: 'Outsourcing & Offshoring', image: 'images/industry-practice3.jpg' },
        { slug: 'automobile-auto-components', name: 'Automobile & Auto Components', image: 'images/industry-practice4.jpg' },
        { slug: 'industrial-infrastructure', name: 'Industrial & Infrastructure', image: 'images/industry-practice5.jpeg' },
        { slug: 'consumer-durables-building-materials', name: 'Consumer Durables & Building Materials', image: 'images/industry-practice6.jpg'},
        { slug: 'real-estate-services', name: 'Real estate & services', image: 'images/industry-practice7.jpg'},
        { slug: 'education-internet', name: 'Education & Internet', image: 'images/industry-practice8.jpg'},
        { slug: 'electrical-electronics', name: 'Electrical & Electronics', image: 'images/industry-practice9.jpg'},
        { slug: 'metals-minerals-mining', name: 'Metals, Minerals & Mining', image: 'images/industry-practice10.jpg'},
        { slug: 'financial-services', name: 'Financial Services', image: 'images/industry-practice11.jpg'},
        { slug: 'oil-gas', name: 'Oil & Gas', image: 'images/industry-practice12.jpg'},
        { slug: 'media-entertainment', name: 'Media & Entertainment', image: 'images/industry-practice13.jpg'},
        { slug: 'fmcg-telecom', name: 'FMCG & Telecom', image: 'images/industry-practice14.jpg'},
        { slug: 'retail-logistics', name: 'Retail & Logistics', image: 'images/industry-practice15.jpg'},
    ];

    const handleNavigate = (slug) => {
        navigate(`/industrypractice/${slug}`);
    };

    return (
        <>
            <section className='services-section industry-practice'>
                <h2>INDUSTRY PRACTICES</h2>
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
