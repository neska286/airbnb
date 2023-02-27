import React from 'react'
import HeaderBackGround from '../../assets/header-bg.svg';
import './header.css';

const Header = () => {
  return (
    <section className='header-wrapper'>
    <img
          src={ HeaderBackGround}
          alt="headerbg"
          width="395.91"
          height="232"
        />
        <div>
            <h1 className='header-title'>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
</p>
        </div>
</section>
  )
}

export default Header