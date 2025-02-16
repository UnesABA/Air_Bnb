import React from 'react'
import airBnbLogo from '/airbnb.png'

const NavBar = () => {
  return (
    <div className= "navbar-container">
        <img src={airBnbLogo} className="logo" alt="Airbnb logo" />
    </div>
  )
}

export default NavBar