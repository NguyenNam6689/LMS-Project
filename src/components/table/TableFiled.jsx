const TableFiled = ({ fieldValue, filedIcon, filedFuntion, fieldAttribute, attribute }) => {
  return (
    <>
      {filedIcon ? (
        <div className="flex okda">
          <p className="grow shrink basis-0 text-center text-zinc-800 text-sm font-medium font-roboto ">
            {fieldValue}
          </p>
          {
            /*  field nếu có button ngay kế bên */
            /*   */
            fieldAttribute.includes(attribute) ? (
              <div
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
