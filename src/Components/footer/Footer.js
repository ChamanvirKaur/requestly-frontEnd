import React from 'react'
import './Footer.css'
import { useNavigate } from 'react-router-dom'
function Footer() {
  const navigate=useNavigate();

  const navigateContact=()=>{
    window.location.href = 'https://tulong.tech/contact-us'; 
  }
  return (
    <div className='footer'>
            <div className='footer-button'>
             
                <div className='footer-button-2' onClick={()=>{navigateContact()}}> Contact Us</div>
                <p>

                </p>
            </div>
            <div className='footer-copyright'>
                <p> &copy;2024 Powered By Tulong Technologies.</p>
            </div>    
    </div>
  )
}

export default Footer
