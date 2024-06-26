import React, { useEffect, useState } from 'react'
import './About.css'
import NavBar from '../../components/NavBar/NavBar'
import Searchbar from '../../components/Searchbar/Searchbar'
import SnackCard from '../../components/SnackCard/SnackCard'
const About = () => {
  const [allSnacks, setAllSnacks] = useState([]); 
  const fetchAllSnacks = async () => {
    try {
      const res = await fetch('http://localhost:5000/snacks');
      const jsonData = await res.json(); 
      setAllSnacks(jsonData);
      console.log(jsonData);
    } catch (error) {
      console.log(error)
      
    }
  }
  useEffect(() => {
    fetchAllSnacks();
  }, []);

  return (
    <div>
      <NavBar/>
      <Searchbar/>
      <div className='snack-card-container'>
        {allSnacks.map((snack, key) => {
          return <SnackCard key={key} snack={snack}/>}
        )}
      </div>

      
      
    </div>
  )
}

export default About