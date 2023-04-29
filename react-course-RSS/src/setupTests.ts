/* eslint-disable import/no-extraneous-dependencies */
import 'whatwg-fetch';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import matchers from '@testing-library/jest-dom/matchers';
import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

import server from './mocks/server';

expect.extend(matchers);

beforeAll(() => {
  server.listen({
    onUnhandledRequest: 'error',
  });
});

afterEach(() => {
  server.resetHandlers();
  cleanup();
});

afterAll(() => {
  server.close();
});
