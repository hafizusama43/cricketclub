import React from 'react'
// import { NavLink } from 'react-router-dom'
import '../../css/cards.css'

const HomePlayers = (props) => {
  return (
    <>
      <div className="col-lg-3 col-sm-12">
          <div className="card home_players">
            <img className="card-img-top" src={props.image} alt='..'></img>
              <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.bio}</p>
                <p className="card-text">{props.spec}</p>
                <a href={props.link} target="_blank" rel='noreferrer' className="link">For More</a>
              </div>
          </div>
       
      </div>
    </>
  )
}

export default HomePlayers


