import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { ThemeProvider } from "@mui/material";
import { theme } from "@/styles/theme";
import { StylesProvider } from "@mui/styles";
import { generateClassName } from "@/lib/generateClassName";

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
  return (
    <ThemeProvider theme={theme}>
      <StylesProvider generateClassName={generateClassName}>
        {getLayout(<Component {...pageProps} />)}
      </StylesProvider>
    </ThemeProvider>
  );
}
