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
        <option className="select__input-option" value="all">
          Todos
        </option>
        <option className="select__input-option" value="Apple">
          Apple
        </option>
        <option className="select__input-option" value="Huawei">
          Huawei
        </option>
        <option className="select__input-option" value="Samsung">
          Samsung
        </option>
        <option className="select__input-option" value="Oneplus">
          Oneplus
        </option>
      </select>
    </div>
  );
};

export default Filter;
