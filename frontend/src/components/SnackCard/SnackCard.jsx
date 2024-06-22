import React from 'react'
import './SnackCard.css'
import {useNavigate} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';


const SnackCard = ({snack}) => {
  const navigate = useNavigate()
  function handleOnClick() {
    navigate(`/about/${snack.name}`)
  }
  async function handleWishList() {
    try {
      const res = await fetch('http://localhost:5000/api/wishlist',{
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

  const calculateSnackRating = (rating) => {
    let stars = [];
    for (let i = 0; i < rating; i++) {
        stars.push(<FontAwesomeIcon icon={solidStar} />);
    }
    for (let i = 0; i < 5 - rating; i++) {
        stars.push(<FontAwesomeIcon icon={regularStar} />);
    }
    return stars;
}

  return (
    <div className='card'>
        <img src={snack.image} alt='snack' className='card-img'/>
        <div className='card-text'>
            <p className='snack-name'>{snack.name}</p>
            <div className='snack-rating'>
              <p>Rating:    </p>
              {calculateSnackRating(snack.rating)}

            </div>
            <button className='review-btn' onClick={handleOnClick}>Review</button>

        </div>

    </div>
  )
}

export default SnackCard