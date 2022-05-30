import React, { memo } from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import theme from '../../../../styles/theme/theme.const';

const useStyles = makeStyles({
  wrapper: {
    width: '100%',
    display: 'flex',
  },
  image: {
    maxWidth: 53,
    marginRight: 18,
  },
  divider: {
    backgroundColor: theme.palette.warning.main,
  },

  [theme.breakpoints.up('lg')]: {
    wrapper: {
      width: 250,
      textAlign: 'center',
      flexDirection: 'column',
      position: 'absolute',
      right: 0,
    },
    image: {
      maxWidth: '100%',
    },
  },
});

const GMCRightColumn = ({imgUrl, title, text}) => {

  const classes = useStyles();

  return (
    <Box className={classes.wrapper}>
      <img className={classes.image} src={imgUrl} alt={title} />
      <Box mt={5}>
        <Typography variant={'h2'} color={theme.palette.primary.dark} fontSize={{xs: 16, lg: 20}}>{title}</Typography>
        <Box
          width={{xs: 36, lg: 50}}
          height={{xs: 2, lg: 3}}
          mt={{xs: 1, lg: 3}}
          mb={{xs: 1, lg: 3}}
          ml={{lg: 'auto'}}
          mr={'auto'}
          className={classes.divider} />
        <Typography color={theme.palette.grey['500']} fontSize={{xs: 12, lg: 16}}>{text}</Typography>
      </Box>
    </Box>
  );
};

export default memo(GMCRightColumn);