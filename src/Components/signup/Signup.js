import React, { useContext, useState } from 'react';

import './Signup.css';
// import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import FirstStep from '../steps-signup/FirstStep';
import SecondStep from '../steps-signup/SecondStep';
import ThirdStep from '../steps-signup/ThirdStep';
import {Stepper, StepLabel, Step, MobileStepper} from '@mui/material'
import { multiStepContext } from '../../StepContext';

function Signup() {
  const {currentStep,finalData}=useContext(multiStepContext);
  function showStep(step){
    switch(step){
      case 1:
        return <FirstStep/>
      case 2:
        return <SecondStep/>
      case 3:
        return <ThirdStep/>
    }
  }
  return (
    <>
    <div className='signup-mainContent'>
      <div className='signup-otherContent'>
          <p><b>For when you need help submitting requests — you’ve come to the right place.</b></p>
      </div>
      <div className='center-stepper'>
          <Stepper style={{ width : '50%' , margin:'auto'}}  activeStep= {currentStep -1} orientation='horizontal'>
            <Step>
              <StepLabel><span style={{color:'#080808'}}>1</span></StepLabel>
            </Step>
            <Step>
              <StepLabel><span style={{color:'#080808'}}>2</span></StepLabel>
            </Step>

            <Step>
              <StepLabel><span style={{color:'#080808'}}>3</span></StepLabel>
            </Step>
          </Stepper>
          { showStep(currentStep)}

       
      </div>
    
    </div></>
  )
}

export default Signup