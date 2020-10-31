import React, { useEffect, useState } from 'react';
import getApiData from '../api-server/api';
import PhoneCatalog from './PhoneCatalog';
import PhoneDetail from './PhoneDetail';
import '../App.css';

function App() {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    getApiData().then((data) => setPhones(data));
  }, []);

  const renderPhoneDetail = (props) => {
    const phone = phones[1];
    if (phone) {
      return (
        <PhoneDetail
          name={phone.name}
          image={phone.imageFileName}
          manufacturer={phone.manufacturer}
          description={phone.description}
          price={phone.price}
          color={phone.color}
          screen={phone.screen}
          processor={phone.processor}
          ram={phone.ram}
        />
      );
    }
  };

  return (
    <div className="App">
      <h1>Catálogo de teléfonos</h1>
      <PhoneCatalog phones={phones} />
      {renderPhoneDetail()}
    </div>
  );
}

export default App;
