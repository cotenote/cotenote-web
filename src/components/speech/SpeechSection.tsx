"use client";

import { Heading, Stack } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";

interface Subsection {
  subtitle: string;
}

interface SpeechTitleProps {
  name: string;
  subsections: Subsection[];
}

function SpeechSection({ name, subsections }: SpeechTitleProps) {
  const router = useRouter();

  const handleClickRouteDetailPage = (subtitleName: string) => {
    router.push(`speech/${subtitleName}`);
  };

  const capitalizeSubtitle = (subtitle: string) => {
    return subtitle.replace(/\b[a-z]/g, (char) => char.toUpperCase());
  };

  return (
    <Stack direction="column" p="15px" display="flex" w="100%">
      <Heading fontSize="xl" textAlign="center">
        {name}
      </Heading>
      {subsections.map((subsection: Subsection) => (
        <Button
          key={subsection.subtitle}
          onClick={() => handleClickRouteDetailPage(subsection.subtitle)}
        >
          {capitalizeSubtitle(subsection.subtitle)}
        </Button>
      ))}
    </Stack>
  );
}

export default SpeechSection;
