import PropTypes from 'prop-types';
import React from 'react';
import { Form } from 'react-controlled-form';
import styled from 'styled-components';
import {
  Button,
  DateSelect,
  FormField,
  Label,
  Select,
  SubmitButton,
} from 'modules/common';
import { px2em } from 'styles/functions';

const FormGroup = styled.div`margin-bottom: ${px2em(10)};`;

const YesNoGroup = ({ fieldId, label, placeholder }) => (
  <FormGroup>
    <Label>{label}</Label>
    <FormField
      fieldId={fieldId}
      name={fieldId}
      options={[{ value: true, label: 'Yes' }, { value: false, label: 'No' }]}
      placeholder="Select yes or no"
      type={Select}
    />
  </FormGroup>
);

function CreateClassForm(props) {
  const { classes, contacts, instructors, onSubmit, sponsors } = props;

  return (
    <Form formId="create-class-form" onSubmit={onSubmit}>
      <FormGroup>
        <Label isRequired>Class Information</Label>
        <FormField
          fieldId="course"
          name="course"
          options={classes}
          placeholder="Select a class name"
          required
          type={Select}
        />
      </FormGroup>
      <FormGroup>
        <Label isRequired>Time</Label>
        <FormField
          fieldId="time"
          name="time"
          options={[{ value: 1, label: 'Imagine times' }]}
          placeholder="Add class time"
          required
          type={Select} // TODO add time select component
        />
      </FormGroup>
      <FormGroup>
        <Label>Date(s)</Label>
        <FormField fieldId="date" name="date" type={DateSelect} />
        <Button secondary>Add another class date</Button>
      </FormGroup>
      <FormGroup>
        <Label>Location/Sponsor</Label>
        <FormField
          fieldId="sponsor"
          name="sponsor"
          options={sponsors}
          placeholder="Select a sponsor"
          type={Select}
        />
      </FormGroup>
      <YesNoGroup fieldId="refreshments" label="Refreshments" />
      <FormGroup>
        <Label isRequired>Instructor</Label>
        <FormField
          fieldId="instructor"
          name="instructor"
          options={instructors}
          placeholder="Select the instructor"
          required
          type={Select}
        />
      </FormGroup>
      <YesNoGroup fieldId="paid" label="Paid Event?" />
      <FormGroup>
        <Label>Class Contact</Label>
        <FormField
          fieldId="contact"
          name="contact"
          options={contacts}
          placeholder="Select the contact"
          type={Select} // TODO add a radio input
        />
      </FormGroup>
      <YesNoGroup fieldId="scholarship" label="Scholarship Information" />
      <YesNoGroup fieldId="laptop" label="Loaner Laptop" />
      <SubmitButton>Create Description!</SubmitButton>
    </Form>
  );
}

const arrayOfOptions = PropTypes.arrayOf(
  PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  }),
);

CreateClassForm.propTypes = {
  classes: arrayOfOptions.isRequired,
  contacts: arrayOfOptions.isRequired,
  instructors: arrayOfOptions.isRequired,
  onSubmit: PropTypes.func.isRequired,
  sponsors: arrayOfOptions.isRequired,
};

export default CreateClassForm;
