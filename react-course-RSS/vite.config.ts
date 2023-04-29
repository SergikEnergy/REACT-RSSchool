/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';
import eslint from 'vite-plugin-eslint';
import istanbul from 'vite-plugin-istanbul';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint(),
    viteTsconfigPaths(),
    svgrPlugin(),
    istanbul({
      cypress: true,
      requireEnv: false,
      include: 'src/*',
      exclude: ['node_modules', 'cypress'],
      extension: ['.ts', '.tsx'],
    }),
  ],
  esbuild: {
    jsxInject: `
import React from 'react';
`,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    coverage: {
      provider: 'c8',
      reporter: ['text', 'html'],
      exclude: ['node_modules/', './src/setupTests.ts'],
    },
  },
});
