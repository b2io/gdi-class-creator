import React from 'react';
import Button from './Button';

const SignInButton = ({ onSignIn }) => (
  <Button onClick={onSignIn}>Sign In</Button>
);

export default SignInButton;
