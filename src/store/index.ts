import { unsplashApi } from './unsplash/unsplash.api';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    [unsplashApi.reducerPath]: unsplashApi.reducer,
  },
  middleware: getDefaultMiddlware =>
    getDefaultMiddlware().concat(unsplashApi.middleware),
});
