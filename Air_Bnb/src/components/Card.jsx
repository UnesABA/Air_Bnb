import React from 'react'
import zaferes from '/zaferes.png'
import { FaStar } from 'react-icons/fa'

const Card = () => {
  return (
    <>
      <div className='card'>
        <div className="card-container">
          <img src={zaferes} className="card-image" alt="Katie Zaferes" />

          <div className='card-stats'>
            <div className='star-icon-container'>
              <FaStar className= "star-icon"/>
            </div>
            <div>
              <span>5.0 </span>
              <span className= "gray-text">(6) . USA</span>  
            </div>
          </div>

          <div className= "card-price">
            <p>Life Lessons with Katie Zaferes</p>
            <p><span className= "bold-text">From 136$</span> / person</p>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Card