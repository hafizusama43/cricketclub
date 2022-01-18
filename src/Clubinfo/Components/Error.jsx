import React from 'react'
import { NavLink } from 'react-router-dom'
import Err from '../images/logos/Err.png'
import './../css/error.css'

const Error = () => {
    return (
        <>
            <div className="container error">
                <img src={Err} alt="" />
                <p>The page you requested does not exist.</p>
                <NavLink className="link" to="/">Go Back</NavLink>
            </div>

        
        </>
        
    )
}

export default Error

