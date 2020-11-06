import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Filter from '../Filter';

test('when the user selects a brand, handleFilterPhone function is executed with the expected arguments', () => {
  const handleFilterPhone = (data) => {
    expect(data).toStrictEqual({
      key: 'filterPhone',
      value: 'Apple',
    });
  };
  const { getByTestId } = render(
    <Filter handleFilterPhone={handleFilterPhone} filterPhone="all" />
  );

  fireEvent.change(getByTestId('filterPhone'), { target: { value: 'Apple' } });
});
