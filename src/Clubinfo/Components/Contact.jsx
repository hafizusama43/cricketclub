import React from 'react'
import LogosApi from './api/Social_logos/LogosApi'

const Contact = () => {
    return (
        <>
          <section className='social same' id='contacUs'>
                <div className="row">
                    <div className="col-lg-3">
                        <div className="platform">
                            <div className="logo">
                                <img src={LogosApi[0].facebook} alt="" />
                            </div>
                            {/* <p>Instagram</p> */}
                            <a href="https://twitter.com/?lang=en">Follow</a>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="platform">
                            <div className="logo">
                                <img src={LogosApi[0].twitter} alt="" />
                            </div>
                            {/* <p>Instagram</p> */}
                            <a href="https://twitter.com/?lang=en">Follow</a>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="platform">
                            <div className="logo">
                                <img src={LogosApi[0].youtube} alt="" />
                            </div>
                            {/* <p>Instagram</p> */}
                            <a href="https://twitter.com/?lang=en">Follow</a>
                        </div>
                    </div>

                </div>
                <div className="row">
                    <div className="col-lg-3">
                        <div className="platform">
                            <div className="logo">
                                <img src={LogosApi[0].gmail} alt="" />
                            </div>
                            {/* <p>Instagram</p> */}
                            <a href="https://twitter.com/?lang=en">Follow</a>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="platform">
                            <div className="logo">
                                <img src={LogosApi[0].whatsapp} alt="" />
                            </div>
                            {/* <p>Instagram</p> */}
                            <a href="https://twitter.com/?lang=en">Follow</a>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="platform">
                            <div className="logo">
                                <img src={LogosApi[0].instagram} alt="" />
                            </div>
                            {/* <p>Instagram</p> */}
                            <a href="https://twitter.com/?lang=en">Follow</a>
                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}

export default Contact
