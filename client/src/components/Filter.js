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
      <label htmlFor="filterPhone">Marca</label>
      <select
        name="filterPhone"
        id="filterPhone"
        data-testid="filterPhone"
        className="select__input"
        value={props.filterPhone}
        onChange={handleFilterPhoneChild}
      >
        <option className="select__input-option" value="all">
          Todas
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
