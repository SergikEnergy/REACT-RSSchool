import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { setupStore } from '../../store';

import APICardList from '../../components/APICardsList/APICardsList';

const store = setupStore();

describe('test rendering APICardList component', () => {
  test('check rendering empty via ssr in progress component', async () => {
    render(
      <Provider store={store}>
        <APICardList />
      </Provider>
    );
    const cards = await screen.findByText(/nothing/g);
    expect(cards).toBeInTheDocument();
  });
});
