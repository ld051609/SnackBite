import React from 'react'
import Homepage from './components/Homepage/Homepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Profile from './components/Profile/Profile';
import Contact from './components/Contact/Contact';
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>

      
      </BrowserRouter>


    </div>
  )
}

export default App
