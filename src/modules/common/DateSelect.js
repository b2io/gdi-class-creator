import React, { Component } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

class DateSelect extends Component {
  state = {
    date: '',
  };

  handleChange = date => this.setState({ date });

  render() {
    return (
      <DatePicker
        selected={this.state.date}
        onChange={this.handleChange}
        placeholderText="Select a date"
      />
    );
  }
}

export default DateSelect;
