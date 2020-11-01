import React from 'react';
import { Link } from 'react-router-dom';

const Phone = (props) => {
  return (
    <Link to={`/phone/${props.id}`}>
      <article className="phone">
        <img className="phone__image" src={props.image} alt={props.name} />
        <div className="phone__information">
          <div className="phone__information-container">
            <h2 className="phone__title">{props.name}</h2>
            <p className="phone__price">{props.price}€</p>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default Phone;
