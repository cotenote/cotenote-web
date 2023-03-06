import React, { ReactNode } from "react";
import { styled } from "@mui/material/styles";
import {
  OutlinedInput,
  InputAdornment,
  OutlinedInputProps,
} from "@mui/material";

type BaseTextFieldProps = OutlinedInputProps & {
  endAdornment?: ReactNode;
};

const BaseTextField = ({
  placeholder,
  endAdornment,
  ...inputProps
}: BaseTextFieldProps) => {
  return (
    <StyledTextField
      placeholder={placeholder}
      endAdornment={
        endAdornment && (
          <InputAdornment position="end">{endAdornment}</InputAdornment>
        )
      }
      {...inputProps}
    />
  );
};

export default BaseTextField;

const StyledTextField = styled(OutlinedInput)`
  width: 100%;
  padding: 17px 15px;

  input {
    padding: 0;
  }

  :hover {
    background: var(--secondary);
  }
  :focus-within,
  :target {
    background: var(--white) !important;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.values.tablet}px) {
    padding: 13px 11px 8px;
  }
`;
