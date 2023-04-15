import { rest } from 'msw';
import mockData, { mockSingleData } from './mockData';

const handlers = [
  rest.get('https://rickandmortyapi.com/api/character/?name=kla', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockData));
  }),

  rest.get('https://rickandmortyapi.com/api/character/?name=rrrrr', (req, res, ctx) => {
    return res(
      ctx.status(404),
      ctx.json({
        error: 'There is nothing here.',
      })
    );
  }),

  rest.get('https://rickandmortyapi.com/api/character/1', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockSingleData));
  }),

  rest.get('https://rickandmortyapi.com/api/character/14789', (req, res, ctx) => {
    return res(
      ctx.status(404),
      ctx.json({
        error: 'Character not found',
      })
    );
  }),
];

export default handlers;
