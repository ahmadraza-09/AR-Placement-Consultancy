import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import AdminLoginComp from '../components/adminlogincomp'

const AdminLogin = () => {
  return (
    <>
      {<Header/>}
      {<AdminLoginComp/>}
      {<Footer/>}
    </>
  )
}

export default AdminLogin
