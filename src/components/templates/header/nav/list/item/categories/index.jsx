import React from 'react';
import classNames from 'classnames';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { headerHeight } from '../../../../../../../constants/header.const';

const useStyles = makeStyles({
  item: {
    top: '100%',
    padding: 20,
    backgroundColor: '#ffffff',
    width: 'max-content',
    borderRadius: 5,
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
  },
});

const category = () => {

};

const NavItemCategories = ({type, categories}) => {

  const classes = useStyles();

  return (
    <Box className={classNames('nav-categories', classes.item)}>
      Cat
    </Box>
  );
};

export default NavItemCategories;