import React, { useEffect, useState } from 'react';
import getApiData from '../api-server/api';
import PhoneCatalog from './PhoneCatalog';
import '../App.css';

function App() {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    getApiData().then((data) => setPhones(data));
  }, []);

  return (
    <div className="App">
      <h1>Catálogo de teléfonos</h1>
      <PhoneCatalog phones={phones} />
    </div>
  );
}

export default App;
