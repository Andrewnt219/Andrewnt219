import React, {
  ReactElement,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
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
import { AchievementName, achievementsData } from "@src/data/achievements.data";
import {
  HomepageSections,
  HomepageSection,
  HomepageSectionSwitchHandler,
} from "@src/contexts/HomepageSections.context";
import { useAnalytics } from "@src/hooks/useAnalytic";
import { GaCategories } from "@src/constants/ga.constants";

type Props = {
  children: ReactNode;
};

/**
 * @description renders shared layout between pages
 */
function MainLayout({ children }: Props): ReactElement {
  /* ANCHOR Tracking */
  const { trackEvent } = useAnalytics();

  /* ANCHOR Snack bar */
  const [snackbarMessages, queueSnackbarMessage] = usePopup<{
    message: string;
  }>(GlobalNumbers.SnackbarDisplayDurationInMs);

  /* ANCHOR Achievements */
  const [finishedAchievements, setFinishedAchievements] = useState<
    AchievementName[]
  >([]);
  const [popupAchievements, queuePopupAchievements] = usePopup<
    AchievementProps
  >(GlobalNumbers.AchievementDisplayDurationInMs);

  // Choose whether or not displaying the achievement
  const newAchievementHandler = useCallback(
    (achievementName: AchievementName) => {
      // check if is a new achievement
      if (!finishedAchievements.includes(achievementName)) {
        const updatedFinishedAchievements = [
          ...finishedAchievements,
          achievementName,
        ];

        queuePopupAchievements(achievementsData[achievementName]);

        setFinishedAchievements(updatedFinishedAchievements);

        // update finishedAchievements in localStorage
        try {
          localStorage.setItem(
            LocalStorageKeys.Achievements,
            JSON.stringify(updatedFinishedAchievements)
          );
        } catch (error) {
          console.warn("Cannot write to localStorage");
          console.log(error);
        }
      }
    },
    [finishedAchievements, queuePopupAchievements]
  );

  // Get finishedAchievements from localStorage
  useEffect(() => {
    const localAchievementsString =
      localStorage.getItem(LocalStorageKeys.Achievements) ?? "[]";

    const localAchievements = JSON.parse(
      localAchievementsString
    ) as AchievementName[];

    setFinishedAchievements(localAchievements);
  }, []);

  /* ANCHOR DarkMode Achievement */
  const { mode } = useContext(ColorThemeContext);

  useEffect(() => {
    if (mode === "dark-mode") {
      newAchievementHandler("darkMode");
      trackEvent({
        action: "Dark mode achieved",
        category: GaCategories.Achievements,
      });
    }
  }, [mode, newAchievementHandler, trackEvent]);

  /* ANCHOR Active Link Item */
  // NOTE Should to be null on first page load
  const [inViewSection, setInViewSection] = useState<null | HomepageSection>(
    null
  );

  const onSectionSwitch: HomepageSectionSwitchHandler = useCallback(
    (section) => {
      setInViewSection(section);
    },
    []
  );

  return (
    <SnackbarContext.Provider value={{ queueSnackbarMessage }}>
      <AchievementContext.Provider
        value={{
          queueAchievement: newAchievementHandler,
          finishedAchievements,
        }}
      >
        <HomepageSections.Provider value={{ inViewSection, onSectionSwitch }}>
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
            {popupAchievements.map(({ id, ...props }) => (
              <Achievement key={id} {...props} />
            ))}
          </AnimatePresence>
        </HomepageSections.Provider>
      </AchievementContext.Provider>
    </SnackbarContext.Provider>
  );
}

type MainProps = {};
const Main = styled.main<MainProps>`
  min-height: calc(100vh - ${GlobalStyling.AppBarHeight});

  ${tw`z-10 bg-primary relative top-0`};

  & > section:nth-child(2n + 3) {
    ${tw`bg-lprimary`}
  }
`;

export { MainLayout };
