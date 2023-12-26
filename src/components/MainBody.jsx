//#LIB
import React from 'react';
import { styled, useTheme } from '@mui/material/styles';

const drawerWidth = 12;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}%`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const MainBody = ({ children }) => {
  return (
    <React.Fragment>
      <Main open={open} className="overflow-y-auto flex flex-col md:mt-[50px]">
        {children}
      </Main>
    </React.Fragment>
  );
};

export default MainBody;
