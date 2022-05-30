import React, { useState } from 'react';
import { Link } from 'gatsby';
import {
  Box,
  Button,
  Container,
  CircularProgress,
} from '@mui/material';
import { useFormik } from 'formik';
import { makeStyles } from '@mui/styles';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import theme from '../../../styles/theme/theme.const';
import StepOne from './step1';
import StepTwo from './step2';
import StepThree from './step3';
import CalcModal from './calc';
import Progressbar from './progress-bar';
import GMCSchemaStepTwo from './step2/validation-scheme';
import GMCSchemaStepThree from './step3/validation-scheme';
import GMCSchemaStepOne from './step1/validation-scheme';
import GMCHelper from './helper';
import { initialValues, initialValuesCalc } from '../../../constants/gmc-form.const';
import bgTopRightImg from '../../../assets/images/right-top-bg.svg';
import bgBottomLeftImg from '../../../assets/images/left-bottom-bg.svg';
import sumInsuredList from '../../../constants/sum-insured.const';

const useStyles = makeStyles({
  gmc: {
    paddingTop: 40,
    paddingBottom: 40,
    flexGrow: 1,
    position: 'relative',
    backgroundColor: theme.palette.common.white,
  },
  back: {
    position: 'absolute',
    left: 10,
    top: -40,
    cursor: 'pointer',
    width: 30,
    height: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: theme.palette.grey['200'],

    '& span': {
      margin: 0,
    },

    '& svg': {
      width: 26,
      height: 26,
    },
  },

  button: {
    width: '90%',
    maxWidth: '100%',
    position: 'fixed',
    bottom: 30,
    left: '50%',
    transform: 'translateX(-50%)',
  },

  container: {
    position: 'static',
  },

  [theme.breakpoints.up('lg')]: {
    gmc: {
      minHeight: 650,
      background: `
        url(${bgTopRightImg}) left -50px bottom -70px no-repeat,
        url(${bgBottomLeftImg}) right -55px top no-repeat
     `,
    },
    container: {
      position: 'relative',
    },
    back: {
      left: -60,
      width: 40,
      height: 40,
      top: 0,

      '& svg': {
        width: 32,
        height: 32,
      },
    },
    button: {
      width: 380,
      position: 'static',
      left: 0,
      bottom: 0,
      transform: 'translateX(0)',
    },
  },
});

