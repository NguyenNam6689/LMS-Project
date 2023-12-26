//* LIB
import React from 'react';
import { Outlet, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

//* IMPORT
import LoginAdmin from '@/pages/login/Loginpage';
import App from '@/App';
import LoadingPage from '@/components/loadings/LoadingPage';
import LayoutPage from '@/pages/layout';
import { store } from '@/redux/store';

//* student
import ListStudent from '@/pages/student/ListStudent';
import AddStudent from '@/pages/student/AddStudent';
import EditStudent from '@/pages/student/EditStudent';

//* Course
import ListCourse from '@/pages/coures/ListCourse';
import AddCourse from '@/pages/coures/AddCourse';
import EditCourse from '@/pages/coures/EditCourse';

//* Class
import ListClass from '@/pages/class/ListClass';
import ListEnrolls from '@/pages/class/Enrrolment';
import ListLesson from '@/pages/class/ListLesson';
import AddClass from '@/pages/class/AddClass';
import CheckInStudent from '@/pages/class/CheckInStudent';

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
            path: '/HocSinh/EditStudent/:student_id',
            element: <EditStudent />,
          },
          // trang thêm hoc sinh
          {
            path: '/HocSinh/AddStudent',
            element: <AddStudent />,
          },
        ],
      },
      {
        path: '/GiaoVien',
        element: <div></div>,
      },
      {
        path: '/LopHoc',
        children: [
          // trang danh sách Lớp Học
          {
            index: true,
            element: <ListClass />,
          },
          {
            path: '/LopHoc/Enrolment/:CLASSID',
            element: <ListEnrolls />,
          },
          {
            path: '/LopHoc/ListLesson',
            element: <ListLesson />,
          },
          {
            path: '/LopHoc/AddClass',
            element: <AddClass />,
          },
          // trang thêm Lớp Học
          {
            path: '/LopHoc/CheckInLession/:CLASSID',
            element: <CheckInStudent />,
          },
        ],
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
