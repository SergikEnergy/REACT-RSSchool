import * as toolkitRaw from '@reduxjs/toolkit';

export type TypeToolkitRaw = typeof toolkitRaw & { default?: unknown };

const { createSlice } = ((toolkitRaw as TypeToolkitRaw).default ?? toolkitRaw) as typeof toolkitRaw;

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
    setSearchParams: (state, action: toolkitRaw.PayloadAction<string>) => {
      return { ...state, searchValue: action.payload };
    },
  },
});

export const { setSearchParams } = searchParamsSlice.actions;

export default searchParamsSlice.reducer;
