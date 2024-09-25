import React, {  useContext } from 'react';
import './request.css';
import { multiStepContext } from '../../StepContext';

function FirstForm() {
    const{selectedCategory,handleCategoryChange} = useContext(multiStepContext);
    const allService =[
      {
        id:"Media Buy",
        serviceName : "Media Buy",
        iconClass: "fa-solid fa-photo-film",
        content: ['Print AD','Radio AD','Radio Remote Broadcast','Social Media AD','OOH AD','Other'],
        backgroundColor: "#936BFE"
      },
      {
        id: "Content & Translation",
        serviceName : "Content & Translation",
        iconClass: "fa-brands fa-creative-commons-share",
        content: ['English','French','Simplified Chinese','Traditional Chinese'],
        backgroundColor : "#FEEA7B"
      },
      {
        id:"Graphic Design",
        serviceName : "Graphic Design",
        iconClass: "fa-solid fa-print",
        content: ['Print AD','Social Media AD','Other'],
        backgroundColor : "#FE7D84"
      },
      {
        id : "Print & Production",
        serviceName : "Print & Production",
        iconClass: "fa-solid fa-photo-film",
        content: ['Poster','A-frame','Brochure','Sales Sheet','Business Card','Other'],
        backgroundColor : "#557FFF"
      },

      {
        id : "Event Marketing",
        serviceName : "Event Marketing",
        iconClass: "fa-solid fa-photo-film",
        content: ['Event Materials','Sponsorship Request','Event Team','Other'],
        backgroundColor : "#557FFF"
      },
      {
        id : "General",
        serviceName : "General",
        iconClass: "fa-solid fa-photo-film",
        content: ['General'],
        backgroundColor : "#557FFF"
      },


    ]; 
  return (
    <div className='requestForm'>
        <h2>Select Category of request </h2>
        {/* <select 
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

        </select> */}
        {selectedCategory=='Select' && <p style={{color:"red", marginTop:"10px"}}>Please select any Request Category</p>}

        <div className='allServices-view'>
                        {allService.map((allService, index) => (
                                <div key={index} className='allserviceview' id={allService.id} onClick={()=>{handleCategoryChange(allService.id)}}>
                                    <div className='allservicesview-icon'><i className={allService.iconClass} style={{backgroundColor : allService.backgroundColor}}></i></div>
                                    <div className='allservicesview-name'><p>{allService.serviceName}</p></div>
                                    <div className='allservicesview-content'>
                                    {allService.content.map((item, idx) => (
                                        <span style={{
                                          padding: "8px 16px",
                                          backgroundColor: allService.backgroundColor, // light background for better contrast
                                          margin: "6px",
                                          borderRadius: "20px",
                                          fontSize: "14px",
                                          display: "inline-block",
                                          boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
                                        }} key={idx}>{item}</span>
                                 ))}

                                    </div>
                                </div>
                            ))}
                        </div>
    </div>
  )
}

export default FirstForm;

