import * as rtkQuery from '@reduxjs/toolkit/dist/query/react';
import { ISingleDataFromAPI, IDataFromAPI } from '../types';

export type TypeRTKQuery = typeof rtkQuery & { default: unknown };
const { createApi, fetchBaseQuery } = ((rtkQuery as TypeRTKQuery).default ?? rtkQuery) as typeof rtkQuery;

export const rickAndMortyApi = createApi({
  reducerPath: 'rickAndMortyApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }),
  endpoints: (builder) => ({
    getAllCharacter: builder.query<IDataFromAPI, void>({
      query: () => 'character',
    }),
    getCharacterByName: builder.query<IDataFromAPI, string>({
      query: (param) => `character/?name=${param}`,
    }),
    getCharacterById: builder.query<ISingleDataFromAPI, number>({
      query: (id) => `character/${id}`,
    }),
  }),
});

export const { useGetAllCharacterQuery, useGetCharacterByNameQuery, useGetCharacterByIdQuery } = rickAndMortyApi;
