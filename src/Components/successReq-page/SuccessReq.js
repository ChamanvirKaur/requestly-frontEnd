import React from 'react'
import './SuccessReq.css'
import { Navigate, useNavigate } from 'react-router-dom'

function SuccessReq() {
    const  navigate=new useNavigate();

    const movetoDash=()=>
    {
        navigate('/dashboard')
    }

    const movetoReq=()=>{
        navigate('/makeRequest')
    }
  return (
    <>
        <div className='success-main'>
                <div className='success-heading'>
                    <h1>Congratulations! Your request has been successfully submitted.</h1>
                </div>
                <div className='success-buttons'>
                    <div onClick={()=>{movetoDash()}}  className='success-Button' style={{backgroundColor: '#ffffff'}}>
                        <div className='sucess-viewAll'>
                            <h2>View all your Requests</h2>
                        </div>
                        <div style={{textAlign:"end" , marginTop:"50px"}}>
                            <i>
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.1663 1.83301L1.83301 20.1663M20.1663 1.83301H3.66634M20.1663 1.83301V18.333" stroke="#080808" stroke-width="3.3" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </i>
                        </div>
                    </div>
                    <div onClick={()=>{movetoReq()}} className='success-Button' style={{backgroundColor:'#00DF82'}}>
                        <div className='success-Submitanother' >
                            <h2>Submit another Request</h2>
                        </div>
                        <div style={{textAlign:"end" , marginTop:"50px"}}>
                        <i>
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.1663 1.83301L1.83301 20.1663M20.1663 1.83301H3.66634M20.1663 1.83301V18.333" stroke="#080808" stroke-width="3.3" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                        </i>
                        </div>
                    </div>
                </div>
        </div>
    </>
  )
}

export default SuccessReq
