import React from 'react'
import '../css/about.css';

const AboutComp = () => {
  return (
    <>
      <div className="about-section">
            <div className="about-banner"></div>
            <h2>Welcome To <span>H</span><span>efty </span> Source & Services Private limited</h2>
            <div className="about-welcome">
                <div className="about-image">
                    <img src="images/company-about.jpg" alt="" />
                </div>

                <div className="about-content">
                    <p>Hefty is a leading staffing provider in India. With over 4 years of experience, we have mastered the manpower
                        business, focusing on every aspect of hiring and workforce management. Our services span across general
                        staffing, integrated facility management and HR technology.
                    </p>
                </div>
            </div>

            <div className="about-cards">
                <div className="card">
                    <div className="card-left">
                        <img src="images/team.png" alt="" />
                    </div>

                    <div className="card-right">
                        <h4><span>15+</span> Recruiters</h4>
                        <h4><span>150+</span> Associates</h4>
                        <h4><span>3+</span> Clients</h4>
                    </div>
                </div>
                <div className="card">
                    <div className="card-left">
                        <img src="images/leadership.png" alt="" />
                    </div>

                    <div className="card-right">
                        <h4><span>10+ Years</span> of Industry Leadership</h4>
                    </div>
                </div>
                <div className="card">
                    <div className="card-left">
                        <img src="images/branch.png" alt="" />
                    </div>

                    <div className="card-right">
                        <h4><span>3+</span> Branches</h4>
                        <h4><span>100+</span> Deployment Locations</h4>
                    </div>
                </div>
                <div className="card">
                    <div className="card-left">
                        <img src="images/graph.png" alt="" />
                    </div>

                    <div className="card-right">
                        <h4><span>INR 3+ Crore</span> Annual Revenue (FY 2023-24)</h4>
                    </div>
                </div>
                <div className="card">
                    <div className="card-left">
                        <img src="images/customer-service.png" alt="" />
                    </div>

                    <div className="card-right">
                        <h4>True focus on Associate Experience through our <span>Happy Associates</span> program</h4>
                    </div>
                </div>
            </div>

            <div className="industries-serve">
                <h2>INDUSTRIES WE SERVE</h2>
                <div className="industries-boxes">
                    <div className="industries-box">
                        <img src="images/bank.png" alt="" />
                        <div className="title">
                            <h4>BFSI</h4>
                        </div>
                    </div>
                    <div className="industries-box">
                        <img src="images/infrastructure.png" alt="" />
                        <div className="title">
                            <h4>Industrial</h4>
                        </div>
                    </div>
                    <div className="industries-box">
                        <img src="images/technology.png" alt="" />
                        <div className="title">
                            <h4>Technology</h4>
                        </div>
                    </div>
                    <div className="industries-box">
                        <img src="images/supply-chain.png" alt="" />
                        <div className="title">
                            <h4>SCM/Logistics</h4>
                        </div>
                    </div>
                    <div className="industries-box">
                        <img src="images/telecommunication.png" alt="" />
                        <div className="title">
                            <h4>Telecom</h4>
                        </div>
                    </div>
                    <div className="industries-box">
                        <img src="images/online-shop.png" alt="" />
                        <div className="title">
                            <h4>Ecommerce</h4>
                        </div>
                    </div>
                    <div className="industries-box">
                        <img src="images/education.png" alt="" />
                        <div className="title">
                            <h4>Education</h4>
                        </div>
                    </div>
                    <div className="industries-box">
                        <img src="images/bridge.png" alt="" />
                        <div className="title">
                            <h4>Infrastructure</h4>
                        </div>
                    </div>
                    <div className="industries-box">
                        <img src="images/medical-team.png" alt="" />
                        <div className="title">
                            <h4>Healthcare & Pharma</h4>
                        </div>
                    </div>
                    <div className="industries-box">
                        <img src="images/conveyor.png" alt="" />
                        <div className="title">
                            <h4>Manufacturing</h4>
                        </div>
                    </div>
                    <div className="industries-box">
                        <img src="images/electric-car.png" alt="" />
                        <div className="title">
                            <h4>Automobile</h4>
                        </div>
                    </div>
                    <div className="industries-box">
                        <img src="images/social-media.png" alt="" />
                        <div className="title">
                            <h4>Media & Entertainment</h4>
                        </div>
                    </div>
                    <div className="industries-box">
                        <img src="images/hospitality.png" alt="" />
                        <div className="title">
                            <h4>Hospitality</h4>
                        </div>
                    </div>
                    <div className="industries-box">
                        <img src="images/fast-food.png" alt="" />
                        <div className="title">
                            <h4>FMCG/FMCD/Retail</h4>
                        </div>
                    </div>
                    <div className="industries-box">
                        <img src="images/renewable-energy.png" alt="" />
                        <div className="title">
                            <h4>Power and Energy</h4>
                        </div>
                    </div>
                    <div className="industries-box">
                        <img src="images/natural-gas.png" alt="" />
                        <div className="title">
                            <h4>Oil and Gas</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className="staffing-solution">
                <h2>OUR GENERAL STAFFING SOLUTIONS</h2>
                <div className="staffing-boxes">
                    <div className="staffing-box">
                        <div className="staffing-image">
                            <img src="images/workforce.jpeg" alt="" />
                        </div>
                        <div className="staffing-content">
                            <h4>Workforce Solutions</h4>
                            <p>PAN-India Sourcing,
                                Field Drives & Campaigns,
                                Interviews, Selection,
                                Onboarding, People Mgmt.    
                            </p>
                        </div>
                    </div>
                    <div className="staffing-box">
                        <div className="staffing-image">
                            <img src="images/payroll.jpeg" alt="" />
                        </div>
                        <div className="staffing-content">
                            <h4>Payroll Management</h4>
                            <p>CTC Structuring, Data
                                Migration, Payroll Processing,
                                Payslips, Query Mgmt.,
                                IT Computation & Proof
                                verification, Reports & MIS    
                            </p>
                        </div>
                    </div>
                    <div className="staffing-box">
                        <div className="staffing-image">
                            <img src="images/regulatory.jpg" alt="" />
                        </div>
                        <div className="staffing-content">
                            <h4>Regulatory Compliance</h4>
                            <p>Consulting & Advisory Services,
                                Audit & Assessments,
                                Maintenance& Support,
                                Registrations & Renewals under
                                Labour Acts, Exemptions,
                                Inspection Closures
                            </p>
                        </div>
                    </div>
                    <div className="staffing-box">
                        <div className="staffing-image">
                            <img src="images/infra.jpg" alt="" />
                        </div>
                        <div className="staffing-content">
                            <h4>Infra Services</h4>
                            <p>Supply, Operation &
                                Maintenance of IT & Office
                                Infra Associated with
                                Manpower Requirements
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="staffing-solution">
                <h2>SOURCING CAPABILITIES</h2>
                <div className="staffing-boxes">
                    <div className="staffing-box sourcing-box">
                        <div className="staffing-image">
                            <img src="images/Field-Recruitment.jpg" alt="" />
                        </div>
                        <div className="staffing-content">
                            <h4>Field Recruitment</h4>
                            <p>Public places, Industrial Areas,
                                Commercial Complexes, etc    
                            </p>
                        </div>
                    </div>
                    <div className="staffing-box sourcing-box">
                        <div className="staffing-image">
                            <img src="images/job_portal.png" alt="" />
                        </div>
                        <div className="staffing-content">
                            <h4>Job Portals</h4>
                            <p>Naukri, Monster,
                                Timesjobs, Quikr, etc.  
                            </p>
                        </div>
                    </div>
                    <div className="staffing-box sourcing-box">
                        <div className="staffing-image">
                            <img src="images/initiative.jpg" alt="" />
                        </div>
                        <div className="staffing-content">
                            <h4>Marketing Initiatives</h4>
                            <p>Pamphlets, Newspaper ads, Road
                                Shows, Job Fairs, Banners,
                                Standees, Posters
                            </p>
                        </div>
                    </div>
                    <div className="staffing-box sourcing-box">
                        <div className="staffing-image">
                            <img src="images/networking-challenges.png" alt="" />
                        </div>
                        <div className="staffing-content">
                            <h4>Networking Channels</h4>
                            <p>Candidate Referencing, Freelancers,
                                Govt. Agencies, Training Institutes, etc.
                            </p>
                        </div>
                    </div>
                    <div className="staffing-box sourcing-box">
                        <div className="staffing-image">
                            <img src="images/database.webp" alt="" />
                        </div>
                        <div className="staffing-content">
                            <h4>Internal Database</h4>
                            <p>10+ LakhProfiles on InternalDatabase.</p>
                        </div>
                    </div>
                    <div className="staffing-box sourcing-box">
                        <div className="staffing-image">
                            <img src="images/walk-In-Interview-Post.png" alt="" />
                        </div>
                        <div className="staffing-content">
                            <h4>Walk-ins & Direct Apply</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className="company-quote">
                <p>
                    ❝We believe that our Associates are our brand ambassadors. When we focus on
                    delivering happiness to our associates, we automatically deliver customer delight!❞
                </p>
            </div>

            <div className="company-leaders">
                <h2>OUR BUSINESS LEADERS</h2>
                <div className="company-leaders-cards">
                    <div className="comapany-leaders-card">
                        <div className="leader-image">
                            <img src="https://www.tvsmotor.com/-/media/Feature/About-US/Board-Of-Directors/detail-page/venu-srinivasan-desk-detail.jpg" alt="" />
                        </div>
                        <div className="leader-name">
                            <h4>Mr. Ayush Arya</h4>
                            <p>Managing director</p>
                        </div>
                    </div>
                    <div className="comapany-leaders-card">
                        <div className="leader-image">
                            <img src="https://www.tvsmotor.com/-/media/Feature/About-US/Board-Of-Directors/detail-page/venu-srinivasan-desk-detail.jpg" alt="" />
                        </div>
                        <div className="leader-name">
                            <h4>Mr. Deepak Kumar</h4>
                            <p>Director</p>
                        </div>
                    </div>
                    <div className="comapany-leaders-card">
                        <div className="leader-image">
                            <img src="https://www.tvsmotor.com/-/media/Feature/About-US/Board-Of-Directors/detail-page/venu-srinivasan-desk-detail.jpg" alt="" />
                        </div>
                        <div className="leader-name">
                            <h4>Ms. Simply Jaiswal</h4>
                            <p>VP –East Cost Sales Head</p>
                        </div>
                    </div>
                    <div className="comapany-leaders-card">
                        <div className="leader-image">
                            <img src="https://www.tvsmotor.com/-/media/Feature/About-US/Board-Of-Directors/detail-page/venu-srinivasan-desk-detail.jpg" alt="" />
                        </div>
                        <div className="leader-name">
                            <h4>Mr. Rishav Kumar</h4>
                            <p>VP –Sales & Ops (East Coast)</p>
                        </div>
                    </div>
                    <div className="comapany-leaders-card">
                        <div className="leader-image">
                            <img src="https://www.tvsmotor.com/-/media/Feature/About-US/Board-Of-Directors/detail-page/venu-srinivasan-desk-detail.jpg" alt="" />
                        </div>
                        <div className="leader-name">
                            <h4>Ms. Nilam Kumar</h4>
                            <p>AVP –National Training Head</p>
                        </div>
                    </div>
                    <div className="comapany-leaders-card">
                        <div className="leader-image">
                            <img src="https://www.tvsmotor.com/-/media/Feature/About-US/Board-Of-Directors/detail-page/venu-srinivasan-desk-detail.jpg" alt="" />
                        </div>
                        <div className="leader-name">
                            <h4>Ms. Mahima Kumari</h4>
                            <p>Chief Placement Officer</p>
                        </div>
                    </div>
                    <div className="comapany-leaders-card">
                        <div className="leader-image">
                            <img src="https://www.tvsmotor.com/-/media/Feature/About-US/Board-Of-Directors/detail-page/venu-srinivasan-desk-detail.jpg" alt="" />
                        </div>
                        <div className="leader-name">
                            <h4>Ms. Sony Singh</h4>
                            <p>Chief Sourcing Officer</p>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    </>
  )
}

export default AboutComp
