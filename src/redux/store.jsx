//* LIB
import { configureStore } from '@reduxjs/toolkit';
import loggerMiddleware from 'redux-logger';

//* IMPORT
import { AppNode } from '@/common/enums';
<<<<<<< HEAD
import courseReducer from './course/Slice';
import studentReducer from '@/redux/student/Slice'
=======
>>>>>>> c93f681a111134beff3230aee919eb1bceaf8dd3

const shouldEnvironment = process.env.NODE_APP === AppNode.dev;

const middlewares = [];

if (shouldEnvironment) {
  middlewares.push(loggerMiddleware);
}

export const store = configureStore({
<<<<<<< HEAD
  reducer: {
    course: courseReducer,
    student : studentReducer,
  },
=======
  reducer: {},
>>>>>>> c93f681a111134beff3230aee919eb1bceaf8dd3
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares),
  devTools: shouldEnvironment,
});
