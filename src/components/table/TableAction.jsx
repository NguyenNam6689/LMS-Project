import React from 'react';
import Button from '@mui/material/Button';

const TableAction = ({ leftButton, rightAction }) => {
  return (
    <React.Fragment>
      <div className="w-full mb-[10px] grid justify-items-stretch">
        <div className="justify-self-end gap-1">
          {leftButton.map((item) => (
            <Button
              variant="contained"
              className="!ml-[10px]"
              sx={{ background: `${item.color} `, color: '#EBC901' }}
              size={item.size}
              onClick={item.click}
            >
              {item.name}
            </Button>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default TableAction;
