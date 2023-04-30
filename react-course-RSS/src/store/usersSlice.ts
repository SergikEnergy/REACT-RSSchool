import * as toolkitRaw from '@reduxjs/toolkit';

import { IUserCard } from '../types';

export type TypeToolkitRaw = typeof toolkitRaw & { default?: unknown };
const { createSlice } = ((toolkitRaw as TypeToolkitRaw).default ?? toolkitRaw) as typeof toolkitRaw;

interface UsersState {
  users: IUserCard[];
}

export const initialState = {
  users: [],
} as UsersState;

export const usersSlice = createSlice({
  name: 'usersBase',
  initialState,
  reducers: {
    addNewUser: (state, action: toolkitRaw.PayloadAction<IUserCard>) => {
      state.users.push(action.payload);
    },
  },
});

export const { addNewUser } = usersSlice.actions;

export default usersSlice.reducer;
