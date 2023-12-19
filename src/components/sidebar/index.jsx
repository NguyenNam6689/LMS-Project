// #LIB
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link, useLocation } from 'react-router-dom';
import { MdLogout } from 'react-icons/md';

//#COMP
import SiderbarItem from '@/components/sidebar/SideBarItem';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const SideBar = ({ open, setOpen }) => {
  const theme = useTheme();
  const current_route = useLocation();

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Drawer
      className=" !border-0"
      style={{ border: 'none' }}
      sx={{
        border: 'none',
        width: `${12}%`,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          border: 'none',
          boxShadow:
            '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
          width: `${12}%`,
          boxSizing: 'border-box',
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader className="flex !justify-center">
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </DrawerHeader>

      <List>
        {['Khoahoc', 'HocSinh', 'GiaoVien', 'LopHoc', 'Nhanvian', 'LichHoc'].map((text, index) => (
          <Link to={text}>
            <SiderbarItem
              navigate={text}
              index={index}
              isCurrent={current_route.pathname.includes(text)}
            />
          </Link>
        ))}
      </List>
      <div className=" h-full w-full flex justify-center items-center">
        <div className="flex gap-1">
          <MdLogout size={22} />
          <p className="leading-1">Đăng xuất</p>
        </div>
      </div>
    </Drawer>
  );
};

export default SideBar;
