import React, { useContext } from 'react';
import { multiStepContext } from '../../StepContext';

function SecondForm() {
  const {
    selectedCategory,
    handleCategoryChange,
    categoryType,
    setcategoryType,
    handlecategorytypeChange,
    description,
    setdescription,
    handledescriptionchange
  } = useContext(multiStepContext);

  // Helper function to render radio buttons line by line
  const renderRadioButtons = (options) => {
    return options.map((option) => (
      <div key={option} className="radio-line">
        <label className="radio-label">
          <input
            type="radio"
            value={option}
            checked={categoryType === option}
            onChange={handlecategorytypeChange}
          />
          {option}
        </label>
      </div>
    ));
  };

  return (
    <div className="requestForm">
      <h2>Select a request Type</h2>

      {/* General category */}
      {selectedCategory === 'General' &&
        renderRadioButtons(['General'])}

      {/* Media Buy category */}
      {selectedCategory === 'Media Buy' &&
        renderRadioButtons([
          'Print AD',
          'Radio AD',
          'Radio Remote Broadcast',
          'Social Media Ad',
          'OOH Ad',
          'Other'
        ])}

      {/* Content & Translation category */}
      {selectedCategory === 'Content & Translation' &&
        renderRadioButtons([
          'English',
          'French',
          'Simplified Chinese',
          'Traditional Chinese',
          'Other'
        ])}

      {/* Graphic Design category */}
      {selectedCategory === 'Graphic Design' &&
        renderRadioButtons(['Print Ad', 'Social Media Ad', 'Other'])}

      {/* Print & Production category */}
      {selectedCategory === 'Print & Production' &&
        renderRadioButtons([
          'Poster',
          'A-Frame',
          'Brochure',
          'Sales Sheet',
          'Business Card',
          'Other'
        ])}

      {/* Event Marketing category */}
      {selectedCategory === 'Event Marketing' &&
        renderRadioButtons([
          'Event materials',
          'Sponsorship request',
          'Event team',
          'Other'
        ])}

      <div>
        <h2>Description</h2>
        <textarea
          className="requestFormInput"
          type="text"
          onChange={handledescriptionchange}
          value={description}
        />
      </div>
    </div>
  );
}

export default SecondForm;
