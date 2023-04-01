import React from 'react';
import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Layout from './Layout';

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
