import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { RootState, setupStore } from './store';

import App from './App';
import './index.css';

type CustomWindowType = Window &
  typeof globalThis & {
    __PRELOADED_STATE__?: RootState;
  };

const store = setupStore((window as CustomWindowType).__PRELOADED_STATE__);

delete (window as CustomWindowType).__PRELOADED_STATE__;

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
