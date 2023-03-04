import BaseButton from "@/components/common/button/BaseButton";
import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <HeaderWrapper>
      <StyledHeader>
        <BaseButton className="login_button" variant="contained">
          로그인 하기
        </BaseButton>
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
`;
const StyledHeader = styled.header`
  width: 100%;
  max-width: var(--header-max-width);
  padding: 0 var(--mobile-padding);

  margin: 0 auto;
`;
