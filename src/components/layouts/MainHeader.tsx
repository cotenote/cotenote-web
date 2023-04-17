import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";

function MainHeader() {
  return (
    <Flex
      width="100%"
      height="var(--header-height)"
      borderBottom="var(--zero-point-five) solid #c5c7c2"
      position="fixed"
      zIndex="var(--header-z-index)"
    >
      <Box
        as="header"
        width="100%"
        margin="0 auto"
        padding="10px var(--mobile-gap)"
      >
        <Flex float="right" gap="15px">
          <Button size="md">로그인</Button>
        </Flex>
      </Box>
    </Flex>
  );
}

export default MainHeader;
