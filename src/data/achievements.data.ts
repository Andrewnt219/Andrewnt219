import { AchievementProps } from "@src/components/ui/Achievement";

export type AchievementName = "darkMode" | "legendary" | "professorDavid";
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
  professorDavid: _generateAchievementData(
    "Professor David",
    "My utmost respect to your passion",
    "fire icon",
    "professor.svg"
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
