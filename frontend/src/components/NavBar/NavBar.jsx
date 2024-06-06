import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import { useRef } from 'react'
import './NavBar.css'
import {Routes, Route} from 'react-router-dom';

const NavBar = () => {
  const navRef = useRef();
  // When the function is called, either remove or add the class responsive_nav
  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav')
  }
  return (
    <header>
      <div className='logo'>
      <h1>SnackBit</h1>
      </div>

      <div>
        <nav ref={navRef}>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/profile">Profile</a>
          <button className='nav-btn nav-close-btn' onClick={showNavbar}>
          <FaTimes/>
        </button>
        </nav>

        <button className='nav-btn nav-close-btn' onClick={showNavbar}>
          <FaBars/>
        </button>
      </div>

      <div>
        <p className='contact'>Contact us</p>
      </div>

    </header>


  )
}

export default NavBar