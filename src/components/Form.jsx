//#LIB
import Button from '@mui/material/Button';

const Form = ({ children }) => {
  return (
    <>
      <form className=" flex  rounded-lg py-[20px] flex-wrap">{children}</form>
      <div className="flex gap-4">
        <Button variant="contained" sx={{ background: '#561B8C', color: '#EBC901' }} size="large">
          Lưu
        </Button>
        <Button variant="contained" sx={{ background: '#EAEDF7', color: '#000000' }} size="large">
          Huỷ
        </Button>
      </div>
    </>
  );
};

export default Form;
