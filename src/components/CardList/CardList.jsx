import React from 'react'
import "./CardList.scss"
import Card from '../Card/Card'

const CardList = ({ profiles }) => {
  const CardListJSX = profiles.map((profile) => (
    
          <Card
            image={profile.image}
            name={profile.name}
            tagline={profile.tagline}
            description={profile.description}
            abv={profile.abv}
            ph={profile.ph}
          />
  )) 
  return (
    <div className="card-list">
        {CardListJSX}
    </div>
  )     
  }


export default CardList;

