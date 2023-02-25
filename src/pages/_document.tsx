import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { ServerStyleSheet } from "styled-components";
import { ServerStyleSheets } from "@mui/styles";
import { generateClassName } from "@/lib/generateClassName";
import React from "react";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const styledComponentsSheet = new ServerStyleSheet();
    const muiSheets = new ServerStyleSheets({ generateClassName });

    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            styledComponentsSheet.collectStyles(
              muiSheets.collect(<App {...props} />)
            ),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: [
          ...React.Children.toArray(initialProps.styles),
          muiSheets.getStyleElement(),
          styledComponentsSheet.getStyleElement(),
        ],
      };
    } finally {
      styledComponentsSheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
