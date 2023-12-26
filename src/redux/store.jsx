//* LIB
import { configureStore } from '@reduxjs/toolkit';
import loggerMiddleware from 'redux-logger';

//* IMPORT
import { AppNode } from '@/common/enums';
import courseReducer from './course/Slice';
import studentReducer from '@/redux/student/Slice';

const shouldEnvironment = process.env.NODE_APP === AppNode.dev;

const middlewares = [];

if (shouldEnvironment) {
  middlewares.push(loggerMiddleware);
}

export const store = configureStore({
  reducer: {
    course: courseReducer,
    student: studentReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares),
  devTools: shouldEnvironment,
});
