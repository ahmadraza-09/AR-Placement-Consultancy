import React, { useEffect } from 'react';
import '../css/companyregistered.css';

const CompanyRegistered = () => {
    useEffect(() => {
        showTop();
    }, []);

    const showTop = () => {
        window.scrollTo(0, 0);
    };

    const companies = [
        { name: '360 Advertising Production', logo: 'images/360-advertising.png' },
        { name: 'PNA News', logo: 'images/news.png' },
        { name: 'PNB Kitchemate', logo: 'images/pnb.png' },
        { name: 'Asian Footwears', logo: 'images/asian.webp' },
        { name: 'RVS college Jamshedpur', logo: 'images/rvs.avif' },
        { name: 'GLA', logo: 'images/gla.png' },
    ];

    return (
        <>
            <div className="company-registered-section">
                <h2>Our Partners</h2>
                <div className="company-list">
                    {companies.map((company, index) => (
                        <div key={index} className="company-card">
                            <img src={company.logo} alt={company.name} />
                            <h2>{company.name}</h2>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default CompanyRegistered;
