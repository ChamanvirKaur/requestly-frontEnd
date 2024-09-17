import React, { useContext, useState } from 'react';
import './steps.css';
import { useNavigate } from 'react-router-dom';
import { multiStepContext } from '../../StepContext';
import API_BASE_URL from '../../apiConfig';

function ThirdStep() {
    const navigate = useNavigate();
    const { setcurrentStep, userData, setuserData, handleChnage,authToken,setauthToken} = useContext(multiStepContext);
    const [showPopup, setShowPopup] = useState(false);

    const closePopup = () => {
        setShowPopup(false);
        setuserData({
            ...userData, // retain existing fields
            email: "",
            password: "",
        });
    };

    const submitData = async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/users/signupandlogin/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({
                    username: userData.email,
                    email: userData.email,
                    password: userData.password,
                    first_name: userData.first_name,
                    last_name: userData.last_name,
                    street_address : userData.street_street_address,
                    city : userData.city,
                    province : userData.province,
                }),
            });

            const data = await response.json();
            console.log("Your signup token is : " , data.token)
            console.log("Data at registration:",data)
            console.log("Email",userData.email);
            console.log("first_name",userData.first_name);
            console.log("last_name",userData.last_name);


            // If successful, show popup and navigate
            if (response.ok) {
                setShowPopup(true);
                 localStorage.setItem('email',userData.email)
                localStorage.setItem('token',data.token)
                
                // Optionally, navigate to another page after showing the popup
                setTimeout(() => {
                    navigate("/makeRequest");
                    setauthToken(true);
                }, 1000); // navigate after 2 seconds
            }
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    };

    return (
        <div className='signup-container'>
            <div className="signup-contentBox">
                <div className="signup-h1">
                    {/* Your heading or other content */}
                </div>
                <div className="signup-form">
                    <input value={userData.street_address} onChange={handleChnage} name='street_address' placeholder='street_address' type="text" />
                    <input value={userData.city} onChange={handleChnage} name='city' placeholder='City' type="text" />
                    <input value={userData.province} onChange={handleChnage} name='province' placeholder='Province' type="text" />
                </div>
                <div className='next-back-buttons'>
                    <button  onClick={() => setcurrentStep(2)}>
                         &#8592; Previous step 
                    </button>
                    <button  onClick={submitData}>
                        Submit &#8594;
                    </button>
                </div>
            </div>

            {showPopup && 
                <div className="popup">
                    <div className="popup-content">
                        <h2>Registration Successful</h2>
                        <button className='close-button' onClick={closePopup}>Close</button>
                    </div>
                </div>
            }
        </div>
    );
}

export default ThirdStep;
