import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { px2em } from 'styles/functions';
import { Form } from 'react-controlled-form';
import {
  Button,
  DateSelect,
  FormField,
  Label,
  Select,
  SubmitButton,
  TimeInput,
} from 'modules/common';

const FormGroup = styled.div`margin-bottom: ${px2em(10)};`;

function CreateClassForm({ onSubmit }) {
  return (
    <Form formId="create-class-form" onSubmit={onSubmit}>
      <FormGroup>
        <Label>Class Information</Label>
        <FormField
          fieldId="class"
          name="class"
          options={[{ value: '1', label: 'Javascript Introduction' }]}
          type={Select}
          placeholder="Select a class name"
        />
      </FormGroup>

      <FormGroup>
        <Label>Time</Label>
        <TimeInput />
      </FormGroup>

      <FormGroup>
        <Label>Date(s)</Label>
        <FormField
          fieldId="date"
          name="date"
          type={DateSelect} // TODO add date select component
        />
        <Button secondary>Add another class date</Button>
      </FormGroup>

      <FormGroup>
        <Label>Location/Sponsor</Label>
        <FormField
          fieldId="sponsor"
          name="sponsor"
          options={[{ value: '1', label: 'Cardinal Solutions' }]}
          type={Select}
        />
      </FormGroup>

      <FormGroup>
        <Label>Refreshments</Label>
        <FormField
          fieldId="refreshments"
          name="refreshments"
          options={[{ value: '1', label: 'Yes' }, { value: '2', label: 'No' }]}
          type={Select} // TODO add a radio input
          placeholder="Select yes or no"
        />
      </FormGroup>

      <FormGroup>
        <Label>Instructor</Label>
        <FormField
          fieldId="instructor"
          name="instructor"
          options={[{ value: '1', label: 'Andrea Jessup' }]}
          type={Select}
          placeholder="Select the instructor"
        />
      </FormGroup>

      <FormGroup>
        <Label>Paid Event?</Label>
        <FormField
          fieldId="paid"
          name="paid"
          options={[{ value: '1', label: 'Yes' }, { value: '2', label: 'No' }]}
          type={Select} // TODO add a radio input
          placeholder="Select yes or no"
        />
      </FormGroup>

      <FormGroup>
        <Label>Class Contact</Label>
        <FormField
          fieldId="contact"
          name="contact"
          options={[{ value: '1', label: 'Caitlin Steinert' }]}
          type={Select} // TODO add a radio input
          placeholder="Select the contact"
        />
      </FormGroup>

      <FormGroup>
        <Label>Scholarship Information</Label>
        <FormField
          fieldId="scholarship"
          name="scholarship"
          options={[{ value: '1', label: 'Yes' }, { value: '2', label: 'No' }]}
          type={Select} // TODO add a radio input
          placeholder="Select yes or no"
        />
      </FormGroup>

      <FormGroup>
        <Label>Technology Requirements</Label>
        <FormField
          fieldId="pre-reqs"
          name="pre-reqs"
          options={[{ value: '1', label: 'HTML/CSS' }]}
          type={Select}
          placeholder="Select the pre-reqs"
        />
      </FormGroup>

      <FormGroup>
        <Label>Loaner Laptop</Label>
        <FormField
          fieldId="laptop"
          name="laptop"
          options={[{ value: '1', label: 'Yes' }, { value: '2', label: 'No' }]}
          type={Select} // TODO add a radio input
          placeholder="Select yes or no"
        />
      </FormGroup>

      <SubmitButton>Create Description!</SubmitButton>
    </Form>
  );
}

CreateClassForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default CreateClassForm;
