import React, { useState } from 'react';

function ThirdForm() {
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
    }
  };

  return (
    <div className='requestForm'>
      <div className='datedivision'> 
        <div className='requestdate'>
          <h2>Request Date</h2>
          <input type="date" className='requestFormInput' value={today} readOnly />
        </div>
        <div className='requestdate'>
          <h2>Expected Date</h2>
          <input 
            type="date" 
            className='requestFormInput' 
            value={expectedDate} 
            onChange={handleExpectedDateChange} 
          />
        </div>
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
