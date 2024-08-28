import React, { useEffect, useState } from 'react';
import './DashboardRequest.css';

function DashboardRequest() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('http://127.0.0.1:8000/api/users/list/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched Requests:', data);
        setRequests(data); // Assuming the data returned is an array of requests
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className='dashboard-request'>
      <h1>My Requests</h1>
      <table className='request-tableContent'>
        <thead>
          <tr>
            <th>No</th>
            <th>username</th>
            <th>first_name</th>
            <th>last_name</th>
            <th>province</th>



          </tr>
        </thead>
        <tbody>
          {requests.length > 0 ? (
            requests.map((request, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{request.username}</td> {/* Adjust the key as per your data structure */}
                <td>{request.first_name}</td>
                <td>{request.last_name}</td>
                <td>{request.province}</td> {/* Adjust the key as per your data structure */}
                 {/* Adjust the key as per your data structure */}
                 {/* Adjust the key as per your data structure */}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No requests found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default DashboardRequest;
