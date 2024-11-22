import React, { useState,useContext } from 'react';
import { multiStepContext } from '../../StepContext';

function ThirdForm() {
  const { budget, setBudget, handlebudgetChange, supportdocument, setsupportdocument ,duedate,setdueDate} = useContext(multiStepContext);
    // File change handler to capture the file
    const handleFileChange = (event) => {
      const file = event.target.files[0]; // Capture the file
      setsupportdocument(file); // Store the file in the state
    };

    




  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];
  
  // State to manage the expected date and error message
  const [expectedDate, setExpectedDate] = useState('');
  const [error, setError] = useState('');

  
  const handleExpectedDateChange = (e) => {
    const selectedDate = e.target.value;
    setExpectedDate(selectedDate);

    // Calculate the difference in days
    const todayDate = new Date(today);
    console.log("today date :" , todayDate)
    const expectedDateValue = new Date(selectedDate);
    console.log("expected date :" , expectedDateValue.getTime())

    const differenceInTime = expectedDateValue.getTime() - todayDate.getTime();
    console.log("dfference in time : ", differenceInTime)
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);
    console.log("difference in days :" , differenceInDays)

    // Show error if the selected date is less than 3 days from today
    if (differenceInDays <= 3) {
      setError('Expected date must be at least 3 days from today.');
    } else {
      setError('');
      setdueDate(e.target.value)
      console.log(duedate)
    }
  };


  return (
    <div className='requestForm'>
          <div className='submitRequest'>
               <h1>Submit a Request</h1>
            </div>
         <div className='datedivmain'>
          <h2>Request Timeline</h2>
         <div className='datedivision'> 
           
           <div className='requestdate'>
             <h2>Request Date</h2>
             <input type="date" className='requestFormInput' value={today} readOnly />
           </div>
           <div className='requestdate'>
             <h2>Due Date</h2>
             <input 
               type="date" 
               className='requestFormInput' 
               value={duedate} 
               onChange={handleExpectedDateChange} 
             />
           </div>
        </div>
         </div>
        

        <div className='budgetBox'>
        <h2>Estimated Budget</h2>
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

         {/* Conditionally render the error popup */}
      {error && (
        <div className='errorPopup'>
          {error}
        </div>
      )}
    </div>
  );
}

export default ThirdForm;
