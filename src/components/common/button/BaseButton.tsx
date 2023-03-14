import React from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import styled, { CSSObject } from "styled-components";

export interface BaseButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  css?: CSSObject;
}

export default function BaseButton({
  children,
  onClick,
  css,
  ...props
}: BaseButtonProps & StyledButtonProps) {
  return (
    <StyledButton onClick={onClick} css={css} {...props}>
      {children}
    </StyledButton>
  );
}

interface StyledButtonProps extends ButtonProps {
  css?: CSSObject;
}

const StyledButton = styled(Button)<StyledButtonProps>`
  padding: 11px 16px;
  border-radius: 8px;

  color: ${(props) =>
    props.variant !== "contained" ? `var(--primary)` : `var(--white)`};
  box-shadow: none;

  font-size: 16px;
  line-height: 16px;

  :focus,
  :hover {
    outline: none !important;
    background: var(--button-pseudo-class);
    box-shadow: none;
  }

  :disabled {
    color: var(--white);
    background: var(--text-80);
    border: var(--one-point-five) solid var(--text-80);
  }
  ${(props) => props.css}
`;
