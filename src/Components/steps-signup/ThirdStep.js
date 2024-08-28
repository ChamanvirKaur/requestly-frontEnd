import React, { useContext, useState } from 'react';
import './steps.css';
import { useNavigate } from 'react-router-dom';
import { multiStepContext } from '../../StepContext';

function ThirdStep() {
    const navigate = useNavigate();
    const { setcurrentStep, userData, setuserData, handleChnage } = useContext(multiStepContext);
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
            const response = await fetch('http://127.0.0.1:8000/api/users/register/', {
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
                }),
            });

            const data = await response.json();
            console.log(data);
            

            // If successful, show popup and navigate
            if (response.ok) {
                setShowPopup(true);
                // Optionally, navigate to another page after showing the popup
                setTimeout(() => {
                    navigate("/login");
                }, 2000); // navigate after 2 seconds
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
                    <input value={userData.address} onChange={handleChnage} name='address' placeholder='Address' type="text" />
                    <input value={userData.city} onChange={handleChnage} name='city' placeholder='City' type="text" />
                    <input value={userData.province} onChange={handleChnage} name='province' placeholder='Province' type="text" />
                </div>
                <div className='next-back-buttons'>
                    <button className="submit-button" onClick={() => setcurrentStep(2)}>
                        Back
                    </button>
                    <button className="submit-button" onClick={submitData}>
                        Submit
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
