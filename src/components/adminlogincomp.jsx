import React from 'react'
import '../css/adminlogin.css'

const AdminLoginComp = () => {
  return (
    <>
      <div className="admin-login-section">
        <form>
            <h2>Login</h2>
            <h4>Welcome to Admin Login</h4>
            <input type="text" placeholder='Mobile Number'/>
            <input type="password" placeholder='Password'/>
            <button>Login</button>
        </form>
      </div>
    </>
  )
}

export default AdminLoginComp
