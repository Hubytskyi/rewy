import React from 'react';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  bg: {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: '#cdcdcd',
  },
});

const HeaderBackdrop = () => {

  const classes = useStyles();

  return (
    <Box
      className={classes.bg}
    />
  );
};

export default HeaderBackdrop;