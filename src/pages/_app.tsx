import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../theme";
import { GlobalStyle } from "../theme/GlobalStyle.theme";
import { AppProps } from "next/app";
import "tailwindcss/dist/base.min.css";
import { MainLayout } from "@src/components/layouts/MainLayout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  );
}

export default MyApp;
