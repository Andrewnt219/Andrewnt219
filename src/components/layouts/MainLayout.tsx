import React, { ReactElement, ReactNode, useContext, useEffect } from "react";
import { AppBar } from "./AppBar";
import { Footer } from "./Footer";
import tw, { styled } from "twin.macro";
import { HeadMeta } from "../head/HeadMeta";
import { GlobalNumbers, GlobalStyling } from "@src/constants/global.constants";
import { SnackbarContext } from "@src/contexts/Snackbar.context";
import { Snackbar } from "../ui/Snackbar";
import { AnimatePresence } from "framer-motion";
import { usePopup } from "@src/hooks";
import { Achievement, AchievementProps } from "../ui/Achievement";
import { AchievementContext } from "@src/contexts/Achievement.context";
import { ColorThemeContext } from "@src/contexts/ColorTheme.context";
import { LocalStorageKeys } from "@src/constants/localStorage.constants";
import { achievementsData } from "@src/data/achievements.data";

type Props = {
  children: ReactNode;
};

/**
 * @description renders shared layout between pages
 */
function MainLayout({ children }: Props): ReactElement {
  /* SECTION Snack bar */
  const [snackbarMessages, queueSnackbarMessage] = usePopup<{
    message: string;
  }>(GlobalNumbers.SnackbarDisplayDurationInMs);
  /* !SECTION Snack bar */

  /* SECTION DarkMode Achievement */
  const { mode } = useContext(ColorThemeContext);
  const [achievements, queueAchievement] = usePopup<AchievementProps>(
    GlobalNumbers.AchievementDisplayDurationInMs
  );

  useEffect(() => {
    if (mode === "dark-mode") {
      try {
        const darkModeAchievement = localStorage.getItem(
          LocalStorageKeys.DarkMode
        );
        if (!darkModeAchievement) {
          localStorage.setItem(LocalStorageKeys.DarkMode, "true");
          queueAchievement(achievementsData.darkMode);
        }
      } catch (error) {
        console.warn("Failed to access localStorage");
        console.log(error);
      }
    }
  }, [mode, queueAchievement]);
  /* !SECTION DarkMode Achievement */

  return (
    <SnackbarContext.Provider value={{ queueSnackbarMessage }}>
      <AchievementContext.Provider value={{ queueAchievement }}>
        <HeadMeta />

        <AppBar height={GlobalStyling.AppBarHeight} />

        <Main>{children}</Main>

        <Footer />

        <AnimatePresence>
          {snackbarMessages.map(({ message, id }) => (
            <Snackbar key={id} message={message} />
          ))}
        </AnimatePresence>

        <AnimatePresence>
          {achievements.map(({ id, ...props }) => (
            <Achievement key={id} {...props} />
          ))}
        </AnimatePresence>
      </AchievementContext.Provider>
    </SnackbarContext.Provider>
  );
}

type MainProps = {};
const Main = styled.main<MainProps>`
  padding: 0 5% 5rem 5%;
  min-height: calc(100vh - ${GlobalStyling.AppBarHeight});

  ${tw`z-10 bg-primary relative top-0`};
`;

export { MainLayout };
