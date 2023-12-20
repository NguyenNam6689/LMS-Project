

//#LIB
import react from "react";

//#raw data
import { rawDataListLesson  } from "@/data/class";

//#Icon
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa";
import { TbExchange } from "react-icons/tb";
import { TfiWrite } from "react-icons/tfi";

//# CONST student
import {
    HEADER_TABLE_LIST_LESSON ,
    ATTRIBUTE_TABLE_LIST_LESSON ,
    NAME_TABLE_LIST_LESSON  
} from "@/common/constants/ClassConst";

import TableList from "@/components/table/TableList";
import ContentName from "@/components/ContentName";


const ListLesson = () => {
  return (
    <>
      <ContentName tableName={NAME_TABLE_LIST_LESSON} /> 
      <TableList
        // các trường của table
        tableHeader={HEADER_TABLE_LIST_LESSON}
        
        // dữ liệu table
        tableData={rawDataListLesson}
        tableAttribute={ATTRIBUTE_TABLE_LIST_LESSON}

        // các nút thao tác cho  mổi dòng trong table
        tableLeftButton={[
          {
            click: () => {},
            icon: <TfiWrite size={20} />,
          },
          {
            click: () => {},
            icon: <FaRegCalendarCheck size={20} />,
          },
          {
            click: () => {},
            icon: <FaRegTrashAlt size={20} />,
          },
        ]}

         // các thành phần thao tác ngoài table( trường tìm kiếm , btn tạo mới)
         tableFieldButton={{
            click: () => {},
            icon: <TbExchange size={20} />,
            link: "/Exchange",
            fieldAttribute: ["teacher_name", "assistant_name"],
          }}
      />
    </>
  );
};

export default ListLesson;
