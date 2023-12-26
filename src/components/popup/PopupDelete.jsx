//*LIB
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import useGetListStudent from '@/hooks/redux/useSelectorStudent'
import toast, { Toaster } from 'react-hot-toast';
import {deleteStudent} from '@/redux/student/Thunk'

const PopupDelete = ({ content, object , setdeleteObject, clickDelete}) => {

  const dispatch = useDispatch();

  const handleCancel = () => {
    setdeleteObject((prev) =>(
      {
        ...prev,
        object: {},
      }
    ))
  };

  const handleDelete = () =>{
    dispatch(deleteStudent(clickDelete));
    setdeleteObject((prev) =>(
      {
        ...prev,
        object: {},
      }
    ))

     
  }

  return (
    <>
           {object && (
        <div className="absolute  t-[20px] left-[50%] translate-x-[-50%]  transition-all duration-300 opacity-100 shadow-lg">
          <div className="flex flex-col justify-center w-80 bg-gray-50 p-4 rounded-lg">
            <div className="font-semibold text-lg mb-4">
              <p>
                {content}
                <span className="text-purple-600">{object}</span> không ?
              </p>
            </div>
            <div className="flex justify-end gap-2">
              <Button
                variant="contained"
                sx={{ background: '#561B8C', color: '#EBC901' }}
                size="large"
                onClick={(e)=>{
                e.preventDefault(),
                handleDelete();
                }}
              >
                OK
              </Button>
              <Button
                variant="contained"
                sx={{ background: '#EAEDF7', color: 'black' }}
                size="large"
                onClick={ (e) =>{
                  e.preventDefault();
                  handleCancel()
                }}
              >
                Hủy
              </Button>
            </div>
          </div>
        </div>
         )}
         </>
       );
     };

export default PopupDelete;
