import React from 'react';

const Filter = () => {
  return (
    <div className="radius__filter">
      <label htmlFor="apple">
        <input id="filterapple" type="radio" value="" name="filterapple" />
        Apple
      </label>
      <label htmlFor="samsung">
        <input id="filtersamsung" type="radio" value="" name="filtersamsung" />
        Samsung
      </label>
      <label htmlFor="huawei">
        <input id="filterhuawei" type="radio" value="" name="filterhuawei" />
        Huawei
      </label>
      <label htmlFor="oneplus">
        <input id="filteroneplus" type="radio" value="" name="filteroneplus" />
        Oneplus
      </label>
    </div>
  );
};

export default Filter;
