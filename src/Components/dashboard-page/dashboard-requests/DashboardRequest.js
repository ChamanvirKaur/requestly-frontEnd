import React from 'react'
import './DashboardRequest.css'
function DashboardRequest() {
  return (
    <div className='dashboard-request'>
        <h1>My Requests</h1>
        <div className="request-table"></div>
        <table className='request-tableContent'>
            <tr>
                <th>No</th>
                <th>Request</th>
                <th>Status</th>
                {/* <th>Actions</th> */}
            </tr>
            <tr>
                <td>1</td>
                <td>I want to add more number of features</td>
                <td>Active</td>
            </tr>

            <tr>
                <td>2</td>
                <td>Please reduce the price</td>
                <td>Active</td>
            </tr>

            <tr>
                <td>3</td>
                <td>Please reduce the price</td>
                <td>Active</td>
            </tr>

            <tr>
                <td>4</td>
                <td>Please reduce the price</td>
                <td>Active</td>
            </tr>
        </table>
    </div>
  )
}

export default DashboardRequest
