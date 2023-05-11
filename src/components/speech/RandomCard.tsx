"use client";

import { database } from "@/constants/speech";
import { Button, Flex, Box, Center } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getSpeech } from "@/utils/getSpeech";

function RandomCard() {
  const [index, setIndex] = useState<number>(-1);
  const [shownIndexes, setShownIndexes] = useState<number[]>([]);
  const [contentView, setContentView] = useState<boolean>(false);

  const handleClickRandomShow = () => {
    let random = Math.floor(Math.random() * database.length);
    while (shownIndexes.includes(random)) {
      random = Math.floor(Math.random() * database.length);
    }
    setShownIndexes([...shownIndexes, random]);
    setIndex(random);
    getSpeech(database[random].title);
    setContentView(false);
  };

  useEffect(() => {
    window.speechSynthesis.getVoices();
  }, []);

  const handleClickReplayButton = () => {
    getSpeech(database[index].title);
  };

  const handleClickContentView = () => {
    setContentView((prev) => !prev);
  };
  return (
    <Flex
      maxW="500px"
      m="auto"
      pt="50px"
      gap="10px"
      alignItems="center"
      flexDirection="column"
    >
      {index !== -1 && (
        <>
          <Center>
            ( {shownIndexes.length} / {database.length} )
          </Center>
          <Box w="100%">
            <Center as="h2" fontSize="20px" fontWeight="600">
              {database[index].title}
            </Center>
            {contentView ? (
              <Box
                as="pre"
                mt="15px"
                minH="250px"
                p="10px"
                w="100%"
                bg="lightgray"
                whiteSpace="pre-wrap"
                borderRadius="4px"
              >
                {database[index].content}
              </Box>
            ) : (
              <Box h="265px" />
            )}
          </Box>
        </>
      )}
      {index === -1 ? (
        <Button onClick={handleClickRandomShow}>시작 </Button>
      ) : (
        <Flex as="div" gap="10px">
          <Button onClick={handleClickContentView}>정답 보기</Button>
          <Button onClick={handleClickReplayButton}>다시듣기</Button>
          <Button
            isDisabled={database.length === shownIndexes.length}
            onClick={handleClickRandomShow}
          >
            다음
          </Button>
        </Flex>
      )}
    </Flex>
  );
}

export default RandomCard;
