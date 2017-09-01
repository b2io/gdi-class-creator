import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { asField, validateWithRequired } from 'react-controlled-form';
import { isNil } from 'lodash';
import { ValidationError } from 'modules/common';

class FormField extends PureComponent {
  static propTypes = {
    fieldId: PropTypes.string.isRequired,
    type: PropTypes.func.isRequired,
    updateField: PropTypes.func.isRequired,

    isEnabled: PropTypes.bool,
    isRequired: PropTypes.bool,
    isTouched: PropTypes.bool,
    isValid: PropTypes.bool,
  };

  static defaultProps = {
    isEnabled: true,
    isRequired: false,
    isTouched: false,
    isValid: true,
  };

  handleUpdate = ({ target }) => {
    this.props.updateField({
      isValid:
        !isNil(target.value) &&
        validateWithRequired(target.value, this.props.isRequired),
      value: target.value,
    });
  };

  render() {
    const {
      fieldId,
      isEnabled,
      isRequired,
      isTouched,
      isValid,
      type,
      ...rest
    } = this.props;
    const Component = type;

    return (
      <div>
        <Component
          {...rest}
          disabled={!isEnabled}
          fieldId={fieldId}
          isValid={isValid}
          onBlur={this.handleUpdate}
          onChange={this.handleUpdate}
          required={isRequired}
        />
        {isTouched &&
        !isValid && <ValidationError>Required Field.</ValidationError>}
      </div>
    );
  }
}

export { FormField };

export default asField(
  FormField,
  ({ defaultValue = '', isRequired = false, isTouched = false }) => ({
    isValid: validateWithRequired(defaultValue, isRequired),
  }),
);
