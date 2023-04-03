import { Layout } from "@/layouts";
import { Box } from "@chakra-ui/react";

import React, { ReactElement } from "react";

function Timer() {
  return <Box>Timer</Box>;
}

export default Timer;

Timer.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
