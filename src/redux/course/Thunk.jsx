//* LIB
import { createAsyncThunk } from '@reduxjs/toolkit';

//* IMPORT
import { NameRedux } from '@/common/enums';

const requestDeleteOptions = {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};

const getCourseInitial = createAsyncThunk(
  `${NameRedux.Course}/get/all`,
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('http://59.106.221.43:8888/courses/');
      const data = await response.json();
      // return result data
      return data;
    } catch (error) {
      return rejectWithValue({ errorMessage: 'An error occurred', originalError: error });
    }
  },
);

const deleteCourseInitial = createAsyncThunk(
  `${NameRedux.Student}/post/deleteStudent`,
  async (idDelete, { rejectWithValue }) => {
    const idCourses = parseInt(idDelete().arg);
    const responseDelete = fetch(
      `http://59.106.221.43:8888/courses/${idCourses}`,
      requestDeleteOptions,
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          toast.success(data.message);
        } else toast.error(data.detail);
        return data;
      })
      .catch((error) => {
        return rejectWithValue({ errorMessage: 'An error occurred', originalError: error });
      });

    return responseDelete;
  },
);
const postCourseInitial = createAsyncThunk(
  `${NameRedux.Course}/post/all`,
  async (data, { rejectWithValue }) => {
    const requestBody = JSON.stringify(data);
    const requestPostOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: requestBody, // Include the request body
    };
    try {
      const response = await fetch(`http://59.106.221.43:8888/courses/`, requestPostOptions);
      const data = await response.json();
      // return result data
      return data;
    } catch (error) {
      return rejectWithValue({ errorMessage: 'An error occurred', originalError: error });
    }
  },
);

export { getCourseInitial, postCourseInitial, deleteCourseInitial };
