import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'gatsby';
import { makeStyles } from '@mui/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import theme from '../../../../../../styles/theme/theme.const';
import NavItemCategories from './categories';

const useStyles = makeStyles({
  item: {
    position: 'relative',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    '&:hover .nav-categories-backdrop': {
      display: 'block',
    },
  },

  title: {
    position: 'relative',
    padding: '0 24px',
  },

  arrow: {
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: 'translateY(-50%)',
  },
});

const NavItem = ({title, slug, type, categories}) => {

  const classes = useStyles();

  return (
    <Box
      component={'li'}
      className={classes.item}
      onMouseEnter={() => {

      }}
      onMouseLeave={() => {

      }}>
      {slug
        ? <Link to={slug}>
          <Typography className={classes.title} variant={'body2'}
                      color={theme.palette.primary.dark}>{title}</Typography>
        </Link>
        : <Typography className={classes.title} variant={'body2'} color={theme.palette.primary.dark}>
          {title}
          <KeyboardArrowDownIcon className={classes.arrow} fontSize={'small'} color={'primary'} />
        </Typography>
      }
      <NavItemCategories type={type} categories={categories} />
    </Box>
  );
};

export default NavItem;