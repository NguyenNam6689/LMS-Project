//* LIB
import { useSelector } from 'react-redux';


const useSelectorPlaceholder = () => {
	const state = useSelector((state) => state.course);
	return state;
};

export default useSelectorPlaceholder;
