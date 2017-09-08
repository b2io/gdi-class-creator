import styled from 'styled-components';
import theme from 'styles/theme';

const AppTitle = styled.h1`
  color: ${theme.color.white};
  font-family: ${theme.cursiveFontFamily};
  font-size: ${theme.fontSize.title};
  line-height: 1.1;
  margin: 0 0 0 0.5em;
  padding: 0;
`;

export default AppTitle;
