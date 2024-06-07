import React, { useEffect } from 'react'
import './Profile.css'
import NavBar from '../../components/NavBar/NavBar'
import { useNavigate } from 'react-router-dom'; // If you're using react-router-dom for routing
const Profile = () => {
  const [username, setUsername] = React.useState('')  
  const [email, setEmail] = React.useState('')
  const [date, setDate] = React.useState('')
  const [wishlist, setWishlist] = React.useState([])
  async function fetchUserData() {
    try {
      const response = await fetch('https://localhost:5000/person', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
      const data = await response.json()
      setUsername(data.username)
      setEmail(data.email)
      setDate(data.createdAt)
      setWishlist(data.wishlist)
      return data;

      
    } catch (error) {
      console.log(error)
      
    }
  }
  useEffect(() => {
    fetchUserData();
      // Test 
    setUsername('test')
    setEmail('test@gmail.com');
    setDate('2021-09-21T00:00:00.000Z')
  }, [])
  const handleSnackClick = (snackName) => {
    navigate(`/about/${snackName}`)
  }



  return (
    <div >
      <NavBar/>
      <div className='profile-container'>
        <div className='user-info'>
          <h1 className='title'>User Profile</h1>
          <p className='username'><strong>Username</strong>: {username}</p>
          <p className='email'><strong>Email</strong>: {email}</p>
          <p className='member'><strong>Member since</strong>: <span className='created-ai'>{date}</span></p>

        </div>
        <div className='wishlist'>
          <h1 className='title'>Wishlist</h1>
          <ul className='wishlist-items'></ul>
          {wishlist.map((item, key) => (
            <li key={key}>{
              item.name}
              <button className='btn' onClick={() => handleSnackClick(item.name)}>View Detail</button>
            </li>
          ))
          }
        </div>
      </div>

      

    </div>
  )
}

export default Profile