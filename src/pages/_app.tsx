import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode, useEffect } from "react";
import {
  StyledEngineProvider,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";

import "@/styles/globals.css";
import "@/styles/miniReset.css";
import "@/styles/font.css";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  useEffect(() => {
    function handleResize() {
      const body = document.querySelector("body") ?? document.body;
      body.style.height = window.innerHeight + "px";
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <MUIThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>
        <StyledEngineProvider injectFirst>
          {getLayout(<Component {...pageProps} />)}
        </StyledEngineProvider>
      </StyledThemeProvider>
    </MUIThemeProvider>
  );
}
