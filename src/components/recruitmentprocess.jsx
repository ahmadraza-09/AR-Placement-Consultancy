import React from 'react'
import '../css/recruitmentprocess.css';

const RecruitmentProcess = () => {
  return (
    <>
      <div className="recruitment-section">
        <h2>Our Recruitment Process</h2>
        <div className="recruitment-boxes">
            <div className="recruitment-box">
                <img src="images/screening.png" alt="" />
                <div className="content">
                    <h4>Screening</h4>
                    <p>Our process starts with screening of the resumes from job portals, our to provide suitable candidates to the companies.</p>
                </div>
            </div>
            <div className="recruitment-box">
                <div className="content">
                    <h4>Calling</h4>
                    <p>The screened candidates are given calls to gather information about their professional details, education details, their choice of preferred job profile etc. This call gives us a basic idea about the candidate's priorities and makes it easier for us to identify or find the best suitable employer. The main objective for calling is to identify which essential and desirable qualities matter to the candidate.</p>
                </div>
                <img src="images/calling.webp" alt="" />
            </div>
            <div className="recruitment-box">
                <img src="images/shortlisting.jpg" alt="" />
                <div className="content">
                    <h4>Shortlisting</h4>
                    <p>Shortlisting is the process to decide which candidates should be selected for the interviews for the required job specifications. Based on the information gathered from calling, the candidates are shortlisted according to their choice of job preferences. Shortlisting is an ideal way to ensure that the suitable candidate appears for the interview.</p>
                </div>
            </div>
            <div className="recruitment-box">
                <div className="content">
                    <h4>Screening by company</h4>
                    <p>After shortlisting the candidates resumes are forwarded to the employer for affirmation. After affirmation interviews are arranged, if the candidate qualifies all the stages of the recruitment process, he/she is provided with a job offer letter.</p>
                </div>
                <img src="images/preemployment.jpg" alt="" />
            </div>
        </div>
      </div>
    </>
  )
}

export default RecruitmentProcess
