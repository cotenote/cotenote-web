import { BaseButton } from "@/components/common/button";
import React from "react";
import styled from "styled-components";
import LoginButton from "./LoginButton";

function Header() {
  return (
    <HeaderWrapper>
      <StyledHeader>
        <LoginButton />
      </StyledHeader>
    </HeaderWrapper>
  );
}

export default Header;

const HeaderWrapper = styled.div`
  width: 100%;
  height: var(--header-height);

  position: fixed;
  top: 0;

  border-bottom: var(--zero-point-five) solid #c5c7c2;
  z-index: var(--header-z-index);

  display: flex;
  align-items: center;
  justify-content: right;

  .login_button {
    float: right;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.values.tablet}px) {
    border-bottom: none;
  }
`;
const StyledHeader = styled.header`
  width: 100%;
  max-width: var(--header-max-width);
  padding: 0 var(--mobile-padding);

  margin: 0 auto;
`;
