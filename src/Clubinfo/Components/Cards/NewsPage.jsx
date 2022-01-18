import React from 'react'
import '../../css/cards.css'
const NewsPage = (props) => {
    return (
        <>
            <div className="row cardNews">
                   <div className="col-lg-3 col-sm-12">
                        <img src={props.image} alt="" />
                    </div>
                    <div className="col-lg-8 col-sm-12">
                        <p className='heading'><a href="https://sports.ndtv.com/cricket/former-pakistan-cricketer-shahid-afridi-weighs-in-on-virat-kohlis-decision-to-quit-test-captaincy-2714305">{props.heading}</a>
                        </p>
                        <p>copeid(Cricinfo)</p>
                        <p>Last updated 122 Days,22 Hours,11 Minutes mins ago</p>
                    </div>
                   </div>
                   
        </>
    )
}

export default NewsPage
