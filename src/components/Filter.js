import React from 'react';

const Filter = () => {
  return (
    <div className="select__filter">
      <label htmlFor="filterPhone">SmartPhone</label>
      <select name="filterPhone" id="filterPhone" className="select__input">
        <option value="all">Todos</option>
        <option value="Apple">Apple</option>
        <option value="Huawei">Huawei</option>
        <option value="Samnsung">Samnsung</option>
        <option value="Oneplus">Oneplus</option>
      </select>
    </div>
  );
};

export default Filter;
