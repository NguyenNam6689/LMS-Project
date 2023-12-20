//#LIB
import Button from "@mui/material/Button";

const PopupDelete = ({ content, object }) => {
  return (
    <>
    <div className="flex flex-col justify-center w-[50%] bg-gray-50 p-[10px] rounded-lg">
  <div className="font-semibold text-[20px]">
    <p>
      {content}
      <span className=" text-[#561B8C]">{object}</span> không ?
    </p>
  </div>
  <div className="flex w-full gap-2 justify-end mt-[5px]">
    <Button
      variant="contained"
      sx={{ background: "#561B8C", color: "#EBC901" }}
      size="large"
    >
      OK
    </Button>
    <Button
      variant="contained"
      sx={{ background: "#EAEDF7", color: "black" }}
      size="large"
    >
      Hủy
    </Button>
  </div>
</div>

    </>
  );
};

export default PopupDelete;
