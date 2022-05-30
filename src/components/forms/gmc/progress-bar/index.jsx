import React, {memo}  from 'react';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import theme from '../../../../styles/theme/theme.const';

const useStyles = makeStyles({
  bar: {
    width: '100%',
    height: 4,
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundColor: theme.palette.grey['400'],
  },

  activeBar: {
    backgroundColor: theme.palette.primary.main,
    height: '100%',
  }
})

const ProgressBar = ({step, length}) => {

  const classes = useStyles();
  const progress = 100 / length * (step + 1)

  return (
    <>
      <Box
        className={classes.bar}
      >
        <Box width={`${progress}%`} className={classes.activeBar}/>
      </Box>
    </>
  );
};

export default memo(ProgressBar);