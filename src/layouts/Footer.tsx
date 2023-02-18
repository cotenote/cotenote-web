import Image from "next/image";
import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <StyledFooter>
      <Pen
        src={"/assets/images/footer_pen.svg"}
        width={24}
        height={56}
        alt={"footer_pen"}
      />
      footer
    </StyledFooter>
  );
}

export default Footer;

const StyledFooter = styled.div`
  width: 100%;
  height: var(--footer-height);

  position: absolute;
  bottom: 0;
  z-index: var(--footer-z-index);

  border-top: var(--one-point-five) solid var(--primary);
`;

const Pen = styled(Image)`
  position: absolute;
  top: -56px;
  right: 174px;
`;
