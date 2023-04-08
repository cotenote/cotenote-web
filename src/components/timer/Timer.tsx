"useClient";

import React, { useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { ActionButtons, TimeSelect } from "@/components/timer";
import { hourOptions, minOptions } from "@/constants/timer";

function Timer() {
  const [isRunning, setIsRunning] = useState(false);
  //   const [time, setTime] = useState({ hour: 0, min: 0, sec: 0 });

  return (
    <>
      <Flex gap="10px" margin="0 auto">
        {isRunning ? (
          <Box>1:11:11</Box>
        ) : (
          <>
            <TimeSelect label="시간" options={hourOptions} />
            <TimeSelect label="분" options={minOptions} />
            <TimeSelect label="초" options={minOptions} />
          </>
        )}
      </Flex>
      <ActionButtons isRunning={isRunning} setIsRunning={setIsRunning} />
    </>
  );
}

export default Timer;
