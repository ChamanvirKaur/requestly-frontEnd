import React, { useEffect, useState } from 'react';
import './DashboardRequest.css';

function DashboardRequest() {
  const [requests, setRequests] = useState([]);
  
  const token = localStorage.getItem('token'); // Adjust this according to your token storage mechanism

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/users/my-ticket/', {
      method: 'GET',
      headers: {
        'Accept': '*/*',
        'Authorization': `Token ${token}`, 
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched Requests:', data);
        setRequests(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [token]);

  return (
    <div className='dashboard-request'>
      <h1>My Requests</h1>
      <div className='my-Requests'>
            {requests.length > 0 ? (
        <table className="request-table">
          <thead>
            <tr>
              {/* <th>ID</th> */}
              <th>#</th>
              <th>Ticket Category</th>
              <th>Description</th>
              <th>Requested Branch</th>
              <th>Created On</th>
              <th>Ticket State</th>
              <th>Comments</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request,index) => (
              <tr key={request.id}>
                {/* <td>{request.id}</td> */}
                <td>{index + 1}</td> {/* Displaying the index + 1 */}
                <td>{request.ticket_category}</td>
                <td>{request.description}</td>
                <td>{request.requested_branch}</td>
                <td>{new Date(request.created_on).toLocaleDateString()}</td>
                <td><b>{request.ticket_state}</b></td>
                <td>{request.comments || 'No comments'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No requests found</p>
      )}
      </div>
    </div>
  );
}

export default DashboardRequest;
