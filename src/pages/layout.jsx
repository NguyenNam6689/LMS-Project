//* LIB
import React from 'react';
import { Box } from '@mui/material';

//* IMPORT
import SideBar from '@/components/sidebar/index';
import Header from '@/components/Header';
import MainBody from '@/components/MainBody';

const LayoutPage = ({ children }) => {
  const [open, setOpen] = React.useState(true);

  return (
    <React.Fragment>
      <Box sx={{ display: 'flex' }}>
        <Header open={open} setOpen={setOpen} />
        <SideBar open={open} setOpen={setOpen} />
        <MainBody>{children}</MainBody>
      </Box>
    </React.Fragment>
  );
};

export default LayoutPage;
