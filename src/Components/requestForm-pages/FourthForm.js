import React,{useContext} from 'react'
import { multiStepContext } from '../../StepContext'
function FourthForm() {

  const{ budget,setBudget,handlebudgetChange} = useContext(multiStepContext);

  return (
  
      <div className='requestForm'>
    
      
            <h2>Budget</h2>
            <select 
                 className='requestFormInput' 
                 value={budget}
                 onChange={handlebudgetChange}
                 >
                <option value="1000">1000</option>
                <option value="2000">2000</option>
                <option value="3000">3000</option>
                <option value="4000">4000</option>
                <option value="5000">5000</option>
             </select>
             <h2 style={{marginTop:"15px"}}>Supported Document</h2>
             <input className='requestFormInput' type="file" />

        </div>
        
   
    
  )
}

export default FourthForm
