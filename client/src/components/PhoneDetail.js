import React from 'react';
import { Link } from 'react-router-dom';

const PhoneDetail = (props) => {
  const phone = props.phone;
  return (
    <div className="phone__detail-container">
      <section className="phone__container">
        <img src={phone.imageFileName} alt={phone.name} />
        <div className="phone__text">
          <div className="phone__title">
            <h2>{phone.name}</h2>
          </div>
          <ul>
            <li>Fabricante: {phone.manufacturer}</li>
            <li>Descripción: {phone.description}</li>
            <li>Precio: {phone.price}€</li>
            <li>Color: {phone.color}</li>
            <li>Pantalla: {phone.screen}</li>
            <li>Procesador: {phone.processor}</li>
            <li>Memoria ram: {phone.ram}GB</li>
          </ul>
        </div>
      </section>
      <Link className="btn__return" to="/">
        <i className="fas fa-angle-left"></i> Atrás
      </Link>
    </div>
  );
};

export default PhoneDetail;
