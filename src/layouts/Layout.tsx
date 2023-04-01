import { Header } from "@/components/layouts";
import React from "react";
import styled from "styled-components";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <StyledMain>
      <Header />
      {children}
    </StyledMain>
  );
}

export default Layout;

const StyledMain = styled.main`
  width: 100%;
  height: calc(100vh);
`;
