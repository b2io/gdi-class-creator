import React, { Component } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import inputBase from '../../styles/inputs';
import 'react-datepicker/dist/react-datepicker.css';

const StyledDatePicker = styled(DatePicker)`${inputBase};`;

class DateSelect extends Component {
  state = {
    date: '',
  };

  handleChange = date => this.setState({ date });

  render() {
    return (
      <StyledDatePicker
        selected={this.state.date}
        onChange={this.handleChange}
        placeholderText="Select a date"
      />
    );
  }
}

export default DateSelect;
