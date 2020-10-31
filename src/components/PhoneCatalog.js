import React from 'react';
import Phone from './Phone';

const PhoneCatalog = (props) => {
  const phones = props.phones.map((phone, index) => {
    return (
      <li className="phone__item" key={index}>
        <Phone
          name={phone.name}
          price={phone.price}
          image={phone.imageFileName}
        />
      </li>
    );
  });
  return <ul className="phone__list">{phones}</ul>;
};

export default PhoneCatalog;
