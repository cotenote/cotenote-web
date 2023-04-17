import { Button, Flex, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import { Logo, SearchInput } from "../common";

function Header() {
  const [isMobile] = useMediaQuery("(min-width: 800px)", { ssr: true });

  return (
    <Flex
      as="header"
      width="100%"
      height="var(--header-height)"
      p={{ base: "0 15px", md: "0 32px" }}
      borderBottom="var(--zero-point-five) solid #c5c7c2"
      position="fixed"
      zIndex="var(--header-z-index)"
      justifyContent="space-between"
      alignItems="center"
    >
      {isMobile ? (
        <Flex gap="10">
          <Logo />
          <SearchInput />
        </Flex>
      ) : (
        <Flex gap="10">
          <Logo />
        </Flex>
      )}
      <Button size="md">로그인</Button>
    </Flex>
  );
}

export default Header;
