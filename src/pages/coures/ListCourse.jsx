//* LIB
import { dataListCourse } from '@/data/course';
import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { TfiWrite } from 'react-icons/tfi';

//* IMPORT
import { ATTRIBUTE_TABLE, HEADER_TABLE, NAME_TABLE } from '@/common/constants/CourseConst';
import ContentName from '@/components/ContentName';
import TableAction from '@/components/table/TableAction';
import TableList from '@/components/table/TableList';

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
          },
        ]}
      />
    </React.Fragment>
  );
};

export default ListCourse;
