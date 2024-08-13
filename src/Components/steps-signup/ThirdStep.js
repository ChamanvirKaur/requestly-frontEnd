import React,{useContext} from 'react'
import './steps.css'
import { useNavigate } from 'react-router-dom';
import { multiStepContext } from '../../StepContext';

function ThirdStep() {
    const navigate=useNavigate();
    const{setcurrentStep,userData,setuserData,handleChnage,finalData,setfinalData} = useContext(multiStepContext);
    const submitData=()=>{
        setfinalData(finalData=>[...finalData, userData]);
        console.log(finalData)
        // setuserData('');
        setcurrentStep(1);
        navigate("/makeRequest")
    }
  return (
    <div className='signup-container'>
    <div className="signup-contentBox">
        <div className="signup-h1">
           
        </div>
   
            <div className="signup-form">
            
                <input value={userData.address} onChange={handleChnage}  name='address' placeholder='Address' type="text" />
                <inpu value={userData.city} onChange={handleChnage} name='city' placeholder='City' type="text" />
                <input value={userData.province} onChange={handleChnage}  name='province' placeholder='Province' type="text" />

            </div>  
            <div className='next-back-buttons'>
            <button className="submit-button" onClick={()=>setcurrentStep(2)} >
                    Back
                </button>
                <button className="submit-button" onClick={submitData }>
                    Submit
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

export default ThirdStep
