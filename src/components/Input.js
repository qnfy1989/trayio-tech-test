import React, {useContext} from 'react';
import FormContext from '../context/form-context';
import styled from 'styled-components';

const InputWrapper = styled.div`
  display: flex;
  flex-direction: ${props => (props.isRadioButton ? 'row' : 'column')};
  width: 258px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 12px;
  margin-bottom: 10px;
  .label {
    flex-direction: row;
    padding-top: 5px;
    padding-bottom: 5px;
    order: ${props => (props.isRadioButton ? 1 : 0)};
    margin-left: ${props => (props.isRadioButton ? '10px' : 0)};
  }
  input[type='radio'] {
    margin-top: ${props => (props.isRadioButton ? '10px' : 0)};
  }
  .required {
    color: ${props => (props.isRadioButton ? '' : 'red')};
  }
`;

function Input({
  label,
  name,
  type,
  required,
  value,
  pattern,
  title,
  isRadioButton,
  checked,
  id,
}) {
  const {getInputValue, onChange} = useContext(FormContext);
  return (
    <InputWrapper isRadioButton={isRadioButton}>
      <div className="label">
        <label htmlFor={id || name}>{label}</label>
        {!isRadioButton && (
          <span className="required">{(required || pattern) && '*'}</span>
        )}
      </div>
      <input
        name={name}
        type={type}
        id={id || name}
        value={value || getInputValue(name)}
        onChange={onChange(name)}
        required={required}
        pattern={pattern}
        title={title}
        checked={checked}
      />
    </InputWrapper>
  );
}

export default Input;
