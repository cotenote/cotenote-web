import { Flex } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import React from "react";

interface ActionButtonsProps {
  isRunning: boolean;
  setIsRunning: React.Dispatch<React.SetStateAction<boolean>>;
}

function ActionButtons({ isRunning, setIsRunning }: ActionButtonsProps) {
  const handleClickPauseButton = () => {};

  const handleClickCancelButton = () => {
    setIsRunning(false);
  };

  const handleClickStartButton = () => {
    setIsRunning(true);
  };

  return (
    <Flex gap="15px" margin="0 auto">
      <Button isDisabled={!isRunning} onClick={handleClickCancelButton}>
        취소
      </Button>
      {isRunning ? (
        <Button
          background="var(--primary-500)"
          onClick={handleClickPauseButton}
        >
          일시정지
        </Button>
      ) : (
        <Button
          background="var(--primary-500)"
          onClick={handleClickStartButton}
        >
          시작
        </Button>
      )}
    </Flex>
  );
}

export default ActionButtons;
