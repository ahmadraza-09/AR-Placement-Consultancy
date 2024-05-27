import React from 'react'
import Header from '../components/header';
import OppeningJobsComp from '../components/oppeningjobscomp';
import Footer from '../components/footer';

const OppeningJobs = () => {
  return (
    <>
      {<Header/>}
      {<OppeningJobsComp/>}
      {<Footer/>}
    </>
  )
}

export default OppeningJobs
