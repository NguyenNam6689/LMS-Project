//* LIB
import React, { useEffect } from 'react';
import { TfiWrite } from 'react-icons/tfi';
import { FaRegTrashAlt } from 'react-icons/fa';
import ToolTip from '@/components/tooltip';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getListStudent, deleteStudent } from '@/redux/student/Thunk';
import useGetListStudent from '@/hooks/redux/useSelectorStudent';
import toast, { Toaster } from 'react-hot-toast';
//* IMPORT
import { NAME_TABLE, HADER_TABLE, ATTRIBUTE_TABLE } from '@/common/constants/StudentConst';
import TableList from '@/components/table/TableList';
import ContentName from '@/components/ContentName';
import TableAction from '@/components/table/TableAction';
import SkeletonTable from '@/components/skeleton/SkeletonTable';
import PopupDelete from '@/components/popup/PopupDelete';

const ListStudent = () => {
  const dispatch = useDispatch();
  const state = useGetListStudent();
  const navigate = useNavigate();
  const [deleteObject, setDeleteObject] = React.useState({ object: '' });

  const deleteSt = (object) => {
    setDeleteObject((prev) => ({
      ...prev,
      object: object,
    }));
  };

  React.useEffect(() => {
    dispatch(getListStudent());
  }, [state.LoadingDelete]);

  return (
    <React.Fragment>
      <ContentName tableName={NAME_TABLE} />
      {state.isLoading ? (
        <SkeletonTable />
      ) : (
        <React.Fragment>
          <TableAction
            leftButton={[
              {
                size: 'large',
                name: 'Thêm Học Sinh',
                color: '#561B8C',
                click: () => {
                  navigate(`AddStudent`);
                },
              },
            ]}
          />
          <TableList
            // các trường của table
            tableHeader={HADER_TABLE}
            // dữ liệu table
            tableData={state.listStudentData}
            tableAttribute={ATTRIBUTE_TABLE}
            // các nút thao tác cho  mổi dòng trong table
            tableLeftButton={[
              {
                click: (object) => {
                  navigate(`EditStudent/${object.id}`);
                },
                icon: (
                  <ToolTip tooltip={'Chỉnh sửa'}>
                    <TfiWrite size={20} />
                  </ToolTip>
                ),
              },
              {
                click: (object) => {
                  deleteSt(object);
                },
                icon: (
                  <ToolTip tooltip={'Xoá'}>
                    <FaRegTrashAlt size={20} />
                  </ToolTip>
                ),
              },
            ]}
          />
        </React.Fragment>
      )}

      <PopupDelete
        setdeleteObject={setDeleteObject}
        content={'Bạn có chắc chắnn muốn xóa '}
        object={deleteObject.object.student_name}
        clickDelete={deleteStudent(deleteObject.object.id)}
      />
      <Toaster />
    </React.Fragment>
  );
};

export default ListStudent;
