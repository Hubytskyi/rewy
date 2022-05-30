import React from 'react';
import {
  Box,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Radio,
  RadioGroup,
  Typography,
  TextField,
  Autocomplete,
  FormGroup,
  Switch,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import FormTitle from '../title';
import theme from '../../../../styles/theme/theme.const';
import { locations } from '../../../../constants/locations.const';
import whatsAppImg from '../../../../assets/images/whatsapp.svg';
import affordablePremiumsImg from '../../../../assets/images/affordable-premiums.svg';
import GMCRightColumn from '../right-column';

const useStyles = makeStyles({
  employees: {
    flexDirection: 'row!important',
  },

  whatsappImg: {
    marginRight: 8,
  },

  checkboxGroup: {
    '& .MuiFormGroup-root': {
      flexDirection: 'row',
    },
  },

  whatsapp: {
    justifyContent: 'start',
  },

  checkbox: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'max-content',
    marginRight: 22,

    '& span:first-child': {
      padding: '8px 16px',
      borderRadius: 4,
      backgroundColor: theme.palette.common.white,
      border: `1px solid ${theme.palette.grey['400']}`,
      width: 80,
      height: 33,
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      '&.Mui-checked': {
        backgroundColor: theme.palette.primary.main,

        '& + span': {
          color: theme.palette.common.white,
        },
      },

      '& span': {
        display: 'none',
      },
    },
    '& span:last-child': {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      whiteSpace: 'nowrap',
    },
  },
});

const StepOne = ({errors, values, handleChange, setFieldValue, setFieldError}) => {

  const classes = useStyles();

  const handlePhone = (event) => {
    const {value} = event.target;
    if (value.length <= 10 && value.charAt(0) === '9' && Number.isInteger(+value)) {
      setFieldValue('phone', value);
    } else if (value === '') {
      setFieldValue('phone', value);
    }
  };

  return (
    <Box position={'relative'}>
      <FormTitle step={'1'} title={'Tell us about your Company '} />
      <Box display={'flex'} flexDirection={{xs: 'column', lg: 'row'}} justifyContent={{lg: 'space-between'}}>
        <Box width={380} maxWidth={'100%'}>
          <Box mb={5}>
            <TextField
              label="Company Name"
              name="company"
              type={'text'}
              color={'secondary'}
              value={values.company || ''}
              fullWidth
              required
              error={!!errors.company}
              helperText={errors.company ? errors.company : ''}
              onChange={handleChange}
              onFocus={() => setFieldError('company', '')}
            />
          </Box>
          <Box mb={5}>
            <TextField
              label="Mobile No."
              name="phone"
              type={'text'}
              color={'secondary'}
              value={values.phone || ''}
              fullWidth
              required
              error={!!errors.phone}
              helperText={errors.phone ? errors.phone : ''}
              onChange={handlePhone}
              onFocus={() => setFieldError('phone', '')}
            />
          </Box>
          <Box mb={5}>
            <TextField
              label="Email ID"
              name="email"
              type={'email'}
              color={'secondary'}
              value={values.email || ''}
              fullWidth
              required
              error={!!errors.email}
              helperText={errors.email ? errors.email : ''}
              onChange={handleChange}
              onFocus={() => setFieldError('email', '')}
            />
          </Box>
          <Box mb={5}>
            <Autocomplete
              id="location"
              fullWidth
              freeSolo
              onChange={(e, value) => setFieldValue('location', value)}
              autoComplete={false}
              onFocus={() => setFieldError('location', '')}
              name={'location'}
              value={values.location || ''}
              disableClearable={true}
              options={locations.map((option) => `${option.name} (${option.state})`)}
              renderInput={(params) => {
                return (
                  <TextField
                    label="Locations"
                    type={'text'}
                    color={'secondary'}
                    fullWidth
                    required
                    {...params}
                    error={!!errors.location}
                    helperText={errors.location ? errors.location : ''}
                  />
                );
              }}
            />
          </Box>
          <Box mb={5}>
            <FormControl
              required={true}
              error={!!errors.employees}
              onChange={handleChange}
              className={classes.checkboxGroup}
            >
              <Box mb={5}>
                <Typography>Select No. of Employees in your organisation</Typography>
              </Box>
              <RadioGroup name="employees" value={values.employees}>
                <FormControlLabel className={classes.checkbox} value="7-50" control={<Radio />} label={
                  <Typography variant={'caption'}>7-50</Typography>
                } />
                <FormControlLabel className={classes.checkbox} value="51-200" control={<Radio />} label={
                  <Typography variant={'caption'}>51-200</Typography>
                } />
                <FormControlLabel className={classes.checkbox} value="200+" control={<Radio />} label={
                  <Typography variant={'caption'}>200+</Typography>
                } />
              </RadioGroup>
              {errors.employees && <FormHelperText>{errors.employees}</FormHelperText>}
            </FormControl>
          </Box>
          <Box mb={5}>
            <FormGroup>
              <FormControlLabel
                labelPlacement="start"
                name="whatsapp"
                color={'secondary'}
                value={values.whatsapp || false}
                control={<Switch defaultChecked />}
                className={classes.whatsapp}
                label={
                  <Box display={'flex'} alignItems={'center'}>
                    <img className={classes.whatsappImg} src={whatsAppImg} alt="whatsApp" />
                    <Typography variant={'body2'}>Get WhatsApp updates</Typography>
                  </Box>
                } />
            </FormGroup>
          </Box>
        </Box>
        <GMCRightColumn
          imgUrl={affordablePremiumsImg}
          title={'Affordable Premiums'}
          text={'Compared to offline insurance, we offer higher coverage at a lower premium'}
        />
      </Box>
    </Box>
  );
};

export default StepOne;