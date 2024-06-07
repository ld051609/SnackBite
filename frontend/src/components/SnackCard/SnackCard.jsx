import React from 'react'
import './SnackCard.css'
import {useNavigate} from 'react-router-dom'
const SnackCard = ({snack}) => {
  const navigate = useNavigate()
  function handleOnClick() {
    navigate(`/about/${snack.name}`)
  }

  return (
    <div className='card'>
        <img src={snack.img} alt='snack' className='card-img'/>
        <div className='card-text'>
            <p className='snack-name'>{snack.name}</p>
            <p className='snack-rating'>Rating: {snack.rating}</p>
            <button className='review-btn' onClick={handleOnClick}>Review</button>

        </div>

    </div>
  )
}

export default SnackCard