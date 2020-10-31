import React from 'react';
import { Link } from 'react-router-dom';

const PhoneDetail = (props) => {
  return (
    <div className="phone__detail-container">
      <section className="phone__container">
        <img src={props.image} alt={props.name} />
        <div className="phone__text">
          <div className="phone__title">
            <h2>{props.name}</h2>
          </div>
          <ul>
            <li>{`Fabricante: ${props.manufacturer}`}</li>
            <li>{`Descripción: ${props.description}`}</li>
            <li>{`Precio: ${props.price}`}</li>
            <li>{`Color: ${props.color}`}</li>
            <li>{`Pantalla: ${props.screen}`}</li>
            <li>{`Procesador: ${props.processor}`}</li>
            <li>{`Memoria ram: ${props.ram}`}</li>
          </ul>
        </div>
      </section>
      <Link className="btn__return" to="/">
        <button>Volver</button>
      </Link>
    </div>
  );
};

export default PhoneDetail;
