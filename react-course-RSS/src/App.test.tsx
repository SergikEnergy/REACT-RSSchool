import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  test('Should have App part', () => {
    const container = render(<App />);
    expect(container).toBeTruthy();
  });
});
