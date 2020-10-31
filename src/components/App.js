import React, { useState } from 'react';
import phonesFromApi from '../data/phones.json';
import PhoneCatalog from './PhoneCatalog';
import '../App.css';

const App = () => {
  const [phones] = useState(phonesFromApi);

  return (
    <div className="App">
      <h1>Catálogo de teléfonos</h1>
      <PhoneCatalog phones={phones} />
    </div>
  );
};

export default App;
