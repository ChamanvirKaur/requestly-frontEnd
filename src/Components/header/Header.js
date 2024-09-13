import React, { useState, useEffect } from 'react';
import './Header.css';
import API_BASE_URL from '../../apiConfig';
function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if token is present in localStorage when the component mounts
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = async () => {
    const token = localStorage.getItem('token');
    console.log("token is:",token)
    if (token) {
      try {
        // Send a POST request to the logout API
        const response = await fetch(`${API_BASE_URL}/users/logout/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept':'*/*',
            'Authorization': `Token ${token}`
          }
        });

        if (response.ok) {
          // Logout successful, remove the token and redirect
          localStorage.removeItem('token');
          setIsLoggedIn(false);
          window.location.href = '/login'; // Redirect to the login page
          localStorage.removeItem('email')
        } else {
          // Handle the error, e.g., show an error message
          console.error('Logout failed');
        }
      } catch (error) {
        console.error('Error during logout:', error);
      }
    }
  };

  return (
    <div id="header">
      <nav>
          <div className='header-logo'>
              <img className='header-logo-image' src= "./images/Requestly logo.png" alt="" />
              <span>Requestly</span>
          </div>

       <div className='header-list'>
       <ul id="sidemenu">
          {isLoggedIn ? (
            <>
              <li><button onClick={handleLogout}>Logout</button></li>
            </>
          ) : (
            <>
              <li><a href="/login">Login</a></li>
              <li><a href="/signup">Signup</a></li>
            </>
          )}
          <i className="fa-sharp fa-solid fa-xmark" onClick={() => { document.getElementById("sidemenu").style.right = "-500px"; }}></i>
        </ul>
       </div>
        <i className="fa-solid fa-bars" onClick={() => { document.getElementById("sidemenu").style.right = "-200px"; }}></i>
      </nav>
    </div>
  );
}

export default Header;
