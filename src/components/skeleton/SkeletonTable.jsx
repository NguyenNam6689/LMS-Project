import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const SkeletonTable = ()=> {
  return (
    <Stack spacing={0.5} className='!h-full'>
      {/* For variant="text", adjust the height via font-size */}
      {/* For other variants, adjust the size with `width` and `height` */}
      <Skeleton variant="rounded" className=' w-full !h-[50px]' />
      <Skeleton variant="rounded" className=' w-full !h-[400px]' />
    </Stack>
  );
}

export default SkeletonTable;