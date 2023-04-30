import * as toolkitRaw from '@reduxjs/toolkit';
import { ISingleDataFromAPI } from '../types';

export type TypeToolkitRaw = typeof toolkitRaw & { default?: unknown };
const { createSlice } = ((toolkitRaw as TypeToolkitRaw).default ?? toolkitRaw) as typeof toolkitRaw;

interface CharactersState {
  character: ISingleDataFromAPI[];
  id: number;
  error: string;
}

export const initialState = {
  character: [],
  id: 1,
  error: '',
} as CharactersState;

export const characterSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    getAnotherCharacter: (state, action: toolkitRaw.PayloadAction<ISingleDataFromAPI[]>) => {
      return { ...state, character: action.payload };
    },
    getCharacterId: (state, action: toolkitRaw.PayloadAction<number>) => {
      return { ...state, id: action.payload };
    },
  },
});

export const { getAnotherCharacter, getCharacterId } = characterSlice.actions;

export default characterSlice.reducer;
