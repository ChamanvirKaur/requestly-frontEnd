import React ,{useContext}from 'react'
import './steps.css'
import { multiStepContext } from '../../StepContext'

function SecondStep() {
    const{setcurrentStep,userData,setuserData, handleChnage} = useContext(multiStepContext);

  return (
    <div className='signup-container'>
    <div className="signup-contentBox">
        <div className="signup-h1">
       
        </div>
      
            <div className="signup-form">
            
                
                <input  value={userData.password} onChange={handleChnage} name='password' placeholder='Password' type="password" />
                <input value={userData.ConfirmPassword} onChange={handleChnage} name='ConfirmPassword'  placeholder='Confirm Password' type="password" />

            </div>
            <div className='next-back-buttons'>
            <button className="submit-button" onClick={()=>setcurrentStep(1)} >
                    Back
                </button>
                <button className="submit-button" onClick={()=>{setcurrentStep(3)}}>
                    Next
                </button>
            </div>
        
    </div>
    {/* {showPopup && (
    <div className="popup">
      <div className="popup-content">
        <h2>Signup Successful</h2>
        <button className='close-button' onClick={closePopup}>Close</button>
      </div>
    </div>
  )} */}
    </div>
  )
}

export default SecondStep
