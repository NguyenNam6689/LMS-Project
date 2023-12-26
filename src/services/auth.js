<<<<<<< HEAD
import { ValidateIsempty } from '@/common/utils/validate';

export const login = async (props) => {
  const [filedValidate, isError] = await ValidateIsempty(props);
  if (filedValidate) {
    return [filedValidate, isError];
  }
};
=======

import { ValidateIsempty } from "@/common/utils/validate";

export const login = async(props) =>{  

   const [ filedValidate , isError]   = await ValidateIsempty(props);
   if( filedValidate ){
      return [ filedValidate , isError ]
   }
    
}
>>>>>>> c93f681a111134beff3230aee919eb1bceaf8dd3
