import React from 'react';
import Button from './Button';
import { asReset } from 'react-controlled-form';

function ResetButton({ resetForm, ...props }) {
  return <Button {...props} onClick={resetForm} />;
}

export default asReset(ResetButton);
