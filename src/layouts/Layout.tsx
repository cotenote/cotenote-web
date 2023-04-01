import { Header } from "@/components/layouts";
import { Box } from "@chakra-ui/react";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box as="main" w="100%" h="100vh">
      <Header />
      {children}
    </Box>
  );
}

export default Layout;
