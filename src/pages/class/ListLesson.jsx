//* LIB
import { FaRegTrashAlt } from 'react-icons/fa';
import { FaRegCalendarCheck } from 'react-icons/fa';
import { TbExchange } from 'react-icons/tb';
import { TfiWrite } from 'react-icons/tfi';

//* IMPORT
import {
  HEADER_TABLE_LIST_LESSON,
  ATTRIBUTE_TABLE_LIST_LESSON,
  NAME_TABLE_LIST_LESSON,
} from '@/common/constants/ClassConst';
import { rawDataListLesson } from '@/data/class';
import TableList from '@/components/table/TableList';
import ContentName from '@/components/ContentName';
import ToolTip from '@/components/tooltip';

const ListLesson = () => {
  return (
    <>
      <ContentName tableName={NAME_TABLE_LIST_LESSON} />
      <TableList
        // các trường của table
        tableHeader={HEADER_TABLE_LIST_LESSON}
        // dữ liệu table
        tableData={rawDataListLesson}
        tableAttribute={ATTRIBUTE_TABLE_LIST_LESSON}
        // các nút thao tác cho  mổi dòng trong table
        tableLeftButton={[
          {
            click: () => {},
            icon: (
              <ToolTip tooltip={'Note'}>
                <TfiWrite size={20} />
              </ToolTip>
            ),
          },
          {
            click: () => {},
            icon: (
              <ToolTip tooltip={'Điểm danh'}>
                <FaRegCalendarCheck size={20} />
              </ToolTip>
            ),
          },
          {
            click: () => {},
            icon: (
              <ToolTip tooltip={'Xoá'}>
                <FaRegTrashAlt size={20} />
              </ToolTip>
            ),
          },
        ]}
        // các thành phần thao tác ngoài table( trường tìm kiếm , btn tạo mới)
        tableFieldButton={{
          click: () => {},
          icon: (
            <ToolTip tooltip={'Thay đổi'}>
              <TbExchange size={20} />
            </ToolTip>
          ),
          link: '/Exchange',
          fieldAttribute: ['teacher_name', 'assistant_name'],
        }}
      />
    </>
  );
};

export default ListLesson;
