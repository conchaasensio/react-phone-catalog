import React from 'react';
import Phone from './Phone';

const PhoneCatalog = (props) => {
  const phones = props.phones.map((phone) => {
    return (
      <li className="phone__list-item" key={phone.id}>
        <Phone
          id={phone.id}
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
