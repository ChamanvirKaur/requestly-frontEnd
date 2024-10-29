import React, { useState, useContext,useEffect } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { multiStepContext } from '../../StepContext';
import API_BASE_URL from '../../apiConfig';

function Login() {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const [popupMessage, setPopupMessage] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const { userData, setuserData, authToken, setauthToken } = useContext(multiStepContext);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validation
    if (formData.username === "" && formData.password === "") {
      setEmailError(true);
      setPasswordError(true);
      return;
    } else if (formData.username === "") {
      setEmailError(true);
      return;
    } else if (formData.password === "") {
      setPasswordError(true);
      return;
    }

    // Reset errors
    setEmailError(false);
    setPasswordError(false);

    try {
      const response = await fetch(`${API_BASE_URL}/users/login/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("Response data:", data);

      if (response.ok) {
        setPopupMessage("Login Successful");
        setShowPopup(true);
        
        // Wait before navigating to allow popup to render
        setTimeout(() => {
          localStorage.setItem('token', data.token);
          localStorage.setItem('email', formData.username);
          setauthToken(true);
      
          setFormData({
            username: "",
            password: "",
          });
      
          setuserData({
            email: formData.username
          });
      
          navigate('/dashboard/requests');
        }, 1000); // Wait for 1 second
        
        // Close the popup after 5 seconds
        setTimeout(() => {
          closePopup();
        }, 5000);
      } else {
        console.log("Login failed - Setting error message and showing popup");
        setPopupMessage(data.message || 'Login failed. Please check your credentials.');
        setShowPopup(true);
      }
      
    } catch (error) {
      console.error('Error:', error);
      setPopupMessage('An error occurred. Please try again later.');
      setShowPopup(true);
    }
  };
  useEffect(() => {
    if (showPopup) {
      console.log("Popup is shown:", popupMessage);
    }
  }, [showPopup]);
  const closePopup = () => {
    setShowPopup(false);
    if (popupMessage === "Login Successful") {
      console.log("Navigating to /request/myrequest");
      
      navigate('/dashboard/requests');
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setuserData({ ...userData, [name]: value });
  };

  return (
    <div className='login-container'>
      <div className="login-otherContent">
        <p>It’s good to see you again — welcome back!</p>
      </div>
      <div className="login-contentBox">
        <form onSubmit={handleSubmit}>
          <div className="login-form">
            <div className="login-h1">
              <h1>Login</h1>
            </div>
            <input
              value={formData.username}
              name='username'
              onChange={handleChange}
              placeholder='username'
              type="text"
            />
            {emailError && <span style={{ color: "red" }}>Please enter email</span>}
            <input
              value={formData.password}
              onChange={handleChange}
              name='password'
              placeholder='Password'
              type="password"
            />
            {passwordError && <span style={{ color: "red" }}>Please enter password</span>}
            <div className='next-step'>
              <button type='submit'>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>{popupMessage}</h2>
            <button className='close-button' onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
