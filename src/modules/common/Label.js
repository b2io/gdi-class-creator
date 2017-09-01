// import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { px2em } from 'styles/functions';

const Label = styled.label`
  color: ${props => props.theme.color.mauve};
  font-size: ${px2em(48)}
  font-weight: 200;
  line-height: 1.7;

  &::after {
    color: ${props => props.theme.color.warning};
    content: ${props => (props.isRequired ? "'*'" : '')};
    padding-left: ${px2em(2)};

  }
`;

export default Label;
