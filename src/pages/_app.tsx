import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../styles/theme";
import { GlobalStyle } from "../styles/theme/GlobalStyle.theme";
import { AppProps } from "next/app";
import "tailwindcss/dist/base.min.css";
import { MainLayout } from "@src/components/layouts/MainLayout";
import { Mode, ColorThemeContext } from "@src/contexts/ColorTheme.context";
import { useEffect, useState } from "react";
import { LocalStorageKeys } from "@src/constants/localStorage.constants";

function MyApp({ Component, pageProps }: AppProps) {
  /* SECTION Light/Dark Mode  */
  // the theme of the app
  const [mode, setMode] = useState<Mode | null>(null);

  // sync themeContext with body
  useEffect(() => {
    const currentTheme = document.body.className;

    if (currentTheme === "light-mode" || currentTheme === "dark-mode") {
      setMode(currentTheme);
    }
  }, []);

  // set theme for localStorage, themeContext, and body's classes
  const onModeSwitch = (newMode: Mode) => {
    // Check valid mode
    if (newMode) {
      // ANCHOR change to new theme
      try {
        localStorage.setItem(LocalStorageKeys.Theme, newMode);
        document.body.className = document.body.className.replace(
          /.*mode/,
          newMode
        );
        setMode(newMode);
      } catch (error) {
        console.warn("Failed to set theme to localStorage");
        console.log(error);
      }
    } else {
      throw new Error("received a null for newMode");
    }
  };
  /* !SECTION Light/Dark Mode */

  return (
    <ThemeProvider theme={defaultTheme}>
      <ColorThemeContext.Provider value={{ mode, onModeSwitch }}>
        <GlobalStyle />
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ColorThemeContext.Provider>
    </ThemeProvider>
  );
}

export default MyApp;
