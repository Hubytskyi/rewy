import React from 'react';
import { Box, Typography } from '@mui/material';

const GMCCalcTitle = ({title}) => {

  return (
    <Box mb={6}>
      <Typography variant={'h2'}>{title}</Typography>
    </Box>
  );
};

export default GMCCalcTitle;