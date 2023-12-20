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

