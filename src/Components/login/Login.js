import React, { useState, useContext } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { multiStepContext } from '../../StepContext';

function Login() {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState(""); // To hold the success or error message
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const { userData, setuserData } = useContext(multiStepContext);

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

    // Send the data to the API
    try {
      const response = await fetch('http://127.0.0.1:8000/api/users/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Add this line if you're sending credentials
        body: JSON.stringify(formData),
      });
      console.log(formData)
      const data = await response.json();
      
      console.log(data.token)
      if (response.ok) {
        // Handle successful login
        localStorage.setItem('token', data.token); // Store the token in localStorage
        localStorage.setItem('email',formData.username)
        setPopupMessage("Login Successful");
        setShowPopup(true);
        setFormData({
          username: "",
          password: "",
        });
        setuserData({
          email: formData.username
        });
        // Close the popup after 5 seconds and navigate to the dashboard
        setTimeout(() => {
          closePopup();
        }, 5000);
      } else {
        setPopupMessage(data.message || 'Login failed. Please check your credentials.');
        setShowPopup(true);
      }
    } catch (error) {
      console.error('Error:', error);
      setPopupMessage('An error occurred. Please try again later.');
      setShowPopup(true);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    if (popupMessage === "Login Successful") {
      navigate('/dashboard');
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
        <p>
        It’s good to see you again — welcome back!
        </p>
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
              <button  type='submit'>
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
