import React, { useState } from 'react';
import phonesFromApi from '../data/phones.json';
import '../App.css';

const App = () => {
  const [phones] = useState(phonesFromApi);
  console.log(phones);

  const phoneList = phones.map((phone, index) => {
    return (
      <li key={index}>
        <h2>{phone.name}</h2>
        <img src={phone.imageFileName} alt={phone.name} />
      </li>
    );
  });

  return (
    <div className="App">
      <h1>Catálogo de teléfonos</h1>
      <ul>{phoneList}</ul>
    </div>
  );
};

export default App;
