import React, { useState } from "react";
import { Flex } from "@chakra-ui/react";
import { TimerCounter, ActionButtons } from "@/components/timer";

import { hourOptions, secAndMinOptions } from "@/constants/timer";
import SelectContainer from "./SelectContainer";

export interface TimerOption {
  label: string;
  value: number;
}

export interface Time {
  hour: TimerOption;
  min: TimerOption;
  sec: TimerOption;
}

function Timer() {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState<Time>({
    hour: hourOptions[0],
    min: secAndMinOptions[0],
    sec: secAndMinOptions[0],
  });

  return (
    <>
      <Flex gap="10px" margin="0 auto">
        {isRunning ? (
          <TimerCounter time={time} />
        ) : (
          <SelectContainer time={time} setTime={setTime} />
        )}
      </Flex>
      <ActionButtons isRunning={isRunning} setIsRunning={setIsRunning} />
    </>
  );
}

export default Timer;
