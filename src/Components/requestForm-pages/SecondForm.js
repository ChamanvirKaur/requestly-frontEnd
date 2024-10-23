import React, { useContext,useState,useEffect } from 'react';
import { multiStepContext } from '../../StepContext';
import API_BASE_URL from '../../apiConfig';

function SecondForm() {
  const {
    selectedCategory,
    handleCategoryChange,
    categoryType,
    setcategoryType,
    handlecategorytypeChange,
    description,
    setdescription,
    handledescriptionchange,
    duedate,setdueDate
  } = useContext(multiStepContext);


  
  const [branches, setBranches] = useState([]);
  const [cities, setCities] = useState([]); // State for cities
  const [searchTerm, setSearchTerm] = useState('');
  const {
    branch, setBranch,
    branchprovince, setbranchProvince,
    branchcity, setbranchCity,
    branchIdtosend,setbranchIdtosend
  } = useContext(multiStepContext);

  const fetchBranches = () => {
    fetch(`${API_BASE_URL}/branch/branch`)
      .then(response => response.json())
      .then(data => {
        console.log('API Response:', data);
        setBranches(data);
    
      })
      .catch(error => console.error('Error fetching branch data:', error));
  };

 
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        fetchBranches();
      } else {
        console.log("Your component is not visible");
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Initial fetch when the component mounts
    fetchBranches();
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // Filter branches based on the selected province, city, and search term
  const filteredBranches = branches
    .filter(branch =>
      branch.branch_province === branchprovince &&
      branch.branch_city === branchcity &&
      branch.branch_name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => a.branch_name.localeCompare(b.branch_name)); // Sort branches alphabetically

    const handleProvinceChange = (event) => {
      const selectedProvince = event.target.value;
      setbranchProvince(selectedProvince);
      setBranch(''); // Clear branch when province changes
      setbranchCity(''); // Clear city when province changes
      setSearchTerm(''); // Clear search term when province changes
  
      // Find the first branch with the selected province and store its branchId
      const branchWithProvince = branches.find(branch => branch.branch_province === selectedProvince);
      
      if (branchWithProvince) {
          const branchId = branchWithProvince.id;
          setbranchIdtosend(branchId); // Set the branch ID in state
          localStorage.setItem('branchId', branchId); // Store the branch ID in local storage
          console.log(localStorage.getItem('branchId'))
      } else {
          setbranchIdtosend(null); // Clear the branch ID if no matching branch is found
          localStorage.removeItem('branchId'); // Remove the branch ID from local storage if no match is found
      }
  
      // Filter cities based on the selected province
      const filteredCities = branches
        .filter(branch => branch.branch_province === selectedProvince)
        .map(branch => branch.branch_city)
        .sort((a, b) => a.localeCompare(b)); // Sort cities alphabetically
  
      setCities([...new Set(filteredCities)]); // Set unique cities for the selected province
  };
  
  const handleCityChange = (event) => {
    const selectedCity = event.target.value;
    setbranchCity(selectedCity);
    setBranch(''); // Clear branch when city changes
    setSearchTerm(''); // Clear search term when city changes
  };

  const handleBranchSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleBranchChange = (event) => {
    setBranch(event.target.value);
  };






  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];
  
  // State to manage the expected date and error message
  const [expectedDate, setExpectedDate] = useState('');
  const [error, setError] = useState('');

  
  const handleExpectedDateChange = (e) => {
    const selectedDate = e.target.value;
    setExpectedDate(selectedDate);

    // Calculate the difference in days
    const todayDate = new Date(today);
    console.log("today date :" , todayDate)
    const expectedDateValue = new Date(selectedDate);
    console.log("expected date :" , expectedDateValue.getTime())

    const differenceInTime = expectedDateValue.getTime() - todayDate.getTime();
    console.log("dfference in time : ", differenceInTime)
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);
    console.log("difference in days :" , differenceInDays)

    // Show error if the selected date is less than 3 days from today
    if (differenceInDays <= 3) {
      setError('Expected date must be at least 3 days from today.');
    } else {
      setError('');
      setdueDate(e.target.value)
      console.log(duedate)
    }
  };


  return (
    <div className="requestForm">
      <div className='submitRequest'>
               <h1>Submit a Request</h1>
            </div>

      <div className='RequestDescription'>
        <h2>Request Description</h2>
        <textarea
          className="requestFormInput"
          type="text"
          onChange={handledescriptionchange}
          value={description}
        />
      </div>

      {/* <div className='datedivision'> 
        <div className='requestdate'>
          <h2>Request Date</h2>
          <input type="date" className='requestFormInput' value={today} readOnly />
        </div>
        <div className='requestdate'>
          <h2>Due Date</h2>
          <input 
            type="date" 
            className='requestFormInput' 
            value={duedate} 
            onChange={handleExpectedDateChange} 
          />
        </div>
      </div> */}
      


      <div className='addressInfo'>
        <h3>Request Target</h3>
      <div className='provinceCity'>
      <div className='customDropdown'>
      <h4>Province</h4>
      <select 
        value={branchprovince}
        onChange={handleProvinceChange}
        className='requestFormInput'
      >
        <option value="">Select Province</option>
        {[...new Set(branches.map(branch => branch.branch_province))]
          .sort((a, b) => a.localeCompare(b)) // Sort provinces alphabetically
          .map(province => (
            <option key={province} value={province}>
              {province}
            </option>
          ))}
      </select>
    </div>

    <div className='customDropdown'>
      <h4>City</h4>
      <select 
        value={branchcity}
        onChange={handleCityChange}
        className='requestFormInput'
        disabled={!branchprovince} // Disable city dropdown until a province is selected
      >
        <option value="">Select City</option>
        {cities.map(city => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
      </div>
    
    <div className='customDropdown'>
      <h4>Branch</h4>
      <select
        value={branch}
        onChange={handleBranchChange}
        className='requestFormInput'
        disabled={!branchcity} // Disable dropdown until a city is selected
      >
        <option value="">Select Branch</option>
        {filteredBranches.map(branch => (
          <option key={branch.id} value={branch.branch_name}>
            {branch.branch_name}
          </option>
        ))}
      </select>
    </div>
      </div>
      {/* Conditionally render the error popup
      {error && (
        <div className='errorPopup'>
          {error}
        </div>
      )} */}
    </div>
  );
}

export default SecondForm;
