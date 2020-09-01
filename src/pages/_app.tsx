import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../styles/theme";
import { GlobalStyle } from "../styles/theme/GlobalStyle.theme";
import { AppProps } from "next/app";
import "tailwindcss/dist/base.min.css";
import { MainLayout } from "@src/components/layouts/MainLayout";
import { Mode, ThemeContext } from "@src/contexts/Theme.context";
import { useEffect, useState } from "react";
import { GlobalNumbers } from "@src/constants/global.constants";
import { AchievementProps } from "@src/components/ui/Achievement";
import { usePopup } from "@src/hooks";
import { AchievementContext } from "@src/contexts/Achievement.context";
import { LocalStorageKeys } from "@src/constants/localStorage.constants";
import { achievementsData } from "@src/data/achievements.data";

function MyApp({ Component, pageProps }: AppProps) {
  /* SECTION Achievements */
  const [achievements, queueAchievement] = usePopup<AchievementProps>(
    GlobalNumbers.AchievementDisplayDurationInMs
  );
  /* !SECTION Achievements */

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
      // ANCHOR Check for dark-mode achievement
      if (newMode === "dark-mode") {
        try {
          const darkModeAchievement = localStorage.getItem(
            LocalStorageKeys.DarkMode
          );
          if (!darkModeAchievement) {
            queueAchievement(achievementsData.darkMode);
            localStorage.setItem(LocalStorageKeys.DarkMode, "true");
          }
        } catch (error) {
          console.warn("Failed to access localStorage");
          console.log(error);
        }
      }

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
      <ThemeContext.Provider value={{ mode, onModeSwitch }}>
        <AchievementContext.Provider value={{ achievements, queueAchievement }}>
          <GlobalStyle />
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </AchievementContext.Provider>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export default MyApp;
