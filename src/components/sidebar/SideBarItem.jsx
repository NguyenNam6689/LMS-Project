//#LIB
import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';

//#CONST
import { LIST_ICONSIDER_BAR, LIST_PAGE } from '@/common/constants/CourseConst';

const SiderbarItem = ({ navigate, index, isCurrent }) => {
  return (
    <ListItem
      key={navigate}
      disablePadding
      className={`${isCurrent ? 'bg-[#ECE9FD]' : 'bg-white'}`}
    >
      <ListItemButton className={`w-0 !flex !justify-center !my-[0.5rem] bg-[black]`}>
        <ListItemIcon className="!min-w-0 ">{LIST_ICONSIDER_BAR[index]}</ListItemIcon>
        <p className={`w-[100px] text-center ${isCurrent ? 'font-bold' : 'font-normal'}`}>
          {LIST_PAGE[index]}
        </p>
      </ListItemButton>
    </ListItem>
  );
};

export default SiderbarItem;
