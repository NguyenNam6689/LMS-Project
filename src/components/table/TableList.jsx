import TableFiled from './TableFiled';

const TableList = ({
  tableHeader,
  tableAttribute,
  tableData,
  tableFieldButton,
  tableLeftButton,
}) => {
  const handleRowClick = (itemId) => {
    // Lấy giá trị từng cột dựa vào id
    const rowValues = tableAttribute.map(
      (attribute) => tableData.find((item) => item.id === itemId)[attribute],
    );

    // Thực hiện các xử lý khác dựa trên giá trị của từng cột
  };

  return (
    <>
      <div className="flex flex-col h-[400px]">
        <div className="flex-grow overflow-auto  ">
          <table className="relative w-full border">
            <thead className="bg-[#ECE9FD]">
              <tr>
                {tableHeader.map((item) => (
                  <th className="sticky top-0 px-6 py-[20px] bg-[#ECE9FD] text-center text-zinc-800 text-sm font-bold font-roboto ">
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y">
              {tableData.map((item, index) => (
                <tr id={item.id} className={`${index % 2 === 0 ? 'bg-[#F6F6F6]' : 'bg-[white]'}`}>
                  {
                    /*   hiển thị thông tin trên từng dòng */
                    tableAttribute.map((attribute, inde) => (
                      <td
                        onClick={attribute === 'number_students' ? () => {} : null}
                        className="py-[20px] hover:cursor-pointer"
                      >
                        {tableFieldButton ? (
                          <TableFiled
                            fieldValue={item[attribute]}
                            filedIcon={tableFieldButton.icon}
                            filedFuntion={() => tableFieldButton.click(item.id)}
                            fieldAttribute={tableFieldButton.fieldAttribute}
                            attribute={attribute}
                          />
                        ) : (
                          <TableFiled fieldValue={item[attribute]} />
                        )}
                      </td>
                    ))
                  }

                  {
                    /*   hiển thị các button mỗi dòng */
                    tableLeftButton.map((button, index) => (
                      <td
                        className="py-[20px]"
                        onClick={() => {
                          button.click();
                        }}
                      >
                        <div className="grow shrink basis-0 flex justify-center text-zinc-800 text-sm font-normal font-roboto hover:cursor-pointer  ">
                          {button.icon}
                        </div>
                      </td>
                    ))
                  }
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TableList;
