<<<<<<< HEAD
//* LIB
import React from 'react';
import { TfiWrite } from 'react-icons/tfi';
import { FaRegTrashAlt } from 'react-icons/fa';
import { SlCalender } from 'react-icons/sl';

//* IMPORT
=======


//#raw data
import { rawDataListClass } from "@/data/class";

//#Icon
import { TfiWrite } from "react-icons/tfi";
import { FaRegTrashAlt } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";


//# CONST student
>>>>>>> c93f681a111134beff3230aee919eb1bceaf8dd3
import {
  NAME_TABLE_LIST_CLASS,
  HEADER_TABLE_LIST_CLASS,
  ATTRIBUTE_TABLE_LIST_CLASS,
<<<<<<< HEAD
} from '@/common/constants/ClassConst';
import { rawDataListClass } from '@/data/class';
import TableList from '@/components/table/TableList';
import ContentName from '@/components/ContentName';
import TableAction from '@/components/table/TableAction';
import ToolTip from '@/components/tooltip';
=======
} from "@/common/constants/ClassConst";

import TableList from "@/components/table/TableList";
import ContentName from "@/components/ContentName";
import TableAction from "@/components/table/TableAction";

//#LIB
import React from "react";
>>>>>>> c93f681a111134beff3230aee919eb1bceaf8dd3

const ListClass = () => {
  return (
    <React.Fragment>
      <ContentName tableName={NAME_TABLE_LIST_CLASS} />
<<<<<<< HEAD
      <TableAction leftButton={[{ size: 'large', name: 'Tạo Lớp Học', color: '#561B8C' }]} />
      <TableList
        // các trường của table
        tableHeader={HEADER_TABLE_LIST_CLASS}
        // dữ liệu table
        tableData={rawDataListClass}
        tableAttribute={ATTRIBUTE_TABLE_LIST_CLASS}
=======
      <TableAction
        leftButton={[{ size: "large", name: "Tạo Lớp Học", color: "#561B8C" }]}
      />    
      <TableList
        // các trường của table
        tableHeader={HEADER_TABLE_LIST_CLASS}
        
        // dữ liệu table
        tableData={rawDataListClass}
        tableAttribute={ATTRIBUTE_TABLE_LIST_CLASS}

>>>>>>> c93f681a111134beff3230aee919eb1bceaf8dd3
        // các nút thao tác cho  mổi dòng trong table
        tableLeftButton={[
          {
            click: () => {},
<<<<<<< HEAD
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
=======
            icon: <SlCalender size={20} />,
          },
          {
            click: () => {},
            icon: <TfiWrite size={20} />,
          },
          {
            click: () => {},
            icon: <FaRegTrashAlt size={20} />,
          },
        ]}

        //  // các thành phần thao tác ngoài table( trường tìm kiếm , btn tạo mới)
        //  tableFieldButton={{
        //     click: () => {},
        //     icon: <TbExchange size={20} />,
        //     link: "/Exchange",
        //     fieldAttribute: ["teacher_name", "assistant_name"],
        //   }}
>>>>>>> c93f681a111134beff3230aee919eb1bceaf8dd3
      />
    </React.Fragment>
  );
};

export default ListClass;
