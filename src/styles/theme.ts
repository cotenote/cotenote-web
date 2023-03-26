import { createTheme, Theme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  // eslint-disable-next-line no-unused-vars
  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true; // adds the `mobile` breakpoint
    tablet: true;
    desktop: true;
  }
}

export const theme: Theme = createTheme({
  palette: {
    primary: {
      main: "#59d58b",
    },
  },
  shape: {
    borderRadius: 8,
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      desktop: 1200,
    },
  },
  typography: {
    button: {
      textTransform: "capitalize",
    },
  },
});
