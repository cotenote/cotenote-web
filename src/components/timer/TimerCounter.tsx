import { Box } from "@chakra-ui/layout";
import React, { useEffect } from "react";
import { Time, TimerOption } from "./Timer";

interface TimerCounterProps {
  time: Time;
  setTime: React.Dispatch<React.SetStateAction<Time>>;
  isRunning: boolean;
}

function TimerCounter({ time, setTime, isRunning }: TimerCounterProps) {
  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isRunning) {
      intervalId = setInterval(() => {}, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  return (
    <Box>
      {time.hour.label}:{time.min.label}:{time.sec.label}
    </Box>
  );
}

export default TimerCounter;
