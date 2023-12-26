//* LIB
import React from 'react';
import { TfiWrite } from 'react-icons/tfi';
import { FaRegTrashAlt } from 'react-icons/fa';
import { SlCalender } from 'react-icons/sl';

//* IMPORT
import {
  NAME_TABLE_LIST_CLASS,
  HEADER_TABLE_LIST_CLASS,
  ATTRIBUTE_TABLE_LIST_CLASS,
} from '@/common/constants/ClassConst';
import { rawDataListClass } from '@/data/class';
import TableList from '@/components/table/TableList';
import ContentName from '@/components/ContentName';
import TableAction from '@/components/table/TableAction';
import ToolTip from '@/components/tooltip';

const ListClass = () => {
  return (
    <React.Fragment>
      <ContentName tableName={NAME_TABLE_LIST_CLASS} />
      <TableAction leftButton={[{ size: 'large', name: 'Tạo Lớp Học', color: '#561B8C' }]} />
      <TableList
        // các trường của table
        tableHeader={HEADER_TABLE_LIST_CLASS}
        // dữ liệu table
        tableData={rawDataListClass}
        tableAttribute={ATTRIBUTE_TABLE_LIST_CLASS}
        // các nút thao tác cho  mổi dòng trong table
        tableLeftButton={[
          {
            click: () => {},
            icon: (
              <ToolTip tooltip={'Lịch học'}>
                <SlCalender size={20} />
              </ToolTip>
            ),
          },
          {
            click: () => {},
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
          },
        ]}
      />
    </React.Fragment>
  );
};

export default ListClass;
