import React, { useEffect, useState } from 'react';
import './DashboardRequest.css';
import API_BASE_URL from '../../../apiConfig';
import { useNavigate } from 'react-router-dom';

function DashboardRequest() {
  const [requests, setRequests] = useState([]);
  const navigate=new useNavigate();
  const token = localStorage.getItem('token'); // Adjust this according to your token storage mechanism

  useEffect(() => {
    fetch(`${API_BASE_URL}/users/my-ticket/`, {
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

  const gotoNewReq=()=>{
    navigate('/makeRequest');
  }
  return (
        <div className='requestPage'>
           <div className='dashboard-request'>
              <div className='dashboard-newRequest'>
                  <div className='dashboard-newRequest-button'>
                    <button onClick={()=>{gotoNewReq()}}>Submit a new request<svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.0004 9.00001L1.69842 1.03401C1.60543 0.997838 1.50374 0.990318 1.40644 1.01242C1.30913 1.03451 1.22067 1.08522 1.15242 1.15801C1.08242 1.23268 1.03423 1.32511 1.01307 1.42524C0.991915 1.52538 0.998607 1.62941 1.03242 1.72601L3.50042 9.00001M18.0004 9.00001L1.69842 16.966C1.60543 17.0022 1.50374 17.0097 1.40644 16.9876C1.30913 16.9655 1.22067 16.9148 1.15242 16.842C1.08242 16.7673 1.03423 16.6749 1.01307 16.5748C0.991915 16.4746 0.998607 16.3706 1.03242 16.274L3.50042 9.00001M18.0004 9.00001H3.50042" stroke="#080808" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                  </div>
                  <div className='dashboard-newRequest-search'>
                    <div className='dashboard-newRequest-search-icon'>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 17L11.6667 11.6667M1 7.22222C1 8.03934 1.16094 8.84845 1.47364 9.60336C1.78633 10.3583 2.24466 11.0442 2.82245 11.622C3.40023 12.1998 4.08617 12.6581 4.84108 12.9708C5.596 13.2835 6.40511 13.4444 7.22222 13.4444C8.03934 13.4444 8.84845 13.2835 9.60336 12.9708C10.3583 12.6581 11.0442 12.1998 11.622 11.622C12.1998 11.0442 12.6581 10.3583 12.9708 9.60336C13.2835 8.84845 13.4444 8.03934 13.4444 7.22222C13.4444 6.40511 13.2835 5.596 12.9708 4.84108C12.6581 4.08617 12.1998 3.40023 11.622 2.82245C11.0442 2.24466 10.3583 1.78633 9.60336 1.47364C8.84845 1.16094 8.03934 1 7.22222 1C6.40511 1 5.596 1.16094 4.84108 1.47364C4.08617 1.78633 3.40023 2.24466 2.82245 2.82245C2.24466 3.40023 1.78633 4.08617 1.47364 4.84108C1.16094 5.596 1 6.40511 1 7.22222Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div  className='dashboard-newRequest-search-input'>
                        <input placeholder='Search existing request descriptions, tags, and status' type="text" />
                    </div>
                  </div>
              </div>
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
        </div>
  );
}

export default DashboardRequest;
