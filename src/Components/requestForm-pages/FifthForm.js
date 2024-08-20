import React, { useEffect, useState } from 'react';

function FifthForm() {
  const [branches, setBranches] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchBranches = () => {
    fetch('http://127.0.0.1:8000/api/branch/')
      .then(response => response.json())
      .then(data => {
        console.log(document.visibilityState)
        console.log('API Response:', data); // Console the API response
        setBranches(data);
      console.log(data)

      })
      .catch(error => console.error('Error fetching branch data:', error));
  };

  useEffect(() => {
    console.log("UseEffect Called......")
    const handleVisibilityChange = () => {
        console.log("HandleVisibleChange called .....")
      if (document.visibilityState === 'visible') {
        fetchBranches();
      }

      else{
        console.log(" Your component is not visible ")
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Initial fetch when the component mounts
    fetchBranches();
    console.log("fetchbranches are called successfully")
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      console.log("Methode Destroyed")
      console.log(document.visibilityState)
      
    };
   
  }, []);

  // Filter branches based on the search term
  const filteredBranches = branches.filter(branch =>
    branch.branch_name && branch.branch_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='requestForm'>
      <h2>Select a Branch</h2>
      <div className='customDropdown'>
        <input 
          type="text" 
          placeholder="Search or Select a branch..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='requestFormInput'
          list="branches"
        />
        <datalist id="branches">
          {filteredBranches.map(branch => (
            <option key={branch.id} value={branch.branch_name}>
              {branch.branch_name}
            </option>
          ))}
        </datalist>
      </div>
    </div>
  );
}

export default FifthForm;
