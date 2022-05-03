import React from 'react'
import logo from "../../assets/images/logo.svg"

const Logo = () => {
  return (
    <div className='logo-container'>
        <div className="logo-img">
            <img src={logo} alt="" />
        </div>
    </div>
  )
}

export default Logo