import * as toolkitRaw from '@reduxjs/toolkit';

import searchReducer from './searchParamsSlice';
import characterReducer from './characterSlice';
import userReducer from './usersSlice';
import { rickAndMortyApi } from '../services/APIServiceRTQ';

export type TypeToolkitRaw = typeof toolkitRaw & { default?: unknown };

const { combineReducers, configureStore } = ((toolkitRaw as TypeToolkitRaw).default ?? toolkitRaw) as typeof toolkitRaw;

const rootReducer = combineReducers({
  searchParams: searchReducer,
  characters: characterReducer,
  usersBase: userReducer,
  [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer,
});

export const setupStore = (preloadedState?: toolkitRaw.PreloadedState<ReturnType<typeof rootReducer>>) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware({ immutableCheck: { warnAfter: 128 }, serializableCheck: { warnAfter: 128 } }).concat(rickAndMortyApi.middleware);
    },
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
