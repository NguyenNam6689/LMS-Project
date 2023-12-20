import React from "react";

import ContentName from "@/components/ContentName";
import Form from "@/components/Form";
import CoverFrom from "@/components/CoverForm";
import FiledInput from "@/components/Filedinput";
import CoverSlotTime from "@/components/CoverSlotTime";
import AddSlotTime from "@/components/AddSlotTime";


//#raw data slect danh sách kháo học
import { listCouse, listTeacher } from "@/data/class";

import { DAYS } from "@/common/constants/ClassConst";

//#lib
import MultiSelect from 'react-multiple-select-dropdown-lite';
import "react-multiple-select-dropdown-lite/dist/index.css";

const AddClass = () => {
  const [numSlotTime, setNumSlotTime] = React.useState([0, 1]);

  const  handleOnchange  =  val  => {
    setvalue(val)
  }
  
  return (
    <>
      <CoverFrom>
        <ContentName tableName={"Thêm Lớp Học"} />
        <Form type={"Thêm Lớp Học"}>
          <FiledInput
            lable={"Mã Lớp họC"}
            typeData={"text"}
            placeholder={"CM23*** "}
            typeField={"input"}
            disabled={true}
          />
          <FiledInput
            lable={"Tên Lớp"}
            typeData={"text"}
            placeholder={"Scratch"}
            typeField={"input"}
          />
          <FiledInput
            lable={"Khóa học"}
            typeField={"select"}
            data={listCouse}
            atrribute={["name", "code"]}
          />
          <FiledInput
            lable={"Số Tiết"}
            typeData={"text"}
            placeholder={"12"}
            typeField={"input"}
            disabled={true}
          />

          <FiledInput
            lable={"Ngày Khai Giảng"}
            typeField={"input"}
            typeData={"date"}
          />
          <FiledInput
            lable={"Ngày Kết Thúc"}
            typeField={"input"}
            typeData={"date"}
          />
          <FiledInput
            lable={"Giáo Viên"}
            typeField={"select"}
            data={listTeacher}
            atrribute={["teacher_code", "teacher_name"]}
          />
          <FiledInput
            lable={"Trợ Giảng"}
            typeField={"select"}
            data={listTeacher}
            atrribute={["teacher_code", "teacher_name"]}
          />
          {numSlotTime.map((index) => (
            <CoverSlotTime>
              <MultiSelect
                placeholder={"Chọn Thứ"}
                onChange={handleOnchange}
                options={DAYS}
              />
              <FiledInput
                lable={"giờ bắt đầu"}
                typeField={"time"}
                onchange={() => {}}
                idSlot={index}
              />
              <FiledInput
                lable={"giờ kết thúc"}
                typeField={"time"}
                onchange={() => {}}
                idSlot={index}
              />
            </CoverSlotTime>
          ))}
         <AddSlotTime />
        </Form>
        
      </CoverFrom>
    </>
  );
};

export default AddClass;
