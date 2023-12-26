//** LIB
import { createSlice } from '@reduxjs/toolkit';

//** IMPORT
import { getCourseInitial, postCourseInitial, deleteCourseInitial } from './Thunk';

import { NameRedux } from '@/common/enums';

//* Create initial State of data
const initialState = {
  isLoading: false,
  error: null,
  courseData: null,
};

const courseSlice = createSlice({
  name: NameRedux.Course,
  initialState,
  reducers: {
    clearData: (state) => {
      state.courseData = [];
      state.error = null;
      state.isLoading = false;
    },
  },
  extraReducers: {
    //* Get
    [getCourseInitial.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getCourseInitial.fulfilled]: (state, action) => {
      state.courseData = action.payload;

      state.isLoading = false;
    },
    [getCourseInitial.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    //* Post
    [postCourseInitial.pending]: (state, action) => {
      state.isLoading = true;
    },
    [postCourseInitial.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [postCourseInitial.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    //* Delete
    [deleteCourseInitial.pending]: (state, action) => {
      state.isLoading = true;
    },
    [deleteCourseInitial.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [deleteCourseInitial.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});
// Todo: 1. Reducer
const courseReducer = courseSlice.reducer;

// Todo: 2. Action
const courseAction = courseSlice.actions;

// Todo: 3 Export action
export const { clearData } = courseAction;

export default courseReducer;
