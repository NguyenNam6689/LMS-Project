const TableFiled = ({
  fieldValue,
  filedIcon,
  filedSelect,
  filedFuntion,
  fieldAttribute,
  attribute,
  ...props
}) => {
  return (
    <>
      {filedIcon ? (
        <div className="flex px-[5px]">
          <p className="grow shrink basis-0 text-center text-zinc-800 text-sm font-medium font-roboto ">
            {fieldValue}
          </p>
          {
            /*  field nếu có button ngay kế bên */
            fieldAttribute.includes(attribute) ? (
              <div
                className="flex items-center"
                onClick={(e) => {
                  e.preventDefault;
                  filedFuntion();
                }}
              >
                {filedIcon}
              </div>
            ) : null
          }
        </div>
      ) : filedSelect ? (
        <>
          {fieldAttribute.includes(attribute) ? (
            <select
              name=""
              id="type"
              className="w-full p-[5px] bg-[#f2f2f2] rounded-md outline-none"
            >
              {filedSelect.map((item, inex) => (
                <option value={item.id}>{item.name}</option>
              ))}
            </select>
          ) : (
            <div className="flex">
              <p className="grow shrink basis-0 text-center text-zinc-800 text-sm font-medium font-roboto ">
                {fieldValue}
              </p>
            </div>
          )}
        </>
      ) : (
        /*  field ko có button ngay kế bên */
        <div className="flex">
          <p className="grow shrink basis-0 text-center text-zinc-800 text-sm font-medium font-roboto ">
            {fieldValue}
          </p>
        </div>
      )}
    </>
  );
};

export default TableFiled;
