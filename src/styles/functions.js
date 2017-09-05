import { em } from 'polished';
import theme from './theme';

export const px2em = (pixelValue, context = theme.fontSize.base) =>
  em(pixelValue, context);
