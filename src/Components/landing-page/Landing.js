
import  './Landing.css'
import Typed from 'typed.js'; // before importing typed.js you need to install it using npm install typed.js
import React,{useEffect} from 'react';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css'

function Landing() {
    useEffect(() => {
        // Initialize Typed.js
        AOS.init({duration:1000})
        const typed = new Typed('.auto-type', {
          strings: ["Media", "Creative", "Print", "Social Media", "Other"],
          typeSpeed: 150,
          backSpeed: 150,
          loop: true
        });
    
        // Cleanup function to destroy the instance of Typed.js
        return () => {
          typed.destroy();
        };
      }, []);
  return (

     <>
      <div className="body">
        {/* header-text class contains the basic information and types of marketing request we provide */}
       <div className="headerBox">
        <div className="headerBoxImage">
            <img className='landingpageimg '  data-aos="fade-right" src="./images/LandingPageImage.png" alt="" />
        </div>
        <div className="header-text " data-aos="fade-left" >
          {/* information about app */}
          <div className="info-text">
              <h1 className=''>Requestly</h1>
              <h4>Make any marketing related request with our simple and easy to understand platform <span>Requestly</span></h4>
          </div>
          {/* types of service we provide */}
          <div className="request-types-text">
            <h3>Request you can send is <span className='auto-type'></span> Request </h3> 
            
          </div>
        </div>
       </div>
        <div className='explore-que'>
            <h1>Want to explore ?</h1>

            </div>
        <div className="auth-buttons">
           
          <div className="sign-up">
            <a href="/signup"><button href="/signup" className='sign-up-button animate__animated animate__pulse animate__infinite	infinite' >Click here</button></a>
          </div>
        </div>
        <div id="services">
    <div class="container">
        <h1 class="subtitle">Requests You can make </h1>
        <div class="services-list" >
            <div data-aos="fade-right">
            <i class="fa-solid fa-photo-film"></i>
                <h2>Media</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto temporibus assumenda fugiat numquam sint est?</p>
                <a href="#">lean more</a>
            </div>

            <div data-aos="fade-left">
            <i class="fa-brands fa-creative-commons-share"></i>
                <h2>Creative</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto temporibus assumenda fugiat numquam sint est?</p>
                <a href="#">lean more</a>
            </div>

            <div data-aos="fade-right">
            <i class="fa-solid fa-print"></i>
                <h2>Print</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto temporibus assumenda fugiat numquam sint est?</p>
                <a href="#">lean more</a>
            </div>

            <div data-aos="fade-left">
            <i class="fa-brands fa-facebook"></i>
                <h2>Social-Media</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto temporibus assumenda fugiat numquam sint est?</p>
                <a href="#">lean more</a>
            </div>

            <div data-aos="fade-right">
            <i class="fa-solid fa-bars"></i>
                <h2>Other</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto temporibus assumenda fugiat numquam sint est?</p>
                <a href="#">lean more</a>
            </div>
        </div>
    </div>
</div>
      </div>
 </>
  )
}

export default Landing
