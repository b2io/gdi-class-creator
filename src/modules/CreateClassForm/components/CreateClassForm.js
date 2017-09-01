import React from 'react';
import { Form } from 'react-controlled-form';
import { FormField, Label, Select, SubmitButton } from 'modules/common';

function CreateClassForm() {
  return (
    <Form formId="create-class-form">
      <Label>Choose Instructor:</Label>
      <FormField
        fieldId="instructor"
        isRequired
        name="instructor"
        options={[{ value: '1', label: 'Andrea Jessup' }]}
        type={Select}
      />
      <SubmitButton>Create Description!</SubmitButton>
    </Form>
  );
}

export default CreateClassForm;
