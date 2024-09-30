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
            content: "Initiate media plan requests here, Don't have all the details yet ? No worries! Tell us who you want to reach and we'll do the rest",
            iconClass: "fa-solid fa-photo-film",
            buttonText: "Media Buy",
            backgroundColor: "#5C2BE9", 
            animation: "fade-right",
            buttonBackground : "#936BFE",
            buttonBorder : "#936BFE",
            subcategory : ['Print AD','Radio AD','Radio Remote Broadcast','Social Media AD','OOH AD','Other']
        },
        {
            content: "Our human (and AI enabled) creative team are standing by. Need somethin designed Click here!",
            iconClass: "fa-brands fa-creative-commons-share",
            buttonText: "Content & Translation",
            backgroundColor: "#F94B60", 
            animation: "fade-left",
            buttonBackground : "#FE7D84",
            buttonBorder:"#FE7D84",
            subcategory :['English','French','Simplified Chinese','Traditional Chinese']
        },
        {
            content: "From idea to print. Our team can help with everything from posters and business cards to print ads and cool hold-in-your-hands sales and marketing materials",
            iconClass: "fa-solid fa-print",
            buttonText: "Graphic Design",
            backgroundColor: "#1A51F4", 
            animation: "fade-right",
            buttonBackground : "#557FFF",
            buttonBorder : "#557FFF",
            subcategory:['Print AD','Social Media AD','Other']
        }
    ];

   
    const services2 = [
      {
          content: "Content, content, content. Need help finding the right words or image for social media account or campaigns? with access 1000s of free assets, click here for help!",
          iconClass: "fa-solid fa-photo-film",
          buttonText: "Print & Production",
          backgroundColor: "#FE7D84", 
          animation: "fade-right",
          buttonBackground : "#F94B60",
          buttonBorder : "#F94B60",
          subcategory: ['Poster','A-frame','Brochure','Sales Sheet','Business Card','Other'],
      },
      {
          content: "If you have marketing mission beyond these short categories, tell us about it and we'll jump in like marketing avengers!",
          iconClass: "fa-brands fa-creative-commons-share",
          buttonText: "Event Marketing",
          backgroundColor: "#936BFE", 
          animation: "fade-left",
          buttonBackground : "#5C2BE9",
          buttonBorder:"#5C2BE9",
          subcategory: ['Event Materials','Sponsorship Request','Event Team','Other'],
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
                          
          <img src="./images/ArborLogo.png" style={{width:"500px", height:"100px", marginBottom:"10px"}} alt="" />

                            <p>Marketing requests sent directly to your marketing agency team</p>
                        </div>
                    </div>
                </div>

                {/* you can request button */}
                <div className="you-can-request">
                    <div>
                        <a href="/makeRequest"><button className='you-can-request-button animate__animated animate__pulse animate__infinite infinite'> Get started &#8595;</button></a>
                    </div>
                </div>

                {/* all services */}
                <div id="services">
                    <div className="container">
                        <div className="services-list-1">
                            {services.map((service, index) => (
                              <div className='maincard'>
                                    <div className='thecard'>
                                         <div key={index} className='service-1' data-aos={service.animation} style={{ backgroundColor: service.backgroundColor }}>
                                    <p>{service.content}</p>
                                    <div className='service-icon-1'>
                                        <button style={{ color : "#ffffff" , backgroundColor : service.buttonBackground , border : service.buttonBorder}}>{service.buttonText}</button>
                                        <i className={service.iconClass} style={{color : service.buttonBackground}}></i>
                                    </div>
                                        </div>

                                        <div className='service-1-back' style={{backgroundColor:service.backgroundColor}}>
                                        {service.subcategory.map((item, idx) => (
                                        <span   style={{
                                          padding: "8px 16px",
                                          backgroundColor: "white", // light background for better contrast
                                          margin: "6px",
                                          borderRadius: "20px",
                                          fontSize: "14px",
                                          display: "inline-block",
                                          boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
                                        }} key={idx}>{item}</span>
                                 ))}
                                        </div>
                                    </div>
                              </div>
                            
                                
                            ))}
                        </div>

                        <div className='services-list-2'>
                        {services2.map((services2, index) => (
                                <div className='maincard'>
                                    <div className='thecard'>
                                        <div key={index} className='service-2' data-aos={services2.animation} style={{ backgroundColor: services2.backgroundColor }}>
                                        <p>{services2.content}</p>
                                        <div className='service-icon-2'>
                                            <button style={{ color : "#ffffff" , backgroundColor : services2.buttonBackground , border : services2.buttonBorder}}>{services2.buttonText}</button>
                                            <i className={services2.iconClass} style={{color : services2.buttonBackground}}></i>
                                        </div>
                                        </div>

                                        <div className='service-2-back' style={{backgroundColor:services2.backgroundColor}}>
                                        {services2.subcategory.map((item, idx) => (
                                        <span   style={{
                                          padding: "8px 16px",
                                          backgroundColor: "white", // light background for better contrast
                                          margin: "6px",
                                          borderRadius: "20px",
                                          fontSize: "14px",
                                          display: "inline-block",
                                          boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
                                        }} key={idx}>{item}</span>
                                 ))}
                                        </div>

                                    </div>
                                </div>
                            ))}
                        </div>

                       
                    </div>
                </div>

                {/* other information */}
                <div className='picinfo'>
                    <h1>Requestly works on the 
                    basis of lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
                    <div className='subpicinfo'>
                        <div className='info'>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab ullam inventore molestias aliquid laborum. Fuga architecto, sed dolorum nobis id animi error qui eum dignissimos vitae voluptas a provident dolorem vel amet excepturi praesentium eos repudiandae recusandae officiis? Iste eligendi, nesciunt earum quam quae laudantium dolor. Suscipit eaque eligendi sit.</p>
                        </div>
                        <div className='pic'>
                            <img src="https://cdn-adventures-live.azureedge.net/adventurescache/b/8/8/d/1/6/b88d16cad9ce184915506c11fc8c3327972ea29f.jpg" alt="" />
                        </div>
                    </div>
                    <div className='subpicinfo'>
                        <div className='pic'>
                            <img src="https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20190215175938/Vancouver-British-Columbia-Canada.jpg" alt="" />
                        </div>
                        <div className='info'>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab ullam inventore molestias aliquid laborum. Fuga architecto, sed dolorum nobis id animi error qui eum dignissimos vitae voluptas a provident dolorem vel amet excepturi praesentium eos repudiandae recusandae officiis? Iste eligendi, nesciunt earum quam quae laudantium dolor. Suscipit eaque eligendi sit.</p>
                        </div>
                    </div>
                    <div className='subpicinfo'>
                        <div className='info'>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab ullam inventore molestias aliquid laborum. Fuga architecto, sed dolorum nobis id animi error qui eum dignissimos vitae voluptas a provident dolorem vel amet excepturi praesentium eos repudiandae recusandae officiis? Iste eligendi, nesciunt earum quam quae laudantium dolor. Suscipit eaque eligendi sit.</p>
                        </div>
                        <div className='pic'>
                            <img src="https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/2021/07/iStock-495798786-1-e1535108453823.jpg" alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Landing;
