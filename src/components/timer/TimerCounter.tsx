import { Box } from "@chakra-ui/layout";
import React from "react";
import { Time } from "./Timer";

interface TimerCounterProps {
  time: Time;
}

function TimerCounter({ time }: TimerCounterProps) {
  return (
    <Box fontSize="4xl">
      {time.hour.label}:{time.min.label}:{time.sec.label}
    </Box>
  );
}

export default TimerCounter;
