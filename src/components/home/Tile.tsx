import { Flex, IconButton, Text } from "@chakra-ui/react";
import React, { ReactElement } from "react";

interface TitleProps {
  title: string;
  icon: ReactElement;
}
function Tile({ title, icon }: TitleProps) {
  return (
    <Flex gap="10px" alignItems="center" flexDirection="column">
      <IconButton
        w="50px"
        h="50px"
        borderRadius="100%"
        aria-label={title}
        backgroundColor="primary.500"
        icon={icon}
      />
      <Text as="span" fontSize="sm">
        {title}
      </Text>
    </Flex>
  );
}

export default Tile;
