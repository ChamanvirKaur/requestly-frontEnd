import React from 'react';
import DashboardProfile from './dashboard-profile/DashboardProfile';
import './Dashpage.css';
import DashboardRequest from './dashboard-requests/DashboardRequest';
import { useNavigate } from 'react-router-dom';

function Dashpage() {
    const navigate = useNavigate();

    const callRequest =()=>{
        navigate('/makeRequest')
    }

    const opentab = (tabname) => (event) => {
        const links = document.querySelectorAll('.links');
        const dashboardContents = document.querySelectorAll('.dashboard-contents');

        // Remove 'active-link' class from all links
        links.forEach(link => link.classList.remove('active-link'));

        // Remove 'active-content' class from all dashboard contents
        dashboardContents.forEach(content => content.classList.remove('active-content'));

        // Add 'active-link' class to the clicked link
        event.currentTarget.classList.add('active-link');

        // Add 'active-content' class to the corresponding dashboard content
        document.getElementById(tabname).classList.add('active-content');
    }

    return (
        <div className='dashboard-maincontainer'>
            <div className='dashboard-sidenavbar'>
                <ul className='dashboard-sidenavbar-list'>
                <li className='links active-link ' onClick={opentab('profile')}>Profile</li>
                <li className='links ' onClick={opentab('request')}>My Requests</li>

                    
                </ul>
            </div>
            <div className='dashboard-information'>
                <div className='new-req-button'>
                    <button onClick={callRequest}>
                        Make a request
                    </button>
                </div>
                <div className='dashboard-contents active-content ' id='profile'>
                    <DashboardProfile />
                </div>
                <div className='dashboard-contents ' id='request'>
                    <DashboardRequest />
                </div>
                
            </div>
        </div>
    );
}

export default Dashpage;
