import React, { useContext, useState } from 'react';
import './steps.css';
import { multiStepContext } from '../../StepContext';

function SecondStep() {
    const { setcurrentStep, userData, setuserData, handleChnage } = useContext(multiStepContext);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const checkAuth = () => {
        let hasError = false;

        if (userData.password.trim() === '') {
            setPasswordError(true);
            hasError = true;
        } else {
            setPasswordError(false);
        }

        if (userData.ConfirmPassword.trim() === '' || userData.ConfirmPassword !== userData.password) {
            setConfirmPasswordError(true);
            hasError = true;
        } else {
            setConfirmPasswordError(false);
        }

        if (!hasError) {
            setcurrentStep(3);
        }
    };

    return (
        <div className='signup-container'>
            <div className="signup-contentBox">
                <div className="signup-h1">
                    {/* You can add a title here */}
                </div>
                <div className="signup-form">
                    <div className="password-container">
                        <input
                            value={userData.password}
                            onChange={handleChnage}
                            name='password'
                            placeholder='Password'
                            type={showPassword ? "text" : "password"}
                        />
                        <span className="eye-icon" onClick={togglePasswordVisibility}>
                            {showPassword ? <i className="fa-solid fa-eye"></i> : <i className="fa-solid fa-eye-slash"></i>}
                        </span>
                        {passwordError && <span style={{ color: 'red' }}>Enter a password</span>}
                    </div>
                    <div className="password-container">
                        <input
                            value={userData.ConfirmPassword}
                            onChange={handleChnage}
                            name='ConfirmPassword'
                            placeholder='Confirm Password'
                            type={showConfirmPassword ? "text" : "password"}
                        />
                        <span className="eye-icon" onClick={toggleConfirmPasswordVisibility}>
                            {showConfirmPassword ? <i className="fa-solid fa-eye"></i> : <i className="fa-solid fa-eye-slash"></i>}
                        </span>
                        {confirmPasswordError && <span style={{ color: 'red' }}>Passwords do not match</span>}
                    </div>
                </div>
                <div className='next-back-buttons'>
                    <button  onClick={() => setcurrentStep(1)}>
                    &#8592; Previous step 
                    </button>
                    <button  onClick={checkAuth}>
                        Next step &#8594;
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SecondStep;
