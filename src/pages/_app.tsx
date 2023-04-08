import type { AppProps } from "next/app";
import { Navbar } from "../frontend/components/Navbar";
import { ThemeContextComponent } from "../frontend/contexts/ThemeContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <ThemeContextComponent>
        <Navbar />
        <Component {...pageProps} />
      </ThemeContextComponent>
  );
}
