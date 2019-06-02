import React from 'react';
import {render, cleanup} from 'react-testing-library';
import SubmitButton from '../components/SubmitButton';

const setup = () => {
  const utils = render(<SubmitButton>Submit</SubmitButton>);
  const button = utils.getByText('Submit');
  return {
    button,
    ...utils,
  };
};

afterEach(cleanup);

test('it renders button with Submit value', () => {
  const {button} = setup();
  const firstChild = button.firstChild;
  expect(button.type).toEqual('submit');
  expect(firstChild).toMatchSnapshot();
});
