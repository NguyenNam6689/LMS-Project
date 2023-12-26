
//* LIB
import { createSlice } from "@reduxjs/toolkit";

//* IMPORT
import {getListStudent,deleteStudent,editStudent, addStudent     } from './Thunk'

import {NameRedux} from '@/common/enums/index';


const initialState = {
    isLoading: false,
    error: null,
    listStudentData: [],
    LoadingDelete: false,
    LoadingEdit: false,
}

const studentSlice = createSlice(
       {
        name : NameRedux.Student,
        initialState,
        reducers :{
            clearData: (state) =>{
                state.listStudentData = [];
                state.error = null;
                state.isLoading = false;
            },
        },
        extraReducers: (builder) => {
            // get list student
            builder.addCase(getListStudent.pending, (state, _) => {
                state.isLoading = true;
            });

            builder.addCase(
                getListStudent.fulfilled,
                (state, action) => {
                    state.listStudentData = action.payload;
                    state.isLoading = false;
                }
            );

            //delete student
            builder.addCase(
                deleteStudent.pending, (state, _) => {
                    state.LoadingDelete = false;
            });

            builder.addCase(
                deleteStudent.fulfilled,
                (state, action) => {
                    state.LoadingDelete = true
                }
            );

             //edit student
             builder.addCase(
                editStudent.pending, (state,_) => {
                    state.LoadingEdit =false
            });

            builder.addCase(
                editStudent.fulfilled,
                (state, action) => {
                  state.LoadingEdit= true
                }
            );


             //add student
             builder.addCase(
                addStudent.pending, (state,_) => {
                    
            });

            builder.addCase(
                addStudent.fulfilled,
                (state, action) => {
                  
                }
            );



            builder.addMatcher(
                (action) => action.type.endsWith('/rejected'),
                (state, action) => {
                    state.error = action.payload;
                    state.isLoading = false;
                }
            );

            builder.addDefaultCase((state) => {
                state.error = null;
            });
        },

    }
)

export default studentSlice.reducer;

const studentAction = studentSlice.actions;

export const {  clearData } = studentAction;