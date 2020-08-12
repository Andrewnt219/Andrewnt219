import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../theme";
import { GlobalStyle } from "../theme/GlobalStyle.theme";
import { AppProps } from "next/app";
import "tailwindcss/dist/base.min.css";
import { MainLayout } from "@src/components/layouts/MainLayout";
import { Mode, ThemeContext } from "@src/contexts/theme.context";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  // the theme of the app
  const [mode, setMode] = useState<Mode | null>(null);

  // sync themeContext with body
  useEffect(() => {
    const currentTheme = document.body.className;

    if (currentTheme === "light-mode" || currentTheme === "dark-mode") {
      setMode(currentTheme);
    }
  }, []);

  /**
   * @param newMode a string to set theme for localStorage, themeContext, and body's classes
   */
  const onModeSwitch = (newMode: Mode) => {
    // Check valid mode
    if (newMode) {
      try {
        const bodyClasses = document.body.classList;

        // Remove old theme in body
        const currentTheme = localStorage.getItem("theme");
        if (currentTheme) {
          bodyClasses.remove(currentTheme);
        }

        // set up new theme
        localStorage.setItem("theme", newMode);
        bodyClasses.add(newMode);
        setMode(newMode);
      } catch (error) {
        console.warn("Failed to set theme to localStorage");
        console.log(error);
      }
    } else {
      throw new Error("received a null for newMode");
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <ThemeContext.Provider value={{ mode, onModeSwitch }}>
        <GlobalStyle />
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export default MyApp;
