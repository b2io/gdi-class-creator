import styled from 'styled-components';
import inputBase from '../../styles/inputs';

const TimeInput = styled.input.attrs({
  max: '20:00',
  min: '16:00',
  step: '900',
  type: 'time',
})`
  ${inputBase};
`;

export default TimeInput;
