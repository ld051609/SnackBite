import React from 'react'
import './Homepage.css'
import Logo from '../../assets/asianSnack.jpg'
import NavBar from '../../components/NavBar/NavBar'
import { Link } from 'react-router-dom'
const Homepage = () => {
  function signUpOnClick() {
    window.location.href = '/signup'
  }
  function loginOnClick() {
    window.location.href = '/login'
  } 
  return (
    <div>
      <NavBar/>
      <img src={Logo} />
      <h2 className='intro-text'>Welcome to SnackBite</h2>
      <div className='subcontainer1'>
        <p className='intro-text-2'>A discovery place where you can indulge yourself in the culture of asian snacking</p>
        <button className='login-btn' onClick={loginOnClick}>Login</button>
      </div>
      <div className='subcontainer2'>
        <p>Don't have an account?</p>
        <button className='signup-btn' onClick={signUpOnClick}>Sign up</button>
      </div>


    </div>
  )
}

export default Homepage
