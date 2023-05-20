import { Camera, RandomCard } from "@/components/speech";
import { Layout } from "@/layouts";
import { Flex } from "@chakra-ui/layout";
import React, { ReactElement } from "react";

export default function SpeechDetailPage() {
  return (
    <Flex
      w="fit-content"
      maxW="1000px"
      p="15px"
      pt={{ base: "15px", md: "50px" }}
      m="auto"
      flexDirection={{ base: "column-reverse", md: "row" }}
      justifyContent="space-between"
      alignItems="center"
    >
      <RandomCard />
      <Camera />
    </Flex>
  );
}

SpeechDetailPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
