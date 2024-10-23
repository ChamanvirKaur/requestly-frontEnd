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
            backgroundColor: "#936BFE",
            svg:'<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.9977 1.36328V24.636M1.36133 17.3633H12.9977M12.9977 12.9996H24.6341M18.8159 12.9996V24.636M18.8159 18.8178H24.6341M1.36133 4.27237C1.36133 3.50083 1.66782 2.76089 2.21338 2.21533C2.75894 1.66977 3.49888 1.36328 4.27042 1.36328H21.725C22.4965 1.36328 23.2364 1.66977 23.782 2.21533C24.3276 2.76089 24.6341 3.50083 24.6341 4.27237V21.7269C24.6341 22.4985 24.3276 23.2384 23.782 23.784C23.2364 24.3295 22.4965 24.636 21.725 24.636H4.27042C3.49888 24.636 2.75894 24.3295 2.21338 23.784C1.66782 23.2384 1.36133 22.4985 1.36133 21.7269V4.27237Z" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
        },
        {
            id: "Content & Translation",
            serviceName: "Content & Translation",
            iconClass: "fa-brands fa-creative-commons-share",
            content: ['English', 'French', 'Simplified Chinese', 'Traditional Chinese', 'Other'],
            backgroundColor: "#FEEA7B",
            svg:'<svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.826 25.1817L20.9169 22.2726V4.81803C20.9169 3.18748 22.1954 1.90894 23.826 1.90894C25.4565 1.90894 26.7351 3.18748 26.7351 4.81803V22.2726L23.826 25.1817ZM23.826 25.1817H4.9169C4.14536 25.1817 3.40543 24.8752 2.85987 24.3296C2.31431 23.784 2.00781 23.0441 2.00781 22.2726C2.00781 21.501 2.31431 20.7611 2.85987 20.2155C3.40543 19.67 4.14536 19.3635 4.9169 19.3635H10.7351C11.5066 19.3635 12.2466 19.057 12.7921 18.5114C13.3377 17.9659 13.6442 17.2259 13.6442 16.4544C13.6442 15.6829 13.3377 14.9429 12.7921 14.3974C12.2466 13.8518 11.5066 13.5453 10.7351 13.5453H6.37145M20.9169 7.72712H26.7351" stroke="#FE7D84" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
        },
        {
            id: "Graphic Design",
            serviceName: "Graphic Design",
            iconClass: "fa-solid fa-print",
            content: ['Print AD', 'Social Media AD', 'Other'],
            backgroundColor: "#FE7D84",
            svg:'<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.61035 9.18142H3.0649M1.61035 20.8178H3.0649M8.88308 1.90869V3.36324M20.5194 1.90869V3.36324M26.3376 9.18142H27.7922M26.3376 20.8178H27.7922M8.88308 26.636V28.0905M20.5194 26.636V28.0905M8.88308 10.636C8.88308 10.2502 9.03633 9.88023 9.30911 9.60745C9.58189 9.33467 9.95186 9.18142 10.3376 9.18142H19.0649C19.4507 9.18142 19.8206 9.33467 20.0934 9.60745C20.3662 9.88023 20.5194 10.2502 20.5194 10.636V19.3632C20.5194 19.749 20.3662 20.119 20.0934 20.3918C19.8206 20.6645 19.4507 20.8178 19.0649 20.8178H10.3376C9.95186 20.8178 9.58189 20.6645 9.30911 20.3918C9.03633 20.119 8.88308 19.749 8.88308 19.3632V10.636Z" stroke="#557FFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
        },
        {
            id: "Print & Production",
            serviceName: "Print & Production",
            iconClass: "fa-solid fa-photo-film",
            content: ['Poster', 'A-frame', 'Brochure', 'Sales Sheet', 'Business Card', 'Other'],
            backgroundColor: "#557FFF",
            svg:'<svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.0736 22.2724H24.9827C25.7542 22.2724 26.4942 21.966 27.0397 21.4204C27.5853 20.8748 27.8918 20.1349 27.8918 19.3634V13.5452C27.8918 12.7736 27.5853 12.0337 27.0397 11.4881C26.4942 10.9426 25.7542 10.6361 24.9827 10.6361H4.61905C3.84751 10.6361 3.10757 10.9426 2.56201 11.4881C2.01645 12.0337 1.70996 12.7736 1.70996 13.5452V19.3634C1.70996 20.1349 2.01645 20.8748 2.56201 21.4204C3.10757 21.966 3.84751 22.2724 4.61905 22.2724H7.52814M22.0736 10.6361V4.8179C22.0736 4.04637 21.7671 3.30643 21.2215 2.76087C20.676 2.21531 19.936 1.90881 19.1645 1.90881H10.4372C9.66569 1.90881 8.92576 2.21531 8.3802 2.76087C7.83464 3.30643 7.52814 4.04637 7.52814 4.8179V10.6361" stroke="#FEEA7B" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
        },
        {
            id: "Event Marketing",
            serviceName: "Event Marketing",
            iconClass: "fa-solid fa-photo-film",
            content: ['Event Materials', 'Sponsorship Request', 'Event Team', 'Other'],
            backgroundColor: "#557FFF",
            svg:'<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.5834 12.1366C27.7408 12.1366 28.8507 12.5963 29.6691 13.4147C30.4874 14.2331 30.9472 15.343 30.9472 16.5003C30.9472 17.6577 30.4874 18.7676 29.6691 19.586C28.8507 20.4043 27.7408 20.8641 26.5834 20.8641M14.9468 12.1366V28.137C14.9468 28.5228 14.7935 28.8928 14.5207 29.1656C14.2479 29.4383 13.878 29.5916 13.4922 29.5916H12.0376C11.6518 29.5916 11.2818 29.4383 11.009 29.1656C10.7363 28.8928 10.583 28.5228 10.583 28.137V20.8641" stroke="#57F3A8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M17.8559 12.1366L24.4364 6.65284C24.6276 6.49357 24.8603 6.39211 25.1071 6.36033C25.3539 6.32855 25.6047 6.36778 25.83 6.47341C26.0553 6.57905 26.2459 6.74672 26.3793 6.95677C26.5127 7.16682 26.5835 7.41056 26.5834 7.65941V25.3413C26.5835 25.5902 26.5127 25.8339 26.3793 26.044C26.2459 26.254 26.0553 26.4217 25.83 26.5273C25.6047 26.633 25.3539 26.6722 25.1071 26.6404C24.8603 26.6086 24.6276 26.5072 24.4364 26.3479L17.8559 20.8641H6.21923C5.83345 20.8641 5.46347 20.7109 5.19069 20.4381C4.9179 20.1653 4.76465 19.7953 4.76465 19.4095V13.5912C4.76465 13.2054 4.9179 12.8354 5.19069 12.5627C5.46347 12.2899 5.83345 12.1366 6.21923 12.1366H17.8559Z" stroke="#57F3A8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
        },
        {
            id: "General",
            serviceName: "General",
            iconClass: "fa-solid fa-photo-film",
            content: ['General'],
            backgroundColor: "#557FFF",
            svg:'<svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.772 1.72681L2.22656 16.2723M16.772 1.72681H3.68111M16.772 1.72681V14.8177" stroke="#E9EFFE" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
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
            <div className='submitRequest'>
               <h1>Submit a Request</h1>
            </div>
            <div className='allserviceviewmain'>
                <h2>Select a Category</h2>
            <div className='allserviceview'>
                
                {allService.map((service, index) => (
                    <div
                        key={index}
                        id={service.id}
                        className='allservicesview-icon'
                    >
                        <div
                        className='icon'
                        onClick={() => handleClickService(service.id)}
                        onMouseEnter={() => handleMouseEnter(service.id)}
                        onMouseLeave={handleMouseLeave}
                        style={{
                                backgroundColor: selectedService === service.id || selectedCategory === service.id? service.backgroundColor : (hoveredService === service.id ? service.backgroundColor : 'transparent'),
                                border: selectedService === service.id || hoveredService === service.id ? `2px solid ${service.backgroundColor}` : '2px solid #ffffff',
                        }}
                        dangerouslySetInnerHTML={{ __html: service.svg }} />
                        <p>{service.serviceName}</p>
                    </div>
                ))}
            </div>
            </div>

            {/* Conditionally render the subcategory section only if a category is selected */}
            {selectedCategory && selectedCategory !== 'Select' && (
                <div className='subservices'>
                    <h2>Select a Sub-Category</h2>
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
