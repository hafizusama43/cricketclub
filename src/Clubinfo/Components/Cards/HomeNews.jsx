import React from 'react'
import '../../css/cards.css'

const HomeNews = (props) => {
    return (
        <>
          <div className="col-lg-3 col-sm-12">
            <div className="card home_news">
                {/* Image */}
                <img src={props.image} alt="..."></img>
                <div className="card-body">
                    {/* News */}
                    <p className="card-text">{props.heading}</p>
                </div>
            </div>
            </div>
        </>
    )
}

export default HomeNews
