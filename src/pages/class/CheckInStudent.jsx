

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

const CheckInStudent = () => {
  return (
    <React.Fragment>
      <ContentName tableName={NAME_TABLE_LIST_STUDENT} />
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

        // các nút thao tác cho  mổi dòng trong table
        tableLeftButton={[
          {
            click: () => {},
            icon: <FaRegTrashAlt size={20} />,
          },
        ]}

      />
    </React.Fragment>
  );
};

export default CheckInStudent;
