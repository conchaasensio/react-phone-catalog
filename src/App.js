import React, { useState } from 'react';
import phonesFromApi from './data/phones.json';
import './App.css';

const App = () => {
  const [phones] = useState(phonesFromApi);
  console.log(phones);

  return (
    <div className="App">
      <h1>Catálogo de teléfonos</h1>
    </div>
  );
};

export default App;
