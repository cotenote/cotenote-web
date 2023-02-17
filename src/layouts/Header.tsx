import React from "react";
import styled from "styled-components";

function Header() {
  return <StyledHeader>header</StyledHeader>;
}

export default Header;

const StyledHeader = styled.header`
  width: 100%;
  height: var(--header-height);

  position: fixed;
  top: 0;

  z-index: var(--header-z-index);
  background-color: var(--primary);
`;
