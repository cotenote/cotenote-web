import { Box } from "@chakra-ui/layout";
import React from "react";
import { Time } from "./Timer";

interface TimerCounterProps {
  time: Time;
}

function TimerCounter({ time }: TimerCounterProps) {
  return (
    <Box fontSize="4xl">
      {time.hour.toString().padStart(2, "0")}:
      {time.min.toString().padStart(2, "0")}:
      {time.sec.toString().padStart(2, "0")}
    </Box>
  );
}

export default TimerCounter;
