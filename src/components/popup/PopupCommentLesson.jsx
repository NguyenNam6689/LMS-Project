//#LIB
import Button from "@mui/material/Button";

import FiledInput from '@/components/Filedinput';

//# raw data list teacher
import {listTeacher }from '@/data/class'

const PopupCommentLesson = ({  }) => {
  return (
    <div className="grid justify-items-end w-[30%] bg-gray-50 rounded-lg p-[20px]">
    <div className="felx flex-col w-full">
       <FiledInput 
            lable=  {"Nội dung buổi học"}
            typeData = {"text"}
            placeholder ={ "Nguễn văn a"} 
            typeField = {"input"}
            width = { "w-full"}
            />
         <FiledInput 
            lable=  {"Giáo viên nhận xét"}
            typeData = {"text"}
            placeholder ={ "Nguễn văn a"} 
            typeField = {"input"}
            width = { "w-full"}
            />
         <FiledInput 
            lable=  {"Trợ giảng nhận xét"}
            typeData = {"text"}
            placeholder ={ "Nguễn văn a"} 
            typeField = {"input"}
            width = { "w-full"}
            />
    </div>
      <div className="flex gap-2">
        <Button
          variant="contained"
          sx={{ background: "#561B8C", color: "#EBC901" }}
          size="large"
        >
          Lưu
        </Button>
        <Button
          variant="contained"
          sx={{ background: "#EAEDF7", color: "#EBC901" }}
          size="large"
        >
          Hủy
        </Button>
      </div>
    </div>
  );
};

export default PopupCommentLesson;
