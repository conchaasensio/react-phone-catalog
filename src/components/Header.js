import React from 'react';
import Filter from './Filter';

const Header = () => {
  return (
    <header className="header">
      <div className="header__title">
        <h1>Catálogo de teléfonos</h1>
      </div>
      <div className="header__filter">
        <Filter />
      </div>
    </header>
  );
};

export default Header;
