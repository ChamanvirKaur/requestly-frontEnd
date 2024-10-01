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


  return (
    <div className="requestForm">
  

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
