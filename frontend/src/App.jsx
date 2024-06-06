import React from 'react'
import NavBar from './components/NavBar/NavBar';
import Homepage from './components/Homepage/Homepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Profile from './components/Profile/Profile';
const App = () => {
  return (
    <div>
      <NavBar/>
      {/* <Homepage/> */}
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/profile' element={<Profile/>} />
      </Routes>

      
      </BrowserRouter>


    </div>
  )
}

export default App
