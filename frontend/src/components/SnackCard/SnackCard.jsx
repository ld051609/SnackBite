import React from 'react'
import './SnackCard.css'
import {useNavigate} from 'react-router-dom'
const SnackCard = ({snack}) => {
  const navigate = useNavigate()
  function handleOnClick() {
    navigate(`/about/${snack.name}`)
  }
  function handleWishList() {
    try {
      const res = fetch('https://localhost:5000/wishlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`

      },
      body: JSON.stringify({snack: snack.name}),
    })
    if (res.ok) {
      const data = await res.json();
      console.log('Snack added to wishlist:', data);
    } else{
      const errorData = await response.json();
      console.error('Error adding snack to wishlist:', errorData.message);


    }
  } catch (error) {
    console.log(error) }
  }

  return (
    <div className='card'>
        <img src={snack.img} alt='snack' className='card-img'/>
        <div className='card-text'>
            <p className='snack-name'>{snack.name}</p>
            <p className='snack-rating'>Rating: {snack.rating}</p>
            <button className='review-btn' onClick={handleOnClick}>Review</button>
            <button className='wishlist-btn' onClick={handleWishList}>Wishlist</button>

        </div>

    </div>
  )
}

export default SnackCard