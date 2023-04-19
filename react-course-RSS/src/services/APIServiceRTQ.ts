import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ISingleDataFromAPI, IDataFromAPI } from '../types';

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
