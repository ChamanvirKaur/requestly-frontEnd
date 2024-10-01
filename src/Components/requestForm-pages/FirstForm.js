import React, { useContext, useState } from 'react';
import './request.css';
import { multiStepContext } from '../../StepContext';

function FirstForm() {
    const {
        selectedCategory,
        handleCategoryChange,
        categoryType,
        handlecategorytypeChange
    } = useContext(multiStepContext);

    const [hoveredService, setHoveredService] = useState(null);
    const [selectedService, setSelectedService] = useState(null);
    const [hoveredSubservice, setHoveredSubservice] = useState(null);
    const [selectedSubservice, setSelectedSubservice] = useState(null);

    const handleMouseEnter = (id) => {
        setHoveredService(id);
    };

    const handleMouseLeave = () => {
        setHoveredService(null);
    };

    const handleClickService = (serviceId) => {
        handleCategoryChange(serviceId);
        setSelectedService(serviceId);
        setSelectedSubservice(null); // Reset selected subservice when selecting a new category
    };

    const handleClickSubservice = (subservice) => {
        handlecategorytypeChange(subservice);
        setSelectedSubservice(subservice);
    };

    const allService = [
        {
            id: "Media Buy",
            serviceName: "Media Buy",
            iconClass: "fa-solid fa-photo-film",
            content: ['Print AD', 'Radio AD', 'Radio Remote Broadcast', 'Social Media AD', 'OOH AD', 'Other'],
            backgroundColor: "#936BFE"
        },
        {
            id: "Content & Translation",
            serviceName: "Content & Translation",
            iconClass: "fa-brands fa-creative-commons-share",
            content: ['English', 'French', 'Simplified Chinese', 'Traditional Chinese', 'Other'],
            backgroundColor: "#FEEA7B"
        },
        {
            id: "Graphic Design",
            serviceName: "Graphic Design",
            iconClass: "fa-solid fa-print",
            content: ['Print AD', 'Social Media AD', 'Other'],
            backgroundColor: "#FE7D84"
        },
        {
            id: "Print & Production",
            serviceName: "Print & Production",
            iconClass: "fa-solid fa-photo-film",
            content: ['Poster', 'A-frame', 'Brochure', 'Sales Sheet', 'Business Card', 'Other'],
            backgroundColor: "#557FFF"
        },
        {
            id: "Event Marketing",
            serviceName: "Event Marketing",
            iconClass: "fa-solid fa-photo-film",
            content: ['Event Materials', 'Sponsorship Request', 'Event Team', 'Other'],
            backgroundColor: "#557FFF"
        },
        {
            id: "General",
            serviceName: "General",
            iconClass: "fa-solid fa-photo-film",
            content: ['General'],
            backgroundColor: "#557FFF"
        }
    ];

    const handleSubServiceMouseEnter = (index) => {
        setHoveredSubservice(index);
    };

    const handleSubServiceMouseLeave = () => {
        setHoveredSubservice(null);
    };

    const renderRadioButtons = (options, backgroundColor) => {
        return options.map((option, index) => (
            <div key={option} className="radio-line">
                <span
                    onClick={() => handleClickSubservice(option)}
                    onMouseEnter={() => handleSubServiceMouseEnter(index)}
                    onMouseLeave={handleSubServiceMouseLeave}
                    style={{
                        backgroundColor: (selectedSubservice === option || categoryType === option) ? backgroundColor : hoveredSubservice === index ? backgroundColor : "black",
                        color: (selectedSubservice === option || categoryType === option) ? "black" : hoveredSubservice === index ? "black" : "white"
                    }}
                >
                    {option}
                </span>
            </div>
        ));
    };

    return (
        <div className='requestForm'>
            <h2>Select Category of request</h2>
            <div className='allserviceview'>
                {allService.map((service, index) => (
                    <div
                        key={index}
                        id={service.id}
                        className='allservicesview-icon'
                    >
                        <i
                            onClick={() => handleClickService(service.id)}
                            className={service.iconClass}
                            onMouseEnter={() => handleMouseEnter(service.id)}
                            onMouseLeave={handleMouseLeave}
                            style={{
                                backgroundColor: selectedService === service.id || selectedCategory === service.id? service.backgroundColor : (hoveredService === service.id ? service.backgroundColor : 'transparent'),
                                border: selectedService === service.id || hoveredService === service.id ? `2px solid ${service.backgroundColor}` : '2px solid #ffffff',
                            }}
                        ></i>
                        <p>{service.serviceName}</p>
                    </div>
                ))}
            </div>

            {/* Conditionally render the subcategory section only if a category is selected */}
            {selectedCategory && selectedCategory !== 'Select' && (
                <div className='subservices'>
                    <h2>Select a Request Type</h2>
                    {allService.map(service => {
                        if (service.id === selectedCategory) {
                            return (
                                <div  key={service.id}>
                                    {renderRadioButtons(service.content, service.backgroundColor)}
                                </div>
                            );
                        }
                        return null;
                    })}
                </div>
            )}
        </div>
    );
}

export default FirstForm;
