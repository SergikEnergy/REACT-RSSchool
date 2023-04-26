import fs from 'fs';

import express from 'express';
import dotenv from 'dotenv';

import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

dotenv.config();

async function createServer() {
  const port = process.env.PORT || 5173;
  const base = process.env.BASE || '/';

  const app = express();
  const DirName = dirname(fileURLToPath(import.meta.url));
  const htmlRoot = resolve(DirName, 'index.html');

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
    base,
  });

  app.use(vite.middlewares);

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl.replace(base, '');
    try {
      const template = fs.readFileSync(htmlRoot, 'utf-8');

      const templateHTML = await vite.transformIndexHtml(url, template);

      const { render } = await vite.ssrLoadModule('src/entry-server.tsx');

      const [htmlStart, htmlEnd] = templateHTML.split(`<!--from-server-->`);

      res.write(htmlStart);

      const { stream, injectPreload } = await render(url, {
        onShellReady() {
          stream.pipe(res);
        },

        onAllReady() {
          const preloadPaste = htmlEnd.replace(`<!--preload-->`, injectPreload);
          res.write(preloadPaste);
          res.end();
        },

        onError(err: Error) {
          // eslint-disable-next-line no-console
          console.error(err);
          // res.status(500);
          // res.send(`<h1>Something went wrong</h1>`);
        },
      });
    } catch (error) {
      if (error instanceof Error) {
        vite?.ssrFixStacktrace(error);
        res.status(500).end(error.stack);
        next(error);
      }
    }
  });

  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Server started at http://localhost:${port}`);
  });
}

createServer();
