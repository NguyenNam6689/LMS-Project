//* LIB
import React from 'react';

//* IMPORT
import ContentName from '@/components/ContentName';
import Form from '@/components/Form';
import CoverFrom from '@/components/CoverForm';
import FiledInput from '@/components/Filedinput';
<<<<<<< HEAD
import { ValidateIsempty } from '@/common/utils';
import { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { addStudent } from '@/redux/student/Thunk';

const AddStudent = () => {
  const [isAddStudent, setAddStudent] = React.useState({
    student_name: '',
    student_phone: '',
    student_email: '',
    parent_name: '',
    parent_phone: '',
    parent_email: '',
    birthday: '',
    address: '24/21 lê duẩn',
    main_school: 'nha trang',
    main_class: '',
    memo: 'none',
    avatar_uri: 'string',
  });
  const [notify, setNotify] = React.useState(['', '', '', '', '', '', '', '']);
  const dispatch = useDispatch();

  const handleAdd = async () => {
    const [filedValidate, isError] = await ValidateIsempty([
      isAddStudent.student_name,
      isAddStudent.student_phone,
      isAddStudent.student_email,
      isAddStudent.parent_name,
      isAddStudent.parent_phone,
      isAddStudent.parent_email,
      isAddStudent.birthday,
      isAddStudent.main_class,
    ]);

    switch (isError) {
      case true: {
        for (let i = 0; i < notify.length; i++) {
          if (filedValidate[i].error) {
            setNotify((prevNotify) => {
              const newNotify = [...prevNotify]; // Create a copy of the array
              newNotify[i] = filedValidate[i].notify; // Change the second element in the copy
              return newNotify; // Return the new array
            });
          }
          if (!filedValidate[i].error) {
            setNotify((prevNotify) => {
              const newNotify = [...prevNotify]; // Create a copy of the array
              newNotify[i] = ' '; // Change the second element in the copy
              return newNotify; // Return the new array
            });
          }
        }
        return;
      }

      case false: {
        setNotify((prevNotify) => {
          const newNotify = ['', '', '', '', '', '', '', ''];
          return newNotify; // Return the new array
        });
        dispatch(addStudent(isAddStudent));
      }
    }
  };

=======

const Addstudent = () => {
>>>>>>> c93f681a111134beff3230aee919eb1bceaf8dd3
  return (
    <React.Fragment>
      <CoverFrom>
        <ContentName tableName={'Thêm Học Sinh'} />
<<<<<<< HEAD
        <Form clickSave={handleAdd}>
          <FiledInput
            error={notify[0]}
            outFocus={setAddStudent}
            attribute={['student_name']}
            label={'Tên Học Sinh'}
            placeholder={'Nguễn văn a'}
            typeField={'input'}
          />
          <FiledInput
            error={notify[1]}
            outFocus={setAddStudent}
            attribute={['student_phone']}
            label={'Số diện thoại Học Sinh'}
            placeholder={'04342****'}
            typeField={'input'}
            typeData={'number'}
          />
          <FiledInput
            error={notify[2]}
            outFocus={setAddStudent}
            attribute={['student_email']}
            label={'Email học sinh'}
            placeholder={'@gmail.com'}
            typeField={'input'}
            typeData={'email'}
          />
          <FiledInput
            error={notify[3]}
            outFocus={setAddStudent}
            attribute={['parent_name']}
            label={'Tên Phụ Huynh'}
            placeholder={'Nguễn văn a'}
            typeField={'input'}
          />
          <FiledInput
            error={notify[4]}
            outFocus={setAddStudent}
            attribute={['parent_phone']}
            label={'Số diện thoại Phụ Huynh'}
            placeholder={'04342****'}
            typeField={'input'}
            typeData={'number'}
          />
          <FiledInput
            error={notify[5]}
            outFocus={setAddStudent}
            attribute={['parent_email']}
            label={'Email phụ huynh'}
            placeholder={'@gmail.com'}
            typeField={'input'}
            typeData={'email'}
          />

          <FiledInput
            error={notify[6]}
            outFocus={setAddStudent}
            attribute={['birthday']}
            label={'Năm Sinh'}
            placeholder={'09/09/3000'}
            typeField={'input'}
            typeData={'date'}
          />
          <FiledInput
            error={notify[7]}
            outFocus={setAddStudent}
            attribute={['main_class']}
            label={'Lớp'}
            placeholder={'Scratch'}
            typeField={'input'}
            typeData={'number'}
          />
        </Form>
      </CoverFrom>
      <Toaster />
=======
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
>>>>>>> c93f681a111134beff3230aee919eb1bceaf8dd3
    </React.Fragment>
  );
};

<<<<<<< HEAD
export default AddStudent;
=======
export default Addstudent;
>>>>>>> c93f681a111134beff3230aee919eb1bceaf8dd3
