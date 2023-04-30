import { describe, test, vi } from 'vitest';
import { render } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import * as reduxHooks from 'react-redux';
import UsersCardList from '../../components/UsersCardList/UsersCardList';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import { setupStore } from '../../store';

const store = setupStore();

vi.mock('react-redux');

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

describe('user list test', () => {
  test('render cardList', () => {
    const listsCard = render(
      <reduxHooks.Provider store={store}>
        <UsersCardList />
      </reduxHooks.Provider>
    );
    expect(listsCard).toBeTruthy();
  });
});
