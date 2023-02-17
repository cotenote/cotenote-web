import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <StyledMain>
      <Header />
      {children}
      <Footer />
    </StyledMain>
  );
}

export default Layout;

const StyledMain = styled.main`
  width: 100%;
  height: calc(100vh);
`;
