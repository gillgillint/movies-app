import styled from '@emotion/styled';
import React from 'react';

const InputStyled = styled.input`
  border: 0;
  background-color: #000;
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  border-radius: 6px;
  color: grey;
`;
function CustomInput({ type, placeholder, value, onChange }) {
  return (
    <InputStyled
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange ? (e) => onChange(e) : null}
    ></InputStyled>
  );
}

export default CustomInput;
