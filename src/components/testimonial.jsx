import React from 'react'
import '../css/testimonial.css'
import TestimonialCard from '../components/testimonialcard'


const Testimonial = () => {
  return (
    <>
      <div className="testimonials">
        <h2>What Our Clients Says</h2>
        <TestimonialCard/>
      </div>
    </>
  )
}

export default Testimonial
