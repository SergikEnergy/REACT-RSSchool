import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import searchReducer from './searchParamsSlice';
import characterReducer from './characterSlice';
import userReducer from './usersSlice';
import { rickAndMortyApi } from '../services/APIServiceRTQ';

const store = configureStore({
  reducer: {
    searchParams: searchReducer,
    characters: characterReducer,
    usersBase: userReducer,
    [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer,
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(rickAndMortyApi.middleware);
  },
});

setupListeners(store.dispatch);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
