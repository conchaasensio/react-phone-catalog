import React from 'react';

const PhoneCatalog = (props) => {
  const phones = props.phones.map((phone, index) => {
    return (
      <li className="phone__item" key={index}>
        <h2>{phone.name}</h2>
        <img src={phone.imageFileName} alt={phone.name} />
      </li>
    );
  });
  return <ul className="phone__list">{phones}</ul>;
};

export default PhoneCatalog;
