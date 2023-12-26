//* LIB
import { FaRegTrashAlt } from 'react-icons/fa';
import React from 'react';

//* CONST student
import {
  NAME_TABLE_LIST_ENRROLL,
  HEADER_TABLE_LIST_ENRROLL,
  ATTRIBUTE_TABLE_LIST_ENRROLL,
} from '@/common/constants/ClassConst';

//* IMPORT
import { rawDataListEnrrolll } from '@/data/class';
import TableList from '@/components/table/TableList';
import ContentName from '@/components/ContentName';
import TableAction from '@/components/table/TableAction';
import ToolTip from '@/components/tooltip';

const ListEnrolls = () => {
  return (
    <React.Fragment>
      <ContentName tableName={NAME_TABLE_LIST_ENRROLL} />
      <TableAction leftButton={[{ size: 'large', name: 'Thêm Học Sinh', color: '#561B8C' }]} />
      <TableList
        tableHeader={HEADER_TABLE_LIST_ENRROLL}
        tableAttribute={ATTRIBUTE_TABLE_LIST_ENRROLL}
        tableData={rawDataListEnrrolll}
        tableLeftButton={[
          {
            click: () => {},
            icon: (
              <ToolTip tooltip={'Xoá'}>
                <FaRegTrashAlt size={20} />
              </ToolTip>
            ),
          },
        ]}
      />
    </React.Fragment>
  );
};

export default ListEnrolls;
