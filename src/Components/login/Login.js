import React, { useState } from 'react';
import './Login.css';

function Login() {
    const [showPopup, setShowPopup] = useState(false);
    const[formData,setformData]=useState({
        email : "",
        password :"",
    

    });
    const[emailError,setemailError]=useState(false);
    const[passwordError,setpasswordError]=useState(false);




    const handleSubmit = (event) => {
      event.preventDefault();
      if(formData.email === "" && formData.password === ""
      ){
        setemailError(true);
        
        setpasswordError(true);
       
        }
     
      else if(formData.email === ""){
        setemailError(true);
      }
      else if(formData.password === ""){
        setpasswordError(true);
      }
  
     
      
      else {
        setShowPopup(true);
        setemailError(false);
        setpasswordError(false);
      
      }

      
    };
  
    const closePopup = () => {
      setShowPopup(false);
      setformData({
        email : "",
        password :"",
     
      })
    };

    const handleChnage = (event) =>{
        const { name, value } = event.target;
      setformData({ ...formData, [name]: value });
      console.log(formData);
    }
  return (
    <div className='login-container'>
        <div className="login-otherContent">
      <i class="fa-solid fa-user"></i>
            
        </div>
        <div className="login-contentBox">
           
            <form action="" onSubmit={handleSubmit}>
                <div className="login-form">
                <div className="login-h1">
                <h1>login</h1>
            </div>
                    <input value={formData.email} name='email' onChange={handleChnage} placeholder='Email' type="email" />
                    {emailError &&  <span style={{color : "red"}}> Please enter email </span>}
                    <input value={formData.password} onChange={handleChnage} name='password' placeholder='Password' type="password" />
                    {passwordError &&  <span style={{color : "red"}}> Please enter password </span>}
                    <div>
                    <button className="submit-button" type='submit'>
                        Submit
                    </button>
                </div>
                </div>
               
            </form>
        </div>
        {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>login Successful</h2>
            <button className='close-button' onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Login