const GMCForm = (props) => {

  const classes = useStyles();
  const [data, setData] = useState(initialValues);
  const [dataCalc, setDataCalc] = useState(initialValuesCalc);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [currentCalcStep, setCurrentCalcStep] = useState(0);
  const formName = 'gmc';

  const handleNextCalcStep = (newData) => {
    setDataCalc(prev => ({...prev, ...newData}));
    setCurrentCalcStep(prev => prev + 1);
  };

  const handleDialogOpen = () => {
    setIsOpen(true);
  };

  const handleDialogClose = () => {
    setIsOpen(false);
    setDataCalc(initialValuesCalc);
    setTimeout(() => {
      setCurrentCalcStep(0);
    }, 500);
  };

  const isNumberOfLivesEqualToSum = () => {
    const totalNumber = Number(values.totalNumberOfEmployees) || 0;

    const numberOfLives = [
      values.employeeCount35,
      values.employeeCount45,
      values.employeeCount55,
      values.employeeCount65,
      values.spouseCount35,
      values.spouseCount45,
      values.spouseCount55,
      values.spouseCount65,
      values.parentsCount45,
      values.parentsCount55,
      values.parentsCount65,
      values.parentsCount66,
      values.totalKids,
    ];

    const sum = numberOfLives.reduce((acc, cur) => parseInt(acc) + parseInt(cur));
    return sum === totalNumber;
  };

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) =>
          encodeURIComponent(key) + '=' + encodeURIComponent(data[key]),
      )
      .join('&');
  }

  const makeRequest = (formData) => {
    fetch('/', {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: encode({
        'form-name': formName,
        ...formData,
      }),
    })
      .then(() => {
        window.location.href = redirect();
        setIsSubmitted(true);
      })
      .catch((error) => {
        throw error;
      })
      .finally(() => setSubmitting(false));
  };

  const handleNextStep = (newData, isLastStep = false) => {
    setData(prev => ({...prev, ...newData}));

    if (!isNumberOfLivesEqualToSum()) {
      setFieldError('totalNumberOfEmployees', 'No. of employees must be equal to sum of employees');
      setSubmitting(false);
      return;
    }

    if (isLastStep) {
      makeRequest(newData);
      return;
    }

    setSubmitting(false);
    setCurrentStep(prev => prev + 1);
  };


  const validationSchemes = [
    GMCSchemaStepOne,
    GMCSchemaStepTwo,
    GMCSchemaStepThree,
  ];

  const {
    handleSubmit,
    handleChange,
    setSubmitting,
    isSubmitting,
    setFieldValue,
    setFieldError,
    values,
    errors,
  } = useFormik({
    initialValues: data,
    validationSchema: validationSchemes[currentStep],
    validateOnBlur: false,
    validateOnChange: false,

    onSubmit(values) {
      const isLastStep = currentStep === steps.length - 1 || values.sumInsuredType === 'Graded';
      handleNextStep(values, isLastStep);
    },
  });

  const steps = [
    <StepOne values={values} errors={errors} handleChange={handleChange} setFieldValue={setFieldValue}
             setFieldError={setFieldError} />,
    <StepTwo handleDialogOpen={handleDialogOpen} values={values} errors={errors} handleChange={handleChange} />,
    <StepThree values={values} errors={errors} handleChange={handleChange} setFieldValue={setFieldValue}
               setFieldError={setFieldError} />,
  ];

  const redirect = () => {
    const locationEmployees = `${values.location} - ${values.employees}`;
    switch (locationEmployees) {
      case 'Hyderabad (Telangana) - 7-50' :
        return 'https://google.com';
      case 'Kolkata (West Bengal) - 7-50' :
        return 'https://yahoo.com';
      case 'Jaipur (Rajasthan) - 51-200' :
        return 'https://bing.com';
      default :
        return 'https://github.com/'
    }
  }

  return (
    <Box className={classes.gmc}>
      <Progressbar step={currentStep} length={steps.length} />
      <Container maxWidth={'md'} className={classes.container}>
        {currentStep > 0
          ? <Box className={classes.back} onClick={() => {
            setCurrentStep(s => s - 1);
          }}>
            <KeyboardArrowLeftIcon fontSize={'medium'} />
          </Box>
          : <Link to={'/'} className={classes.back}>
            <KeyboardArrowLeftIcon fontSize={'medium'} />
          </Link>
        }
        <form
          noValidate
          onSubmit={handleSubmit}
          data-netlify="true"
          name="gmc"
          method="post"
        >
          {steps[currentStep]}
          <GMCHelper values={values} />
          <Box className={classes.button}>
            <Button
              color="primary"
              variant={'contained'}
              type="submit"
              size={'large'}
              disabled={isSubmitting}
              arria-label={`Continue`}
              fullWidth
            >
              {isSubmitting && (
                <Box component={'span'} position={'relative'} pl={6}>
                  <Box component={'span'} mr={2} position={'absolute'} top={-2} left={-2}>
                    <CircularProgress size={20} />
                  </Box>
                  Submitting...
                </Box>
              )}
              {!isSubmitting && <span>Continue</span>}
            </Button>
          </Box>
        </form>
      </Container>
      {isOpen && <CalcModal
        isOpen={isOpen}
        handleDialogClose={handleDialogClose}
        dataCalc={dataCalc}
        handleNextCalcStep={handleNextCalcStep}
        currentCalcStep={currentCalcStep}
      />}
    </Box>
  );
};

export default GMCForm;
