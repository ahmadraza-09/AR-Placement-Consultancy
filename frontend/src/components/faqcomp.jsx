import React, { useState, useEffect } from 'react';
import '../css/faq.css';

const FaqComp = () => {

    const [faqs, setFaqs] = useState([
        {
            id: 1,
            question: "What services do you offer as a job consultancy?",
            answer: "As a job consultancy, we offer a range of services including job placement, resume writing, career counseling, interview preparation, and skill development training.",
            isOpen: false
        },
        {
            id: 3,
            question: "Do you charge any fees for your services?",
            answer: "Our services are free for job seekers. We earn our revenue through partnerships with employers who pay us to help them find qualified candidates for their job openings.",
            isOpen: false
        },
        {
            id: 4,
            question: "What types of job opportunities do you offer?",
            answer: "We offer job opportunities across various industries and sectors including IT, finance, healthcare, engineering, sales, marketing, and more. We cater to both entry-level and experienced professionals.",
            isOpen: false
        },
        {
            id: 5,
            question: "How do you match candidates with job openings?",
            answer: "We match candidates with job openings based on their skills, qualifications, experience, and career preferences. Our team evaluates each candidate and provides personalized recommendations for suitable positions.",
            isOpen: false
        },
        {
            id: 6,
            question: "Can you help me prepare for job interviews?",
            answer: "Yes, we offer interview preparation services including mock interviews, interview tips, and guidance on how to answer common interview questions. We help you present yourself effectively to potential employers.",
            isOpen: false
        },
        {
            id: 7,
            question: "What industries do you specialize in?",
            answer: "We specialize in several industries including information technology, finance, healthcare, manufacturing, retail, hospitality, and more. Our goal is to match candidates with opportunities that align with their skills and career goals.",
            isOpen: false
        },
        {
            id: 8,
            question: "How long does it take to find a job through your consultancy?",
            answer: "The time it takes to find a job varies depending on factors such as your qualifications, experience, and the current job market conditions. We work diligently to help you find suitable opportunities as quickly as possible.",
            isOpen: false
        },
        {
            id: 9,
            question: "Do you provide assistance with resume writing?",
            answer: "Yes, we offer resume writing services to help you create a professional and compelling resume that highlights your skills, experience, and achievements. A well-crafted resume can significantly improve your chances of landing interviews.",
            isOpen: false
        }
    ]);


    useEffect(() => {
        showTop();
    }, []);

    const showTop = () => {
        window.scrollTo(0, 0);
    };

    const toggleFaq = (id) => {
        setFaqs(faqs.map(faq => {
            if (faq.id === id) {
                return { ...faq, isOpen: !faq.isOpen };
            }
            return faq;
        }));
    };

  return (
    <>
      <div className="faq-section">
        <h2>Frequently Asked Questions (FAQs)</h2>
        <div className="faq-boxes">
            {faqs.map((faq) => (
                <div key={faq.id} className="faq-box">
                    <div className="question">
                        <p>{faq.question}</p>
                        <button onClick={() => toggleFaq(faq.id)}>
                            {faq.isOpen ? <i className="fa-solid fa-minus"></i> : <i className="fa-solid fa-plus"></i>}
                        </button>
                    </div>
                    {faq.isOpen && (
                        <div className="answer">
                            <p>{faq.answer}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
      </div>
    </>
  )
}

export default FaqComp
