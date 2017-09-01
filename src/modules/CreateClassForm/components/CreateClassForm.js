import React from 'react';
import styled from 'styled-components';
import { Form } from 'react-controlled-form';
import { Button, FormField, Label, Select, SubmitButton } from 'modules/common';

const FormGroup = styled.div`border: 1px solid pink;`;

function CreateClassForm() {
  return (
    <Form formId="create-class-form">
      <FormGroup>
        <Label>Class Information</Label>
        <FormField
          fieldId="class"
          isRequired
          name="class"
          options={[{ value: '1', label: 'Javascript Introduction' }]}
          type={Select}
          placeholder="Select a class name"
        />
      </FormGroup>

      <FormGroup>
        <Label>Time</Label>
        <FormField
          fieldId="time"
          isRequired
          name="time"
          options={[{ value: '1', label: 'Imagine times' }]}
          type={Select} // TODO add time select component
          placeholder="Add class time"
        />
      </FormGroup>

      <FormGroup>
        <Label>Date(s)</Label>
        <FormField
          fieldId="date"
          isRequired
          name="date"
          options={[{ value: '1', label: 'Imagine dates' }]}
          type={Select} // TODO add date select component
          placeholder="Add a class date"
        />
        <Button>Add another class date</Button>
      </FormGroup>

      <FormGroup>
        <Label>Location/Sponsor:</Label>
        <FormField
          fieldId="sponsor"
          isRequired
          name="sponsor"
          options={[{ value: '1', label: 'Cardinal Solutions' }]}
          type={Select}
          placeholder="Select a sponsor"
        />
      </FormGroup>

      <FormGroup>
        <Label>Refreshments</Label>
        <FormField
          fieldId="refreshments"
          isRequired
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
          isRequired
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
          isRequired
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
          isRequired
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
          isRequired
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
          isRequired
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
          isRequired
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

export default CreateClassForm;
