import React from 'react';

const Phone = (props) => {
  return (
    <>
      <article className="phone">
        <div className="phone__container">
          <h2 className="phone__title">{props.name}</h2>
        </div>
        <img className="phone__image" src={props.image} alt={props.name} />
      </article>
    </>
  );
};

export default Phone;
