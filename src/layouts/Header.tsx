import BaseButton from "@/components/common/button/BaseButton";
import { ButtonBase } from "@mui/material";
import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <StyledHeader>
      <BaseButton variant="contained">로그인 하기</BaseButton>
    </StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.header`
  width: 100%;
  height: var(--header-height);

  position: fixed;
  top: 0;

  border-bottom: var(--zero-point-five) solid #c5c7c2;
  z-index: var(--header-z-index);

  display: flex;
  align-items: center;
  justify-content: right;
  button {
    margin-right: 72px;
  }
`;
