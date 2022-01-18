import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../css/login.css'
function Login() {
    return (
        <> 
        <div className="container">
        <div className="row login">
            <div className="col-lg-5 col-sm-8">
               <div className="form">
               <h2>Login</h2>
                <form action="">
                    <input className='form-control' type="text" placeholder='Enter Username' />
                    <input className='form-control'autoComplete='off' type="password" placeholder='Enter Password' />
                    <button className='btn btn-success' type='submit'>Login</button>
                    <p>Don't have an account? <NavLink to="/register">Register</NavLink></p>
                </form>
               </div>
            </div>
        </div>
        </div>
        </>

    )
}

export default Login
