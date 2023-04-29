import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Layout from '../../components/layout/Layout';

describe('Layout render', () => {
  test('Should have Layout part', () => {
    const container = render(
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    );
    expect(container).toBeTruthy();
  });
});
