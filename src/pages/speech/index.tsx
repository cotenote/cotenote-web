import { SpeechSection } from "@/components/speech";
import { Layout } from "@/layouts";
import { Stack } from "@chakra-ui/react";
import Head from "next/head";
import React, { ReactElement } from "react";

const speechSections = [
  { sectionTitle: "CS", subsections: [{ subtitle: "database" }] },
  {
    sectionTitle: "Front-end",
    subsections: [{ subtitle: "react" }, { subtitle: "javascript" }],
  },
];

function SpeechPage() {
  return (
    <>
      <Head>
        <title>모의 면접 - 모의 면접 대비</title>
        <meta name="description" content="모의 면접 페이지" />
      </Head>
      <Stack maxW="300px" m="auto" pt="10vh">
        {speechSections.map((section) => (
          <SpeechSection
            name={section.sectionTitle}
            subsections={section.subsections}
          />
        ))}
      </Stack>
    </>
  );
}

export default SpeechPage;

SpeechPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
