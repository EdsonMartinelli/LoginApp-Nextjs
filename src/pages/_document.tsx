'use client';
import { ColorModeScript } from "@chakra-ui/react";
import { Html, Head, Main, NextScript } from "next/document";
import theme from "../theme/theme-config";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body
        style={{
          padding:"0",
          margin: "0",
          backgroundColor: "cyan",
          border: "none"
        }}
      >
        {//<ColorModeScript initialColorMode={theme.config.initialColorMode} />
        }
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
