import React, { useContext, useState } from 'react';
import './steps.css';
import { multiStepContext } from '../../StepContext';

function SecondStep() {
    const { setcurrentStep, userData, setuserData, handleChnage } = useContext(multiStepContext);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
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
                            {showPassword ? <i class="fa-solid fa-eye"></i> : <i class="fa-solid fa-eye-slash"></i>}
                        </span>
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
                            {showConfirmPassword ? <i class="fa-solid fa-eye"></i>: <i class="fa-solid fa-eye-slash"></i>}
                        </span>
                    </div>
                </div>
                <div className='next-back-buttons'>
                    <button className="submit-button" onClick={() => setcurrentStep(1)}>
                        Back
                    </button>
                    <button className="submit-button" onClick={() => { setcurrentStep(3) }}>
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SecondStep;
