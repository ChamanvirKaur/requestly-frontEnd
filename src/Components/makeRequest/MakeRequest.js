import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import FirstForm from '../requestForm-pages/FirstForm';
import SecondForm from '../requestForm-pages/SecondForm';
import ThirdForm from '../requestForm-pages/ThirdForm';
import FourthForm from '../requestForm-pages/FourthForm';
import FifthForm from '../requestForm-pages/FifthForm';
import './MakeRequest.css';
import { multiStepContext } from '../../StepContext';

function MakeRequest() {
    const popupMessage = "Request submitted successfully";
    const [successPopup, setsuccessPopup] = useState(false);
    const navigate = useNavigate();
    const [page, setPage] = useState(0);
    const FormTitles = ["", "", "", "", ""];
    const [createdFor, setcreatedFor] = useState(localStorage.getItem('email'));
    const { userData, selectedCategory, setSelectedCategory, categoryType, setcategoryType, duedate, setdueDate, budget, setBudget, branch, setBranch , description,setdescription,handledescriptionchange} = useContext(multiStepContext);

    const closePopup = () => {
        setsuccessPopup(false);
    }

    const FormDisplay = () => {
        switch (page) {
            case 0:
                return <FirstForm />;
            case 1:
                return <SecondForm />;
            case 2:
                return <ThirdForm />;
            case 3:
                return <FourthForm />;
            case 4:
                return <FifthForm />;
            default:
                return null;
        }
    };

    const moveToDash = async () => {
        const token = localStorage.getItem('token');
        if (page === FormTitles.length - 1) {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/users/ticket/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': '*/*',
                        'Authorization': `Token ${token}`
                    },
                    credentials: 'include',
                    body: JSON.stringify({
                        Budget: budget,
                        created_by: localStorage.getItem('profile_id'),
                        description: description,
                        estimated_completion: duedate,
                        requested_branch: branch,
                        ticket_category: selectedCategory,
                        ticket_type: categoryType
                    }),
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log('Data submitted successfully:', data);
                    setsuccessPopup(true);
                    console.log("Value of showpopup is :",successPopup)
                } else {
                    console.error('Error submitting data:', response.statusText);
                }
            } catch (error) {
                console.error('Error submitting data:', error);
            }

            navigate("/dashboard");
        } else {
            setPage((currPage) => currPage + 1);
        }
    };

    return (
        <>
            <div className="form">
                <div className="progressbar">
                    <div
                        style={{
                            width: `${(page + 1) * (100 / FormTitles.length)}%`,
                            backgroundColor: "green",
                            height: "10px",
                            transition: "width 1s ease",
                            borderRadius: "20px"
                        }}
                    ></div>
                </div>
                <div className="form-container">
                    <h1>{FormTitles[page]}</h1>
                    <h2>{localStorage.getItem('email')}</h2>
                </div>
                <div className="request-form-body">
                    {FormDisplay()}
                </div>
                <div className="request-button-container">
                    <button
                        disabled={page === 0}
                        onClick={() => setPage((currPage) => currPage - 1)}
                    >
                        Previous
                    </button>
                    <button onClick={moveToDash}>
                        {page === FormTitles.length - 1 ? "Submit" : "Next"}
                    </button>
                </div>
            </div>

            {successPopup && (
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

export default MakeRequest;
