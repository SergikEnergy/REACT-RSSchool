import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISingleDataFromAPI } from '../types';

interface CharactersState {
  character: ISingleDataFromAPI[];
  id: number;
  error: string;
}

const initialState = {
  character: [],
  id: 0,
  error: '',
} as CharactersState;

export const characterSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    getAnotherCharacter: (state, action: PayloadAction<ISingleDataFromAPI[]>) => {
      return { ...state, character: action.payload };
    },
    getCharacterId: (state, action: PayloadAction<number>) => {
      return { ...state, id: action.payload };
    },
  },
});

export const { getAnotherCharacter, getCharacterId } = characterSlice.actions;

export default characterSlice.reducer;
