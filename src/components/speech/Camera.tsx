import { Box } from "@chakra-ui/layout";
import React from "react";
import Webcam from "react-webcam";

function Camera() {
  return (
    <Box p="10px">
      <Webcam width={450} height={400} />
    </Box>
  );
}

export default Camera;
