import React, {useState} from 'react';
import FormContext from '../context/form-context';
import styled from 'styled-components';

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  justify-content: center;
  align-items: start;
  width: 278px;
  padding: 10px 10px;
  border: 1px solid grey;
`;

function Form({
  children,
  onSubmit = e => {
    e.preventDefault();
    console.log(dataForm);
  },
}) {
  const [dataForm, setDataForm] = useState({});
  const onChange = inputName => e => {
    const value = e.target.value;
    setDataForm(dataForm => ({...dataForm, [inputName]: value}));
  };

  const getInputValue = (inputName, defaultValue = '') =>
    dataForm[inputName] || defaultValue;

  return (
    <FormContext.Provider value={{onChange, getInputValue}}>
      <FormWrapper onSubmit={e => onSubmit(e, dataForm)}>
        {children}
      </FormWrapper>
    </FormContext.Provider>
  );
}
export default Form;
