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
    const navigate = useNavigate();
    const [page, setPage] = useState(0);
    const FormTitles = ["", "", "", "", ""];
    const [createdFor,setcreatedFor]=useState(localStorage.getItem('email'))
    const { userData, selectedCategory, setSelectedCategory, categoryType, setcategoryType, duedate, setdueDate, budget, setBudget, branch, setBranch } = useContext(multiStepContext);

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
        if (page === FormTitles.length - 1) {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/users/ticket/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: 'include',
                    body: JSON.stringify({
                        Budget: budget,
                        created_by:createdFor,
                        description: "NO Description",
                        estimated_completion: duedate,
                    }),
                
                });
                console.log(createdFor);
                console.log(response)
                // Check if the response is successful
                if (response.ok) {
                    const data = await response.json();
                    console.log('Data submitted successfully:', data);
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
    );
}

export default MakeRequest;
