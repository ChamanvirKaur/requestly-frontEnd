import React,{useContext} from 'react';
import './DashboardProfile.css'
import { multiStepContext } from '../../../StepContext';


function DashboardProfile() {
    const{userData,setuserData} = useContext(multiStepContext);
    console.log(userData.email)

  return (
    <div className='dashboard-profilecontainer'>
        <h1>Profile</h1>
          <div className="dashboard-profileinfo">
                
                    <input value={userData.email}  name='email'  placeholder='Email' type="email" />
                   
                    {/* <input   name='password' placeholder='Password' type="password" /> */}
                   
                    <input value={userData.firstname}   name='firstname' placeholder='First-Name' type="text" />
                    <input value={userData.lastname}   name='lastname' placeholder='Last-Name' type="text" />

                   
                    <input value={userData.phone}  name='phone' placeholder='Phone' type="text" />
                   
                    <input  name='address' placeholder='Address' type="text" />
                    
                    <input  name='city' placeholder='City' type="text" />
                    
                    <input   name='province' placeholder='Province' type="text" />
                    
                </div>
              
    </div>
  )
}

export default DashboardProfile
