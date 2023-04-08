import { Layout } from "@/layouts";
import { Box } from "@chakra-ui/react";
import { Select } from "chakra-react-select";
import React, { ReactElement } from "react";

function Timer() {
  return (
    <Box>
      <Select />
    </Box>
  );
}

export default Timer;

Timer.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
