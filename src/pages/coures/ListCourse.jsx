//* LIB
import { dataListCourse } from '@/data/course';
<<<<<<< HEAD
import React, { useEffect } from 'react';
=======
import React from 'react';
>>>>>>> c93f681a111134beff3230aee919eb1bceaf8dd3
import { FaRegTrashAlt } from 'react-icons/fa';
import { TfiWrite } from 'react-icons/tfi';

//* IMPORT
import { ATTRIBUTE_TABLE, HEADER_TABLE, NAME_TABLE } from '@/common/constants/CourseConst';
import ContentName from '@/components/ContentName';
import TableAction from '@/components/table/TableAction';
import TableList from '@/components/table/TableList';
<<<<<<< HEAD
import ToolTip from '@/components/tooltip';
import { useDispatch } from 'react-redux';
import { getCourseInitial } from '@/redux/course/Thunk';
import useSelectorPlaceholder from '@/hooks/redux/useSelectorCourse';
import { useNavigate } from 'react-router-dom';
// import { getAllInitial, postAllInitial } from '@/redux/course/Thunk';

const apiUrl = 'http://59.106.221.43:8888/courses/';

const ListCourse = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { courseData } = useSelectorPlaceholder();
  console.log(courseData, '--------------');
  React.useEffect(() => {
    dispatch(getCourseInitial());
  }, []);
  return (
    <React.Fragment>
      <ContentName tableName={NAME_TABLE} />
      <TableAction
        leftButton={[
          {
            size: 'large',
            name: 'Thêm khoá học',
            color: '#561B8C',
            click: () => {
              navigate(`AddCourse`);
            },
          },
        ]}
      />
      <TableList
        tableHeader={HEADER_TABLE}
        tableAttribute={ATTRIBUTE_TABLE}
        tableData={courseData}
        tableLeftButton={[
          {
            click: () => {
              navigate(`EditCourse`);
            },
            icon: (
              <ToolTip tooltip={'Chỉnh sửa'}>
                <TfiWrite size={20} />
              </ToolTip>
            ),
          },
          {
            click: () => {},
            icon: (
              <ToolTip tooltip={'Xoá'}>
                <FaRegTrashAlt size={20} />
              </ToolTip>
            ),
=======

const ListCourse = () => {
  return (
    <React.Fragment>
      <ContentName tableName={NAME_TABLE} />
      <TableAction leftButton={[{ size: 'large', name: 'Thêm khoá học', color: '#561B8C' }]} />
      <TableList
        tableHeader={HEADER_TABLE}
        tableAttribute={ATTRIBUTE_TABLE}
        tableData={dataListCourse}
        tableLeftButton={[
          {
            click: () => {},
            icon: <TfiWrite size={20} />,
          },
          {
            click: () => {},
            icon: <FaRegTrashAlt size={20} />,
>>>>>>> c93f681a111134beff3230aee919eb1bceaf8dd3
          },
        ]}
      />
    </React.Fragment>
  );
};

export default ListCourse;
