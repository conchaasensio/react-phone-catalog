import React from 'react';
import Filter from './Filter';

const Header = (props) => {
  return (
    <header className="header">
      <div className="header__title">
        <h1>Catálogo de teléfonos</h1>
      </div>
      <div className="header__filter">
        <Filter
          handleFilterPhone={props.handleFilterPhone}
          filterPhone={props.filterPhone}
        />
      </div>
    </header>
  );
};

export default Header;
