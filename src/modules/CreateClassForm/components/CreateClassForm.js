import React from 'react';
import styled from 'styled-components';
import { px2em } from 'styles/functions';
import { Form } from 'react-controlled-form';
import { FormField, Label, Select, SubmitButton } from 'modules/common';

const FormGroup = styled.div`margin-bottom: ${px2em(10)};`;

function CreateClassForm() {
  return (
    <Form formId="create-class-form">
      <FormGroup>
        <Label>Choose Instructor:</Label>
        <FormField
          fieldId="instructor"
          isRequired
          name="instructor"
          options={[{ value: '1', label: 'Andrea Jessup' }]}
          type={Select}
        />
      </FormGroup>
      <SubmitButton>Create Description!</SubmitButton>
    </Form>
  );
}

export default CreateClassForm;
