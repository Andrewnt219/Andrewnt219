import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../theme";
import { GlobalStyle } from "../theme/GlobalStyle.theme";
import { AppProps } from "next/app";
import "tailwindcss/dist/base.min.css";
import { MainLayout } from "@src/components/layouts/MainLayout";
import { Mode, ThemeContext } from "@src/contexts/theme.context";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [mode, setMode] = useState<Mode | null>(null);

  useEffect(() => {
    const currentTheme = document.body.className;

    if (currentTheme === "light-mode" || currentTheme === "dark-mode") {
      setMode(currentTheme);
    }
  }, []);

  const onModeSwitch = (newMode: Mode) => {
    if (newMode) {
      try {
        localStorage.setItem("theme", newMode);
        setMode(newMode);
        document.body.className = newMode ?? "";
      } catch (error) {
        console.log("Failed to set theme to localStorage");
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
