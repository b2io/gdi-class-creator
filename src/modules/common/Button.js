import PropTypes from 'prop-types';
import { cond, has, stubTrue } from 'lodash/fp';
import styled from 'styled-components';
import { baseButton, defaultButton, secondaryButton } from 'styles/mixins';

const getContextStyles = cond([
  [has('secondary'), secondaryButton],
  [stubTrue, defaultButton],
]);

const Button = styled.button`
  ${baseButton()};
  ${props => getContextStyles(props)};
`;

Button.propTypes = {
  children: PropTypes.node,
  secondary: PropTypes.bool,
};

export default Button;
