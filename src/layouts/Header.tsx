import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <StyledHeader>
      <button>hi</button>
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
  /* background-color: var(--primary); */
`;
