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

  :hover {
    background: var(--secondary);
  }
`;
