<<<<<<< HEAD

//* IMPORT
import React from 'react';
=======
>>>>>>> c93f681a111134beff3230aee919eb1bceaf8dd3
import ContentName from '@/components/ContentName';
import Form from '@/components/Form';
import CoverFrom from '@/components/CoverForm';
import FiledInput from '@/components/Filedinput';
<<<<<<< HEAD
import {editStudent } from '@/redux/student/Thunk'
import {ValidateIsempty} from '@/common/utils/validate'

//*LIB
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';

const EditStudent = () => {

  const [ isUpdate , setupdate] = React.useState({});
  const [notify, setNotify] = React.useState(["","","","","",""]);
  const { student_id } = useParams();
  const student = useSelector((state) => state.student.listStudentData );
  const studentData= student.find(student => student.id == student_id);
  const dispatch = useDispatch();




  React.useEffect(()=>{

    if(studentData){
      setupdate(studentData)
    }
  },[])
 

  const handleEdite = async() =>{
      const [filedValidate, isError] 
      = await ValidateIsempty(
      [isUpdate.student_name,
       isUpdate.birthday,
       isUpdate.main_class,
       isUpdate.student_phone,
       isUpdate.parent_name,
       isUpdate.parent_phone]);  
       
      
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
            if(!filedValidate[i].error){
              setNotify((prevNotify) => {
                const newNotify = [...prevNotify]; // Create a copy of the array
                newNotify[i] = " "; // Change the second element in the copy
                return newNotify; // Return the new array
              });
            }
          }
          return;
        }
  
        case false: {
          setNotify((prevNotify) => {
            const newNotify = ["", "" ,"" ,"" ,"",""];
            return newNotify; // Return the new array
          });
              dispatch(editStudent(isUpdate));
        }
      }
 
  }


  return (
    <>
    <CoverFrom>
      <ContentName tableName={'Sửa Thông Tin Học Sinh'} />
      <Form
       clickSave = {handleEdite}
      >
        <FiledInput  label={'Mã hoc sinh'} placeholder={isUpdate.student_code} typeField={'input'} disabled={true} />
        <FiledInput error={notify[0]} outFocus={setupdate} attribute={["student_name"]} label={'Tên Học Sinh'} placeholder={isUpdate.student_name} typeField={'input'} />
        <FiledInput error={notify[1]} outFocus={setupdate} attribute={["birthday"]} label={'Năm Sinh'} placeholder={isUpdate.birthday} typeField={'input'} />
        <FiledInput error={notify[2]} outFocus={setupdate} attribute={["main_class"]} label={'Lớp'} placeholder={isUpdate.main_class} typeField={'input'} />
        <FiledInput error={notify[3]}
          label={'Số diện thoại Học Sinh'}
          placeholder={isUpdate.student_phone}
          typeField={'input'}
          outFocus={setupdate} attribute={["student_phone"]}
        />
        <FiledInput error={notify[4]} outFocus={setupdate} attribute={["parent_name"]} label={'Tên Phụ Huynh'} placeholder={isUpdate.parent_name} typeField={'input'} />
        <FiledInput error={notify[5]}
          outFocus={setupdate} attribute={["parent_phone"]}
          label={'Số diện thoại Phụ Huynh'}
          placeholder={isUpdate.parent_phone}
          typeField={'input'}
        />
      </Form>
      <Toaster />
    </CoverFrom>
  </>
=======

const EditStudent = () => {
  return (
    <>
      <CoverFrom>
        <ContentName tableName={'Sửa Thông Tin Học Sinh'} />
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
    </>
>>>>>>> c93f681a111134beff3230aee919eb1bceaf8dd3
  );
};

export default EditStudent;
