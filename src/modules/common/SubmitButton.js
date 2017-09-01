import PropTypes from 'prop-types';
import React from 'react';
import { asSubmit } from 'react-controlled-form';
import Button from './Button';

function SubmitButton({ isFormValid, submitForm, ...props }) {
  return <Button {...props} disabled={!isFormValid} onClick={submitForm} />;
}

SubmitButton.propTypes = {
  isFormValid: PropTypes.bool.isRequired,
  submitForm: PropTypes.func.isRequired,
};

export default asSubmit(SubmitButton);
