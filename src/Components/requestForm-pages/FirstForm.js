import React, {  useContext } from 'react';
import './request.css';
import { multiStepContext } from '../../StepContext';

function FirstForm() {
    const{selectedCategory,handleCategoryChange} = useContext(multiStepContext);
 
  return (
    <div className='requestForm'>
        <h2>Select Category of request </h2>
        <select 
          className='requestFormInput' 
          id="requestCategories" 
          value={selectedCategory} 
          onChange={handleCategoryChange}
          
        >
            <option value="Select"> --- Select ---</option>
            <option value="Media Buy">Media Buy</option>
            <option value="Content & Translation">Content & Translation</option>
            <option value="Graphic Design">Graphic Design</option>
            <option value="Print & Production">Print & Production</option>
            <option value="Event Marketing">Event Marketing</option>
            <option value="General">General</option>

        </select>
    </div>
  )
}

export default FirstForm;

