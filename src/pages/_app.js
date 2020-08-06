import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { defaultTheme, darkTheme } from "../theme";
import { GlobalStyle } from "../theme/GlobalStyle.theme";

function MyApp({ Component, pageProps }) {
  const [isDarkTheme, setTheme] = useState(false);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : defaultTheme}>
      <GlobalStyle />
      <button onClick={() => setTheme((prevState) => !prevState)}>
        Switch
      </button>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
