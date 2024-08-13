import React, { useState } from 'react'
import './Header.css'
function Header() {

  return (
    <div id="header">
      
          <nav>
          <img className='header-logo-image' src= "./images/requestlylogo.png" alt="" />

              <ul id="sidemenu">
                  <li><a href="/login">Login</a></li>
                  <li><a href="/signup">Signup</a></li>
                  <i class="fa-sharp fa-solid fa-xmark" onClick={()=>{document.getElementById("sidemenu").style.right="-500px"}} ></i>
              </ul>
              <i class="fa-solid fa-bars" onClick={()=>{document.getElementById("sidemenu").style.right="-200px"}}></i>
          </nav>

        
      
  </div>
  )
}

export default Header
