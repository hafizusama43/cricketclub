import React from 'react'
import { NavLink } from 'react-router-dom'



const Nabvar = () => {
    return (
        <>
            <section className='navbar_top'>
                <div className="row">
                    <div className="col-12 col-sm-12 ">
                        <nav className="navbar navbar-expand-lg navbar-dark  ">
                            <div className="container-fluid">
                                <span className="navbar-brand" >Club Cricket </span>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav  mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink className="nav-link " aria-current="page" to="/">Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link " aria-current="page" to="/news">News</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link " aria-current="page" to="/results">Results</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link " aria-current="page" to="/players">Players</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link " aria-current="page" to="/tournaments">Tournaments</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link " aria-current="page" to="/login">Login</NavLink>
                                        </li>

                                        <li className="nav-item">
                                            <NavLink className="nav-link " aria-current="page" to="/contact">Contact Us</NavLink>
                                        </li>


                                    </ul>

                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Nabvar
