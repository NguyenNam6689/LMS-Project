<<<<<<< HEAD
//* LIB
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const Form = ({ clickSave,children }) => {


  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);

  };

=======
//#LIB
import Button from '@mui/material/Button';

const Form = ({ children }) => {
>>>>>>> c93f681a111134beff3230aee919eb1bceaf8dd3
  return (
    <>
      <form className=" flex  rounded-lg py-[20px] flex-wrap">{children}</form>
      <div className="flex gap-4">
<<<<<<< HEAD
        <Button onClick={
          (e)=>{
            e.preventDefault();
            clickSave()}} variant="contained" sx={{ background: '#561B8C', color: '#EBC901' }} size="large">
          Lưu
        </Button>
        <Button onClick={goBack}  variant="contained" sx={{ background: '#EAEDF7', color: '#000000' }} size="large">
=======
        <Button variant="contained" sx={{ background: '#561B8C', color: '#EBC901' }} size="large">
          Lưu
        </Button>
        <Button variant="contained" sx={{ background: '#EAEDF7', color: '#000000' }} size="large">
>>>>>>> c93f681a111134beff3230aee919eb1bceaf8dd3
          Huỷ
        </Button>
      </div>
    </>
  );
};

export default Form;
