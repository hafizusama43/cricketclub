import React from 'react'
import { NavLink } from 'react-router-dom'

const Register = () => {
    return (
        <>
             <div className="container">
        <div className="row login">
            <div className="col-lg-5 col-sm-8">
               <div className="form">
               <h2>Register</h2>
                <form action="">
                    <input className='form-control' type="text" placeholder='Username' />
                    <input className='form-control' type="email" placeholder='Email' />
                    <input className='form-control' autoComplete='off' type="password" placeholder='Password' />
                    <input className='form-control' autoComplete='off' type="password" placeholder='Confirm Password' />
                    <button className='btn btn-success' type='submit'>Login</button>
                    <p>Already have an account? <NavLink to="/login">Login</NavLink></p>
                </form>
               </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default Register
