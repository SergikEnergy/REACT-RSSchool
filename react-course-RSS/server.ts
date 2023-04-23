import fs from 'fs';

import express, { Express, Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';

import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

const DirName = dirname(fileURLToPath(import.meta.url));

const htmlRoot = resolve(DirName, 'index.html');

dotenv.config();

async function createServer() {
  // const isProduction = process.env.NODE_ENV === 'production';
  const port = process.env.PORT || 5173;
  const base = process.env.BASE || '/';

  // const templateHtml = isProduction ? (htmlRoot, 'utf-8') : '';
  // const ssrManifest = isProduction ? await fs.readFile('./dist/client/ssr-manifest.json', 'utf-8') : undefined;

  const app: Express = express();

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
    base,
  });

  app.use(vite.middlewares);

  app.use('*', async (req: Request, res: Response, next: NextFunction) => {
    const url = req.originalUrl.replace(base, '');

    try {
      let template = fs.readFileSync(htmlRoot, 'utf-8');

      template = await vite.transformIndexHtml(url, template);

      const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');

      const appHTML = await render(url);

      const html = template.replace(`<!--from-server-->`, appHTML);

      res
        .status(200)
        .set({
          'Content-Type': 'text/html',
        })
        .end(html);
    } catch (error) {
      if (error instanceof Error) {
        vite?.ssrFixStacktrace(error);
        console.log(error.stack);
        res.status(500).end(error.stack);
        next(error);
      }
    }
  });

  // Start http server
  app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
  });
}

createServer();
