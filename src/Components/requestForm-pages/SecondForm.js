import React,{  useContext } from 'react'
import { multiStepContext } from '../../StepContext';

function SecondForm() {
    const{selectedCategory,handleCategoryChange} = useContext(multiStepContext);

  return (
    <div className='requestForm'>
        <h2>Select a request Type</h2>

        {selectedCategory=='Select' && <h1>Please select any Request Category</h1>}
        
        {/* It will appear when category is general */}
        {selectedCategory=='General' && <select 
          className='requestFormInput' 
          id="requestTypes" 
         
        >
            <option value="General">General</option>
        </select>}

        {/* It will appear when category is Media Buy */}
        
        {selectedCategory=='Media Buy' && <select 
          className='requestFormInput' 
          id="requestTypes" 
         
        >
            <option value="Print AD">Print AD</option>
            <option value="Radio AD">Radio AD</option>
            <option value="Radio Remote Broadcast">Radio Remote Broadcast</option>
            <option value="Social Media Ad">Social Media Ad</option>
            <option value="OOH Ad">OOH Ad</option>
            <option value="Other">Other</option>
        </select>}

        {/* It will appear when category is Content & Translation */}
        
        {selectedCategory=='Content & Translation' && <select 
          className='requestFormInput' 
          id="requestTypes" 
         
        >
            <option value="English">English</option>
            <option value="French">French</option>
            <option value="Simplified Chinese">Simplified Chinese</option>
            <option value="Traditional Chinese">Traditional Chinese</option>
            <option value="Other">Other</option>
        </select>}


        {selectedCategory=='Graphic Design' && <select 
          className='requestFormInput' 
          id="requestTypes" 
         
        >
            <option value="Print Ad">Print Ad</option>
            <option value="Social Media Ad">Social Media Ad</option>
            <option value="Other">Other</option>
        </select>}

        {/* It will appear when category is Print & Production */}

        {selectedCategory=='Print & Production' && <select 
          className='requestFormInput' 
          id="requestTypes" 
         
        >
            <option value="Poster">Poster</option>
            <option value="A-Frame">A-Frame</option>
            <option value="Brochure">Brochure</option>
            <option value="Sales Sheet">Sales Sheet</option>
            <option value="Business Card">Business Card</option>
            <option value="Other">Other</option>
        </select>}

        {/* It will appear when category is Event Marketing */}

        {selectedCategory=='Event Marketing' && <select 
          className='requestFormInput' 
          id="requestTypes" 
         
        >
            <option value="Poster">Event materials</option>
            <option value="A-Frame">Sponsorship request</option>
            <option value="Brochure">Event team</option>
            <option value="Other">Other</option>
        </select>}
    </div>
  )
}

export default SecondForm
