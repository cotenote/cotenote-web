import { Box, Button, Flex } from "@chakra-ui/react";

import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <HeaderWrapper>
      <Box
        as="header"
        width="100%"
        margin="0 auto"
        maxW="var(--header-max-width)"
        padding="var(--mobile-gap)"
      >
        <Flex float="right" gap="15px">
          {/* <IconButton
            aria-label="timer"
            backgroundColor="primary.500"
            icon={<TimeIcon />}
          /> */}
          <Button size="md">로그인</Button>
        </Flex>
      </Box>
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
`;
