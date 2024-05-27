import React from 'react';
import './countriesCard.css'


const CountryCard = ({ name, flag }) => (
  <div className="countryCard">
    <img src={flag} alt={`${name} flag`} />
    <p>{name}</p>
  </div>
);

export default CountryCard;