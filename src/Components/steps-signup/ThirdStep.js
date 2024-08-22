import React, { useContext,useState } from 'react';
import './steps.css';
import { useNavigate } from 'react-router-dom';
import { multiStepContext } from '../../StepContext';

function ThirdStep() {
    const navigate = useNavigate();
    const { setcurrentStep, userData, setuserData, handleChnage, finalData, setfinalData } = useContext(multiStepContext);
    const [showPopup, setShowPopup] = useState(false);

    const testData = {
        username: "tom@tulong.com",
        first_name: "eet",
        last_name: "UIO",
        phone: "89099800909",
        email: "tom@tulong.com",
        password: "V8-rtyforekfp",
        address: "ON",
        city: "OP",
        province: "Yuifd"
    };

    const closePopup = () => {
        setShowPopup(false);
        userData({
          email : "",
          password :"",
       
        })
      };
    

    const submitData = async () => {
          console.log(testData)
        try {
            const response = await fetch('https://requestly.pythonanywhere.com/api/users/register/'
                , {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    // Add this if sending credentials like cookies
                   
                  },
                  credentials: 'include', // Add this line if you're sending credentials
                  body: JSON.stringify({
                    username:userData.email.split('@')[0],
                    email: userData.email,
                    password: userData.password,
                    first_name:userData.first_name,
                    last_name:userData.last_name
                  }),
                })
                .then(response => response.json())
                .then(data => console.log(data))
                .then("Registrat")
                .catch(error => console.error('Error:', error));
                console.log(response)

            if (response.status==201) {
                console.log('Data submitted successfully:', await response.json());
                setShowPopup(true);
                setcurrentStep(1);
                navigate("/makeRequest");
            } else {
                console.error('Error submitting data:');
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
            <h2>login Successful</h2>
            <button className='close-button' onClick={closePopup}>Close</button>
          </div>
        </div>
      }
        </div>
    );
}

export default ThirdStep;
