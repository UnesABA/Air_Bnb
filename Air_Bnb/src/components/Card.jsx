import React from 'react'
import { FaStar } from 'react-icons/fa'

const Card = (props) => {
  let badgeText;

  if(props.item.openSpots === 0){
    badgeText = "SOLD OUT"
  }else if(props.item.location === "Online"){
    badgeText= "ONLINE"
  }

  return (
    <>
      <div className='card'>
        {badgeText && <div className="card-badge">{badgeText}</div>}
        <div className="card-container">
          <img src= {`/${props.item.coverImg}`} className="card-image" alt="Katie Zaferes" />

          <div className='card-stats'>
            <div className='star-icon-container'>
              <FaStar className= "star-icon"/>
            </div>
            <div>
              <span>{props.item.stats.rating}</span>
              <span className= "gray-text">({props.item.stats.reviewCount}) . {props.item.location}</span>  
            </div>
          </div>

          <div className= "card-price">
            <p>{props.item.title}</p>
            <p><span className= "bold-text">From {props.item.price}$</span> / person</p>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Card