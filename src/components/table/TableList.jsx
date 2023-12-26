import TableFiled from '@/components/table/TableFiled';
import React from 'react';
const TableList = ({
  tableHeader,
  tableAttribute,
  tableData,
  tableFieldButton,
  tableFieldSelect,
  tableLeftButton,
}) => {
  const handleRowClick = (itemId) => {
   // Lấy giá trị từng cột dựa vào id
   return tableData[itemId];
  };

  return (
    <>
      <div className="flex flex-col h-[400px]">
        <div className="flex-grow overflow-auto  ">
          <table className="relative w-full border">
            <thead className="bg-[#ECE9FD] z-50">
              <tr>
                {tableHeader.map((item) => (
                  <th className="sticky top-0 px-6 py-[20px] bg-[#ECE9FD] text-center text-zinc-800 text-sm font-bold font-roboto z-50 ">
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y">
            {
              tableData? 
              tableData.map((item, fieldIndex) => (
                <tr id={fieldIndex} className={`${fieldIndex % 2 === 0 ? 'bg-[#F6F6F6]' : 'bg-[white]'}`}>
                  {
                    /*   hiển thị thông tin trên từng dòng */
                    tableAttribute.map((attribute) => (
                      <td
                        onClick={attribute === 'number_students' ? () => {} : null}
                        className="py-[20px] hover:cursor-pointer"
                      >
                        {
                          // phân loại component field thường hoặc field đi kèm button
                          tableFieldButton != undefined ? (
                            <TableFiled
                              fieldValue={item[attribute]}
                              filedIcon={tableFieldButton.icon}
                              filedFuntion={() => tableFieldButton.click(fieldIndex)}
                              fieldAttribute={tableFieldButton.fieldAttribute}
                              attribute={attribute}
                            />
                            ) : tableFieldSelect != undefined ? (
                            <TableFiled
                              fieldValue={item[attribute]}
                              filedSelect={tableFieldSelect.dataSelect}
                              filedFuntion={() => tableFieldButton.click(fieldIndex)}
                              fieldAttribute={tableFieldSelect.fieldAttribute}
                              attribute={attribute}
                            />
                          ) : (
                            <TableFiled fieldValue={item[attribute]} />
                          )
                        }
                      </td>
                    ))
                  }

                  {
                    /*   hiển thị các button mỗi dòng */
                    tableLeftButton.map((button, index) => (
                      <td
                        className="py-[20px] z-0"
                        onClick={(e) => {
                          e.preventDefault;
                          // trả về rowdata  
                          button.click(handleRowClick(fieldIndex));
                        }}
                      >
                        <div className="grow shrink basis-0 flex justify-center text-zinc-800 text-sm font-normal font-roboto hover:cursor-pointer  ">
                          {button.icon}
                        </div>
                      </td>
                    ))
                  }
                </tr>
               ))
               :
               <div>chưa có data</div>
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TableList;
