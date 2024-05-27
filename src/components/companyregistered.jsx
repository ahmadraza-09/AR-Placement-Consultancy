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
        { name: 'AITS', logo: 'images/company-logo1.png' },
        { name: 'DELL', logo: 'images/company-logo2.png' },
        { name: 'MAKE MY TRIP', logo: 'images/company-logo3.png' },
        { name: 'WAL MART', logo: 'images/company-logo4.png' },
        { name: 'CARS24', logo: 'images/company-logo5.png' },
        { name: 'OYO', logo: 'images/company-logo6.png' },
        { name: 'JUST DIAL', logo: 'images/company-logo7.png' },
        { name: 'HP', logo: 'images/company-logo8.png' },
        { name: 'CAR24', logo: 'images/company-logo5.png' }, 
        { name: 'MAKE MY TRIP', logo: 'images/company-logo3.png' }
    ];

    return (
        <>
            <div className="company-registered-section">
                <h2>TOP COMPANY REGISTERED</h2>
                <p>A better career is out there. We'll help you find it. We're your first step to becoming everything you want to be.</p>
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
