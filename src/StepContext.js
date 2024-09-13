import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import App from './App';
export const multiStepContext=React.createContext();
 const StepContext =()=> {

// ------------------------------------------------- States to set values --------------------------------------------------------//
  // states for the steps
    const [currentStep,setcurrentStep]=useState(1);
    // this states are for registering the data
    const [userData,setuserData] =useState({
        first_name :"",
        last_name : "",
        phone : "",
        email : "",
        password :"",
        street_address : "",
        city : "",
        province : "",
      
 });
    const [finalData,setfinalData]=useState([]);

  // this states are to store the category of request in makerequest page
  const [selectedCategory, setSelectedCategory] = useState("Select");
  const [categoryType,setcategoryType] = useState("")
  const  [description,setdescription]=useState("")
  const [duedate,setdueDate] = useState("")
  const [budget,setBudget]=useState("")
  const [branch,setBranch]=useState("")
  const [branchprovince,setbranchProvince] = useState("")
  const [branchcity,setbranchCity]=useState("")
  const [branchIdtosend,setbranchIdtosend]=useState("")

  // Authentication states
  const [authToken,setauthToken]=useState("")
  


// -------------------------------------------------- Methodes to set data --------------------------------------------------------//
  
 
    // this methode is called when user changes input box of any field in signup page
    const handleChnage = (event) =>{
        const { name, value } = event.target;
      setuserData({ ...userData, [name]: value });
     
    }

    // this methode will call when user selects the category in makerwquest page
    const handleCategoryChange = (event) => {
      setSelectedCategory(event.target.value);
    };

    // this methode will call when user selects category type in makerequest pages forms
    const handlecategorytypeChange =(event)=>{
      setcategoryType(event.target.value);
    }

    const handledescriptionchange =(event)=>{
        setdescription(event.target.value)
    }

    // this methode will call when user selects due date in makerequest steps pages forms
    const handleduedateChange = (event)=>{
      setdueDate(event.target.value)
    }

    // this methode will call when user selects budget in makerequest steps pages forms 
    const handlebudgetChange = (event)=>{
      setBudget(event.target.value)
    }

    // this methode will call when user selects budget in makerequest steps pages forms 

    const handlebranchChange=(event)=>{
      setBudget(event.target.value)
    }

    const handlebranchprovince=(event)=>{
      setbranchProvince(event.target.value)
    } 
    
    const handlebranchcityChange=(event)=>{
      setbranchCity(event.target.value)
    }


// ------------------------------------------------------- Design part --------------------------------------------------------//
  return (
    <div>
      <multiStepContext.Provider value={{
        currentStep,setcurrentStep,userData,
        setuserData,finalData,setfinalData, handleChnage,
        selectedCategory,setSelectedCategory,handleCategoryChange
        ,categoryType,setcategoryType, handlecategorytypeChange,
        duedate,setdueDate,handleduedateChange,
        budget,setBudget,handlebudgetChange,
        branch,setBranch,handlebranchChange,
        branchprovince,setbranchProvince,handlebranchprovince,
        branchcity,setbranchCity,handlebranchcityChange,
        branchIdtosend,setbranchIdtosend,
        description,setdescription,handledescriptionchange
      }}>
        <App/>
      </multiStepContext.Provider>
    </div>
  )
}

export default StepContext
