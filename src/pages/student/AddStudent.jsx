//* LIB
import React from 'react';

//* IMPORT
import ContentName from '@/components/ContentName';
import Form from '@/components/Form';
import CoverFrom from '@/components/CoverForm';
import FiledInput from '@/components/Filedinput';

const Addstudent = () => {
  return (
    <React.Fragment>
      <CoverFrom>
        <ContentName tableName={'Thêm Học Sinh'} />
        <Form>
          <FiledInput lable={'ID'} placeholder={'ID hoc sinh'} typeField={'input'} />
          <FiledInput lable={'Tên Học Sinh'} placeholder={'Nguễn văn a'} typeField={'input'} />
          <FiledInput lable={'Năm Sinh'} placeholder={'09/09/3000'} typeField={'input'} />
          <FiledInput lable={'Lớp'} placeholder={'Scratch'} typeField={'input'} />
          <FiledInput
            lable={'Số diện thoại Học Sinh'}
            placeholder={'04342****'}
            typeField={'input'}
          />
          <FiledInput lable={'Tên Phụ Huynh'} placeholder={'Nguễn văn a'} typeField={'input'} />
          <FiledInput
            lable={'Số diện thoại Phụ Huynh'}
            placeholder={'04342****'}
            typeField={'input'}
          />
        </Form>
      </CoverFrom>
    </React.Fragment>
  );
};

export default Addstudent;
