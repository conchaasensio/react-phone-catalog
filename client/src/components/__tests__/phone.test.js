import React from 'react';
import { render as reactRender } from '@testing-library/react';
import Phone from '../Phone';
import { MemoryRouter } from 'react-router-dom';

test('creates a link to phone detail using its id', async () => {
  const id = 123;

  const { getByRole } = render(
    <Phone
      id={id}
      name="iPhone 7"
      price="600"
      image="http://www.host.com/image.jpg"
    />
  );

  const link = getByRole('link');
  expect(link.href).toBe(`http://localhost/phone/${id}`);
});

function render(component) {
  // https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/testing.md
  return reactRender(<MemoryRouter>{component}</MemoryRouter>);
}
