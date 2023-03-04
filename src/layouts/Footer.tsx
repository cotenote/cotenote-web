import Image from "next/image";
import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterWrapper>
      <Pen
        src={"/assets/images/footer_pen.svg"}
        width={24}
        height={56}
        alt={"footer_pen"}
      />
      <StyledFooter>
        <p className="footer_text">Copyright © 2022 Cotenote Inc.</p>
        <p className="footer_text">문의 | cotenoteofficial@gmail.com</p>
      </StyledFooter>
    </FooterWrapper>
  );
}

export default Footer;

const FooterWrapper = styled.div`
  width: 100%;
  height: var(--footer-height);
  position: absolute;
  bottom: 0;
  z-index: var(--footer-z-index);

  border-top: var(--one-point-five) solid var(--primary);
`;

const StyledFooter = styled.footer`
  max-width: var(--footer-max-width);
  padding: 15px 15px 15px;

  display: flex;
  justify-content: space-between;

  margin: auto;

  .footer_text {
    font-size: 16px;
    line-height: 16px;
    color: var(--text-50);
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.values.tablet}px) {
    justify-content: right;
    .footer_text:first-of-type {
      display: none;
    }
    .footer_text {
      font-size: 14px;
    }
  }
`;

const Pen = styled(Image)`
  position: absolute;
  top: -56px;
  right: 174px;
`;
