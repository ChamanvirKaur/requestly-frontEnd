import './Landing.css';
import Typed from 'typed.js'; // before importing typed.js you need to install it using npm install typed.js
import React, { useEffect } from 'react';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Landing() {
    useEffect(() => {
        // Initialize Typed.js and AOS
        AOS.init({ duration: 1000 });
    
        // Cleanup function if needed
        return () => {};
    }, []);

    // Array containing the data for each service container
    const services = [
        {
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, laboriosam repellendus ex fugiat quos, consectetur numquam labore quidem similique temporibus fugit delectus architecto? Unde sapiente impedit molestiae debitis nostrum quia.",
            iconClass: "fa-solid fa-photo-film",
            buttonText: "Media",
            backgroundColor: "#5C2BE9", 
            animation: "fade-right",
            buttonBackground : "#936BFE",
            buttonBorder : "#936BFE"
        },
        {
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto temporibus assumenda fugiat numquam sint est?",
            iconClass: "fa-brands fa-creative-commons-share",
            buttonText: "Creative",
            backgroundColor: "#F94B60", 
            animation: "fade-left",
            buttonBackground : "#FE7D84",
            buttonBorder:"#FE7D84"
        },
        {
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto temporibus assumenda fugiat numquam sint est?",
            iconClass: "fa-solid fa-print",
            buttonText: "Print",
            backgroundColor: "#1A51F4", 
            animation: "fade-right",
            buttonBackground : "#557FFF",
            buttonBorder : "#557FFF"
        }
    ];

    const services2 = [
      {
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, laboriosam repellendus ex fugiat quos, consectetur numquam labore quidem similique temporibus fugit delectus architecto? Unde sapiente impedit molestiae debitis nostrum quia.",
          iconClass: "fa-solid fa-photo-film",
          buttonText: "Media",
          backgroundColor: "#FE7D84", 
          animation: "fade-right",
          buttonBackground : "#F94B60",
          buttonBorder : "#F94B60"
      },
      {
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto temporibus assumenda fugiat numquam sint est?",
          iconClass: "fa-brands fa-creative-commons-share",
          buttonText: "Creative",
          backgroundColor: "#936BFE", 
          animation: "fade-left",
          buttonBackground : "#5C2BE9",
          buttonBorder:"#5C2BE9"
      },
    
  ];

    return (
        <>
            <div className="body">
                {/* header-text class contains the basic information and types of marketing request we provide */}
                <div className="headerBox">
                    <div className="header-text" data-aos="fade-left">
                        {/* information about app */}
                        <div className="info-text">
                            <h1 className=''>Made for</h1>
                            <h1>strategic marketers</h1>
                            <p>Transforming the hassle of submitting requests into a smooth and satisfying process</p>
                        </div>
                    </div>
                </div>

                {/* you can request button */}
                <div className="you-can-request">
                    <div>
                        <a href="/signup"><button className='you-can-request-button animate__animated animate__pulse animate__infinite infinite'>You can request &#8595;</button></a>
                    </div>
                </div>

                {/* all services */}
                <div id="services">
                    <div className="container">
                        <div className="services-list-1">
                            {services.map((service, index) => (
                                <div key={index} className='service-1' data-aos={service.animation} style={{ backgroundColor: service.backgroundColor }}>
                                    <p>{service.content}</p>
                                    <div className='service-icon-1'>
                                        <button style={{ color : "#ffffff" , backgroundColor : service.buttonBackground , border : service.buttonBorder}}>{service.buttonText}</button>
                                        <i className={service.iconClass} style={{color : service.buttonBackground}}></i>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className='services-list-2'>
                        {services2.map((services2, index) => (
                                <div key={index} className='service-2' data-aos={services2.animation} style={{ backgroundColor: services2.backgroundColor }}>
                                    <p>{services2.content}</p>
                                    <div className='service-icon-2'>
                                        <button style={{ color : "#ffffff" , backgroundColor : services2.buttonBackground , border : services2.buttonBorder}}>{services2.buttonText}</button>
                                        <i className={services2.iconClass} style={{color : services2.buttonBackground}}></i>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Landing;
