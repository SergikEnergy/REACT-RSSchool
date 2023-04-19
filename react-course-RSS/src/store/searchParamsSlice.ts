import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchParamsState {
  searchValue: string;
}

export const initialState = {
  searchValue: '',
} as SearchParamsState;

export const searchParamsSlice = createSlice({
  name: 'searchParams',
  initialState,
  reducers: {
    setSearchParams: (state, action: PayloadAction<string>) => {
      return { ...state, searchValue: action.payload };
    },
  },
});

export const { setSearchParams } = searchParamsSlice.actions;

export default searchParamsSlice.reducer;
