import React from 'react';
import { render as reactRender } from '@testing-library/react';
import Phone from '../Phone';
import { MemoryRouter } from 'react-router-dom';

test('creates a link to phone detail using its id', async () => {
  const props = validProps();
  props.id = 123;

  const { getByRole } = render(<Phone {...props} />);

  const link = getByRole('link');
  expect(link.href).toBe(`http://localhost/phone/123`);
});

function validProps() {
  return {
    id: 1,
    name: 'iPhone 7',
    price: '600',
    image: 'htpp://www.host.com/image.jpg',
  };
}

function render(component) {
  // https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/testing.md
  return reactRender(<MemoryRouter>{component}</MemoryRouter>);
}
