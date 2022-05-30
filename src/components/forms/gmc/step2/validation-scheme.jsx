import * as Yup from 'yup';

const GMCSchemaStepTwo = Yup.object().shape({
  firstTime: Yup.string()
    .required('Please select one'),
  sumInsuredType: Yup.string().when('firstTime', {
    is: true,
    then: schema => schema.required('Please select one'),
  }),
});

export default GMCSchemaStepTwo;