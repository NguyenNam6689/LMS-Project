//* LIB
import { configureStore } from '@reduxjs/toolkit';
import loggerMiddleware from 'redux-logger';

//* IMPORT
import { AppNode } from '@/common/enums';

const shouldEnvironment = process.env.NODE_APP === AppNode.dev;

const middlewares = [];

if (shouldEnvironment) {
  middlewares.push(loggerMiddleware);
}

export const store = configureStore({
  reducer: {},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares),
  devTools: shouldEnvironment,
});
