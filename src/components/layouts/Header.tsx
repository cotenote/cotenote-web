import { Box, Button, Flex, IconButton } from "@chakra-ui/react";
import { TimeIcon } from "@chakra-ui/icons";
import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <HeaderWrapper>
      <Box as="header" width="100%" margin="0 auto" padding={10} maxW={1024}>
        <Flex float="right" gap="15px">
          <IconButton aria-label="hi" icon={<TimeIcon />} />
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
