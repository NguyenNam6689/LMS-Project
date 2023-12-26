//* LIB
import { useSelector } from 'react-redux';

const  useGetListStudent = () =>{
    const state = useSelector( (state) => state.student);
    return state
}

export default useGetListStudent ;