import React, { useEffect, useState, useContext } from 'react';
import { multiStepContext } from '../../StepContext';

function FifthForm() {
  const [branches, setBranches] = useState([]);
  const [cities, setCities] = useState([]); // State for cities
  const [searchTerm, setSearchTerm] = useState('');
  const {
    branch, setBranch,
    branchprovince, setbranchProvince,
    branchcity, setbranchCity
  } = useContext(multiStepContext);

  const fetchBranches = () => {
    fetch('https://requestly.pythonanywhere.com/api/branch/')
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

  return (
    <div className='requestForm'>
      <div className='customDropdown'>
        <h2>Province where you want to request</h2>
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
        <h2>Select City</h2>
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
      
      <div className='customDropdown'>
        <h2>Select a Branch</h2>
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
  );
}

export default FifthForm;
