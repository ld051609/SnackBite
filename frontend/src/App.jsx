import React from 'react'
import Homepage from './routes/Homepage/Homepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './routes/About/About';
import Profile from './routes/Profile/Profile';
import Contact from './routes/Contact/Contact';
import SnackDetails from './routes/SnackDetails/SnackDetails';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
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
        <Route path="/about/:snackName" element={<SnackDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path='/signup' element={<Signup/>}/>
      </Routes>

      
      </BrowserRouter>


    </div>
  )
}

export default App
