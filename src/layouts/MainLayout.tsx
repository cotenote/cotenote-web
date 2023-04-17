import { MainHeader } from "@/components/layouts";
import { Box } from "@chakra-ui/react";
import React from "react";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box as="main" w="100%" h="100vh">
      <MainHeader />
      <Box height="var(--header-height)" />
      {children}
    </Box>
  );
}

export default MainLayout;
