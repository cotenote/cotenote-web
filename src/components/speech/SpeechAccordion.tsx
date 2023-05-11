// "use client";

import React, { useEffect } from "react";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  IconButton,
} from "@chakra-ui/react";
import { getSpeech } from "@/utils/getSpeech";
import { BellIcon } from "@chakra-ui/icons";
import { database } from "@/constants/speech";

interface Data {
  title: string;
  content: string;
}
function SpeechAccordion() {
  const handleClickTTSButton =
    (e: React.MouseEvent<HTMLButtonElement>) => (title: string) => {
      e.stopPropagation();
      getSpeech(title);
    };

  useEffect(() => {
    window.speechSynthesis.getVoices();
  }, []);

  return (
    <div>
      <Accordion defaultIndex={[0]} allowMultiple>
        {database.map((item: Data) => (
          <AccordionItem key={item.title}>
            <h2>
              <AccordionButton as="div" cursor="pointer">
                <Box as="div" flex="1" textAlign="left">
                  <IconButton
                    onClick={(e) => handleClickTTSButton(e)(item.title)}
                    aria-label="title a"
                    icon={<BellIcon />}
                    w="40px"
                    h="40px"
                    mr="10px"
                  />
                  {item.title}
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>{item.content}</AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default SpeechAccordion;
