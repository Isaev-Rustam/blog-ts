import { combineReducers } from '@reduxjs/toolkit';

import { articlesApi } from '@/store/articles/articles.slice.ts';
import authReducer from '@/store/authentication/authentication.slice.ts';

export const rootReducer = combineReducers({
  auth: authReducer,
  [articlesApi.reducerPath]: articlesApi.reducer,
});
