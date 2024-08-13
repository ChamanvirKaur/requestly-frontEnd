import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import App from './App';
export const multiStepContext=React.createContext();
 const StepContext =()=> {
    const [currentStep,setcurrentStep]=useState(1);
    const [userData,setuserData] =useState({
        firstname :"",
        lastname : "",
        phone : "",
        email : "",
        password :"",
        address : "",
        city : "",
        province : "",
        ConfirmPassword :""
 });
    const [finalData,setfinalData]=useState([]);
 
    const handleChnage = (event) =>{
        const { name, value } = event.target;
      setuserData({ ...userData, [name]: value });
     
    }
    const [selectedCategory, setSelectedCategory] = useState("---Select---");

    const handleCategoryChange = (event) => {
      setSelectedCategory(event.target.value);
    };
  return (
    <div>
      <multiStepContext.Provider value={{currentStep,setcurrentStep,userData,setuserData,finalData,setfinalData, handleChnage,selectedCategory,setSelectedCategory,handleCategoryChange}}>
        <App/>
      </multiStepContext.Provider>
    </div>
  )
}

export default StepContext
