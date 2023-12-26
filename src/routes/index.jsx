//* LIB
import React from 'react';
import { Outlet, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

//* IMPORT
<<<<<<< HEAD
import LoginAdmin from '@/pages/login/Loginpage';
import App from '@/App';
import LoadingPage from '@/components/loadings/LoadingPage';
import LayoutPage from '@/pages/layout';
=======
import LoginAdmin from '@/pages/login/loginpage';
import App from '@/App';
import LoadingPage from '@/components/loadings/LoadingPage';
import LayoutPage from '@/pages/layout';

>>>>>>> c93f681a111134beff3230aee919eb1bceaf8dd3
import { store } from '@/redux/store';

//* student
import ListStudent from '@/pages/student/ListStudent';
<<<<<<< HEAD
import AddStudent from '@/pages/student/AddStudent';
=======
import Addstudent from '@/pages/student/AddStudent';
>>>>>>> c93f681a111134beff3230aee919eb1bceaf8dd3
import EditStudent from '@/pages/student/EditStudent';

//* Course
import ListCourse from '@/pages/coures/ListCourse';
import AddCourse from '@/pages/coures/AddCourse';
import EditCourse from '@/pages/coures/EditCourse';

<<<<<<< HEAD
//* Class
import ListClass from '@/pages/class/ListClass';
import ListEnrolls from '@/pages/class/Enrrolment';
import ListLesson from '@/pages/class/ListLesson';
import AddClass from '@/pages/class/AddClass';
import CheckInStudent from '@/pages/class/CheckInStudent';
=======
//#class
import ListClass from '@/pages/class/ListClass'
import ListEnrrolls from '@/pages/class/Enrrolment'
import ListLesson  from '@/pages/class/ListLesson'
import AddClass from '@/pages/class/AddClass'
import CheckInStudent  from '@/pages/class/CheckInStudent'


>>>>>>> c93f681a111134beff3230aee919eb1bceaf8dd3

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
<<<<<<< HEAD
            path: '/HocSinh/EditStudent/:student_id',
=======
            path: '/HocSinh/EditStudent',
>>>>>>> c93f681a111134beff3230aee919eb1bceaf8dd3
            element: <EditStudent />,
          },
          // trang thêm hoc sinh
          {
            path: '/HocSinh/AddStudent',
<<<<<<< HEAD
            element: <AddStudent />,
=======
            element: <Addstudent />,
>>>>>>> c93f681a111134beff3230aee919eb1bceaf8dd3
          },
        ],
      },
      {
        path: '/GiaoVien',
        element: <div></div>,
      },
      {
        path: '/LopHoc',
<<<<<<< HEAD
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
=======
        children : [
          // trang danh sách Lớp Học
          {
            path: "/LopHoc/ListClass",
            element: <ListClass/>,
          },
          {
             path: "/LopHoc/Enrrolment/:CLASSID",
             element: <ListEnrrolls/>,
          },
          {
            path: "/LopHoc/ListLesson",
            element: <ListLesson />,
          },
          {
            path: "/LopHoc/AddClass",
            element: <AddClass />,
          },
           // trang thêm Lớp Học
           {
            path: "/LopHoc/CheckInLession/:CLASSID",
            element: < CheckInStudent  />
          },
          
        ]
>>>>>>> c93f681a111134beff3230aee919eb1bceaf8dd3
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
