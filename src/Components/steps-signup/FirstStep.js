import React, { useContext, useState } from 'react';
import './steps.css';
import { multiStepContext } from '../../StepContext';

function FirstStep() {
    const { setcurrentStep, userData, setuserData, handleChnage } = useContext(multiStepContext);
    const [fnameError, setfnameError] = useState(false);
    const [lnameError, setlnameError] = useState(false);
    const [emailError, setemailError] = useState(false);

    const checkAuth = () => {
        let hasError = false;

        if (userData.first_name.trim() === '') {
            setfnameError(true);
            hasError = true;
        } else {
            setfnameError(false);
        }

        if (userData.last_name.trim() === '') {
            setlnameError(true);
            hasError = true;
        } else {
            setlnameError(false);
        }

        if (userData.email.trim() === '') {
            setemailError(true);
            hasError = true;
        } else {
            setemailError(false);
        }

        if (!hasError) {
            setcurrentStep(2);
        }
    };

    return (
        <div className='signup-container'>
            <div className="signup-contentBox">
                <div className="signup-h1">
                    
                </div>

                <div className="signup-form">
                    <div className='fullnamebox'>
                        <div className='first_name'>
                            <input
                                value={userData.first_name}
                                onChange={handleChnage}
                                name='first_name'
                                placeholder='First-Name'
                                type="text"
                            />
                            {fnameError && <span style={{ color: 'red' }}>Please enter first_name</span>}
                        </div>

                        <div className='last_name'>
                            <input
                                value={userData.last_name}
                                onChange={handleChnage}
                                name='last_name'
                                placeholder='Last-Name'
                                type="text"
                            />
                            {lnameError && <span style={{ color: 'red' }}>Please enter last_name</span>}
                        </div>
                    </div>

                    <div className='emailbox'>
                        <input
                            value={userData.email}
                            onChange={handleChnage}
                            name='email'
                            placeholder='Email'
                            type="email"
                        />
                        {emailError && <span style={{ color: 'red' }}>Please enter email</span>}
                    </div>
                </div>

                <div className="next-step">
                    <button  onClick={checkAuth}>
                        Next step &#8594;
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FirstStep;
