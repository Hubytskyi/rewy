import React from 'react';
import styles from './styles';
import { Box, Typography } from '@mui/material';
import CorporateInsuranceCategories from '../categories';

const CorporateInsuranceFilter = ({allMarkdownRemark, categories, handleChange, refreshFilter}) => {
  return (
    <Box sx={styles.filter}>
      {allMarkdownRemark.group.map((field) => {
        return (
          <Box>
            <Box mb={4}>
              <Typography variant={'subtitle1'}>{field.fieldValue}</Typography>
            </Box>
            <CorporateInsuranceCategories type={field.fieldValue} categories={categories} handleChange={handleChange}/>
          </Box>
        );
      })}
      <Typography sx={{cursor: 'pointer', alignSelf: 'end'}} onClick={refreshFilter} variant={'caption'}>Clear All</Typography>
    </Box>
  );
};

export default CorporateInsuranceFilter;