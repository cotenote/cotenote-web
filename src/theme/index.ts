import { extendTheme } from "@chakra-ui/react";
import components from "./components";

export const theme = extendTheme({
  components,
  colors: {
    primary: {
      100: "#9be6b9",
      200: "#8be2ae",
      300: "#7adda2",
      400: "#6ad997",
      500: "#59d58b", // main
      600: "#50c07d",
      700: "#47aa6f",
      800: "#3e9561",
      900: "#358053",
    },
    white: "#ffffff",
    black: "#191c19",
  },
  header: {
    maxWidth: "1024px",
  },
  padding: {
    mobileGap: "var(--mobile-padding)",
  },
});
