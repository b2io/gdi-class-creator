// import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { baseButton, defaultButton } from 'styles/mixins';

const Button = styled.button`
  ${baseButton()};
  ${defaultButton()};
`;

Button.propTypes = {
  children: PropTypes.node,
};

export default Button;
