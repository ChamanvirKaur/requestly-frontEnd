import React, { useState, useEffect } from 'react';
import './Header.css';

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if token is present in localStorage when the component mounts
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    // Remove the token from localStorage
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    window.location.href = '/login'; // Redirect to the login page
  };

  return (
    <div id="header">
      <nav>
        <img className='header-logo-image' src="./images/requestlylogo.png" alt="Requestly Logo" />

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
        <i className="fa-solid fa-bars" onClick={() => { document.getElementById("sidemenu").style.right = "-200px"; }}></i>
      </nav>
    </div>
  );
}

export default Header;
