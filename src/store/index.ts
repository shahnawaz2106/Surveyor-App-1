// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import breadcrumbReducer from './breadcrumbSlice.ts';

const store = configureStore({
  reducer: {
    breadcrumb: breadcrumbReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
