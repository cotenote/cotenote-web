import React, { InputHTMLAttributes, ReactNode } from "react";
import styled from "styled-components";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  endAdornment?: ReactNode;
}

function Input({ endAdornment, ...rest }: InputProps) {
  return (
    <InputWrapper>
      <StyledInput {...rest} />
      {endAdornment && endAdornment}
    </InputWrapper>
  );
}

export default Input;

// endAdornment
const InputWrapper = styled.div`
  //TODO container width
  width: 620px;

  border: 1px solid var(--primary);
  padding: 21px 33px;
  border-radius: 21px;
  display: flex;
  justify-content: space-between;
`;

const StyledInput = styled.input`
  height: 32px;
  border: none;
  flex: 1;

  font-weight: 400;
  font-size: 24px;
  line-height: 32px;

  :focus {
    outline: none;
  }
`;
