import Image from "next/image";
import React from "react";
import styled from "styled-components";
import BaseButton, { BaseButtonProps } from "./BaseButton";

export type SocialLoginType = "google" | "github";

interface SocialLoginButtonProps extends Omit<BaseButtonProps, "children"> {
  type: SocialLoginType;
  iconSrc: string;
  backgroundColor: string;
}

function SocialLoginButton({
  type,
  iconSrc,
  backgroundColor,
  onClick,
  css,
  ...props
}: SocialLoginButtonProps) {
  return (
    <StyledButton
      onClick={onClick}
      variant="contained"
      css={{ backgroundColor, ...css }}
      {...props}
    >
      <Image src={iconSrc} width={30} height={30} alt={`${type}_icon`} />
      {type} 로그인
    </StyledButton>
  );
}

export default SocialLoginButton;

const StyledButton = styled(BaseButton)`
  width: 185px;
  display: flex;
  justify-content: space-between;

  :focus,
  :hover {
    background-color: ${({ css }) => css?.backgroundColor || `var(--primary)`};
  }
`;
