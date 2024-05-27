import React from 'react'
import Header from '../components/header'
import Hero from '../components/hero';
import Footer from '../components/footer';
import Testimonial from '../components/testimonial';
import Services from '../components/services';
import WelcomeSection from '../components/welcomesection';
import FindJob from '../components/findjob';
import CompanyRegistered from '../components/companyregistered';

const Home = () => {
  return (
    <>
      {<Header/>}
      {<Hero/>}
      {<WelcomeSection/>}
      {<FindJob/>}
      {<Services/>}
      {<CompanyRegistered/>}
      {<Testimonial/>}
      {<Footer/>}
    </>
  )
}

export default Home;
