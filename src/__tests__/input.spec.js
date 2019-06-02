import React from 'react';
import TextInput from '../components/Input';
import {render, fireEvent, cleanup} from 'react-testing-library';

const setup = () => {
  const utils = render(
    <TextInput name="first-name" type="text" label="First name" />,
  );
  const input = utils.getByLabelText('First name');
  return {
    input,
    ...utils,
  };
};

afterEach(cleanup);

test('input renders correct props', () => {
  const {input} = setup();
  expect(input.name).toEqual('first-name');
  expect(input.type).toEqual('text');
  expect(input.value).toEqual('');
});

test('input changes value when firing a change event', () => {
  const {input} = setup();
  fireEvent.change(input, {target: {value: 'new input value'}});
  expect(input.value).toEqual('new input value');
});
