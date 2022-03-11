import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {TestComponentWrapper} from 'utils/test.helpr';


test('renders <App /> and find logo text', async () => {
  render(
    <TestComponentWrapper>
      <App />
    </TestComponentWrapper>
  );

  const logo = screen.getByText('Technology Company');
  expect(logo).toBeInTheDocument();
});
