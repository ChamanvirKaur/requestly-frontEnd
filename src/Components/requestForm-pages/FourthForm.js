import React from 'react'

function FourthForm() {
  return (
  
      <div className='requestForm'>
    
      
            <h2>Expected Price</h2>
            <select 
                 className='requestFormInput' >
                <option value="1000-2000">1000-2000 CAD</option>
                <option value="2000-3000">2000-3000 CAD</option>
                <option value="2000-3000">3000-4000 CAD</option>

             </select>
             <h2 style={{marginTop:"15px"}}>Supported Document</h2>
             <input className='requestFormInput' type="file" />

        </div>
        
   
    
  )
}

export default FourthForm
