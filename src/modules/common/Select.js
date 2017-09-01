import React, { PureComponent } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

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
      <Select
        {...this.props}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
      />
    );
  }
}

export default SelectWrapper;
