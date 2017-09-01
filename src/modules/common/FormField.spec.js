import { shallow } from 'enzyme';
import React from 'react';
import { FormField } from './FormField';
import TextInput from './TextInput';

const defaultProps = {
  fieldId: 'defaultForm',
  type: TextInput,
  updateField: () => {},
};

const renderComponent = props => {
  return shallow(<FormField {...defaultProps} {...props} />);
};

describe('FormField', () => {
  it('should render without throwing', () => {
    expect(renderComponent).not.toThrow();
  });

  describe('validation', () => {
    it('should validate entered text input values', () => {
      const updateField = jest.fn();
      const wrapper = renderComponent({ isRequired: true, updateField });

      wrapper.instance().handleUpdate({ target: { value: 'Stuff' } });

      expect(updateField).toHaveBeenCalledWith({
        isValid: true,
        value: 'Stuff',
      });
    });

    it('should validate undefined text input values', () => {
      const updateField = jest.fn();
      const wrapper = renderComponent({ isRequired: true, updateField });

      wrapper.instance().handleUpdate({ target: { value: undefined } });

      expect(updateField).toHaveBeenCalledWith({
        isValid: false,
        value: undefined,
      });
    });

    it('should validate empty text input values', () => {
      const updateField = jest.fn();
      const wrapper = renderComponent({ isRequired: true, updateField });

      wrapper.instance().handleUpdate({ target: { value: '' } });

      expect(updateField).toHaveBeenCalledWith({
        isValid: false,
        value: '',
      });
    });

    it('should validate entered select values', () => {
      const updateField = jest.fn();
      const wrapper = renderComponent({ isRequired: true, updateField });

      wrapper.instance().handleUpdate({
        target: {
          value: {
            value: '1',
            label: 'Some value',
          },
        },
      });

      expect(updateField).toHaveBeenCalledWith({
        isValid: true,
        value: {
          value: '1',
          label: 'Some value',
        },
      });
    });

    it('should validate undefined select values', () => {
      const updateField = jest.fn();
      const wrapper = renderComponent({ isRequired: true, updateField });

      wrapper.instance().handleUpdate({ target: { value: undefined } });

      expect(updateField).toHaveBeenCalledWith({
        isValid: false,
        value: undefined,
      });
    });

    it('should validate empty select values', () => {
      const updateField = jest.fn();
      const wrapper = renderComponent({ isRequired: true, updateField });

      wrapper.instance().handleUpdate({ target: { value: '' } });

      expect(updateField).toHaveBeenCalledWith({
        isValid: false,
        value: '',
      });
    });
  });
});
