import { RenderToPipeableStreamOptions, renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import { setupStore } from './store';
import { rickAndMortyApi } from './services/APIServiceRTQ';

import App from './App';

const store = setupStore();

export default async function render(url: string, opts: RenderToPipeableStreamOptions) {
  await store.dispatch(rickAndMortyApi.endpoints.getCharacterByName.initiate(''));
  const preloadedState = store.getState();

  const injectPreload = () => {
    return `
    <script>
    window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
  </script>
    `;
  };

  const stream = renderToPipeableStream(
    <Provider store={store}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </Provider>,
    opts
  );

  return { stream, injectPreload };
}
