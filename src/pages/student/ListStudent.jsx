//#LIB
import react from 'react';

//#raw data
import { rawDataListStudent } from '@/data/student';

//# CONST student
import { NAME_TABLE, HADER_TABLE, ATTRIBUTE_TABLE } from '@/common/constants/StudentConst';

import TableList from '@/components/table/TableList';
import ContentName from '@/components/ContentName';
import TableAction from '@/components/table/TableAction';
import React from 'react';

//#Icon
import { TfiWrite } from 'react-icons/tfi';
import { FaRegTrashAlt } from 'react-icons/fa';
import { TbExchange } from 'react-icons/tb';

const ListStudent = () => {
  return (
    <React.Fragment>
      <ContentName tableName={NAME_TABLE} />
      <TableAction
        leftButton={[{ size: 'large', name: 'Thêm Học Sinh', color: '#561B8C', click: () => {} }]}
      />
      <TableList
        // các trường của table
        tableHeader={HADER_TABLE}
        // dữ liệu table
        tableData={rawDataListStudent}
        tableAttribute={ATTRIBUTE_TABLE}
        // các nút thao tác cho  mổi dòng trong table
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

export default ListStudent;
