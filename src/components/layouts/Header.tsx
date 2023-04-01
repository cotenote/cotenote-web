import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";

function Header() {
  return (
    <Flex
      width="100%"
      borderBottom="var(--zero-point-five) solid #c5c7c2"
      position="fixed"
      zIndex="var(--header-z-index)"
    >
      <Box
        as="header"
        width="100%"
        margin="0 auto"
        maxW="var(--header-max-width)"
        padding="10px var(--mobile-gap)"
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
    </Flex>
  );
}

export default Header;
