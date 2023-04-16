import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserCard } from '../types';

interface UsersState {
  users: IUserCard[];
}

const initialState = {
  users: [],
} as UsersState;

export const usersSlice = createSlice({
  name: 'usersBase',
  initialState,
  reducers: {
    addNewUser: (state, action: PayloadAction<IUserCard>) => {
      state.users.push(action.payload);
    },
  },
});

export const { addNewUser } = usersSlice.actions;

export default usersSlice.reducer;
