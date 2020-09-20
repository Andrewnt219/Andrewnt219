import { AchievementProps } from "@src/components/ui/Achievement";

export type AchievementName =
  | "darkMode"
  | "legendary"
  | "professorDavid"
  | "compliment";
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
  compliment: _generateAchievementData(
    'You used "compliment"',
    "It is super effective!",
    "heart icon",
    "compliment.svg"
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
