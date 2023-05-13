import { Box } from "@chakra-ui/layout";
import React from "react";
import Webcam from "react-webcam";

function Camera() {
  return (
    <Box w={{ base: "auto", md: "450px" }}>
      <Webcam width={450} />
    </Box>
  );
}

export default Camera;
