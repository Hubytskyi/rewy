import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/material';
import NavList from './list';

const useStyles = makeStyles({
  menu: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'flex-end',
    padding: '0 40px'
  },
});

const Nav = () => {

  const classes = useStyles();

  return (
    <Box className={classes.menu}>
      <NavList />
    </Box>
  );
};

export default Nav;