import React from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import icon from '../../../../../assets/images/question_answer_black.svg';
import theme from '../../../../../styles/theme/theme.const';

const useStyles = makeStyles({
  icon: {
    padding: 6,
    borderRadius: 4,
    backgroundColor: theme.palette.secondary.light,
    marginRight: 18,
  },
});

const GMCCalcStepTitle = ({step}) => {

  const classes = useStyles();

  return (
    <Box display={'flex'} alignItems={'center'} color={theme.palette.primary.dark} mb={6}>
      <img className={classes.icon} src={icon} alt="icon" />
      <Typography variant={'caption'}>{step} of 2 questions</Typography>
    </Box>
  );
};

export default GMCCalcStepTitle;
