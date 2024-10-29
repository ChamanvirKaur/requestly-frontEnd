import React, { useState, useEffect,useContext } from 'react';
import { multiStepContext } from '../../StepContext';
import './Header.css';
import API_BASE_URL from '../../apiConfig';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false); // state to check user is logged in or not
  const { userData, setuserData, authToken,setauthToken,handlechangeToken } = useContext(multiStepContext); // context variable 
  
  // this useEffect is to render header page every time token will generated
  useEffect(() => {
    // Check if token is present in localStorage when the component mounts
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, [authToken]);

  //this function is called when user will clcik on logout button
  const handleLogout = async () => {
    const token = localStorage.getItem('token');
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
          setauthToken(false);
          setIsLoggedIn(false);
          window.location.href = '/'; // Redirect to the login page
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

  const nevigateLanding =()=>{
    navigate('/')
  }

  const gotoReq=()=>{
    navigate('/dashboard/requests')
  }

  const gotoProfile=()=>{
    navigate('dashboard/profile')
    }
  return (
    <div id="header">
      <nav>
          <div className='header-logo' onClick={()=>{nevigateLanding()}}>
              <img className='header-logo-image' src= "./images/Requestly logo.png" alt="" />
              <span>Requestly</span>
          </div>

       <div className='header-list'>
       <ul id="sidemenu">
          {isLoggedIn ? (
            <>
              <li id='myRequest'><a style={{color:'#080808'}}  onClick={()=>{gotoReq()}}>My Requests</a></li>
              <li id='myProfile'><a style={{color:'#080808'}} id='myProfile' onClick={()=>{gotoProfile()}}>My Profile</a></li>

              <li><a onClick={handleLogout}>Logout</a></li>

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
