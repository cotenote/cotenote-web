import { Flex, IconButton, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { ReactElement } from "react";

interface TitleProps {
  href?: string;
  title: string;
  icon: ReactElement;
}
function Tile({ href, title, icon }: TitleProps) {
  const router = useRouter();

  const handleClickTile = () => {
    if (!href) return;
    router.push(href);
  };
  return (
    <Flex gap="10px" alignItems="center" flexDirection="column">
      <IconButton
        onClick={handleClickTile}
        aria-label={title}
        icon={icon}
        w="50px"
        h="50px"
        borderRadius="100%"
      />
      <Text as="span" fontSize="sm">
        {title}
      </Text>
    </Flex>
  );
}

export default Tile;
