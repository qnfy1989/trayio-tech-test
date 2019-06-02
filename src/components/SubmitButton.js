import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  align-self: flex-end;
  background-color: white;
  border-color: #4caf50;
  color: green;
  font-size: 13px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 20px;
  :hover {
    color: white;
    background-color: #4caf50;
  }
`;

function SubmitButton({children}) {
  return <ButtonWrapper type="submit">{children}</ButtonWrapper>;
}

export default SubmitButton;
