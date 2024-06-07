import React from 'react'
import './Contact.css'
import NavBar from '../../components/NavBar/NavBar'
const Contact = () => {
  return (
    <div>
      <NavBar/>
      <h2 className='contact-h2'>Contact Us</h2>
      <p className='contact-p'>We'd love to hear from you! Whether you have a question about our services, need assitance or just want to provide feedback, feel free to reach out to us</p>
      <h2 className='get-in-touch-h2'>Get in Touch</h2>
      <p className='get-in-touch-p'>For any general questions or information about SnackBite, please contact us at:</p>
      <ul>
        <li><strong>Email</strong>: info@snackbite.com</li>
        <li><strong>Phone</strong>: +1 (123) 456-7890</li>
      </ul>
      <h2 className='connect-h2'>Connect with Us</h2>
      <p className='connect-p'>Stay connected and follow us on socail media for the latest updates</p>
      <ul>
        <li><strong>Facbook</strong>: facebook.com/snackbite</li>
        <li><strong>Twiiter</strong>: twitter.com/snackbite</li>
        <li><strong>Instagram</strong>: instagram.com/snackbite</li>

      </ul>

    </div>
  )
}

export default Contact