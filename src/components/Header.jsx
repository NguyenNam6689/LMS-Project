//#LIB
import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { FaRegBell } from 'react-icons/fa';
import { FaRegQuestionCircle } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';

export const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${12}%)`,
    marginLeft: `${12}%`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Header = ({ open, setOpen }) => {
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <AppBar className="!shadow-none" position="fixed" open={open}>
      <Toolbar className="bg-white flex-row justify-end border-0 !px-[2rem] ">
        <IconButton
          color="warning"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{ mr: 2, ...(open && { display: 'none' }) }}
        >
          <MenuIcon />
        </IconButton>
        <div className="flex gap-4 items-center">
          <FaRegBell size={20} color={'black'} />
          <FaRegQuestionCircle size={20} color={'black'} />
          <div className="p-1 rounded-full bg-[#b7e5fa]">
            <FaUser size={20} color={'#0369A1'} />
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
