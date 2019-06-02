import React, {useReducer, useEffect} from 'react';
import Form from './Form';
import SubmitButton from './SubmitButton';
import Input from './Input';
import formReducer from '../reducer';
import ProgressBar from './ProgressBar';
import styled from 'styled-components';

const initialState = {userData: {}, privacyData: {}, currentTab: 'User'};
const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 600px;
  font-size: 12px;
`;

function App() {
  const [state, dispatch] = useReducer(formReducer, initialState);
  useEffect(() => {
    if (state.currentTab === 'Done') {
      dispatch({
        type: 'getAllData',
      });
    }
  }, [state.currentTab]);
  const {currentTab} = state;
  const onSubmit = (dataType, tab) => (e, data) => {
    e.preventDefault();
    dispatch({
      type: dataType,
      payload: {[dataType]: data, currentTab: tab},
    });
  };
  return (
    <AppWrapper>
      <ProgressBar currentTab={currentTab} tabs={['User', 'Privacy', 'Done']} />
      {currentTab === 'User' && (
        <Form onSubmit={onSubmit('userData', 'Privacy')}>
          <Input name="name" label="Name" type="text" required />
          <Input name="role" label="Role" type="text" />
          <Input name="email" label="Email" type="email" required />
          <Input
            name="password"
            label="Password"
            type="password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}"
            required=""
            title="Minimum 10 characters containing at least one number, one uppercase and lowercase"
          />
          <SubmitButton>Submit</SubmitButton>
        </Form>
      )}
      {currentTab === 'Privacy' && (
        <Form onSubmit={onSubmit('privacyData', 'Done')}>
          <Input
            type="radio"
            name="privacy"
            id="product-update"
            label="Receive updates about Tray.io product by email"
            value="trayio-product-update"
            isRadioButton
            required
          />
          <Input
            type="radio"
            name="privacy"
            id="product-updates"
            label="Receive communication by email for other products created by the Tray.io
        team"
            value="trayio-products-update"
            isRadioButton
          />
          <SubmitButton>Submit</SubmitButton>
        </Form>
      )}
      {currentTab === 'Done' && (
        <Form>
          <p>
            Please verify your email address, you should have received an email
            from us already!
          </p>
        </Form>
      )}
    </AppWrapper>
  );
}

export default App;
