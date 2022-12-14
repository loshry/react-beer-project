import React from 'react'
import "./Card.scss"


const ProfileCard = ({ name, image, tagline, description, abv, ph, id }) => {
  // same as const ProfileCard {name, image, email, phoneNumber}= props
  return (
    <div className="profile-card" key={id}>
      <img className="profile-card__image" src={image} alt={name} />
      <div className="profile-card__content">
        <h2 className="profile-card__heading">{name}</h2>
        <h2 className="profile-card__tagline">{tagline}</h2>
        <h2 className="profile-card__description">{description}</h2>
        <h2 className="profile-card__abv">ABV: {abv}</h2>
        <h2 className="profile-card__ph">Ph: {ph}</h2>
      </div>
    </div>
  );
};

export default ProfileCard;

