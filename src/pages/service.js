import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import ServicesPage from '../components/servicespage'
import RecruitmentProcess from '../components/recruitmentprocess'

const Service = () => {
  return (
    <>
      {<Header/>}
      {<ServicesPage/>}
      {<RecruitmentProcess/>}
      {<Footer/>}
    </>
  )
}

export default Service
