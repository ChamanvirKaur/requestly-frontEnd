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

        if (userData.firstname.trim() === '') {
            setfnameError(true);
            hasError = true;
        } else {
            setfnameError(false);
        }

        if (userData.lastname.trim() === '') {
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
                    {/* Add your heading or title here */}
                </div>

                <div className="signup-form">
                    <div className='fullnamebox'>
                        <div className='firstName'>
                            <input
                                value={userData.firstname}
                                onChange={handleChnage}
                                name='firstname'
                                placeholder='First-Name'
                                type="text"
                            />
                            {fnameError && <span style={{ color: 'red' }}>Please enter firstname</span>}
                        </div>

                        <div className='lastName'>
                            <input
                                value={userData.lastname}
                                onChange={handleChnage}
                                name='lastname'
                                placeholder='Last-Name'
                                type="text"
                            />
                            {lnameError && <span style={{ color: 'red' }}>Please enter lastname</span>}
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

                <div>
                    <button className="submit-button" onClick={checkAuth}>
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FirstStep;
