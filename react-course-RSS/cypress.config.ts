import { defineConfig } from 'cypress';
import coverage from '@cypress/code-coverage/task';

export default defineConfig({
  video: false,
  env: {
    codeCoverage: {
      exclude: 'cypress/**/*.*',
    },
  },

  e2e: {
    baseUrl: 'http://localhost:5173',
    setupNodeEvents(on, config) {
      coverage(on, config);
      return config;
    },
  },

  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },
});
