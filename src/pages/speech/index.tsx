import { Camera, RandomCard } from "@/components/speech";
import { Layout } from "@/layouts";
import { Flex } from "@chakra-ui/layout";
import React, { ReactElement } from "react";

function ReadPage() {
  return (
    <Flex
      maxW="1000px"
      w="fit-content"
      pt={{ base: "15px", md: "50px" }}
      flexDirection={{ base: "column-reverse", md: "row" }}
      justifyContent="space-between"
      alignItems="center"
      as="div"
      p="15px"
      m="auto"
    >
      <RandomCard />
      <Camera />
    </Flex>
  );
}

export default ReadPage;

ReadPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
