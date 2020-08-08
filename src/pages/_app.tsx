import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../theme";
import { GlobalStyle } from "../theme/GlobalStyle.theme";
import { AppProps } from "next/app";
import "tailwindcss/dist/base.min.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
