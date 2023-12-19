//* LIB
import React from 'react';
import { Outlet, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

//* IMPORT
import LoginAdmin from '@/pages/login/loginpage';
import App from '@/App';
import LoadingPage from '@/components/loadings/LoadingPage';
import LayoutPage from '@/pages/layout';
import { store } from '@/redux/store';

//* student
import ListStudent from '@/pages/student/ListStudent';
import Addstudent from '@/pages/student/AddStudent';
import EditStudent from '@/pages/student/EditStudent';

//* Course
import ListCourse from '@/pages/coures/ListCourse';
import AddCourse from '@/pages/coures/AddCourse';
import EditCourse from '@/pages/coures/EditCourse';

const routes = [
  {
    path: '/',
    element: (
      <Provider store={store}>
        <LayoutPage>
          <React.Suspense fallback={<LoadingPage />}>
            <App />
            <Outlet />
          </React.Suspense>
        </LayoutPage>
      </Provider>
    ),
    children: [
      {
        path: '/KhoaHoc',
        children: [
          {
            index: true,
            element: <ListCourse />,
          },
          {
            path: '/KhoaHoc/AddCourse',
            element: <AddCourse />,
          },
          {
            path: '/KhoaHoc/EditCourse',
            element: <EditCourse />,
          },
        ],
      },
      {
        // kiểm tra user có quyền vào trang khóa học không
        path: '/HocSinh',
        children: [
          // trang danh sách hoc sinh
          {
            index: true,
            element: <ListStudent />,
          },
          // trang chỉnh sửa hoc sinh
          {
            path: '/HocSinh/EditStudent',
            element: <EditStudent />,
          },
          // trang thêm hoc sinh
          {
            path: '/HocSinh/AddStudent',
            element: <Addstudent />,
          },
        ],
      },
      {
        path: '/GiaoVien',
        element: <div></div>,
      },
      {
        path: '/LopHoc',
        element: <div></div>,
      },
      {
        path: '/Nhanvian',
        element: <div></div>,
      },
      {
        path: '/LichHoc',
        element: <div></div>,
      },
    ],
  },
  {
    path: '/login',
    element: <LoginAdmin />,
  },
];

const router = createBrowserRouter(routes);

export default router;
