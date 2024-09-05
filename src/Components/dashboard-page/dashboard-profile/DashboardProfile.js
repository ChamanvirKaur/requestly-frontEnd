import React, { useContext, useEffect, useState } from 'react';
import './DashboardProfile.css';
import { multiStepContext } from '../../../StepContext';

function DashboardProfile() {
    const popupMessage="Profile Updated Successfully"
    const { userData, setuserData } = useContext(multiStepContext);
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({});
    const [updatePopup,setupdatePopup] =useState(false);
    useEffect(() => {
        // Fetch user data from the API
        const fetchUserData = async () => {
            const token = localStorage.getItem('token');

            try {
                const response = await fetch('http://127.0.0.1:8000/api/users/profile/', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Token ${token}`
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setuserData(data);
                    setFormData(data); // Initialize formData with the fetched data
                    localStorage.setItem('profile_id', data.id);
                } else {
                    console.error('Failed to fetch user data');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchUserData();
    }, [setuserData]);

    const closePopup=()=>{
        setupdatePopup(false);
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = async () => {
        const token = localStorage.getItem('token');

        try {
            const response = await fetch('http://127.0.0.1:8000/api/users/update/', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const updatedData = await response.json();
                setuserData(updatedData);
                setIsEditing(false); // Exit edit mode
                setupdatePopup(true);
            } else {
                console.error('Failed to update user data');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    

    return (
       <>
         <div className='dashboard-profilecontainer'>
            <h1>Profile</h1>
            <div className="dashboard-profileinfo">
                <input
                    value={formData.email || ''}
                    name='email'
                    placeholder='Email'
                    type="email"
                    // readOnly={!isEditing}
                    onChange={handleInputChange}
                />
                <input
                    value={formData.first_name || ''}
                    name='first_name'
                    placeholder='First-Name'
                    type="text"
                    readOnly={!isEditing}
                    onChange={handleInputChange}
                />
                <input
                    value={formData.last_name || ''}
                    name='last_name'
                    placeholder='Last-Name'
                    type="text"
                    readOnly={!isEditing}
                    onChange={handleInputChange}
                />
                <input
                    value={formData.street_address || ''}
                    name='street_address'
                    placeholder='Address'
                    type="text"
                    readOnly={!isEditing}
                    onChange={handleInputChange}
                />
                <input
                    value={formData.city || ''}
                    name='city'
                    placeholder='City'
                    type="text"
                    readOnly={!isEditing}
                    onChange={handleInputChange}
                />
                <input
                    value={formData.province || ''}
                    name='province'
                    placeholder='Province'
                    type="text"
                    readOnly={!isEditing}
                    onChange={handleInputChange}
                />
                {isEditing ? (
                    <button type="button" onClick={handleSaveClick}>Save</button>
                ) : (
                    <button type="button" onClick={handleEditClick}>Edit</button>
                )}
            </div>
        </div>

        {updatePopup && (
                <div className="popup">
                    <div className="popup-content">
                        <h2>{popupMessage}</h2>
                        <button className='close-button' onClick={closePopup}>Close</button>
                    </div>
                </div>
            )}
       </>
    );
}

export default DashboardProfile;
