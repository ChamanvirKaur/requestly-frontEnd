import React, {useContext} from 'react'
import './steps.css'
import { multiStepContext } from '../../StepContext'

function FirstStep() {
    const{setcurrentStep,userData,setuserData, handleChnage} = useContext(multiStepContext);
  return (
    <div className='signup-container'>
    <div className="signup-contentBox">
        <div className="signup-h1">
        
        </div>
        
            <div className="signup-form">
            
            
                <div className='fullnamebox'>
                    <div className='firstName'>
                    <input value={userData.firstname} onChange={handleChnage}  name='firstname' placeholder='First-Name' type="text" />
                    </div>
                    <div className='lastName'>
                    <input value={userData.lastname} onChange={handleChnage}  name='lastname' placeholder='Last-Name' type="text" />
                    </div>
                </div>
                <input value={userData.email} onChange={handleChnage} name='email'  placeholder='Email' type="email" />
            </div>
            <div>
          
                <button className="submit-button" onClick={()=>setcurrentStep(2)} >
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

export default FirstStep
