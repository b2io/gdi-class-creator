import { css } from 'styled-components';
import theme from 'styles/theme';

const inputBase = css`
  border: 1px solid ${theme.color.light_grey};
  border-radius: 4px;
  color: ${theme.color.dark_gray};
  display: table;
  font: ${theme.fontSize.base} ${theme.fontFamily};
  height: 36px;
  line-height: 34px;
  outline: none;
  padding-left: 10px;
  padding-right: 10px;
`;

export default inputBase;
