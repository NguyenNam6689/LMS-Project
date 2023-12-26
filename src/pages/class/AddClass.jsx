//* LIB
import React from 'react';
import MultiSelect from 'react-multiple-select-dropdown-lite';
import 'react-multiple-select-dropdown-lite/dist/index.css';

//* IMPORT
import ContentName from '@/components/ContentName';
import Form from '@/components/Form';
import CoverFrom from '@/components/CoverForm';
import FiledInput from '@/components/Filedinput';
import CoverSlotTime from '@/components/CoverSlotTime';
import AddSlotTime from '@/components/AddSlotTime';
import { listCouse, listTeacher } from '@/data/class';

import { DAYS } from '@/common/constants/ClassConst';

const AddClass = () => {
  const [numSlotTime, setNumSlotTime] = React.useState([0, 1]);

  const handleOnchange = (val) => {
    setvalue(val);
  };

  return (
    <>
      <CoverFrom>
        <ContentName tableName={'Thêm Lớp Học'} />
        <Form type={'Thêm Lớp Học'}>
          <FiledInput
            label={'Mã Lớp họC'}
            typeData={'text'}
            placeholder={'CM23*** '}
            typeField={'input'}
            disabled={true}
          />
          <FiledInput
            label={'Tên Lớp'}
            typeData={'text'}
            placeholder={'Scratch'}
            typeField={'input'}
          />
          <FiledInput
            label={'Khóa học'}
            typeField={'select'}
            data={listCouse}
            attribute={['name', 'code']}
          />
          <FiledInput
            label={'Số Tiết'}
            typeData={'text'}
            placeholder={'12'}
            typeField={'input'}
            disabled={true}
          />

          <FiledInput label={'Ngày Khai Giảng'} typeField={'input'} typeData={'date'} />
          <FiledInput label={'Ngày Kết Thúc'} typeField={'input'} typeData={'date'} />
          <FiledInput
            label={'Giáo Viên'}
            typeField={'select'}
            data={listTeacher}
            attribute={['teacher_code', 'teacher_name']}
          />
          <FiledInput
            label={'Trợ Giảng'}
            typeField={'select'}
            data={listTeacher}
            attribute={['teacher_code', 'teacher_name']}
          />
          {numSlotTime.map((index) => (
            <CoverSlotTime>
              <MultiSelect placeholder={'Chọn Thứ'} onChange={handleOnchange} options={DAYS} />
              <FiledInput
                label={'giờ bắt đầu'}
                typeField={'time'}
                onchange={() => {}}
                idSlot={index}
              />
              <FiledInput
                label={'giờ kết thúc'}
                typeField={'time'}
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
