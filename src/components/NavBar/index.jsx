import React from 'react'
import Logo from '../../assets/logo.svg';
import './navbar.css';

const NavBar = () => {
  return (
    <div className='wrapper'>
        <img
              src={Logo}
              alt="airbnb Logo"
              width="82"
              height="25"
              className='logo'
            />
    </div>
  )
}

export default NavBar