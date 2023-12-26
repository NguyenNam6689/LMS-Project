<<<<<<< HEAD
//* LIB
import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';

//* IMPORT
import {
  HEADER_TABLE_LIST_STUDENT,
  ATTRIBUTE_TABLE_LIST_STUDENT,
  NAME_TABLE_LIST_STUDENT,
  STATUS_STUDENT,
} from '@/common/constants/ClassConst';
import { rawDataListStudent } from '@/data/class';
import TableList from '@/components/table/TableList';
import ContentName from '@/components/ContentName';
import TableAction from '@/components/table/TableAction';
import ToolTip from '@/components/tooltip';
=======


//#raw data
import { rawDataListStudent } from "@/data/class";

//#Icon
import { TfiWrite } from "react-icons/tfi";
import { FaRegTrashAlt } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";


//# CONST student
import {
    HEADER_TABLE_LIST_STUDENT ,
    ATTRIBUTE_TABLE_LIST_STUDENT,
    NAME_TABLE_LIST_STUDENT,
    STATUS_STUDENT
    
} from "@/common/constants/ClassConst";

import TableList from "@/components/table/TableList";
import ContentName from "@/components/ContentName";
import TableAction from "@/components/table/TableAction";

//#LIB
import React from "react";
>>>>>>> c93f681a111134beff3230aee919eb1bceaf8dd3

const CheckInStudent = () => {
  return (
    <React.Fragment>
      <ContentName tableName={NAME_TABLE_LIST_STUDENT} />
<<<<<<< HEAD
      <TableAction leftButton={[{ size: 'large', name: 'Lưu', color: '#561B8C' }]} />
      <TableList
        // các trường của table
        tableHeader={HEADER_TABLE_LIST_STUDENT}
        // dữ liệu table
        tableData={rawDataListStudent}
        tableAttribute={ATTRIBUTE_TABLE_LIST_STUDENT}
        tableFieldSelect={{
          click: () => {},
          fieldAttribute: ['memo'],
          dataSelect: STATUS_STUDENT,
        }}
=======
      <TableAction
        leftButton={[{ size: "large", name: "Lưu", color: "#561B8C" }]}
      />    
      <TableList
        // các trường của table
        tableHeader={HEADER_TABLE_LIST_STUDENT}
        
        // dữ liệu table
        tableData={rawDataListStudent}
        tableAttribute={ATTRIBUTE_TABLE_LIST_STUDENT}

        tableFieldSelect={{
            click: () => {},
            fieldAttribute: ["memo"],
            dataSelect :  STATUS_STUDENT
          }}

>>>>>>> c93f681a111134beff3230aee919eb1bceaf8dd3
        // các nút thao tác cho  mổi dòng trong table
        tableLeftButton={[
          {
            click: () => {},
<<<<<<< HEAD
            icon: (
              <ToolTip tooltip={'Xoá'}>
                <FaRegTrashAlt size={20} />
              </ToolTip>
            ),
          },
        ]}
=======
            icon: <FaRegTrashAlt size={20} />,
          },
        ]}

>>>>>>> c93f681a111134beff3230aee919eb1bceaf8dd3
      />
    </React.Fragment>
  );
};

export default CheckInStudent;
