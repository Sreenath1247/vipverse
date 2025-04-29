import React from 'react'
import logo from '../assets/images/logo.png'

const Header = () => {
  return (
    <div>
        <img src={logo} alt="VIPverse Logo" className="w-25 h-25 p-5" />
    </div>
  )
}

export default Header