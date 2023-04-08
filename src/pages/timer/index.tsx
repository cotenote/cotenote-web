import { Layout } from "@/layouts";
import { Flex } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { Timer } from "@/components/timer";

function TimerPage() {
  return (
    <Flex
      paddingTop="100px"
      flexDir="column"
      width="400px"
      margin="0 auto"
      gap="30px"
    >
      <Timer />
    </Flex>
  );
}

export default TimerPage;

TimerPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
