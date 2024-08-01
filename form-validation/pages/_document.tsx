import { Html, Head, Main, NextScript } from "next/document";
import {
  Theme,
  ThemePanel
} from "@radix-ui/themes";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
      <Theme appearance="dark" accentColor="purple" grayColor="gray" radius="large" scaling="95%">
      {/* <ThemePanel /> */}
        <Main />
        <NextScript />
      </Theme>
      </body>
    </Html>
  );
}
