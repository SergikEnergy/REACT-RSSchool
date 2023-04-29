import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { describe, test } from 'vitest';
import { Provider } from 'react-redux';

import { setupStore } from '../../store';
import FormPage from './FormPage';

const store = setupStore();
describe('render Form Page test', () => {
  test('should render form page', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <FormPage />
        </BrowserRouter>
      </Provider>
    );
    const mainFormId = 'form-page';
    const formPage = screen.getByTestId(mainFormId);
    expect(formPage).toBeInTheDocument();
  });

  test('should have heading', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <FormPage />
        </BrowserRouter>
      </Provider>
    );
    expect(
      screen.getByRole('heading', {
        level: 2,
      })
    ).toHaveTextContent(/create new user/i);
  });
});
