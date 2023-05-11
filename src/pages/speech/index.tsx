import { RandomCard } from "@/components/speech";
import { Layout } from "@/layouts";
import { Box } from "@chakra-ui/layout";
import React, { ReactElement } from "react";

function ReadPage() {
  return (
    <Box as="div" p="15px">
      <RandomCard />
    </Box>
  );
}

export default ReadPage;

ReadPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
