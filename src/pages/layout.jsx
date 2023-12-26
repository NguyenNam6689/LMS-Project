//* LIB
import React from 'react';
<<<<<<< HEAD
import { Box } from '@mui/material';
=======
>>>>>>> c93f681a111134beff3230aee919eb1bceaf8dd3

//* IMPORT
import SideBar from '@/components/sidebar/index';
import Header from '@/components/Header';
import MainBody from '@/components/MainBody';
<<<<<<< HEAD
=======
import { Box } from '@mui/material';
>>>>>>> c93f681a111134beff3230aee919eb1bceaf8dd3

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
