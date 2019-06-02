import React from 'react';
import {fireEvent, cleanup, render} from 'react-testing-library';
import Form from '../components/Form';
import Input from '../components/Input';
import SubmitButton from '../components/SubmitButton';

const mockSubmit = jest.fn();

const setup = () => {
  const utils = render(
    <Form onSubmit={mockSubmit}>
      <Input name="first-name" label="First name" type="text" />
      <Input name="last-name" label="Last name" type="text" />
      <SubmitButton>Submit</SubmitButton>
    </Form>,
  );
  const {container: form, getByText} = utils;
  return {form, getByText};
};

afterEach(cleanup);

test('form onSubmit works correctly', () => {
  const {form} = setup();
  fireEvent.submit(form.firstChild);
  expect(mockSubmit).toHaveBeenCalledTimes(1);
});
