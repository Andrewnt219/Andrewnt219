import { AchievementProps } from "@src/components/ui/Achievement";

export const achievementsData: Record<string, AchievementProps> = {
  darkMode: _generateAchievementData(
    "Discover dark mode",
    "Hello darkness, my old friend...",
    "moon icon",
    "dark-mode.svg"
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
