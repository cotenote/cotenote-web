import "@/styles/globals.css";
import "@/styles/miniReset.css";
import "@/styles/font.css";

import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { ThemeProvider } from "@mui/material";
import { StylesProvider } from "@mui/styles";
import { theme } from "@/styles/theme";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <ThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        {getLayout(<Component {...pageProps} />)}
      </StylesProvider>
    </ThemeProvider>
  );
}
