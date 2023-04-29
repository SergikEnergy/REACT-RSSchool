import { describe, test, vi } from 'vitest';
import { unmountComponentAtNode } from 'react-dom';
import { render, screen, waitFor } from '@testing-library/react';

import * as reduxHooks from 'react-redux';
import { setupStore } from '../../store';
import server from '../../mocks/server';
import { rickAndMortyApi } from '../../services/APIServiceRTQ';
import PersonDetails from '../../components/PersonDetails/PersonDetails';

const store = setupStore();
vi.mock('react-redux');

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
  store.dispatch(rickAndMortyApi.util.resetApiState());
});

afterAll(() => server.close());

let container: HTMLDivElement | null = null;
beforeEach(() => {
  container = document.createElement('div') as HTMLDivElement;
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container as Element);
  if (container) {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  }
});

describe('test person details to render', () => {
  test('should return correct answer', () => {
    render(
      <reduxHooks.Provider store={store}>
        <PersonDetails />
      </reduxHooks.Provider>
    );

    const nameBlock = screen.queryByTestId('testNameSingle') as HTMLDivElement;

    waitFor(() => {
      expect(nameBlock).toBeInTheDocument();
    });

    waitFor(() => {
      expect(nameBlock).toHaveTextContent('Rick Sanchez');
    });
  });

  test('should return incorrect answer', () => {
    render(
      <reduxHooks.Provider store={store}>
        <PersonDetails />
      </reduxHooks.Provider>
    );

    waitFor(() => {
      const notFoundBlock = screen.getByTestId('emptyApi') as HTMLDivElement;
      expect(notFoundBlock).toBeInTheDocument();
    });
  });
});
