import React from 'react';
import { Paper, Typography } from '@mui/material';
import styles from './styles';

const PaperWrapper = ({title, image, alt}) => {
  return (
    <Paper sx={styles.wrapper} elevation={'4'}>
      <img src={image} alt={alt} />
      <Typography variant={'caption'}>{title}</Typography>
    </Paper>
  );
};

export default PaperWrapper;