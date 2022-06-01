import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import useCorporateInsuranceCategoriesQuery from '../queries/useCorporateInsuranceCategoriesQuery';
import useCorporateInsuranceSubCategoriesQuery from '../queries/useCorporateInsuranceSubCategoriesQuery';
import MenuItem from '@mui/material/MenuItem';

const CorporateInsuranceCategories = ({type, categories, handleChange}) => {

  const dataCategories = useCorporateInsuranceCategoriesQuery();
  const dataSubCategories = useCorporateInsuranceSubCategoriesQuery();

  return (
    <Box sx={{minWidth: 120, marginBottom: 4}}>
      {dataCategories.allMarkdownRemark.group.map((cat) => {
        if (cat.group[0].fieldValue === type) {
          return (
            <Box sx={{marginBottom: 2}}>
              <FormControl fullWidth key={cat.fieldValue}>
                <InputLabel id="corporate-insurance-categories-label">{cat.fieldValue}</InputLabel>
                <Select
                  labelId="corporate-insurance-categories-label"
                  id="corporate-insurance-categories"
                  value={categories[cat.fieldValue] || ''}
                  label={cat.fieldValue}
                  onChange={(event) => {
                    handleChange(event.target.value, cat.fieldValue);
                  }}
                >
                  {dataSubCategories.allMarkdownRemark.group.map((subcat) => {
                    if (subcat.group.some((el) => el.fieldValue === cat.fieldValue)) {
                      return (
                        <MenuItem key={subcat.fieldValue} value={subcat.fieldValue}>{subcat.fieldValue}</MenuItem>
                      );
                    }
                  })}
                </Select>
              </FormControl>
            </Box>
          );
        }
      })}
    </Box>
  );
};

export default CorporateInsuranceCategories;
