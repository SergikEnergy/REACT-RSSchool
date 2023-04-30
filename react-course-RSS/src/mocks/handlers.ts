import { rest } from 'msw';
import mockData from './mockData';

const handlers = [
  rest.get('https://rickandmortyapi.com/api/character/', (req, res, ctx) => {
    const characterName = req.url.searchParams.get('name');
    if (characterName === 'kla') {
      return res(ctx.status(200), ctx.json(mockData.results));
    }
    if (characterName === 'rrrrr') {
      return res(ctx.status(404), ctx.json({ error: 'There is nothing here' }));
    }
    return res(ctx.status(404), ctx.json({ error: 'not valid request' }));
  }),

  rest.get('https://rickandmortyapi.com/api/character/1', (req, res, ctx) => {
    const { id } = req.params;
    if (typeof id === 'string') {
      const foundData = mockData.results.filter((elem) => {
        return String(elem.id) === id;
      });
      return res(ctx.status(200), ctx.json(foundData));
    }
    return res(ctx.status(404), ctx.json({ error: 'There is nothing here.' }));
  }),

  rest.get('https://rickandmortyapi.com/api/character/14789', (req, res, ctx) => {
    const { id } = req.params;
    if (typeof id === 'string') {
      const foundData = mockData.results.filter((elem) => {
        return String(elem.id) === id;
      });
      return res(ctx.status(200), ctx.json(foundData));
    }
    return res(ctx.status(404), ctx.json({ error: 'There is nothing here.' }));
  }),
];

export default handlers;
