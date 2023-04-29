import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";

function MainHeader() {
  return (
    <Flex
      w="100%"
      h="var(--header-height)"
      borderBottom="var(--zero-point-five) solid #c5c7c2"
      pos="fixed"
      zIndex="var(--header-z-index)"
    >
      <Box as="header" w="100%" m="0 auto" p="10px var(--mobile-gap)">
        <Flex float="right" gap="15px">
          <Button size="md">로그인</Button>
        </Flex>
      </Box>
    </Flex>
  );
}

export default MainHeader;
