import React, { useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { ActionButtons, TimerSelect } from "@/components/timer";
import { hourOptions, secAndMinOptions } from "@/constants/timer";

function Timer() {
  const [isRunning, setIsRunning] = useState(false);
  const [hour, setHour] = useState({ label: "00", value: 0 });
  const [min, setMin] = useState({ label: "00", value: 0 });
  const [sec, setSec] = useState({ label: "00", value: 0 });

  return (
    <>
      <Flex gap="10px" margin="0 auto">
        {isRunning ? (
          <Box>
            {hour.label}:{min.label}:{sec.label}
          </Box>
        ) : (
          <>
            <TimerSelect
              onChange={(newValue) => {
                if (!newValue) return;
                setHour(newValue);
              }}
              label="시간"
              value={hour}
              options={hourOptions}
            />
            <TimerSelect
              onChange={(newValue) => {
                if (!newValue) return;
                setMin(newValue);
              }}
              label="분"
              value={min}
              options={secAndMinOptions}
            />
            <TimerSelect
              onChange={(newValue) => {
                if (!newValue) return;
                setSec(newValue);
              }}
              label="초"
              value={sec}
              options={secAndMinOptions}
            />
          </>
        )}
      </Flex>
      <ActionButtons isRunning={isRunning} setIsRunning={setIsRunning} />
    </>
  );
}

export default Timer;
