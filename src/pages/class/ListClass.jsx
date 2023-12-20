

//#raw data
import { rawDataListClass } from "@/data/class";

//#Icon
import { TfiWrite } from "react-icons/tfi";
import { FaRegTrashAlt } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";


//# CONST student
import {
  NAME_TABLE_LIST_CLASS,
  HEADER_TABLE_LIST_CLASS,
  ATTRIBUTE_TABLE_LIST_CLASS,
} from "@/common/constants/ClassConst";

import TableList from "@/components/table/TableList";
import ContentName from "@/components/ContentName";
import TableAction from "@/components/table/TableAction";

//#LIB
import React from "react";

const ListClass = () => {
  return (
    <React.Fragment>
      <ContentName tableName={NAME_TABLE_LIST_CLASS} />
      <TableAction
        leftButton={[{ size: "large", name: "Tạo Lớp Học", color: "#561B8C" }]}
      />    
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
      />
    </React.Fragment>
  );
};

export default ListClass;
