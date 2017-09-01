import React, { PureComponent } from 'react';
import Select from 'react-select';
import styled from 'styled-components';
import 'react-select/dist/react-select.css';

const SelectStyled = styled(Select)`
  .Select-control {
    border: 1px solid ${props => props.theme.color.dark_gray};
    &:focus {
      border: 1px solid ${props => props.theme.color.gdi_pink};
    }
  }
`;

class SelectWrapper extends PureComponent {
  handleChange = e => {
    const { onChange } = this.props;

    if (!onChange) return;
    this.props.onChange({ target: { value: e } });
  };

  handleBlur = () => {
    const { onBlur } = this.props;

    if (!onBlur) return;
    this.props.onBlur({ target: { value: this.props.value } });
  };

  render() {
    return (
      <SelectStyled
        {...this.props}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
      />
    );
  }
}

export default SelectWrapper;
