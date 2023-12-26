//* LIB
import { createAsyncThunk } from '@reduxjs/toolkit';

//* IMPORT
import { NameRedux } from '@/common/enums';
import useGetListStudent from '@/hooks/redux/useSelectorStudent';
import toast from 'react-hot-toast';

const requestGetOptions = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};

const requestDeleteOptions = {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};

const getListStudent = createAsyncThunk(
  `${NameRedux.Student}/get/all`,
  async (_, { rejectWithValue }) => {
    const data = fetch('http://59.106.221.43:8888/students/', requestGetOptions)
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .catch((error) => {
        return rejectWithValue({ errorMessage: 'An error occurred', originalError: error });
      });

    return data;
  },
);

const deleteStudent = createAsyncThunk(
  `${NameRedux.Student}/post/deleteStudent`,
  async (idDelete, { rejectWithValue }) => {
    const idStudent = parseInt(idDelete().arg);
    const responseDelete = fetch(
      `http://59.106.221.43:8888/students/${idStudent}`,
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

const editStudent = createAsyncThunk(
  `${NameRedux.Student}/path/editStudent`,
  async (data, { rejectWithValue }) => {
    const requestBody = JSON.stringify(data);
    const requestPatchOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: requestBody, // Include the request body
    };

    const responseEdit = fetch(`http://59.106.221.43:8888/students/${data.id}`, requestPatchOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data.detail) {
          toast.error(data.detail);
        } else toast.success('Sửa thành công');
        return data;
      })
      .catch((error) => {
        return rejectWithValue({ errorMessage: 'An error occurred', originalError: error });
      });

    return responseEdit;
  },
);

const addStudent = createAsyncThunk(
  `${NameRedux.Student}/post/addStudent`,
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

    const responseEdit = fetch(`http://59.106.221.43:8888/students/`, requestPostOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data.detail) {
          toast.error(data.detail);
        } else toast.success('Thêm thành công');
        return data;
      })
      .catch((error) => {
        return rejectWithValue({ errorMessage: 'An error occurred', originalError: error });
      });

    return responseEdit;
  },
);

export { getListStudent, deleteStudent, editStudent, addStudent };
