import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import getApiData from '../api-server/api';
import PhoneCatalog from './PhoneCatalog';
import PhoneDetail from './PhoneDetail';
import '../stylesheets/App.scss';
import ClipLoader from 'react-spinners/ClipLoader';

function App() {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    getApiData().then((data) => setPhones(data));
  }, []);

  const renderPhoneDetail = (props) => {
    const routePhoneId = parseInt(props.match.params.id);
    const phone = phones.find((phone) => phone.id === routePhoneId);
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
      <Switch>
        <Route exact path="/">
          {phones.length === 0 && <ClipLoader size={150} color={'#123abc'} />}
          <PhoneCatalog phones={phones} />
        </Route>
        <Route path="/phone/:id" render={renderPhoneDetail} />
      </Switch>
    </div>
  );
}

export default App;
