import React from 'react';

const Filter = (props) => {
  const handleFilterPhoneChild = (ev) => {
    props.handleFilterPhone({
      key: ev.target.id,
      value: ev.target.value,
    });
  };
  return (
    <div className="select__filter">
      <label htmlFor="filterPhone">SmartPhone</label>
      <select
        name="filterPhone"
        id="filterPhone"
        className="select__input"
        value={props.filterPhone}
        onChange={handleFilterPhoneChild}
      >
        <option value="all">Todos</option>
        <option value="Apple">Apple</option>
        <option value="Huawei">Huawei</option>
        <option value="Samsung">Samsung</option>
        <option value="Oneplus">Oneplus</option>
      </select>
    </div>
  );
};

export default Filter;
