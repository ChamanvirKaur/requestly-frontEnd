import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Stepper, StepLabel, Step } from '@mui/material';
import FirstForm from '../requestForm-pages/FirstForm';
import SecondForm from '../requestForm-pages/SecondForm';
import ThirdForm from '../requestForm-pages/ThirdForm';
import FourthForm from '../requestForm-pages/FourthForm';
import FifthForm from '../requestForm-pages/FifthForm';
import './MakeRequest.css';

function MakeRequest() {
    const navigate = useNavigate();
    const [page, setPage] = useState(0);
    const FormTitles = ["Sign Up", "Personal Info", "Other", "Price", "Branch"];

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

    const moveToDash = () => {
        if (page === FormTitles.length - 1) {
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
