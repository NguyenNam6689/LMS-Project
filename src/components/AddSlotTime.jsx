import react from "react";
import { FaCirclePlus } from "react-icons/fa6";

const AddSlotTime = () => {
  return (
    <>
    <div className="flex items-center my-[20px] w-full gap-2">
       <FaCirclePlus size={20}/>
       <div className="text-right text-black  font-bold font-Inter">Thêm slot time</div>
    </div>
    </>
  );
};

export default AddSlotTime;