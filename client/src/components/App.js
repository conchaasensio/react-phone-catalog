import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import getApiData from '../services/api';
import Header from './Header';
import Loader from './Loader';
import PhoneCatalog from './PhoneCatalog';
import PhoneDetail from './PhoneDetail';
import '../stylesheets/App.scss';

function App() {
  const [phones, setPhones] = useState([]);
  const [filterPhone, setFilterPhone] = useState('all');

  useEffect(() => {
    getApiData().then((data) => setPhones(data));
  }, []);

  const handleFilterPhone = (data) => {
    if (data.key === 'filterPhone') {
      setFilterPhone(data.value);
    }
  };

  const renderFilteredPhones = () => {
    return phones.filter(isFilteredPhone);
  };

  function isFilteredPhone(phone) {
    return filterPhone === 'all' || phone.manufacturer === filterPhone;
  }

  function getSelectedPhone(id) {
    const routePhoneId = parseInt(id);
    return phones.find((phone) => phone.id === routePhoneId);
  }

  return (
    <div className="App">
      <Header filterPhone={filterPhone} handleFilterPhone={handleFilterPhone} />
      <Switch>
        <Route exact path="/">
          {phones.length === 0 && <Loader size={150} color={'#123abc'} />}
          <PhoneCatalog
            filterPhone={filterPhone}
            phones={renderFilteredPhones()}
          />
        </Route>
        <Route
          path="/phone/:id"
          render={(props) => (
            <PhoneDetail phone={getSelectedPhone(props.match.params.id)} />
          )}
        ></Route>
      </Switch>
    </div>
  );
}

export default App;
