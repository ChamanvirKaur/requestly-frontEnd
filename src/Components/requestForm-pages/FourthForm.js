import React, { useContext } from 'react';
import { multiStepContext } from '../../StepContext';

function FourthForm() {
  const { budget, setBudget, handlebudgetChange, supportdocument, setsupportdocument } = useContext(multiStepContext);

  // File change handler to capture the file
  const handleFileChange = (event) => {
    const file = event.target.files[0]; // Capture the file
    setsupportdocument(file); // Store the file in the state
  };

  return (
    <div className='requestForm'>
      <h2>Budget</h2>
      <select 
        className='requestFormInput' 
        value={budget}
        onChange={handlebudgetChange}
      >
        <option value="1000">1000-2000</option>
        <option value="2000">2000-3000</option>
        <option value="3000">3000-4000</option>
        <option value="4000">4000-5000</option>
      </select>

      <h2 style={{ marginTop: '15px' }}>Supported Document</h2>
      <input 
        className='requestFormInput' 
        type="file" 
        onChange={handleFileChange} // Update file input change handler
      />
    </div>
  );
}

export default FourthForm;
