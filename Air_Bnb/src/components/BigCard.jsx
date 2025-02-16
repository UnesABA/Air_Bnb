import React from 'react'
import Card from './Card'

const BigCard = () => {
  return (
    <div className= "big-container">
      <Card 
          img= "zaferes.png"
          rating= "5.0"
          reviewCount= "6"
          location= "USA"
          title= "Life lessons with Katie Zaferes"
          price= "136"
      />
      <Card 
          img= "wedding-photography.png"
          rating= "5.0"
          reviewCount= "30"
          location= "USA"
          title= "Learn wedding photography"
          price= "125"
      />
      <Card 
          img= "mountain-bike.png"
          rating= "4.8"
          reviewCount= "2"
          location= "USA"
          title= "Group Mountain Biking"
          price= "50"
      />
    </div>
  )
}

export default BigCard