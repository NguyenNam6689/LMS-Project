//* LIB
import React from 'react';

//* IMPORT
import ContentName from '@/components/ContentName';
import CoverFrom from '@/components/CoverForm';
import Form from '@/components/Form';
import { dataSelect } from '@/data/course';
import FiledInput from '@/components/Filedinput';

const AddCourse = () => {
  return (
    <React.Fragment>
      <CoverFrom>
        <ContentName tableName={'Tạo khoá học'} />
        <Form>
          <FiledInput label={'ID'} placeholder={'ID khoá học'} typeField={'input'} />
          <FiledInput label={'Mã khoá học'} placeholder={'SC01'} typeField={'input'} />
          <FiledInput label={'Tên khoá học'} placeholder={'Scratch cơ sở'} typeField={'input'} />
          <FiledInput label={'Số tiết học'} placeholder={'20'} typeField={'input'} />
          <FiledInput
            label={'level'}
            typeField={'select'}
            data={dataSelect}
            attribute={['id', 'title']}
          />
        </Form>
      </CoverFrom>
    </React.Fragment>
  );
};

export default AddCourse;
