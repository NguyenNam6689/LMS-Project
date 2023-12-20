

//#raw data
import { rawDataListEnrrolll } from '@/data/class'


//#Icon
import { TfiWrite } from 'react-icons/tfi';
import { FaRegTrashAlt } from 'react-icons/fa';
import { SlCalender } from "react-icons/sl";
import Button from '@mui/material/Button';

//# CONST student
import {  NAME_TABLE_LIST_ENRROLL, HEADER_TABLE_LIST_ENRROLL, ATTRIBUTE_TABLE_LIST_ENRROLL  } from '@/common/constants/ClassConst'

import TableList  from '@/components/table/TableList'
import ContentName from '@/components/ContentName'
import TableAction from '@/components/table/TableAction'

import React from 'react'

const ListEnrrolls = ()  => {


    return(
    <React.Fragment>
       <ContentName 
        tableName = { NAME_TABLE_LIST_ENRROLL }
       />
         <TableAction 
        leftButton = {[{size: 'large', name: 'Thêm Học Sinh', color: "#561B8C"}]}  
       />
       <TableList
        tableHeader = { HEADER_TABLE_LIST_ENRROLL }
        tableAttribute  = { ATTRIBUTE_TABLE_LIST_ENRROLL } 
        tableData  = { rawDataListEnrrolll }
        tableLeftButton={[
            {
              click: () => {},
              icon: <FaRegTrashAlt size={20} />,
            },
          ]}
        
       />
       
       </React.Fragment>);
}



export  default ListEnrrolls;
