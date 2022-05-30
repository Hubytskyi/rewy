import React, { memo } from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import theme from '../../../../styles/theme/theme.const';

const useStyles = makeStyles({
  title: {
    display: 'flex',
    alignItems: 'flex-end',
    marginBottom: 40,
    position: 'relative',

    '&::after': {
      content: '""',
      position: 'absolute',
      width: 50,
      height: 3,
      left: 0,
      bottom: -14,
      backgroundColor: theme.palette.success.main,
    },
  },

  step: {
    marginLeft: 20,
    padding: '4px 10px',
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.dark,
    borderRadius: 41,
    display: 'flex',
    whiteSpace: 'nowrap',
  },
});

const FormTitle = ({title, step}) => {

  const classes = useStyles();

  return (
    <Box className={classes.title}>
      <Typography variant={'h1'}>{title}</Typography>
      <Box className={classes.step}>
        <Typography variant={'overline'}>Step {step}/3</Typography>
      </Box>
    </Box>
  );
};

export default memo(FormTitle);
