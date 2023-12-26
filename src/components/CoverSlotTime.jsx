<<<<<<< HEAD
//* LIB
import { RiDeleteBack2Fill } from 'react-icons/ri';
import React from 'react';

//* IMPORT
import ToolTip from './tooltip';

const CoverSlotTime = ({ children }) => {
  return (
    <React.Fragment>
      <div className=" rounded-lg border border-solid border-gray-300 bg-white m-[5px] p-[20px]">
        <div className="flex w-full justify-end py-[5px]">
          <ToolTip tooltip={'Xoá slot time'}>
            <RiDeleteBack2Fill size={20} />
          </ToolTip>
        </div>
        {children}
      </div>
    </React.Fragment>
  );
};

export default CoverSlotTime;
=======
import { RiDeleteBack2Fill } from "react-icons/ri";

const CoverSlotTime = ( {children}) =>{
    
    return (
     <>
           <div className=" rounded-lg border border-solid border-gray-300 bg-white m-[5px] p-[20px]">
           <div className="flex w-full justify-end py-[5px]">
           < RiDeleteBack2Fill size={20}/>
           </div>
             {
                 children
             }
           </div>
     </>
    )
}

export default CoverSlotTime;

>>>>>>> c93f681a111134beff3230aee919eb1bceaf8dd3
