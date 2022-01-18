import React from 'react'

const Footer = () => {
    const date=new Date().getFullYear()
    return (
        <>
            <div className="footer">
                <div className="row">
                    <div className="col-lg-12">
                        <p>
                            <i className="fab fa-facebook-square fa-2x"></i>
                            <i className="fab fa-twitter fa-2x"></i>
                            <i className="fab fa-google-plus-g fa-2x"></i>
                            <i className="fab fa-linkedin-in fa-2x"></i>
                            <i className="fab fa-instagram fa-2x"></i>
                        </p>
                    </div>
                 
                </div>
                <div className="row">
                    <div className="col-lg-12">
                    <p className='copyright'>{date} &copy; Copyright | Abdur Rehman </p>
                    </div>
                    </div>
            </div>
        </>
    )
}

export default Footer
