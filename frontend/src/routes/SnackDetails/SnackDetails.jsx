import React from 'react'
import './SnackDetails.css'
import { useParams } from 'react-router-dom'
const SnackDetails = () => {
    const {snackName} = useParams()

  return (
    <div>SnackDetails</div>
  )
}

export default SnackDetails