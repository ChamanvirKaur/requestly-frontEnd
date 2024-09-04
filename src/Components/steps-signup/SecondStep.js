import React, { useContext, useState } from 'react';
import './steps.css';
import { multiStepContext } from '../../StepContext';

function SecondStep() {
    const { setcurrentStep, userData, setuserData } = useContext(multiStepContext);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setuserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const isStrongPassword = (password) => {
        const minLength = 8;
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumber = /\d/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        return password.length >= minLength && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;
    };

    const checkAuth = () => {
        let hasError = false;

        if (!userData.password?.trim()) {
            setPasswordError('Enter a password');
            hasError = true;
        } else if (!isStrongPassword(userData.password)) {
            setPasswordError('Password must be at least 8 characters long, include uppercase and lowercase letters, a number, and a special character.');
            hasError = true;
        } else {
            setPasswordError('');
        }

        if (!userData.ConfirmPassword?.trim() || userData.ConfirmPassword !== userData.password) {
            setConfirmPasswordError('Passwords do not match');
            hasError = true;
        } else {
            setConfirmPasswordError('');
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
                            value={userData.password || ''}
                            onChange={handleChange}
                            name='password'
                            placeholder='Password'
                            type={showPassword ? "text" : "password"}
                        />
                        <span className="eye-icon" onClick={togglePasswordVisibility}>
                            {showPassword ? <i className="fa-solid fa-eye"></i> : <i className="fa-solid fa-eye-slash"></i>}
                        </span>
                        {passwordError && <span style={{ color: 'red' }}>{passwordError}</span>}
                    </div>
                    <div className="password-container">
                        <input
                            value={userData.ConfirmPassword || ''}
                            onChange={handleChange}
                            name='ConfirmPassword'
                            placeholder='Confirm Password'
                            type={showConfirmPassword ? "text" : "password"}
                        />
                        <span className="eye-icon" onClick={toggleConfirmPasswordVisibility}>
                            {showConfirmPassword ? <i className="fa-solid fa-eye"></i> : <i className="fa-solid fa-eye-slash"></i>}
                        </span>
                        {confirmPasswordError && <span style={{ color: 'red' }}>{confirmPasswordError}</span>}
                    </div>
                </div>
                <div className='next-back-buttons'>
                    <button onClick={() => setcurrentStep(1)}>
                        &#8592; Previous step 
                    </button>
                    <button onClick={checkAuth}>
                        Next step &#8594;
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SecondStep;
