const FiledInput = ({ label, placeholder, typeField, typeData, attribute, error, ...props }) => {
  return (
    <>
      {typeField === 'input' ? (
        <div className={`${props.width} flex flex-col mb-[20px] w-[48%] mx-[1%]`}>
          <label className="mb-[5px]">{label}</label>
          <input
            onBlur={(even) => {
              props.outFocus
                ? props.outFocus((prev) => ({ ...prev, [attribute[0]]: even.target.value }))
                : '';
            }}
            type={typeData}
            placeholder={placeholder}
            className="p-[5px] bg-[#f2f2f2] rounded-md outline-none"
            disabled={props.disabled ? 'disabled' : ''}
          />
          <p className="text-red-600">{error}</p>
        </div>
      ) : typeField === 'select' ? (
        <div className={`${props.width} flex flex-col mb-[20px] w-[48%] mx-[1%]`}>
          <label className="mb-[5px]" htmlFor="inputtype">
            {label}
          </label>
          <select name="" id="type" className="w-full p-[5px] bg-[#f2f2f2] rounded-md outline-none">
            {props.data &&
              props.data.map((item, inex) => (
                <option value={item[attribute[0]]}>{item[attribute[1]]}</option>
              ))}
          </select>
        </div>
      ) : typeField === 'time' ? (
        <div className="w-full flex items-center my-[20px]  ">
          <label className="mr-[5px]" htmlFor="inputtype">
            {label}
          </label>
          <input
            onChange={(e) => {
              props.onchange(props.idSlot, e.target.value);
            }}
            className="py-[5px] bg-[#f2f2f2] rounded-md outline-none"
            type="time"
            id="appt"
            name="appt"
            min="09:00"
            max="21:00"
            required
          />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default FiledInput;
