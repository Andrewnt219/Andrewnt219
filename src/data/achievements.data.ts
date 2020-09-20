import { AchievementProps } from "@src/components/ui/Achievement";

type AchievementName = "darkMode" | "legendary";
export const achievementsData: Record<AchievementName, AchievementProps> = {
  darkMode: _generateAchievementData(
    "Discover dark mode",
    "Hello darkness, my old friend...",
    "moon icon",
    "dark-mode.svg"
  ),
  legendary: _generateAchievementData(
    "Legend",
    "Wait for it...",
    "cocktail icon",
    "wait-for-it.svg"
  ),
};

function _generateAchievementData(
  title: string,
  subtitle: string,
  alt: string,
  fileName: string
): AchievementProps {
  return {
    title,
    subtitle,
    image: {
      alt,
      src: `/svgs/achievements/${fileName}`,
    },
  };
}
